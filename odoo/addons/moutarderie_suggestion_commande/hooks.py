def post_init_hook(env):
    """Rattache le compte « Suggestions automatiques » à toutes les sociétés existantes."""
    user = env.ref("moutarderie_suggestion_commande.user_suggestions_automatiques")
    user.company_ids = [(6, 0, env["res.company"].search([]).ids)]
