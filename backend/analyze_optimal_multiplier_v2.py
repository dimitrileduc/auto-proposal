#!/usr/bin/env python3
"""
Trouve le multiplicateur optimal pour le seuil LOW relatif
Recalcule la fenêtre client à partir de l'historique
"""

import json
import glob
import re
from datetime import datetime
from collections import defaultdict
import statistics

REPORTS_DIR = "/Users/dlstudio/Documents/GitHub/auto-proposal/backend/reports-output"

def parse_date(date_str):
    """Parse une date"""
    try:
        if ' ' in date_str:
            return datetime.strptime(date_str.split()[0], '%Y-%m-%d')
        return datetime.strptime(date_str, '%Y-%m-%d')
    except:
        return None

def calculate_client_window_from_md(client_md_path):
    """Recalcule la fenêtre client en analysant tous les produits avec 2+ commandes"""
    try:
        with open(client_md_path, 'r') as f:
            content = f.read()

        all_intervals = []

        # Extraire tous les produits (pas seulement LOW)
        products_sections = re.findall(
            r'<summary>.*?\[([^\]]+)\].*?</summary>.*?'
            r'### 📦 Historique Commandes.*?'
            r'\| Date \| Commande \| Qté \| Prix unit\. \|.*?'
            r'\| --- \| --- \| --- \| --- \|(.*?)'
            r'</details>',
            content,
            re.DOTALL
        )

        for product_code, history_block in products_sections:
            order_lines = re.findall(
                r'\| (\d{4}-\d{2}-\d{2}) \|',
                history_block
            )

            # Besoin d'au moins 2 commandes pour calculer un intervalle
            if len(order_lines) < 2:
                continue

            # Trier les dates (déjà triées DESC normalement)
            dates = [parse_date(d) for d in order_lines]
            dates = [d for d in dates if d]

            if len(dates) < 2:
                continue

            # Calculer les intervalles entre commandes consécutives
            for i in range(len(dates) - 1):
                interval = (dates[i] - dates[i+1]).days
                if interval > 0:
                    all_intervals.append(interval)

        # Calculer la médiane des intervalles (fenêtre client)
        if all_intervals:
            return statistics.median(all_intervals)

        return None

    except Exception as e:
        return None

def analyze_client(client_id, cutoff_date_str, fp_count, tp_count):
    """Analyse un client"""

    # Trouver le rapport client MD
    client_md_pattern = f"{REPORTS_DIR}/client-{client_id}-*.md"
    client_md_files = glob.glob(client_md_pattern)

    if not client_md_files:
        return None

    client_md_path = client_md_files[0]
    cutoff_date = parse_date(cutoff_date_str)

    if not cutoff_date:
        return None

    # Calculer la fenêtre client
    client_window = calculate_client_window_from_md(client_md_path)

    if not client_window or client_window <= 0:
        return None

    # Parser les produits LOW
    with open(client_md_path, 'r') as f:
        content = f.read()

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
            r'\| (\d{4}-\d{2}-\d{2}) \|',
            history_block
        )

        if order_lines:
            last_order_date_str = order_lines[0]
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
        'tp_count': tp_count,
        'low_products': low_products
    }

