# 📊 BRIEF ANALYSTE - OPTIMISATION wMAPE POUR SYSTÈME DE PRÉDICTION B2B

## 🎯 OBJECTIF UNIQUE
**Améliorer le wMAPE de 47.1% → 25%** en optimisant UNIQUEMENT la chaîne de pensée de la Phase 2 (prédiction des quantités).

**CONTRAINTES STRICTES** :
- ✅ Recall actuel (86.6%) et Precision (42.9%) sont SATISFAISANTS - NE PAS TOUCHER
- ❌ wMAPE actuel (47.1% moyenne, 26.5% médiane) DOIT descendre à 25%
- Ne modifier QUE la logique de calcul des quantités (Phase 2)
- Garder la structure double phase et le format de sortie JSON identiques

## 📁 DONNÉES FOURNIES
**Fichier joint** : `/Users/dlstudio/Documents/GitHub/auto-proposal/backend/reports-output-X-10.zip`

Contient pour 10 clients B2B (agroalimentaire) :
- Rapports backtest détaillés avec historiques de commandes réels
- Prédictions LLM vs quantités réelles commandées
- Raisonnements internes du LLM pour chaque prédiction
- Tokens de reasoning interne (thinking) montrant le processus mental

## 🔍 CONTEXTE SYSTÈME

### Architecture actuelle
- **LLM utilisé** : Kimi K2 Thinking via OpenRouter
- **Double Chain of Thought** :
  - Phase 1 : Détection du risque de rupture (OUI/NON dans 30j)
  - Phase 2 : Si OUI → Calcul de la quantité à commander

### Prompt actuel (Phase 2 problématique)

```markdown
## 📊 PHASE 2: PRÉDICTION DE LA QUANTITÉ (SI et SEULEMENT SI Risque = OUI)

### Philosophie: SIMPLICITÉ ET LIBERTÉ D'ANALYSE
Laisse le LLM analyser librement les patterns sans règles rigides. L'objectif est de capturer l'intuition B2B.

### Étape 2.1 - Analyse libre des quantités
Examine l'historique des quantités SANS filtrage automatique :
- Y a-t-il des valeurs qui semblent vraiment exceptionnelles (promotions, erreurs) ?
- Les variations importantes sont-elles normales pour ce client B2B ?
- En B2B, des variations de 2-3x sont NORMALES (grosses commandes périodiques)

### Étape 2.2 - Détection des patterns de quantités habituelles
Analyse les quantités commandées pour identifier des patterns :
- Le client commande-t-il souvent les mêmes quantités exactes ? (ex: toujours 128u, 256u)
- Y a-t-il des multiples récurrents ? (ex: toujours par cartons de 12, palettes de 100)
- Existe-t-il des seuils psychologiques ? (ex: jamais moins de 50, toujours proche de 100)

**Application intelligente** :
- Si ta prédiction est 119u MAIS que le client commande régulièrement 128u → ajuster à 128u
- Si ta prédiction est 95u MAIS que le client commande par multiples de 50 → ajuster à 100u
- MAIS si le pattern n'est pas clair ou si la situation a changé → garder ta prédiction originale

### Étape 2.3 - Prédiction flexible finale
**APPROCHE HYBRIDE MÉDIANE + RÉCENCE** :

**Calcul de base** :
1. Prendre la **médiane des 3-5 dernières commandes** (robuste aux outliers)
2. Comparer avec la **dernière valeur**
3. Décision :
   - Si dernière ≈ médiane (±30%) → Utiliser la médiane
   - Si dernière > médiane ET progression → Ajuster entre médiane et dernière
   - Si dernière = 2-3× médiane ET multiple logique → Considérer fortement la dernière
   - Si dernière = 10× médiane → Ignorer, prendre médiane

**Exemples pratiques** :
- [130, 130, 780] : Médiane=130, Dernière=780 (6× !) → Prédire 400-500u (compromis)
- [98, 98, 98] : Médiane=98, Dernière=98 → Prédire 98u
- [100, 45, 200] : Médiane=100, Dernière=200 (2×) → Prédire 130-150u
- [16, 32, 48] : Médiane=32, Progression claire → Prédire 48-64u

**Règle finale** : La médiane est la BASE, mais on ajuste selon la tendance récente
```

## 🔴 PROBLÈMES IDENTIFIÉS

### ERREURS RÉCURRENTES (Analyse de 10 clients)

#### 1. **CONSERVATISME EXCESSIF (60% des erreurs)**
**Client DELHAIZE - Vinaigrette PF3315** :
- Historique : [98u, 98u, 98u, 98u, 98u]
- LLM prédit : 98u ("stabilité parfaite")
- Réel : 392u (4× le multiple de base!)
- Erreur : 75% wMAPE
- **Problème** : N'explore pas les multiples possibles (98, 196, 294, 392)

#### 2. **MAUVAISE GESTION DES PICS (30% des erreurs)**
**Client DELHAIZE - Mayonnaise PF3300** :
- Historique : [130u, 390u, 130u, 130u, 780u]
- LLM prédit : 390u ("compromis")
- Réel : 780u
- Erreur : 50% wMAPE
- **Problème** : Traite 780 comme outlier au lieu de voir un multiple valide (6×130)

