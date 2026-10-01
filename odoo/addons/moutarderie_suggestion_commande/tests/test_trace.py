from datetime import timedelta
from unittest.mock import patch

from odoo import fields

from .common import SuggestionCommandeCase

VANISHED = "supprimée sans être passée en fait"


class TestVanishedActivityTrace(SuggestionCommandeCase):

    def test_manual_unlink_posts_trace(self):
        activity = self._schedule(self.lead_a)
        activity.with_user(self.salesman).unlink()

        messages = self._suggestion_messages(self.lead_a)
        self.assertEqual(len(messages), 1)
        self.assertIn(VANISHED, messages.body)
        self.assertIn(fields.Date.context_today(self.lead_a).strftime("%d/%m/%Y"), messages.body)
        self.assertAlmostEqual(messages.date, fields.Datetime.now(), delta=timedelta(minutes=5))
        self.assertEqual(messages.author_id, self.salesman.partner_id)

    def test_lost_lead_posts_trace(self):
        activity = self._schedule(self.lead_a)
        self.lead_a.with_user(self.salesman).action_set_lost()

        self.assertFalse(self.lead_a.active)
        self.assertFalse(activity.exists())
        messages = self._suggestion_messages(self.lead_a)
        self.assertEqual(len(messages), 1)
        self.assertIn(VANISHED, messages.body)

    def test_done_then_lost_no_double_trace(self):
        activity = self._schedule(self.lead_a)
        activity.with_user(self.salesman).action_feedback(feedback="Client rappelé")
        self.lead_a.with_user(self.salesman).action_set_lost()

        messages = self._suggestion_messages(self.lead_a)
        self.assertEqual(len(messages), 1, "seule la trace de passage en fait doit exister")
        self.assertNotIn(VANISHED, messages.body)

    def test_trace_failure_does_not_block_lost(self):
        # Si la trace plante, l'opportunité passe quand même en perdu et l'activité disparaît.
        activity = self._schedule(self.lead_a)
        with patch.object(type(self.env["crm.lead"]), "message_post", side_effect=Exception("boom")), \
                self.assertLogs("odoo.addons.moutarderie_suggestion_commande.models.mail_activity", level="ERROR"):
            self.lead_a.with_user(self.salesman).action_set_lost()

        self.assertFalse(self.lead_a.active)
        self.assertFalse(activity.exists())
        self.assertFalse(self._suggestion_messages(self.lead_a))

    def test_other_activity_type_no_trace(self):
        other = self.env["mail.activity"].create({
            "res_model_id": self.env["ir.model"]._get_id("crm.lead"),
            "res_id": self.lead_a.id,
            "activity_type_id": self.env.ref("mail.mail_activity_data_todo").id,
            "summary": "Autre activité",
            "user_id": self.salesman.id,
        })
        other.unlink()

        self.assertFalse(self._suggestion_messages(self.lead_a))
        self.assertFalse(self.env["mail.message"].search([
            ("model", "=", "crm.lead"),
            ("res_id", "=", self.lead_a.id),
            ("body", "ilike", VANISHED),
        ]))
