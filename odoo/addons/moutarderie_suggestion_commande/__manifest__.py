{
    "name": "Suggestion commande (auto-proposal)",
    "summary": "Activité CRM « Suggestion commande » créée par le backend auto-proposal, fermée à la création d'un devis",
    "author": "d-l.studio",
    "website": "https://d-l.studio",
    "version": "17.0.1.0.0",
    "category": "Sales/CRM",
    "license": "LGPL-3",
    "depends": ["crm", "sale"],
    "data": ["data/mail_activity_type_data.xml", "data/res_users_data.xml"],
    "post_init_hook": "post_init_hook",
    "installable": True,
    "application": False,
}
