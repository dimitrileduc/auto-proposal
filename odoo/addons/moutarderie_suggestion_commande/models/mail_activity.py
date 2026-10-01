import logging
from collections import defaultdict

from markupsafe import Markup

from odoo import fields, models

from ..const import SUGGESTION_TYPE_XMLID

_logger = logging.getLogger(__name__)


class MailActivity(models.Model):
    _inherit = "mail.activity"

    def unlink(self):
        """Trace datée sur l'opportunité quand une activité « Suggestion commande »
        disparaît sans avoir été passée en fait (suppression manuelle, opportunité
        marquée perdue ou archivée).

        Les activités faites sont archivées (type ``keep_done``) : elles sont
        inactives et ne produisent pas de seconde trace. La trace porte
        ``mail_activity_type_id`` comme celle du passage en fait, pour que le
        backend lise les deux en une seule requête.

        La trace ne doit jamais empêcher la suppression (ni le passage en perdu ou
        l'archivage de l'opportunité qui la déclenche) : en cas d'erreur, elle est
        annulée seule et journalisée.
        """
        suggestion_type = self.env.ref(SUGGESTION_TYPE_XMLID, raise_if_not_found=False)
        if suggestion_type:
            vanished = self.filtered(
                lambda activity: activity.activity_type_id == suggestion_type and activity.active
            )
            documents = defaultdict(set)
            for activity in vanished:
                documents[activity.res_model].add(activity.res_id)
            if documents:
                today = fields.Date.context_today(self).strftime("%d/%m/%Y")
                body = Markup(
                    "<p>Activité « Suggestion commande » supprimée sans être passée en fait "
                    "le %s (opportunité marquée perdue ou activité supprimée).</p>"
                ) % today
                self.env.flush_all()
                for res_model, res_ids in documents.items():
                    records = self.env[res_model].sudo().with_context(active_test=False).browse(res_ids)
                    for record in records.exists():
                        try:
                            with self.env.cr.savepoint():
                                record.message_post(
                                    body=body,
                                    message_type="notification",
                                    subtype_xmlid="mail.mt_activities",
                                    mail_activity_type_id=suggestion_type.id,
                                    author_id=self.env.user.partner_id.id,
                                )
                        except Exception:
                            _logger.exception(
                                "Suggestion commande : trace impossible sur %s %s, "
                                "l'activité est supprimée sans trace",
                                res_model, record.id,
                            )
        return super().unlink()
