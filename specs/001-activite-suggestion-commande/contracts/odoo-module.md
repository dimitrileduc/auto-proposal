# Contrat : module Odoo `moutarderie_suggestion_commande`

**Cible** : Odoo 17.0 (community et Enterprise). **Dépendances** : `crm`, `sale`. **Aucune dépendance Enterprise.**
**Emplacement** : `odoo/addons/moutarderie_suggestion_commande/`. **Version** : `17.0.1.0.0`.

## Manifeste

```python
{
    "name": "Suggestion commande (auto-proposal)",
    "version": "17.0.1.0.0",
    "category": "Sales/CRM",
    "license": "LGPL-3",
    "depends": ["crm", "sale"],
    "data": ["data/mail_activity_type_data.xml", "data/res_users_data.xml"],
    "post_init_hook": "post_init_hook",
    "installable": True,
    "application": False,
}
```

## Données livrées

`data/mail_activity_type_data.xml`, `<data noupdate="1">` :

| Id externe | Modèle | Champs |
|---|---|---|
| `mail_activity_type_suggestion_commande` | `mail.activity.type` | `name="Suggestion commande"`, `res_model="crm.lead"`, `keep_done=True`, `category="default"`, `chaining_type="suggest"`, `delay_count=0`, `icon="fa-shopping-cart"`, `sequence=100` |

`data/res_users_data.xml`, `<data noupdate="1">` (R18) :

| Id externe | Modèle | Champs |
|---|---|---|
| `user_suggestions_automatiques` | `res.users` | `name="Suggestions automatiques"`, `login="suggestions.auto"`, `email="suggestions.auto@example.com"` (sans e-mail, Odoo refuse de notifier le vendeur ; adresse réelle à valider avant la staging), pas de mot de passe, `groups_id` = `sales_team.group_sale_salesman_all_leads` |

`hooks.py`, `post_init_hook(env)` : rattache ce compte à toutes les sociétés existantes (`company_ids`).
La clé API du compte est générée à la main, une fois par base (local, staging, prod), et n'est jamais
versionnée. Le backend s'authentifie avec `login` + clé API.

Le backend relève l'id numérique en prod par :
`ir.model.data` search_read `[("module","=","moutarderie_suggestion_commande"),("name","=","mail_activity_type_suggestion_commande")]`, champ `res_id`.

## Comportement 1 : fermeture immédiate à la création d'un devis (FR-011)

Fichier `models/sale_order.py`, `class SaleOrder(models.Model): _inherit = "sale.order"`.

```
create(vals_list)  [@api.model_create_multi]
  orders = super().create(vals_list)
  for order in orders with partner_id:
      cp = order.partner_id.commercial_partner_id
      leads = crm.lead.sudo().with_context(active_test=False).search([
          ("partner_id.commercial_partner_id", "=", cp.id),
          ("company_id", "=", order.company_id.id),
      ])
      activities = mail.activity.sudo().search([
          ("activity_type_id", "=", <type>), ("res_model", "=", "crm.lead"),
          ("res_id", "in", leads.ids), ("active", "=", True),
      ])
      activities.action_feedback(feedback=f"Devis {order.name} créé le {date} pour {order.partner_id.display_name}")
  return orders
```

Garanties :
- Se déclenche à la **création** (état brouillon), quel que soit l'utilisateur ou le canal (formulaire, opportunité, API, panier e-shop créé sous OdooBot, R19). Un panier abandonné ensuite laisse l'activité fermée.
- Se déclenche aussi quand le **client d'un devis brouillon ou envoyé change** (`write` de `partner_id`) : un panier e-shop commencé sans connexion est créé au nom du partenaire public, puis rattaché au vrai client à la connexion ou au paiement (ajout du 01/10/2026, review). Une commande confirmée dont le client change ne ferme rien.
- Fermeture et trace de disparition sont **isolées** (savepoint + journal) : un échec ne bloque jamais la création du devis, le passage en perdu ni l'archivage de l'opportunité.
- Ne se déclenche que si le devis est dans la même société que l'opportunité (US3-2) ; une opportunité sans société n'est jamais concernée.
- Un devis créé pour un **contact** de la société cliente ferme l'activité (même `commercial_partner_id`).
- L'annulation ou la suppression ultérieure du devis ne rouvre rien (US3-3 ; aucun hook sur `unlink`/`action_cancel`).
- Les activités faites sont archivées (`keep_done`) et portent la trace standard d'Odoo, dont le feedback cite le devis.
- Idempotent : sans activité ouverte, aucune écriture.
- Le type est résolu par `self.env.ref("moutarderie_suggestion_commande.mail_activity_type_suggestion_commande", raise_if_not_found=False)` ; si absent, le hook ne fait rien.

