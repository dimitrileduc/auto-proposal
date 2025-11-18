#!/usr/bin/env python3
"""
Analyse ultra-profonde des False Positives LOW
Objectif: Quantifier combien de FP LOW sont des produits anciens (>90j)
"""

import json
import glob
from datetime import datetime
from collections import defaultdict

# Configuration
REPORTS_DIR = "/Users/dlstudio/Documents/GitHub/auto-proposal/backend/reports-output"
CUTOFF_DAYS = 90  # Seuil pour considérer un produit comme "ancien"

# Statistiques globales
stats = {
    'total_clients': 0,
    'clients_with_fp': 0,
    'total_fp': 0,
    'total_tp': 0,
    'total_fn': 0,
    'fp_by_age': defaultdict(int),  # Tranches d'âge
    'clients_details': []
}

# Tranches d'âge en jours
AGE_BUCKETS = [
    (0, 30, "0-30j (très récent)"),
    (30, 60, "30-60j (récent)"),
    (60, 90, "60-90j (moyen)"),
    (90, 120, "90-120j (ancien)"),
    (120, 180, "120-180j (très ancien)"),
    (180, 999999, ">180j (ponctuel)")
]

def get_age_bucket(days):
    """Retourne le bucket d'âge pour un nombre de jours"""
    for min_days, max_days, label in AGE_BUCKETS:
        if min_days <= days < max_days:
            return label
    return ">180j (ponctuel)"

def parse_date(date_str):
    """Parse une date au format 2025-10-14 ou 2025-10-14 13:24:27"""
    try:
        if ' ' in date_str:
            return datetime.strptime(date_str.split()[0], '%Y-%m-%d')
        return datetime.strptime(date_str, '%Y-%m-%d')
    except:
        return None

def analyze_client_low_report(json_path):
    """Analyse un rapport LOW d'un client"""
    try:
        with open(json_path, 'r') as f:
            data = json.load(f)

        client_id = data['clientId']
        client_name = data['clientName']
        cutoff_date_str = data['cutoffDate']
        cutoff_date = parse_date(cutoff_date_str)

        if not cutoff_date:
            return None

        fp = data['metrics']['fp']
        tp = data['metrics']['tp']
        fn = data['metrics']['fn']

        # Si pas de FP, skip
        if fp == 0:
            return None

        # Maintenant on doit lire le rapport client pour avoir l'historique
        # Trouver le fichier client-{client_id}-*.md
        client_md_pattern = f"{REPORTS_DIR}/client-{client_id}-*.md"
        client_md_files = glob.glob(client_md_pattern)

        if not client_md_files:
            print(f"⚠️  Client {client_id}: Rapport MD non trouvé")
            return None

        client_md_path = client_md_files[0]

        # Parser le rapport MD pour extraire les dates de dernière commande
        # On cherche les produits avec "Confiance: low"
        fp_products = []

        with open(client_md_path, 'r') as f:
            content = f.read()

            # Split par produit (marqueur <details>)
            import re

            # Pattern pour extraire un produit LOW
            # On cherche: confidence: low + historique commandes
            products_sections = re.findall(
                r'<summary>.*?\[([^\]]+)\].*?</summary>.*?'
                r'### 🧮 Calcul Quantité.*?'
                r'- \*\*Confiance\*\*: low.*?'
                r'### 📦 Historique Commandes.*?'
                r'\| Date \| Commande \| Qté \| Prix unit\. \|.*?'
                r'\| --- \| --- \| --- \| --- \|(.*?)'
                r'</details>',
                content,
                re.DOTALL
            )

            for product_code, history_block in products_sections:
                # Extraire toutes les lignes de commande
                order_lines = re.findall(
                    r'\| (\d{4}-\d{2}-\d{2}) \| ([^\|]+) \| (\d+) \|',
                    history_block
                )

                if order_lines:
                    # Prendre la date la plus récente (première ligne car trié DESC)
                    last_order_date_str = order_lines[0][0]
                    last_order_date = parse_date(last_order_date_str)

                    if last_order_date:
                        days_since = (cutoff_date - last_order_date).days
                        age_bucket = get_age_bucket(days_since)

                        fp_products.append({
                            'product_code': product_code,
                            'last_order_date': last_order_date_str,
                            'days_since': days_since,
                            'age_bucket': age_bucket
                        })

        if not fp_products:
            # Peut-être que le parsing a échoué, on compte quand même le FP
            return {
                'client_id': client_id,
                'client_name': client_name,
                'fp': fp,
                'tp': tp,
                'fn': fn,
                'fp_products': [],
                'parsing_failed': True
            }

        return {
            'client_id': client_id,
            'client_name': client_name,
            'fp': fp,
            'tp': tp,
            'fn': fn,
            'fp_products': fp_products,
            'parsing_failed': False
        }

    except Exception as e:
        print(f"❌ Erreur parsing {json_path}: {e}")
        return None