def main():
    print("🔍 ANALYSE: Multiplicateur optimal (fenêtre recalculée)\n")
    print("=" * 80)

    # Lire tous les rapports LOW
    low_reports = sorted(glob.glob(f"{REPORTS_DIR}/backtest-client-*-low.json"))

    clients_data = []

    print(f"📊 Analyse de {len(low_reports)} rapports...\n")

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

            result = analyze_client(client_id, cutoff_date, fp, tp)

            if result:
                clients_data.append(result)

        except Exception as e:
            continue

    print(f"✅ {len(clients_data)} clients avec FP LOW et fenêtre calculée\n")

    if len(clients_data) < 20:
        print(f"⚠️  Moins de 20 clients trouvés ({len(clients_data)}), résultats moins fiables\n")

    print("=" * 80)

    # Tester différents multiplicateurs
    multipliers = [2, 2.5, 3, 3.5, 4, 4.5, 5, 6, 7, 8]

    results = {}
    total_tp = sum(c['tp_count'] for c in clients_data)
    total_fp_initial = sum(len(c['low_products']) for c in clients_data)

    for mult in multipliers:
        fp_eliminated = 0

        for client in clients_data:
            threshold = client['client_window'] * mult

            for product in client['low_products']:
                if product['days_since'] > threshold:
                    fp_eliminated += 1

        fp_remaining = total_fp_initial - fp_eliminated

        # Calculer la nouvelle precision
        if total_tp + fp_remaining > 0:
            new_precision = total_tp / (total_tp + fp_remaining) * 100
        else:
            new_precision = 100 if total_tp > 0 else 0

        results[mult] = {
            'eliminated': fp_eliminated,
            'pct': (fp_eliminated / total_fp_initial * 100) if total_fp_initial > 0 else 0,
            'precision': new_precision
        }

    # Precision initiale
    initial_precision = total_tp / (total_tp + total_fp_initial) * 100 if (total_tp + total_fp_initial) > 0 else 0

    # Affichage
    print(f"\n📊 MÉTRIQUES INITIALES\n")
    print(f"Total TP LOW: {total_tp}")
    print(f"Total FP LOW: {total_fp_initial}")
    print(f"Precision initiale: {initial_precision:.1f}%")

    print("\n" + "=" * 80)
    print("\n📊 RÉSULTATS PAR MULTIPLICATEUR\n")
    print("Mult. | FP éliminés | % élim | Precision APRÈS | Gain")
    print("------|-------------|--------|-----------------|------")

    for mult in multipliers:
        r = results[mult]
        gain = r['precision'] - initial_precision
        print(f"{mult:4.1f}x | {r['eliminated']:11} | {r['pct']:5.1f}% | {r['precision']:14.1f}% | +{gain:4.1f}%")

    # Exemples de clients
    print("\n" + "=" * 80)
    print("🔬 EXEMPLES DE CLIENTS\n")

    for i, client in enumerate(clients_data[:10], 1):
        print(f"{i:2}. Client {client['client_id']:5} | Fenêtre: {client['client_window']:5.1f}j | FP: {len(client['low_products']):2}")

        # Tester 3x, 4x, 5x
        for mult in [3, 4, 5]:
            threshold = client['client_window'] * mult
            elim = sum(1 for p in client['low_products'] if p['days_since'] > threshold)
            pct = (elim / len(client['low_products']) * 100) if len(client['low_products']) > 0 else 0
            print(f"      {mult}x ({threshold:5.0f}j) → {elim:2}/{len(client['low_products']):2} éliminés ({pct:4.0f}%)")

    # Recommandation
    print("\n" + "=" * 80)
    print("💡 RECOMMANDATION\n")

    # Trouver le meilleur multiplicateur (celui qui maximise la precision)
    best_mult = max(results.keys(), key=lambda m: results[m]['precision'])
    best = results[best_mult]

    print(f"Multiplicateur optimal: {best_mult}x")
    print(f"FP éliminés: {best['eliminated']} ({best['pct']:.1f}%)")
    print(f"Precision: {initial_precision:.1f}% → {best['precision']:.1f}% (+{best['precision'] - initial_precision:.1f}%)")

    print(f"\nLogique: Produit LOW non commandé depuis > {best_mult}x la fenêtre client")

    # Exemples concrets
    print(f"\nExemples concrets:")
    print(f"  - Client fenêtre 15j → seuil = {15 * best_mult:.0f}j")
    print(f"  - Client fenêtre 30j → seuil = {30 * best_mult:.0f}j")
    print(f"  - Client fenêtre  7j → seuil = {7 * best_mult:.0f}j")

    print("\n" + "=" * 80)

if __name__ == '__main__':
    main()