## Comportement 2 : trace datée d'une activité disparue (FR-014)

Fichier `models/mail_activity.py`, `class MailActivity(models.Model): _inherit = "mail.activity"`.

```
unlink()
  suggestion_type = env.ref(<type>, raise_if_not_found=False)
  vanished = self.filtered(lambda a: a.activity_type_id == suggestion_type and a.active)
  for activity in vanished (groupé par (res_model, res_id)):
      record = env[activity.res_model].sudo().with_context(active_test=False).browse(activity.res_id)
      if record.exists():
          record.message_post(
              body=Markup(<p>Activité « Suggestion commande » supprimée sans être passée en fait le JJ/MM/AAAA (opportunité marquée perdue ou activité supprimée).</p>),
              message_type="notification",
              subtype_xmlid="mail.mt_activities",
              mail_activity_type_id=suggestion_type.id,
              author_id=env.user.partner_id.id,
          )
  return super().unlink()
```

Garanties :
- Une activité **faite** (archivée par `_action_done`) qui est supprimée ensuite (archivage de l'opportunité) ne produit **pas** de seconde trace (`active = False`).
- Couvre : suppression manuelle par le vendeur, opportunité marquée perdue (`action_set_lost` → `action_archive` → `write(active=False)` → `unlink`), archivage direct.
- La trace porte `mail_activity_type_id` et `subtype mail.mt_activities`, comme la trace de passage en fait : le backend utilise une seule requête.
- Aucune trace pour les autres types d'activité.

## Tests attendus (`tests/`, `TransactionCase`, tags `/moutarderie_suggestion_commande`)

Jeu de données de `common.py` : 2 sociétés (A = société analysée, B = autre), 1 équipe commerciale, 1 vendeur (utilisateur), 1 société cliente avec 1 contact, 1 produit, 1 opportunité ouverte en A pour le client, 1 opportunité ouverte en B pour le client. Helper `_schedule(lead)` qui crée l'activité du type comme le backend (`mail.activity.create` sans `res_model_id`, avec le contexte `default_res_model="crm.lead"`).

| Test | Attendu |
|---|---|
| `test_type_installed` | type présent, `res_model = crm.lead`, `keep_done = True` |
| `test_quote_closes_activity_same_company` | devis en A pour le client → activité faite (`active=False`, `date_done` = aujourd'hui) ; un `mail.message` avec `mail_activity_type_id` = type existe sur l'opportunité et son corps contient le nom du devis |
| `test_quote_for_contact_closes_activity` | devis en A pour le **contact** → activité faite |
| `test_quote_created_by_superuser_closes_activity` | devis en A créé `with_user(SUPERUSER_ID)` (chemin de l'e-shop) → activité faite |
| `test_user_created` | compte `suggestions.auto` présent, interne, groupe `group_sale_salesman_all_leads`, rattaché à toutes les sociétés |
| `test_quote_other_company_keeps_activity` | devis en B → activité A toujours active |
| `test_close_failure_does_not_block_quote` | la fermeture lève une exception → le devis est créé, l'activité reste ouverte, l'erreur est journalisée |
| `test_lead_without_company_not_closed` | activité sur une opportunité sans société + devis en A → activité toujours ouverte (pas d'exception pour les opportunités sans société) |
| `test_cancelled_or_deleted_quote_keeps_done` | après fermeture, `action_cancel()` puis `unlink()` du devis → activité toujours faite, trace conservée |
| `test_no_activity_no_write` | devis sans activité ouverte → aucun `mail.message` du type créé |
| `test_manual_unlink_posts_trace` | `activity.unlink()` → message avec `mail_activity_type_id` = type, corps contenant « supprimée sans être passée en fait », `date` = maintenant |
| `test_lost_lead_posts_trace` | `lead.action_set_lost()` → activité supprimée, trace présente sur l'opportunité archivée |
| `test_done_then_lost_no_double_trace` | `action_feedback()` puis `action_set_lost()` → exactement 1 message « faite », 0 message « supprimée » |
| `test_other_activity_type_no_trace` | activité d'un autre type supprimée → aucun message du type |

Commande de lancement : voir [quickstart.md](../quickstart.md), scénario A.
