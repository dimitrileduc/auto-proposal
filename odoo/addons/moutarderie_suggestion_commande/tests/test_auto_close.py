from unittest.mock import patch

from odoo import SUPERUSER_ID, fields

from .common import SuggestionCommandeCase


class TestAutoCloseOnQuote(SuggestionCommandeCase):

    def _assert_done(self, activity):
        activity = activity.with_context(active_test=False)
        self.assertTrue(activity.exists())
        self.assertFalse(activity.active)
        self.assertEqual(activity.date_done, fields.Date.today())

    def test_quote_closes_activity_same_company(self):
        activity = self._schedule(self.lead_a)
        order = self._create_quote(self.client, self.company_a)

        self._assert_done(activity)
        messages = self._suggestion_messages(self.lead_a)
        self.assertEqual(len(messages), 1)
        self.assertIn(order.name, messages.body)

    def test_quote_for_contact_closes_activity(self):
        activity = self._schedule(self.lead_a)
        self._create_quote(self.contact, self.company_a)

        self._assert_done(activity)

    def test_quote_created_by_superuser_closes_activity(self):
        # Chemin des paniers e-shop : devis créés sous OdooBot.
        activity = self._schedule(self.lead_a)
        self._create_quote(self.client, self.company_a, user=self.env["res.users"].browse(SUPERUSER_ID))

        self._assert_done(activity)

    def test_partner_change_on_draft_closes_activity(self):
        # Panier e-shop anonyme : créé au nom du partenaire public, puis rattaché au client.
        activity = self._schedule(self.lead_a)
        public_partner = self.env.ref("base.public_partner")
        order = self._create_quote(public_partner, self.company_a, user=self.env["res.users"].browse(SUPERUSER_ID))
        self.assertTrue(activity.active)

        order.sudo().write({"partner_id": self.client.id})

        self._assert_done(activity)
        self.assertIn(order.name, self._suggestion_messages(self.lead_a).body)

    def test_partner_change_on_confirmed_order_keeps_activity(self):
        # Seuls les devis (brouillon, envoyé) réagissent au changement de client.
        order = self._create_quote(self.contact, self.company_a)
        order.action_confirm()
        activity = self._schedule(self.lead_a)

        order.sudo().write({"partner_id": self.client.id})

        self.assertTrue(activity.active)

    def test_quote_other_company_keeps_activity(self):
        activity = self._schedule(self.lead_a)
        self._create_quote(self.client, self.company_b)

        self.assertTrue(activity.active)
        self.assertFalse(self._suggestion_messages(self.lead_a))

    def test_lead_without_company_not_closed(self):
        lead = self.env["crm.lead"].create({
            "name": "Opportunité sans société",
            "type": "opportunity",
            "partner_id": self.client.id,
            "company_id": False,
        })
        self.assertFalse(lead.company_id)
        activity = self._schedule(lead)
        self._create_quote(self.client, self.company_a)

        self.assertTrue(activity.active)

    def test_cancelled_or_deleted_quote_keeps_done(self):
        activity = self._schedule(self.lead_a)
        order = self._create_quote(self.client, self.company_a)
        self._assert_done(activity)

        # Annulation puis suppression par un administrateur (le vendeur ne peut pas supprimer).
        order = self.env["sale.order"].browse(order.id)
        order.action_cancel()
        self.assertEqual(order.state, "cancel")
        order.unlink()

        self._assert_done(activity)
        self.assertEqual(len(self._suggestion_messages(self.lead_a)), 1)

    def test_no_activity_no_write(self):
        self._create_quote(self.client, self.company_a)

        self.assertFalse(self.env["mail.message"].search([
            ("mail_activity_type_id", "=", self.activity_type.id),
        ]))

    def test_close_failure_does_not_block_quote(self):
        # Si la fermeture plante, le devis est créé quand même et l'activité reste ouverte.
        activity = self._schedule(self.lead_a)
        with patch.object(type(self.env["mail.activity"]), "action_feedback", side_effect=Exception("boom")), \
                self.assertLogs("odoo.addons.moutarderie_suggestion_commande.models.sale_order", level="ERROR"):
            order = self._create_quote(self.client, self.company_a)

        self.assertTrue(order.exists())
        self.assertTrue(activity.active)
        self.assertFalse(self._suggestion_messages(self.lead_a))
