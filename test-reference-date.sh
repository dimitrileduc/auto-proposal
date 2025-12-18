#!/bin/bash

# Script pour tester le système avec referenceDate
# Cela va chercher les commandes d'OCTOBRE comme le 19 novembre

echo "🔬 Test avec referenceDate pour retester les commandes d'octobre"
echo "================================================"

# Test 1: Avec referenceDate (cherche commandes avant le 15 octobre)
echo "
📊 Test 1: Avec referenceDate=\"2025-11-19\"
   Va chercher les mêmes commandes que le test du 19/11
"
curl -X POST http://localhost:3001/api/trigger/backtest-aggregate \
  -H "Content-Type: application/json" \
  -d '{
    "autoDiscoverCount": 50,
    "referenceDate": "2025-11-19",
    "daysBeforePrediction": 0
  }'

echo "
================================================
Pour comparer avec les résultats actuels (novembre):

curl -X POST http://localhost:3001/api/trigger/backtest-aggregate \\
  -H \"Content-Type: application/json\" \\
  -d '{
    \"autoDiscoverCount\": 50,
    \"daysBeforePrediction\": 1
  }'
"

echo "
📊 Comparaison attendue:
- Avec referenceDate=\"2025-10-15\": Commandes S39xxx (comme le 19/11)
- Sans referenceDate: Commandes S40xxx (novembre actuelles)

Cela permettra de voir si la dégradation vient:
1. Du changement de modèle (Claude → Kimi)
2. Du changement de prompt
3. Des données différentes (octobre vs novembre)
"