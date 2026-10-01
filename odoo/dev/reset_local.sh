#!/usr/bin/env bash
# Remet l'Odoo local à neuf pour rejouer un lancement complet du backend.
#
#   ./dev/reset_local.sh                      # Odoo sur http://localhost:8069
#   ODOO_HTTP_PORT=8070 ./dev/reset_local.sh  # si le port 8069 est déjà pris
#
# Étapes : supprime la base moutarderie_local, la réinstalle (crm, sale_management et le module),
# la remplit avec dev/seed_local.py, génère une clé API pour le compte « Suggestions automatiques »,
# puis met à jour backend/.env (ODOO_URL, ODOO_DB, ODOO_USERNAME, ODOO_PASSWORD,
# ODOO_SUGGESTION_ACTIVITY_TYPE_ID). Ne touche qu'à la base Docker locale.
set -euo pipefail

cd "$(dirname "$0")/.."
PORT="${ODOO_HTTP_PORT:-8069}"
DB=moutarderie_local
URL="http://localhost:${PORT}"
ENV_FILE=../backend/.env

# Garde-fou : ne jamais réécrire un .env qui pointe ailleurs que sur un Odoo local
if [ -f "$ENV_FILE" ] && grep -qE '^ODOO_URL=' "$ENV_FILE" \
  && ! grep -qE '^ODOO_URL=http://(localhost|127\.0\.0\.1)' "$ENV_FILE"; then
  echo "backend/.env pointe sur un Odoo qui n'est pas local : arrêt, rien n'a été modifié." >&2
  exit 1
fi

echo "==> Base de données"
docker compose up -d db
until docker compose exec -T db pg_isready -U odoo >/dev/null 2>&1; do sleep 1; done
docker compose stop odoo >/dev/null
docker compose exec -T db dropdb -U odoo --if-exists "$DB"

echo "==> Installation de crm, sale_management et moutarderie_suggestion_commande"
docker compose run --rm odoo odoo -c /etc/odoo/odoo.conf -d "$DB" \
  -i crm,sale_management,moutarderie_suggestion_commande --without-demo=all \
  --stop-after-init --log-level=warn

echo "==> Démarrage d'Odoo sur ${URL}"
ODOO_HTTP_PORT="$PORT" docker compose up -d odoo
until curl -sf -o /dev/null "${URL}/web/login"; do sleep 2; done

echo "==> Jeu de données"
python3 dev/seed_local.py --url "$URL" --db "$DB" --user admin --password admin

echo "==> Clé API du compte « Suggestions automatiques »"
OUT=$(docker compose run --rm -T odoo odoo shell -c /etc/odoo/odoo.conf -d "$DB" --no-http --log-level=warn <<'PY'
user = env.ref("moutarderie_suggestion_commande.user_suggestions_automatiques")
print("RESET_KEY=%s" % env["res.users.apikeys"].with_user(user)._generate(None, "auto-proposal backend (local)"))
print("RESET_TYPE_ID=%s" % env.ref("moutarderie_suggestion_commande.mail_activity_type_suggestion_commande").id)
env.cr.commit()
PY
)
KEY=$(printf '%s\n' "$OUT" | sed -n 's/^RESET_KEY=//p')
TYPE_ID=$(printf '%s\n' "$OUT" | sed -n 's/^RESET_TYPE_ID=//p')
if [ -z "$KEY" ] || [ -z "$TYPE_ID" ]; then
  echo "Clé API ou id du type introuvable dans la sortie du shell Odoo :" >&2
  printf '%s\n' "$OUT" >&2
  exit 1
fi

echo "==> backend/.env"
touch "$ENV_FILE"
chmod 600 "$ENV_FILE"
python3 - "$ENV_FILE" "$URL" "$DB" "$KEY" "$TYPE_ID" <<'PY'
import sys

path, url, db, key, type_id = sys.argv[1:]
values = {
    "ODOO_URL": url,
    "ODOO_DB": db,
    "ODOO_USERNAME": "suggestions.auto",
    "ODOO_PASSWORD": key,
    "ODOO_SUGGESTION_ACTIVITY_TYPE_ID": type_id,
}
lines = open(path).read().splitlines()
seen = set()
for i, line in enumerate(lines):
    name = line.split("=", 1)[0]
    if name in values:
        lines[i] = "%s=%s" % (name, values[name])
        seen.add(name)
lines += ["%s=%s" % (name, value) for name, value in values.items() if name not in seen]
open(path, "w").write("\n".join(lines) + "\n")
PY
grep -q '^OPENROUTER_API_KEY=' "$ENV_FILE" || echo "Attention : ajouter OPENROUTER_API_KEY dans backend/.env (l'IA en a besoin)."

echo ""
echo "Prêt. Odoo : ${URL} (admin / admin). Lancer le backend depuis backend/ avec : npx trigger.dev dev"
