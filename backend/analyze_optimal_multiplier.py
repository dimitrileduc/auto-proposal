#!/usr/bin/env python3
"""
Trouve le multiplicateur optimal pour le seuil LOW relatif
Teste différents multiplicateurs (2x, 3x, 4x, 5x, 6x) de la fenêtre client
"""

import json
import glob
import re
from datetime import datetime
from collections import defaultdict

REPORTS_DIR = "/Users/dlstudio/Documents/GitHub/auto-proposal/backend/reports-output"

def parse_date(date_str):
    """Parse une date"""
    try:
        if ' ' in date_str:
            return datetime.strptime(date_str.split()[0], '%Y-%m-%d')
        return datetime.strptime(date_str, '%Y-%m-%d')
    except:
        return None

def extract_client_reorder_window(client_md_path):
    """Extrait la fenêtre de recommande client du rapport MD"""
    try:
        with open(client_md_path, 'r') as f:
            content = f.read()

        # Chercher: "📏 Fenêtre moyenne de recommande client: 15.4j"
        match = re.search(r'Fenêtre moyenne de recommande client:\s*(\d+\.?\d*)j', content)
        if match:
            return float(match.group(1))

        return None
    except:
        return None

def analyze_client_with_multipliers(client_id, cutoff_date_str, fp_count):
    """Analyse un client et teste différents multiplicateurs"""

    # Trouver le rapport client MD
    client_md_pattern = f"{REPORTS_DIR}/client-{client_id}-*.md"
    client_md_files = glob.glob(client_md_pattern)

    if not client_md_files:
        return None

    client_md_path = client_md_files[0]
    cutoff_date = parse_date(cutoff_date_str)

    if not cutoff_date:
        return None

    # Extraire fenêtre client
    client_window = extract_client_reorder_window(client_md_path)

    if not client_window:
        return None

    # Parser le rapport MD pour trouver les produits LOW
    with open(client_md_path, 'r') as f:
        content = f.read()

    # Extraire les produits LOW avec leur dernière commande
    low_products = []

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
        order_lines = re.findall(
            r'\| (\d{4}-\d{2}-\d{2}) \| ([^\|]+) \| (\d+) \|',
            history_block
        )

        if order_lines:
            last_order_date_str = order_lines[0][0]
            last_order_date = parse_date(last_order_date_str)

            if last_order_date:
                days_since = (cutoff_date - last_order_date).days
                low_products.append({
                    'product_code': product_code,
                    'days_since': days_since
                })

    if not low_products:
        return None

    return {
        'client_id': client_id,
        'client_window': client_window,
        'fp_count': fp_count,
        'low_products': low_products
    }

def main():
    print("🔍 ANALYSE: Trouver le multiplicateur optimal\n")
    print("=" * 80)

    # Lire tous les rapports LOW avec FP
    low_reports = sorted(glob.glob(f"{REPORTS_DIR}/backtest-client-*-low.json"))

    # Données par client
    clients_data = []

    print(f"📊 Analyse en cours...\n")

    for json_path in low_reports:
        try:
            with open(json_path, 'r') as f:
                data = json.load(f)

            client_id = data['clientId']
            fp = data['metrics']['fp']
            tp = data['metrics']['tp']
            cutoff_date = data['cutoffDate']

            # Skip si pas de FP
            if fp == 0:
                continue

            # Analyser avec différents multiplicateurs
            result = analyze_client_with_multipliers(client_id, cutoff_date, fp)

            if result:
                clients_data.append(result)

        except Exception as e:
            continue

    print(f"✅ {len(clients_data)} clients avec FP LOW et fenêtre client identifiée\n")
    print("=" * 80)

    # Tester différents multiplicateurs
    multipliers = [2, 3, 4, 5, 6, 7, 8]

    results = {}

    for mult in multipliers:
        total_fp = 0
        fp_eliminated = 0

        for client in clients_data:
            threshold = client['client_window'] * mult

            # Compter combien de produits LOW seraient éliminés
            for product in client['low_products']:
                total_fp += 1
                if product['days_since'] > threshold:
                    fp_eliminated += 1

        results[mult] = {
            'total_fp': total_fp,
            'eliminated': fp_eliminated,
            'pct': (fp_eliminated / total_fp * 100) if total_fp > 0 else 0
        }

    # Affichage des résultats
    print("\n📊 RÉSULTATS PAR MULTIPLICATEUR\n")
    print("Multiplicateur | FP total | FP éliminés | % éliminé")
    print("---------------|----------|-------------|----------")

    for mult in multipliers:
        r = results[mult]
        print(f"{mult:2}x fenêtre    | {r['total_fp']:8} | {r['eliminated']:11} | {r['pct']:6.1f}%")

    # Analyse détaillée pour quelques multiplicateurs clés
    print("\n" + "=" * 80)
    print("🔬 ANALYSE DÉTAILLÉE PAR CLIENT (Exemples)\n")

    # Montrer 5 exemples de clients
    for i, client in enumerate(clients_data[:5], 1):
        print(f"\n{i}. Client {client['client_id']}")
        print(f"   Fenêtre client: {client['client_window']:.1f}j")
        print(f"   FP LOW: {client['fp_count']}")
        print(f"   Produits LOW analysés: {len(client['low_products'])}")

        print(f"\n   Seuils selon multiplicateur:")
        for mult in [3, 4, 5, 6]:
            threshold = client['client_window'] * mult
            eliminated = sum(1 for p in client['low_products'] if p['days_since'] > threshold)
            pct = (eliminated / len(client['low_products']) * 100) if len(client['low_products']) > 0 else 0
            print(f"      {mult}x ({threshold:.0f}j) → éliminerait {eliminated}/{len(client['low_products'])} ({pct:.0f}%)")

    # Recommandation
    print("\n" + "=" * 80)
    print("💡 RECOMMANDATION\n")

    # Trouver le sweet spot (30-50% FP éliminés)
    best_mult = None
    best_score = float('inf')
    target_pct = 45  # On vise ~45% d'élimination

    for mult in multipliers:
        pct = results[mult]['pct']
        score = abs(pct - target_pct)
        if score < best_score:
            best_score = score
            best_mult = mult

    print(f"Multiplicateur optimal: {best_mult}x")
    print(f"FP éliminés: {results[best_mult]['pct']:.1f}%")
    print(f"\nLogique: Produit LOW non commandé depuis > {best_mult}x la fenêtre client")
    print(f"         = probablement ponctuel/échantillon")

    # Exemples concrets
    print(f"\nExemples concrets:")
    print(f"  - Client fenêtre 15j → seuil {best_mult}x = {15 * best_mult}j")
    print(f"  - Client fenêtre 30j → seuil {best_mult}x = {30 * best_mult}j")
    print(f"  - Client fenêtre 7j  → seuil {best_mult}x = {7 * best_mult}j")

    print("\n" + "=" * 80)

if __name__ == '__main__':
    main()
