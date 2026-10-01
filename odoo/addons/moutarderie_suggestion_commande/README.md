# Suggestion commande (auto-proposal)

Module Odoo 17.0 livré avec le backend auto-proposal. Le backend ne crée plus de devis : pour chaque
client inactif, il pose une activité « Suggestion commande » sur une opportunité, assignée au vendeur
du client. Ce module fournit ce dont cette activité a besoin côté Odoo.

## Contenu

- **Type d'activité « Suggestion commande »** (`mail_activity_type_suggestion_commande`), réservé aux
  opportunités (`crm.lead`), avec `keep_done` : une activité faite reste visible, archivée.
- **Compte « Suggestions automatiques »** (`user_suggestions_automatiques`, login `suggestions.auto`) :
  utilisateur interne sans mot de passe, groupe « Ventes : tous les documents », rattaché à toutes les
  sociétés à l'installation. Le backend se connecte avec ce login et une clé API. Les activités, les
  opportunités créées et la notification envoyée au vendeur portent ce nom.
- **Fermeture automatique** (`models/sale_order.py`) : à la création d'un devis, quel que soit le canal
  (formulaire, opportunité, API, panier e-shop), les activités ouvertes du type sur les opportunités du
  même client (société ou contact) et de la même société Odoo passent en fait, avec le message
  « Devis S… créé le JJ/MM/AAAA pour … ». Annuler ou supprimer le devis ensuite ne rouvre rien.
- **Trace de disparition** (`models/mail_activity.py`) : quand une activité du type disparaît sans avoir
  été passée en fait (suppression manuelle, opportunité marquée perdue ou archivée), un message daté est
  posté sur l'opportunité. Le backend s'en sert, avec le message de passage en fait, pour ne pas relancer
  un client moins de 21 jours après.

Dépendances : `crm`, `sale` (community). Aucun module Enterprise.

## Installation

Le module s'installe comme tout addon (`-i moutarderie_suggestion_commande`, ou Applications). Les
données sont en `noupdate` : une mise à jour du module ne réécrit ni le type ni le compte.

En local (Docker, depuis `odoo/`) :

```bash
docker compose up -d db
docker compose run --rm odoo odoo -c /etc/odoo/odoo.conf -d moutarderie_local \
  -i crm,sale_management,moutarderie_suggestion_commande --without-demo=all --stop-after-init
docker compose up -d        # Odoo sur http://localhost:8069 (ODOO_HTTP_PORT=8070 si 8069 est pris)
python3 dev/seed_local.py --url http://localhost:8069 --db moutarderie_local --user admin --password admin
```

Pour tout remettre à neuf d'un coup (base, jeu de données, clé API, `backend/.env`) :

```bash
cd odoo
ODOO_HTTP_PORT=8070 ./dev/reset_local.sh   # ou sans ODOO_HTTP_PORT si le port 8069 est libre
```

## Tests (scénario A)

Base jetable, module installé avec ses 14 tests :

```bash
cd odoo
docker compose up -d db
docker compose run --rm odoo odoo -c /etc/odoo/odoo.conf -d test_suggestion \
  -i moutarderie_suggestion_commande --test-enable \
  --test-tags /moutarderie_suggestion_commande --stop-after-init
```

Attendu : le journal se termine par `0 failed, 0 error(s) of 14 tests`.

## Clé API du compte « Suggestions automatiques »

Une clé par base (local, staging, prod), générée une seule fois, **jamais versionnée**. Elle va dans
`ODOO_PASSWORD` du backend, avec `ODOO_USERNAME=suggestions.auto`.

En local :

```bash
cd odoo
docker compose run --rm odoo odoo shell -c /etc/odoo/odoo.conf -d moutarderie_local
```

puis dans le shell :

```python
user = env.ref('moutarderie_suggestion_commande.user_suggestions_automatiques')
print(env['res.users.apikeys'].with_user(user)._generate(None, 'auto-proposal backend'))
env.cr.commit()
```

Sur Odoo.sh : mêmes deux lignes dans le shell de la branche (`odoo-bin shell`), sur la base de la branche.
La clé n'est affichée qu'une fois : la copier aussitôt dans les variables d'environnement du backend.

## Identifiant du type d'activité

Les ids diffèrent d'une base à l'autre. Relevé en lecture seule, par `ir.model.data` :

```python
env['ir.model.data'].search_read(
    [('module', '=', 'moutarderie_suggestion_commande'),
     ('name', '=', 'mail_activity_type_suggestion_commande')],
    ['res_id'])
```

ou en XML-RPC : `search_read` sur `ir.model.data` avec le même domaine, champ `res_id`. La valeur va dans
`ODOO_SUGGESTION_ACTIVITY_TYPE_ID` (local, staging) ou dans
`activity.suggestionActivityTypeId` de `backend/src/config/auto-proposal.ts` (prod).
