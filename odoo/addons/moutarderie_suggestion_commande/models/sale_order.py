import logging

from odoo import api, fields, models

from ..const import SUGGESTION_TYPE_XMLID

_logger = logging.getLogger(__name__)


class SaleOrder(models.Model):
    _inherit = "sale.order"

    @api.model_create_multi
    def create(self, vals_list):
        """Passe en fait les activités « Suggestion commande » ouvertes du client
        dès qu'un devis est créé pour lui ou l'un de ses contacts, dans la même
        société que l'opportunité. Tous les canaux passent ici (formulaire,
        opportunité, API, panier e-shop). Une annulation ou une suppression
        ultérieure du devis ne rouvre rien.

        La fermeture ne doit jamais empêcher la création du devis : en cas
        d'erreur, elle est annulée seule, journalisée, et l'activité reste ouverte.
        """
        orders = super().create(vals_list)
        orders._close_suggestion_activities_safely()
        return orders

    def write(self, vals):
        """Même fermeture quand le client d'un devis encore brouillon change : un panier
        e-shop commencé par un visiteur anonyme est créé au nom du partenaire public, puis
        rattaché au vrai client à la connexion ou au paiement (``website_sale`` fait un
        ``write`` de ``partner_id``).
        """
        result = super().write(vals)
        if vals.get("partner_id"):
            self.filtered(lambda order: order.state in ("draft", "sent"))._close_suggestion_activities_safely()
        return result

    def _close_suggestion_activities_safely(self):
        """Ferme les activités des devis, sans jamais faire échouer l'opération en cours :
        chaque fermeture est isolée dans un savepoint et journalisée en cas d'erreur."""
        suggestion_type = self.env.ref(SUGGESTION_TYPE_XMLID, raise_if_not_found=False)
        if not suggestion_type:
            return
        # Les écritures du devis lui-même sont envoyées avant le savepoint : une erreur
        # qui leur appartient ne doit pas être prise pour un échec de la fermeture.
        self.env.flush_all()
        for order in self.filtered("partner_id"):
            try:
                with self.env.cr.savepoint():
                    order._close_suggestion_activities(suggestion_type)
            except Exception:
                _logger.exception(
                    "Suggestion commande : fermeture impossible pour le devis %s (id %s), "
                    "le devis est conservé et l'activité reste ouverte",
                    order.name, order.id,
                )

    def _close_suggestion_activities(self, suggestion_type):
        self.ensure_one()
        leads = self.env["crm.lead"].sudo().with_context(active_test=False).search([
            ("partner_id.commercial_partner_id", "=", self.partner_id.commercial_partner_id.id),
            ("company_id", "=", self.company_id.id),
        ])
        if not leads:
            return
        activities = self.env["mail.activity"].sudo().search([
            ("activity_type_id", "=", suggestion_type.id),
            ("res_model", "=", "crm.lead"),
            ("res_id", "in", leads.ids),
            ("active", "=", True),
        ])
        if activities:
            # Date de création du devis (pas celle du jour : sur le chemin write, elles peuvent différer)
            created = fields.Datetime.context_timestamp(self, self.create_date or fields.Datetime.now())
            activities.action_feedback(
                feedback="Devis %s créé le %s pour %s"
                % (self.name, created.strftime("%d/%m/%Y"), self.partner_id.display_name)
            )