def main():
    print("🔍 ULTRA-ANALYSE: Impact du seuil 90j sur les FP LOW\n")
    print("=" * 80)

    # Lire TOUS les rapports LOW
    low_reports = sorted(glob.glob(f"{REPORTS_DIR}/backtest-client-*-low.json"))

    print(f"📊 Analyse de {len(low_reports)} clients (TOUS)...\n")

    for json_path in low_reports:
        result = analyze_client_low_report(json_path)

        if result:
            stats['total_clients'] += 1

            if result['fp'] > 0:
                stats['clients_with_fp'] += 1
                stats['total_fp'] += result['fp']
                stats['total_tp'] += result['tp']
                stats['total_fn'] += result['fn']

                # Compter FP par âge
                for fp_product in result['fp_products']:
                    bucket = fp_product['age_bucket']
                    stats['fp_by_age'][bucket] += 1

                stats['clients_details'].append(result)

    # Affichage des résultats
    print("=" * 80)
    print("📈 RÉSULTATS GLOBAUX\n")
    print(f"Total clients analysés: {stats['total_clients']}")
    print(f"Clients avec FP LOW: {stats['clients_with_fp']}")
    print(f"Total FP LOW: {stats['total_fp']}")
    print(f"Total TP LOW: {stats['total_tp']}")
    print(f"Total FN LOW: {stats['total_fn']}")

    if stats['total_fp'] > 0:
        current_precision = stats['total_tp'] / (stats['total_tp'] + stats['total_fp']) * 100
        print(f"\n📊 Precision actuelle: {current_precision:.1f}%")

    print("\n" + "=" * 80)
    print("🕐 DISTRIBUTION DES FP PAR ÂGE\n")

    total_fp_with_age = sum(stats['fp_by_age'].values())

    for min_days, max_days, label in AGE_BUCKETS:
        count = stats['fp_by_age'][label]
        if total_fp_with_age > 0:
            pct = count / total_fp_with_age * 100
        else:
            pct = 0
        print(f"{label:25} : {count:4} FP ({pct:5.1f}%)")

    # Calcul impact si skip >90j
    print("\n" + "=" * 80)
    print("💡 IMPACT SI ON SKIP PRODUITS > 90j\n")

    fp_to_remove = sum(
        stats['fp_by_age'][label]
        for _, min_age, label in AGE_BUCKETS
        if min_age >= CUTOFF_DAYS
    )

    new_total_fp = stats['total_fp'] - fp_to_remove

    if new_total_fp > 0 and stats['total_tp'] + new_total_fp > 0:
        new_precision = stats['total_tp'] / (stats['total_tp'] + new_total_fp) * 100
    else:
        new_precision = 100 if stats['total_tp'] > 0 else 0

    print(f"FP éliminés (>90j): {fp_to_remove} / {stats['total_fp']} ({fp_to_remove/stats['total_fp']*100:.1f}%)")
    print(f"Nouveaux FP restants: {new_total_fp}")
    print(f"Precision AVANT: {current_precision:.1f}%")
    print(f"Precision APRÈS: {new_precision:.1f}%")
    print(f"Gain de precision: +{new_precision - current_precision:.1f} points")

    # Top 10 clients les plus impactés
    print("\n" + "=" * 80)
    print("🔥 TOP 10 CLIENTS AVEC LE PLUS DE FP LOW ANCIENS (>90j)\n")

    clients_with_old_fp = []
    for client in stats['clients_details']:
        old_fp_count = sum(
            1 for fp in client['fp_products']
            if fp['days_since'] > CUTOFF_DAYS
        )
        if old_fp_count > 0:
            clients_with_old_fp.append({
                'client_id': client['client_id'],
                'client_name': client['client_name'],
                'total_fp': client['fp'],
                'old_fp': old_fp_count,
                'old_fp_pct': old_fp_count / client['fp'] * 100 if client['fp'] > 0 else 0
            })

    clients_with_old_fp.sort(key=lambda x: x['old_fp'], reverse=True)

    for i, client in enumerate(clients_with_old_fp[:10], 1):
        print(f"{i:2}. Client {client['client_id']:5} ({client['client_name'][:40]:40})")
        print(f"    FP total: {client['total_fp']:3} | FP >90j: {client['old_fp']:3} ({client['old_fp_pct']:5.1f}%)")

    print("\n" + "=" * 80)

if __name__ == '__main__':
    main()
