from odoo.tests.common import TransactionCase


class TestInstalledData(TransactionCase):
    """Données livrées par le module (pas de société ajoutée par le test)."""

    def test_type_installed(self):
        activity_type = self.env.ref(
            "moutarderie_suggestion_commande.mail_activity_type_suggestion_commande"
        )
        self.assertEqual(activity_type.name, "Suggestion commande")
        self.assertEqual(activity_type.res_model, "crm.lead")
        self.assertTrue(activity_type.keep_done)

    def test_user_created(self):
        user = self.env.ref("moutarderie_suggestion_commande.user_suggestions_automatiques")
        self.assertEqual(user.login, "suggestions.auto")
        self.assertEqual(user.name, "Suggestions automatiques")
        self.assertTrue(user.email, "sans e-mail, Odoo refuse de notifier le vendeur assigné")
        self.assertTrue(user._is_internal())
        self.assertTrue(user.has_group("sales_team.group_sale_salesman_all_leads"))
        self.assertEqual(user.company_ids, self.env["res.company"].search([]))
