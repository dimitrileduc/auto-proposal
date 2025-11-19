#!/bin/bash

# Surveille les nouveaux rapports et compare avec baseline en temps réel

REPORTS_DIR="/Users/dlstudio/Documents/GitHub/auto-proposal/backend/reports-output"
BASELINE_DIR="/Users/dlstudio/Documents/GitHub/auto-proposal/backend/reports-output-baselinee"
LAST_COUNT=0

echo "🔍 Surveillance des rapports en temps réel (thresholds 2.5x / 0.4x)..."
echo "Baseline: MAPE = 39.9% (189 clients)"
echo ""

while true; do
    # Compter les nouveaux rapports
    CURRENT_COUNT=$(ls -1 "$REPORTS_DIR"/backtest-client-*.md 2>/dev/null | grep -v "all.md" | grep -v "low.md" | wc -l | tr -d ' ')

    if [ "$CURRENT_COUNT" -gt "$LAST_COUNT" ]; then
        # Nouveaux rapports détectés
        NEW_REPORTS=$(ls -lt "$REPORTS_DIR"/backtest-client-*.md 2>/dev/null | grep -v "all.md" | grep -v "low.md" | head -$((CURRENT_COUNT - LAST_COUNT)))

        echo "📝 $((CURRENT_COUNT - LAST_COUNT)) nouveaux rapports ($CURRENT_COUNT total)..."

        # Analyser chaque nouveau rapport
        echo "$NEW_REPORTS" | while read -r line; do
            REPORT_FILE=$(echo "$line" | awk '{print $NF}')
            CLIENT_ID=$(echo "$REPORT_FILE" | sed 's/.*backtest-client-//' | sed 's/-.*//')

            # Extraire MAPE
            NEW_MAPE=$(grep "| \*\*MAPE\*\*" "$REPORT_FILE" 2>/dev/null | head -1 | awk -F'|' '{print $3}' | tr -d ' ')

            if [ -z "$NEW_MAPE" ]; then
                continue
            fi

            # Trouver baseline
            BASELINE_FILE=$(ls "$BASELINE_DIR"/backtest-client-$CLIENT_ID-*.md 2>/dev/null | grep -v "all.md" | grep -v "low.md" | head -1)

            if [ -z "$BASELINE_FILE" ]; then
                echo "  Client $CLIENT_ID: MAPE=$NEW_MAPE (pas de baseline)"
                continue
            fi

            BASELINE_MAPE=$(grep "| \*\*MAPE\*\*" "$BASELINE_FILE" 2>/dev/null | head -1 | awk -F'|' '{print $3}' | tr -d ' ')

            if [ -z "$BASELINE_MAPE" ]; then
                continue
            fi

            # Comparer
            NEW_VAL=$(echo "$NEW_MAPE" | sed 's/%//')
            BASE_VAL=$(echo "$BASELINE_MAPE" | sed 's/%//')

            # Calculer delta (approximatif avec bc)
            DELTA=$(echo "$NEW_VAL - $BASE_VAL" | bc 2>/dev/null)

            if [ -z "$DELTA" ]; then
                continue
            fi

            # Vérifier si Copycat s'est déclenché
            COPYCAT_USED=$(grep -c "🔼 blend\|🔽 follow-last" "$REPORT_FILE" 2>/dev/null | grep -v "Légende" || echo 0)

            # Afficher résultat
            if (( $(echo "$DELTA < -2" | bc -l 2>/dev/null || echo 0) )); then
                echo "  ✅ Client $CLIENT_ID: $BASELINE_MAPE → $NEW_MAPE (${DELTA}%) AMÉLIORATION"
            elif (( $(echo "$DELTA > 2" | bc -l 2>/dev/null || echo 0) )); then
                echo "  🔴 Client $CLIENT_ID: $BASELINE_MAPE → $NEW_MAPE (+${DELTA}%) DÉGRADATION"
                if [ "$COPYCAT_USED" -gt 0 ]; then
                    echo "      ⚠️  Copycat utilisé sur $COPYCAT_USED produits"
                fi
            else
                echo "  ⚪ Client $CLIENT_ID: $BASELINE_MAPE → $NEW_MAPE (stable)"
            fi
        done

        LAST_COUNT=$CURRENT_COUNT
    fi

    # Vérifier si rapport agrégé est disponible
    if [ -f "$REPORTS_DIR/backtest-aggregate-"*".md" ]; then
        AGG_FILE=$(ls -t "$REPORTS_DIR/backtest-aggregate-"*".md" 2>/dev/null | head -1)
        AGG_MAPE=$(grep "| \*\*MAPE\*\*" "$AGG_FILE" 2>/dev/null | head -1 | awk -F'|' '{print $3}' | tr -d ' ')

        if [ -n "$AGG_MAPE" ] && [ "$CURRENT_COUNT" -ge 180 ]; then
            echo ""
            echo "🎯 RAPPORT AGRÉGÉ FINAL: MAPE = $AGG_MAPE (baseline: 39.9%)"
            break
        fi
    fi

    sleep 5
done

echo ""
echo "✅ Analyse terminée!"
