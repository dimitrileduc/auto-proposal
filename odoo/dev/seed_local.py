#!/usr/bin/env python3
"""Jeu de données pour le lancement complet du backend contre l'Odoo 17 local.

Prérequis : base initialisée avec crm, sale_management et moutarderie_suggestion_commande
(quickstart, scénario C). Python 3.9+, bibliothèque standard uniquement.

    python3 dev/seed_local.py --url http://localhost:8069 --db moutarderie_local

Crée deux sociétés (A = société analysée, B = autre), une équipe, un vendeur actif et un vendeur
archivé, l'étiquette « Exclude-Auto-Proposal », quelques produits, et un client société par
scénario, avec un historique de commandes confirmées en société A (une tous les 25 à 30 jours
sur environ 9 mois, la dernière il y a environ 45 jours). Affiche les ids utiles au backend et,
pour chaque client, le résultat attendu d'un lancement réel.

Le script refuse de tourner une seconde fois sur la même base.
"""
import argparse
import random
import sys
import xmlrpc.client
from datetime import date, datetime, timedelta, timezone

MARKER_PREFIX = "SEED-"
TYPE_XMLID = ("moutarderie_suggestion_commande", "mail_activity_type_suggestion_commande")
USER_XMLID = ("moutarderie_suggestion_commande", "user_suggestions_automatiques")

# (clé, nom, résultat attendu)
CLIENTS = [
    ("a", "Épicerie Alpha (a)",
     "activité créée sur l'opportunité « mars » (la plus ancienne des deux ouvertes)"),
    ("b", "Traiteur Bravo (b)",
     "opportunité créée (seulement une gagnée et une perdue) + activité"),
    ("c", "Restaurant Charlie (c)", "écarté : pas de vendeur"),
    ("d", "Brasserie Delta (d)", "écarté : vendeur inactif"),
    ("e", "Cantine Echo (e)", "absent du compte rendu (étiquette d'exclusion)"),
    ("f", "Fromagerie Foxtrot (f)", "écarté : activité déjà ouverte"),
    ("g", "Boucherie Golf (g)", "écarté : relancé il y a moins de 3 semaines ({g_date})"),
    ("h", "Boulangerie Hotel (h)", "activité créée (relancé il y a 25 jours)"),
    ("i", "Café India (i)", "écarté : aucun produit suggéré (aucune commande)"),
    ("j", "Bistrot Juliett (j)", "opportunité créée (seulement une piste) + activité"),
    ("k", "Hôtel Kilo (k)",
     "opportunité créée en société A (seule opportunité en société B) + activité"),
    ("l", "Crèmerie Lima (l)",
     "activité créée sur l'opportunité portée par son contact"),
]


class Odoo:
    def __init__(self, url, db, login, password):
        self.db = db
        self.password = password
        common = xmlrpc.client.ServerProxy("%s/xmlrpc/2/common" % url, allow_none=True)
        self.uid = common.authenticate(db, login, password, {})
        if not self.uid:
            sys.exit("Authentification refusée pour %s sur %s" % (login, db))
        self.models = xmlrpc.client.ServerProxy("%s/xmlrpc/2/object" % url, allow_none=True)

    def call(self, model, method, args, company_ids=None, **kwargs):
        if company_ids:
            kwargs["context"] = dict(kwargs.get("context", {}), allowed_company_ids=company_ids)
        return self.models.execute_kw(self.db, self.uid, self.password, model, method, args, kwargs)

    def create(self, model, values, company_ids=None):
        return self.call(model, "create", [values], company_ids=company_ids)

    def write(self, model, ids, values, company_ids=None):
        return self.call(model, "write", [ids, values], company_ids=company_ids)

    def search(self, model, domain, **kwargs):
        return self.call(model, "search", [domain], **kwargs)

    def xmlid(self, module, name):
        rows = self.call(
            "ir.model.data", "search_read",
            [[("module", "=", module), ("name", "=", name)]], fields=["res_id"],
        )
        if not rows:
            sys.exit("Id externe introuvable : %s.%s (module installé ?)" % (module, name))
        return rows[0]["res_id"]


def odoo_datetime(value):
    return value.strftime("%Y-%m-%d %H:%M:%S")


def order_dates(rng, today):
    """Dates de commande : la dernière il y a ~45 jours, puis tous les 25 à 30 jours sur ~9 mois."""
    current = today - timedelta(days=45 + rng.randint(0, 3))
    dates = []
    while (today - current).days <= 270:
        dates.append(current)
        current -= timedelta(days=rng.randint(25, 30))
    return sorted(dates)