#### 3. **INCAPACITÉ À SUIVRE LES PROGRESSIONS (10% des erreurs)**
**Patterns observés** :
- [16u, 32u, 48u] → Prédit 32u au lieu de 64u
- [80u, 160u] → Prédit 160u au lieu de 320u
- **Problème** : Voit la progression mais reste sur la médiane

### MÉTRIQUES PAR CLIENT (reports-output-X-10)

| Client | Recall | Precision | wMAPE | Problème principal |
|--------|--------|-----------|-------|-------------------|
| 3452 | 100% | 50% | 58.4% | Prédit minimum des multiples |
| 30 | 66.7% | 50% | 0% | OK |
| 99 | 64.7% | 50% | 9.1% | OK |
| 3547 | 100% | 50% | 0% | OK |
| 3576 | 100% | 50% | 0% | OK |
| 3577 | 100% | 50% | 36.4% | Sous-estime les pics |
| 3590 | 100% | 66.7% | 50% | Ne suit pas les doublements |
| 3755 | 100% | 50% | 0% | OK |
| 3812 | 100% | 14.3% | 300% | Sur-prédit massivement |
| 3818 | 100% | 50% | 26.5% | Conservateur sur multiples |

## 💡 PISTES D'AMÉLIORATION À EXPLORER

### 1. **DÉTECTION ET UTILISATION DES MULTIPLES**
- Si historique montre des multiples stricts (98, 196, 392)
- Calculer la probabilité de chaque multiple basée sur :
  - Fréquence historique
  - Tendance récente
  - Données N-1

### 2. **GESTION INTELLIGENTE DES "PICS"**
- NE PAS filtrer automatiquement les grandes valeurs
- Si dernière = multiple cohérent → Forte probabilité de maintien
- Exemple : [130, 780] où 780 = 6×130 → Prédire 500-600 pas 130

### 3. **RECONNAISSANCE DES PROGRESSIONS**
- Si 3+ points en progression → Extrapoler
- [16, 32, 48] → 64 (pas 32)
- [80, 160] → 240-320 (pas 160)

### 4. **PONDÉRATION ADAPTATIVE**
Plutôt que médiane pure :
```
Si stabilité parfaite → Regarder N-1 pour multiples possibles
Si pic récent cohérent → 60-70% du pic
Si progression → Continuer la tendance
Sinon → Médiane pondérée (40% dernière, 30% avant-dernière, etc.)
```

## 📈 BENCHMARK DE RÉFÉRENCE

Un prompt qui a fonctionné (commit 3bff8e9b) avec wMAPE 25% utilisait :
```
3. **SYNTHÈSE & DÉCISION**
   - **SI rupture de tendance nette** : Privilégie la donnée la plus récente
   - **SI demande stable** : Moyenne pondérée (poids fort sur dernières commandes)
   - **SI pattern saisonnier fort** : Baseline N-1 × Coefficient tendance récente
```

Simple et efficace vs notre approche actuelle trop complexe.

## ✅ LIVRABLES ATTENDUS

1. **Prompt Phase 2 optimisé** avec chaîne de pensée améliorée
2. **Explication des changements** et pourquoi ils vont améliorer le wMAPE
3. **Exemples concrets** montrant comment le nouveau prompt traiterait mieux les cas problématiques

## 📊 DONNÉES TECHNIQUES ADDITIONNELLES

### Format de sortie JSON (NE PAS CHANGER)
```json
{
  "analysis": {
    "frequency_pattern": "string",
    "detected_outliers": [numbers],
    "seasonality_impact": "none|weak|strong",
    "trend_direction": "stable|increasing|decreasing",
    "cycle_days": number,
    "last_order_date": "YYYY-MM-DD",
    "predicted_next_date": "YYYY-MM-DD",
    "days_until_next": number
  },
  "baseline_quantity": number,
  "recommended_quantity": integer,
  "confidence": "low|medium|high",
  "confidence_phase1": "low|medium|high",
  "confidence_phase2": "low|medium|high",
  "reasoning": "string"
}
```

### Contraintes B2B spécifiques
- Commandes par multiples (cartons, palettes)
- Réapprovisionnements mensuels/trimestriels massifs normaux
- Variations 2-5× courantes (pas des outliers!)
- Nouveaux produits = commandes test (1-2u) puis montée rapide

## 🔍 FOCUS PRIORITAIRE

**Analyser dans le ZIP joint** :
1. Les cas avec erreur > 50% wMAPE
2. Les raisonnements LLM ("Raisonnement LLM:" dans les rapports)
3. Les "thinking" internes pour comprendre où le LLM se trompe
4. Comparer prédictions vs réel sur les multiples

**Question clé** : Comment faire pour que le LLM soit moins conservateur tout en restant précis ?

---

*Contact : L'équipe technique est disponible pour clarifications*
*Deadline : ASAP - système en production*