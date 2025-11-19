#!/usr/bin/env python3
"""
Analyse les décisions Copycat pour trouver les thresholds optimaux
"""
import re
import statistics
from pathlib import Path

def extract_copycat_decisions(report_dir):
    """Extrait toutes les décisions Copycat des rapports"""
    decisions = []

    for report_file in Path(report_dir).glob("backtest-client-*.md"):
        if "-all.md" in str(report_file) or "-low.md" in str(report_file):
            continue

        with open(report_file, 'r', encoding='utf-8') as f:
            content = f.read()

        # Extraire client ID
        client_match = re.search(r'backtest-client-(\d+)-', str(report_file))
        if not client_match:
            continue
        client_id = client_match.group(1)

        # Trouver les lignes avec blend ou follow-last
        for line in content.split('\n'):
            if '|' not in line or 'Légende' in line:
                continue

            if '🔼 blend' in line or '🔽 follow-last' in line:
                # Parse: | [PROD] Name | Prédit | Réel | Erreur Abs | Erreur % | Type | Copycat |
                parts = [p.strip() for p in line.split('|')]
                if len(parts) < 8:
                    continue

                product = parts[1]
                predicted = float(parts[2])
                actual = float(parts[3])
                error_pct = float(parts[5].replace('%', ''))
                copycat_str = parts[7]

                # Extraire ratio et stratégie
                if '🔼 blend' in copycat_str:
                    strategy = 'blend'
                    ratio_match = re.search(r'\(([0-9.]+)x\)', copycat_str)
                elif '🔽 follow-last' in copycat_str:
                    strategy = 'follow-last'
                    ratio_match = re.search(r'\(([0-9.]+)x\)', copycat_str)
                else:
                    continue

                if ratio_match:
                    ratio = float(ratio_match.group(1))
                    decisions.append({
                        'client_id': client_id,
                        'product': product,
                        'predicted': predicted,
                        'actual': actual,
                        'error_pct': error_pct,
                        'ratio': ratio,
                        'strategy': strategy
                    })

    return decisions

def find_baseline_error(client_id, product, baseline_dir):
    """Trouve l'erreur baseline pour le même produit"""
    baseline_files = list(Path(baseline_dir).glob(f"backtest-client-{client_id}-*.md"))
    if not baseline_files:
        return None

    for baseline_file in baseline_files:
        if "-all.md" in str(baseline_file) or "-low.md" in str(baseline_file):
            continue

        with open(baseline_file, 'r', encoding='utf-8') as f:
            content = f.read()

        for line in content.split('\n'):
            if product in line and '|' in line:
                parts = [p.strip() for p in line.split('|')]
                if len(parts) >= 6:
                    try:
                        error_pct = float(parts[5].replace('%', ''))
                        return error_pct
                    except:
                        pass
    return None