def main():
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("--url", default="http://localhost:8069")
    parser.add_argument("--db", default="moutarderie_local")
    parser.add_argument("--user", default="admin")
    parser.add_argument("--password", default="admin")
    args = parser.parse_args()

    odoo = Odoo(args.url, args.db, args.user, args.password)
    rng = random.Random(42)
    today = date.today()
    now_utc = datetime.now(timezone.utc).replace(tzinfo=None)

    already = odoo.search("res.partner", [("ref", "=like", MARKER_PREFIX + "%")],
                          context={"active_test": False})
    if already:
        sys.exit("Données déjà présentes (partenaires %s*). Repartir d'une base neuve." % MARKER_PREFIX)

    type_id = odoo.xmlid(*TYPE_XMLID)
    bot_user_id = odoo.xmlid(*USER_XMLID)
    crm_lead_model_id = odoo.call("ir.model", "search", [[("model", "=", "crm.lead")]])[0]
    unit_categ_id = odoo.xmlid("uom", "product_uom_categ_unit")
    unit_uom_id = odoo.xmlid("uom", "product_uom_unit")
    won_stage_id = odoo.search("crm.stage", [("is_won", "=", True)], limit=1)[0]

    # Sociétés, rattachées à l'admin et au compte « Suggestions automatiques »
    # (créé à l'installation, avant ces sociétés).
    company_a = odoo.create("res.company", {"name": "FOODPRINT SRL (local)"})
    company_b = odoo.create("res.company", {"name": "Conserverie Belge (local)"})
    both = [company_a, company_b]
    for user_id in (odoo.uid, bot_user_id):
        odoo.write("res.users", [user_id], {"company_ids": [(4, company_a), (4, company_b)]})

    salesman_group = odoo.xmlid("sales_team", "group_sale_salesman")
    def create_salesman(name, login):
        return odoo.call("res.users", "create", [{
            "name": name,
            "login": login,
            "email": "%s@example.com" % login,
            "company_id": company_a,
            "company_ids": [(6, 0, both)],
            "groups_id": [(6, 0, [salesman_group])],
        }], context={"no_reset_password": True})

    salesman = create_salesman("Marie Vendeuse", "marie.vendeuse")
    old_salesman = create_salesman("Paul Parti", "paul.parti")
    team = odoo.create("crm.team", {
        "name": "Ventes FOODPRINT (local)",
        "company_id": company_a,
        "member_ids": [(6, 0, [salesman])],
    }, company_ids=[company_a])

    exclude_tag = odoo.create("res.partner.category", {"name": "Exclude-Auto-Proposal"})

    tu6 = odoo.create("uom.uom", {
        "name": "TU6", "category_id": unit_categ_id, "uom_type": "bigger",
        "factor_inv": 6, "rounding": 1,
    })
    products = {}
    for key, name, uom, price in [
        ("ancienne", "Moutarde à l'ancienne 200 g", tu6, 14.4),
        ("dijon", "Moutarde de Dijon 1 kg", unit_uom_id, 6.9),
        ("pickles", "Pickles 350 g", tu6, 16.2),
        ("mayo", "Mayonnaise 5 L", unit_uom_id, 21.5),
        ("ketchup", "Ketchup artisanal 300 ml", tu6, 12.6),
    ]:
        products[key] = odoo.create("product.product", {
            "name": name, "type": "consu", "sale_ok": True, "list_price": price,
            "uom_id": uom, "uom_po_id": uom,
        })

    def create_order(partner_id, company_id, when, lines, user_id=False):
        order_id = odoo.create("sale.order", {
            "partner_id": partner_id,
            "company_id": company_id,
            "user_id": user_id,
            "order_line": [(0, 0, {"product_id": products[p], "product_uom_qty": q}) for p, q in lines],
        }, company_ids=[company_id])
        odoo.call("sale.order", "action_confirm", [[order_id]], company_ids=[company_id])
        # action_confirm remet date_order à maintenant : on la réécrit ensuite.
        odoo.write("sale.order", [order_id], {"date_order": odoo_datetime(when)}, company_ids=[company_id])
        return order_id

    def create_history(partner_id, user_id):
        """Commandes régulières (produits habituels) + un produit commandé une seule fois."""
        basket = rng.sample(["ancienne", "dijon", "pickles", "mayo"], 3)
        typical = {p: rng.choice([4, 6, 8, 10, 12]) for p in basket}
        dates = order_dates(rng, today)
        for index, day in enumerate(dates):
            lines = [(p, max(1, typical[p] + rng.randint(-2, 2))) for p in basket if rng.random() < 0.85]
            if not lines:
                lines = [(basket[0], typical[basket[0]])]
            if index == len(dates) - 3:
                lines.append(("ketchup", 3))
            create_order(partner_id, company_a, datetime.combine(day, datetime.min.time()) + timedelta(hours=9),
                         lines, user_id)

    def create_lead(name, partner_id, company_id, lead_type="opportunity", user_id=None, team_id=None):
        values = {
            "name": name,
            "type": lead_type,
            "partner_id": partner_id,
            "user_id": salesman if user_id is None else user_id,
            "company_id": company_id,
        }
        if team_id:
            values["team_id"] = team_id
        return odoo.create("crm.lead", values, company_ids=[company_id])

    def schedule(lead_id, client_name, deadline):
        return odoo.create("mail.activity", {
            "res_model_id": crm_lead_model_id,
            "res_id": lead_id,
            "activity_type_id": type_id,
            "summary": "Suggestion commande %s" % client_name,
            "date_deadline": deadline.isoformat(),
            "user_id": salesman,
        }, company_ids=[company_a])

    def done_days_ago(lead_id, client_name, days):
        """Relance passée en fait il y a `days` jours : trace antidatée."""
        activity_id = schedule(lead_id, client_name, today - timedelta(days=days))
        odoo.call("mail.activity", "action_feedback", [[activity_id]],
                  company_ids=[company_a], feedback="Client rappelé")
        message_ids = odoo.search("mail.message", [
            ("model", "=", "crm.lead"), ("res_id", "=", lead_id),
            ("mail_activity_type_id", "=", type_id),
        ])
        done_at = now_utc - timedelta(days=days)
        odoo.write("mail.message", message_ids, {"date": odoo_datetime(done_at)})
        return done_at

    clients = {}
    g_date = None
    for key, name, _expected in CLIENTS:
        user_id = {"c": False, "d": old_salesman}.get(key, salesman)
        values = {
            "name": name, "is_company": True, "customer_rank": 1,
            "ref": MARKER_PREFIX + key, "user_id": user_id,
        }
        if key == "e":
            values["category_id"] = [(6, 0, [exclude_tag])]
        partner_id = odoo.create("res.partner", values)
        clients[key] = partner_id
        if key != "i":
            create_history(partner_id, user_id)

        if key == "a":
            create_lead("Opportunité mars", partner_id, company_a, team_id=team)
            create_lead("Opportunité juin", partner_id, company_a, team_id=team)
        elif key == "b":
            won = create_lead("Commande salon (gagnée)", partner_id, company_a, team_id=team)
            odoo.write("crm.lead", [won], {"stage_id": won_stage_id}, company_ids=[company_a])
            lost = create_lead("Gamme bio (perdue)", partner_id, company_a, team_id=team)
            # Équivalent d'action_set_lost (qui renvoie None, non transmissible en XML-RPC).
            odoo.write("crm.lead", [lost], {"active": False, "probability": 0}, company_ids=[company_a])
        elif key == "f":
            lead = create_lead("Opportunité printemps", partner_id, company_a, team_id=team)
            schedule(lead, name, today - timedelta(days=7))
        elif key == "g":
            lead = create_lead("Opportunité relancée récemment", partner_id, company_a, team_id=team)
            g_date = done_days_ago(lead, name, 10)
        elif key == "h":
            lead = create_lead("Opportunité relancée il y a longtemps", partner_id, company_a, team_id=team)
            done_days_ago(lead, name, 25)
        elif key == "j":
            create_lead("Piste salon", partner_id, company_a, lead_type="lead", team_id=team)
        elif key == "k":
            create_lead("Opportunité société B", partner_id, company_b)
            create_order(partner_id, company_b, datetime.combine(today - timedelta(days=10), datetime.min.time()),
                         [("dijon", 5)], salesman)
        elif key == "l":
            contact = odoo.create("res.partner", {
                "name": "Léa Achats", "parent_id": partner_id, "type": "contact",
                "ref": MARKER_PREFIX + "l-contact",
            })
            create_lead("Opportunité via contact", contact, company_a, team_id=team)

    # Le vendeur (d) est archivé après la création de son historique.
    odoo.write("res.users", [old_salesman], {"active": False})

    print("Jeu de données créé sur %s" % args.db)
    print("")
    print("  companyId (société A, analysée) : %s" % company_a)
    print("  société B                        : %s" % company_b)
    print("  excludedPartnerTagId             : %s" % exclude_tag)
    print("  ODOO_SUGGESTION_ACTIVITY_TYPE_ID : %s" % type_id)
    print("  vendeur actif / archivé          : %s / %s" % (salesman, old_salesman))
    print("")
    print("Clients et résultat attendu d'un lancement réel :")
    g_label = g_date.strftime("%d/%m/%Y") if g_date else "?"
    for key, name, expected in CLIENTS:
        print("  [%s] %-26s id %-5s %s" % (key, name, clients[key], expected.format(g_date=g_label)))
    print("")
    print('Payload : {"config":{"companyId":%s,"excludedPartnerTagId":%s}}' % (company_a, exclude_tag))


if __name__ == "__main__":
    main()
