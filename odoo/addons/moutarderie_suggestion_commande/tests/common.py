from odoo import Command, fields
from odoo.tests.common import TransactionCase


class SuggestionCommandeCase(TransactionCase):
    """Jeu de données minimal : deux sociétés (A analysée, B autre), un vendeur,
    un client société avec un contact, un produit, une opportunité ouverte en A
    et une en B pour ce client."""

    @classmethod
    def setUpClass(cls):
        super().setUpClass()
        cls.activity_type = cls.env.ref(
            "moutarderie_suggestion_commande.mail_activity_type_suggestion_commande"
        )
        cls.company_a = cls.env["res.company"].create({"name": "Société A (analysée)"})
        cls.company_b = cls.env["res.company"].create({"name": "Société B"})
        cls.team = cls.env["crm.team"].create({"name": "Équipe test", "company_id": False})
        cls.salesman = cls.env["res.users"].with_context(no_reset_password=True).create({
            "name": "Vendeur test",
            "login": "vendeur.test.suggestion",
            "email": "vendeur.test@example.com",
            "company_id": cls.company_a.id,
            "company_ids": [Command.set([cls.company_a.id, cls.company_b.id])],
            "groups_id": [Command.set([cls.env.ref("sales_team.group_sale_salesman").id])],
        })
        cls.client = cls.env["res.partner"].create({
            "name": "Client Test SA",
            "is_company": True,
            "customer_rank": 1,
            "user_id": cls.salesman.id,
        })
        cls.contact = cls.env["res.partner"].create({
            "name": "Contact Client Test",
            "parent_id": cls.client.id,
            "type": "contact",
        })
        cls.product = cls.env["product.product"].create({
            "name": "Moutarde test 200 g",
            "sale_ok": True,
            "list_price": 3.5,
        })
        cls.lead_a = cls._create_lead("Opportunité société A", cls.company_a)
        cls.lead_b = cls._create_lead("Opportunité société B", cls.company_b)

    @classmethod
    def _create_lead(cls, name, company, partner=None):
        return cls.env["crm.lead"].create({
            "name": name,
            "type": "opportunity",
            "partner_id": (partner or cls.client).id,
            "user_id": cls.salesman.id,
            "team_id": cls.team.id,
            "company_id": company.id,
        })

    def _schedule(self, lead, user=None):
        """Crée l'activité comme le backend : mail.activity.create sans res_model_id, avec le
        contexte default_res_model (le compte du backend ne peut pas lire ir.model)."""
        return self.env["mail.activity"].with_context(default_res_model="crm.lead").create({
            "res_id": lead.id,
            "activity_type_id": self.activity_type.id,
            "summary": "Suggestion commande %s" % lead.partner_id.commercial_partner_id.name,
            "date_deadline": fields.Date.context_today(lead),
            "user_id": (user or self.salesman).id,
        })

    def _create_quote(self, partner, company, user=None):
        """Crée un devis brouillon avec une ligne, par défaut sous le vendeur."""
        return self.env["sale.order"].with_user(user or self.salesman).with_company(company).create({
            "partner_id": partner.id,
            "company_id": company.id,
            "order_line": [Command.create({"product_id": self.product.id, "product_uom_qty": 2})],
        })

    def _suggestion_messages(self, lead):
        return self.env["mail.message"].search([
            ("model", "=", "crm.lead"),
            ("res_id", "=", lead.id),
            ("mail_activity_type_id", "=", self.activity_type.id),
        ])