def analyze_thresholds(decisions_with_baseline):
    """Analyse les thresholds optimaux"""
    # Séparer blend et follow-last
    blend_improved = []
    blend_degraded = []
    follow_improved = []
    follow_degraded = []

    for d in decisions_with_baseline:
        delta = d['error_pct'] - d['baseline_error']

        if d['strategy'] == 'blend':
            if delta < 0:  # Copycat a amélioré
                blend_improved.append({'ratio': d['ratio'], 'improvement': -delta})
            else:  # Copycat a dégradé
                blend_degraded.append({'ratio': d['ratio'], 'degradation': delta})
        else:  # follow-last
            if delta < 0:
                follow_improved.append({'ratio': d['ratio'], 'improvement': -delta})
            else:
                follow_degraded.append({'ratio': d['ratio'], 'degradation': delta})

    print("\n" + "="*80)
    print("ANALYSE DES THRESHOLDS COPYCAT")
    print("="*80)

    print(f"\nTotal décisions : {len(decisions_with_baseline)}")
    print(f"  - Blend : {len(blend_improved) + len(blend_degraded)}")
    print(f"  - Follow-last : {len(follow_improved) + len(follow_degraded)}")

    # Blend analysis
    print("\n" + "-"*80)
    print("BLEND (ratio > threshold)")
    print("-"*80)
    print(f"Améliorations : {len(blend_improved)} cas")
    print(f"Dégradations : {len(blend_degraded)} cas")

    if blend_improved:
        ratios_improved = [d['ratio'] for d in blend_improved]
        print(f"  Ratios des améliorations : min={min(ratios_improved):.2f}x, max={max(ratios_improved):.2f}x, médiane={statistics.median(ratios_improved):.2f}x")

    if blend_degraded:
        ratios_degraded = [d['ratio'] for d in blend_degraded]
        print(f"  Ratios des dégradations : min={min(ratios_degraded):.2f}x, max={max(ratios_degraded):.2f}x, médiane={statistics.median(ratios_degraded):.2f}x")

        # Quelle erreur moyenne ?
        avg_degradation = statistics.mean([d['degradation'] for d in blend_degraded])
        print(f"  Dégradation moyenne : +{avg_degradation:.1f}%")

    # Follow-last analysis
    print("\n" + "-"*80)
    print("FOLLOW-LAST (ratio < threshold)")
    print("-"*80)
    print(f"Améliorations : {len(follow_improved)} cas")
    print(f"Dégradations : {len(follow_degraded)} cas")

    if follow_improved:
        ratios_improved = [d['ratio'] for d in follow_improved]
        print(f"  Ratios des améliorations : min={min(ratios_improved):.2f}x, max={max(ratios_improved):.2f}x, médiane={statistics.median(ratios_improved):.2f}x")

    if follow_degraded:
        ratios_degraded = [d['ratio'] for d in follow_degraded]
        print(f"  Ratios des dégradations : min={min(ratios_degraded):.2f}x, max={max(ratios_degraded):.2f}x, médiane={statistics.median(ratios_degraded):.2f}x")

        avg_degradation = statistics.mean([d['degradation'] for d in follow_degraded])
        print(f"  Dégradation moyenne : +{avg_degradation:.1f}%")

    # Recommandations
    print("\n" + "="*80)
    print("RECOMMANDATIONS")
    print("="*80)

    blend_success_rate = len(blend_improved) / (len(blend_improved) + len(blend_degraded)) * 100 if (len(blend_improved) + len(blend_degraded)) > 0 else 0
    follow_success_rate = len(follow_improved) / (len(follow_improved) + len(follow_degraded)) * 100 if (len(follow_improved) + len(follow_degraded)) > 0 else 0

    print(f"\nBlend success rate : {blend_success_rate:.1f}%")
    print(f"Follow-last success rate : {follow_success_rate:.1f}%")

    if blend_success_rate < 50:
        print("\n⚠️  Blend dégrade plus qu'il n'améliore → DÉSACTIVER ou augmenter threshold")
        if blend_improved:
            min_good_ratio = min([d['ratio'] for d in blend_improved])
            print(f"   Si activation : threshold minimum = {min_good_ratio:.1f}x")

    if follow_success_rate < 50:
        print("\n⚠️  Follow-last dégrade plus qu'il n'améliore → DÉSACTIVER ou baisser threshold")
        if follow_improved:
            max_good_ratio = max([d['ratio'] for d in follow_improved])
            print(f"   Si activation : threshold maximum = {max_good_ratio:.1f}x")

    print("\n")

if __name__ == "__main__":
    report_dir = "/Users/dlstudio/Documents/GitHub/auto-proposal/backend/reports-output"
    baseline_dir = "/Users/dlstudio/Documents/GitHub/auto-proposal/backend/reports-output-baselinee"

    print("Extraction des décisions Copycat...")
    decisions = extract_copycat_decisions(report_dir)
    print(f"Trouvé {len(decisions)} décisions Copycat")

    print("\nRecherche des erreurs baseline...")
    decisions_with_baseline = []
    for d in decisions:
        baseline_error = find_baseline_error(d['client_id'], d['product'], baseline_dir)
        if baseline_error is not None:
            d['baseline_error'] = baseline_error
            decisions_with_baseline.append(d)

    print(f"Trouvé {len(decisions_with_baseline)} décisions avec baseline")

    analyze_thresholds(decisions_with_baseline)
