# Analyse du Système de Prédiction LLM Actuel

## 1. Description du Système

### Architecture Générale

Le système utilise une approche hybride pour prédire les quantités à commander :

```
Historique de commandes → Analyse → Décision selon nombre de commandes :
- 1 commande : Utilise la fenêtre de réapprovisionnement moyenne du client
- 2 commandes : Utilise la médiane des quantités historiques
- >2 commandes : Utilise la médiane + appel LLM pour affiner
```

### Flux de Traitement pour LLM (>2 commandes)

1. **Récupération des données** :
   - Historique 730 jours pour avoir accès à N-1
   - Split en 2 périodes : 3 derniers mois + même période année N-1

2. **Préparation du prompt** :
   - Formatage des commandes avec jours de semaine
   - Injection dans un template de ~1500 tokens

3. **Appel LLM** :
   - Modèle : Moonshot AI Kimi K2 Thinking
   - Via OpenRouter API
   - Structured Output avec JSON Schema strict

4. **Traitement réponse** :
   - Si succès : utilise la quantité LLM
   - Si échec : fallback sur médiane

### Code Principal (`stock-replenishment.service.ts`)

```typescript
// Stratégie de décision
if (ordersToUse.length > 2) {
  // Appel LLM en parallèle (max 10 simultanés)
  const llmResult = await predictWithLLM({
    productName: product.product_name,
    recentOrders,      // 3 derniers mois
    lastYearOrders,    // Même période N-1
    currentDate: analysisEndDate,
  });

  finalQuantity = llmResult.prediction.recommended_quantity;
  quantitySource = "llm";
} else {
  // Médiane simple
  finalQuantity = calculation.quantity;
  quantitySource = "median";
}
```

## 2. Le Prompt LLM Utilisé

### Structure du Prompt

Le prompt fait environ 1500-2000 tokens et contient :

```markdown
Tu es un Expert Supply Chain Senior spécialisé en Agroalimentaire B2B.
Ton objectif est de prédire la prochaine quantité de commande avec la PLUS GRANDE PRÉCISION possible (minimiser le MAPE) pour le [DATE] ([JOUR]).

PRODUIT: [NOM_PRODUIT]
DATE DE PRÉDICTION: [DATE] ([JOUR_SEMAINE])

<data_context>
Voici l'historique des commandes. Le format est: Date (Jour) | Quantité.

--- ANNÉE PRÉCÉDENTE (N-1) ---
[LISTE_COMMANDES_N-1]

--- 3 DERNIERS MOIS (Période Récente) ---
[LISTE_COMMANDES_RECENTES]
</data_context>

<jour_cycle_guidelines>
**RÈGLES ESSENTIELLES POUR JOURS HORS CYCLE**:
1) Les clients B2B commandent généralement les jours ouvrés
2) Si la date ne correspond PAS à leur jour habituel:
   - N'utilise JAMAIS 0
   - Prédit la quantité de la PROCHAINE commande
3) Ne confonds pas "jour inhabituel" avec "client a arrêté le produit"
</jour_cycle_guidelines>

<reasoning_guidelines>
Analyse étape par étape AVANT de conclure:

1. **ANALYSE RYTHMIQUE**
   - Calcule les intervalles entre commandes
   - Identifie le jour habituel
   - Distingue pattern hebdomadaire vs mensuel

2. **FILTRAGE INTELLIGENT DES OUTLIERS**
   - Commandes 2-3× supérieures = outliers probables
   - Pic N-1 non répété = événement exceptionnel
   - Pondérer faiblement les points éloignés de la tendance

3. **SYNTHÈSE & DÉCISION**
   - Données volumineuses: Moyenne pondérée récente (60-70%)
   - Données limitées: Privilégie dernière valeur si cohérente
   - Avec N-1: Baseline N-1 × coefficient tendance
   - Rupture de tendance: Dernière valeur > moyenne

Règle d'Or: Privilégie PRÉCISION sur prudence.
</reasoning_guidelines>

<exemples_raisonnement>
[3 EXEMPLES DÉTAILLÉS]
</exemples_raisonnement>
```

### Structure de Sortie JSON Demandée

```json
{
  "analysis": {
    "frequency_pattern": "string",
    "detected_outliers": [numbers],
    "seasonality_impact": "none|weak|strong",
    "trend_direction": "string",
    "day_cycle_analysis": "string"
  },
  "baseline_quantity": number,
  "recommended_quantity": integer,
  "confidence": "low|medium|high",
  "reasoning": "string"
}
```

## 3. Résultats et Scores Obtenus

### Métriques Globales du Système

| Métrique | Valeur |
|----------|---------|
| **WAPE Global** | 58.5% |
| **Tokens moyens/prédiction** | 3727 |
| **Taux succès LLM** | ~95% |
| **Temps moyen/prédiction** | ~2-3 secondes |

### Distribution des Erreurs (MAPE)

| Percentile | MAPE |
|------------|------|
| 25% | 12.5% |
| 50% (médiane) | 33.33% |
| 75% | 50.4% |
| 90% | 83.6% |
| 95%+ | >100% |

### Comparaison Médiane vs LLM

Sur 16 produits testés :
- **Victoires LLM** : 3 cas (18.75%)
- **Victoires Médiane** : 1 cas (6.25%)
- **Égalités** : 12 cas (75%)

## 4. Exemples Concrets de Résultats

### Cas 1 : SAUCE BOURGUIGNONNE (Égalité)

**Données d'entrée** :
```
Historique récent : 3 commandes de 200u chacune
- 2025-10-14 (mar.) | 200u
- 2025-09-12 (ven.) | 200u
- 2025-08-19 (mar.) | 200u

N-1 : Aucune donnée
Date prédiction : 2025-11-22 (samedi)
```

**Résultats** :
- Quantité réelle : 400u
- Prédiction LLM : 200u (erreur : 200u)
- Prédiction médiane : 200u (erreur : 200u)

**Raisonnement LLM** :
```json
{
  "confidence": "high",
  "reasoning": "Données très limitées mais hyper-stables. Le client commande 200u tous les ~28 jours. Le samedi 22/11 ne correspond pas à un jour de commande, mais la prochaine commande sera de 200u par extrapolation du pattern immuable.",
  "analysis": {
    "frequency_pattern": "3 points sur 3 mois → cycle mensuel (~28 jours)",
    "detected_outliers": [-100, 10, 0],
    "seasonality_impact": "none",
    "trend_direction": "stable"
  }
}
```

### Cas 2 : FILOU CHASSEUR 5L (Égalité)

**Données d'entrée** :
```
Historique récent : 5 commandes
- 160u, 160u, 160u, 240u (outlier), 160u

Date prédiction : 2025-11-22 (samedi)
```

**Résultats** :
- Quantité réelle : 800u
- Prédiction LLM : 160u (erreur : 640u)
- Prédiction médiane : 160u (erreur : 640u)

**Analyse LLM** :
```json
{
  "detected_outliers": [240],
  "frequency_pattern": "Hebdomadaire strict (tous les 7 jours, le vendredi)",
  "reasoning": "4 des 5 dernières commandes sont à 160u. Le pic de 240u est isolé (+50% vs normale), probable événement exceptionnel."
}
```

### Cas 3 : Exemple avec Tokens Élevés

**Usage de tokens** :
- Prompt : ~1500-2000 tokens
- Réponse : ~500-1000 tokens
- Reasoning interne (Kimi K2) : ~1000-2000 tokens
- **Total** : 3000-5000 tokens par prédiction

## 5. Exemples de Problèmes Identifiés dans les Outputs

### Problème 1 : Sur-estimation Massive

**Client 60146 (ADH QUALITY)** :
- Besoin réel : 1 unité
- Prédiction : 4.67 unités
- MAPE : 466.7%

### Problème 2 : Outliers de Volume

**Client 3912 (LEGEND FOOD)** :
- Erreur absolue : 5370 unités
- MAPE : 127.6%
- Impact : Fait exploser la moyenne des erreurs

### Problème 3 : Mauvaise Gestion de l'Intermittence

**Pattern observé** :
```
Client commande tous les 30 jours : 500 unités
Système prédit : 500u/30j = 16.67u par jour
Sur 19 jours : prédit 317 unités
Réalité : 0 unité (prochain réappro dans 11 jours)
Erreur : 317 unités de sur-stock
```

### Problème 4 : LLM vs Médiane Identiques

Dans 75% des cas, le LLM produit exactement la même valeur que la médiane simple, questionnant la valeur ajoutée du LLM pour ces cas.

## 6. Analyse du Prompt

### Points Observés dans le Prompt

**Structure** :
- Rôle défini : "Expert Supply Chain Senior"
- Objectif clair : "minimiser le MAPE"
- Données formatées avec jours de semaine
- Guidelines explicites pour jours hors cycle
- Exemples concrets fournis

**Approche Chain of Thought** :
1. Analyse rythmique d'abord
2. Détection outliers ensuite
3. Synthèse finale

**JSON Schema Strict** :
- Force une structure de réponse cohérente
- Empêche les erreurs de parsing
- Garantit tous les champs requis

### Ce que fait le LLM concrètement

D'après les outputs analysés, le LLM :

1. **Calcule les intervalles** entre commandes
2. **Identifie des patterns** (hebdomadaire, mensuel, etc.)
3. **Détecte les outliers** mais les traite inconsistamment
4. **Applique des règles** pour jours hors cycle
5. **Produit une quantité unique** sans intervalle de confiance

### Reasoning Interne du Modèle Kimi K2

Le modèle produit un reasoning interne (2000-3000 tokens) qui :
- Récapitule les données
- Fait des calculs d'intervalles
- Débat des différentes approches
- Justifie le choix final

Exemple de reasoning :
```
"L'utilisateur me demande de prédire pour le 2025-11-22 (samedi).
Analysons les données :
- 2025-10-14 (mar.) | 200u
- 2025-09-12 (ven.) | 200u
Intervalles : 24 jours, puis 32 jours
Moyenne : 28 jours
Le samedi est hors cycle B2B...
[...]
Décision finale : 200 unités"
```

## 7. Utilisation des Ressources

### Performance LLM

| Aspect | Mesure |
|--------|---------|
| Parallélisation | 10 requêtes simultanées max |
| Timeout | ~30 secondes |
| Fallback | Médiane si échec |
| Cache | Aucun |

### Coût Estimé

Avec 3727 tokens moyens par prédiction :
- Input : ~2000 tokens
- Output : ~700 tokens
- Reasoning : ~1000 tokens

Prix OpenRouter (Kimi K2) : ~$0.01-0.02 par prédiction

## 8. Structure des Données dans le Code

### Input LLM
```typescript
{
  productName: string,
  recentOrders: Array<{date: string, quantity: number}>,
  lastYearOrders: Array<{date: string, quantity: number}>,
  currentDate: string
}
```

### Output LLM
```typescript
{
  prediction: {
    analysis: {
      frequency_pattern: string,
      detected_outliers: number[],
      seasonality_impact: "none"|"weak"|"strong",
      trend_direction: string,
      day_cycle_analysis?: string
    },
    baseline_quantity: number,
    recommended_quantity: number,
    confidence: "low"|"medium"|"high",
    reasoning: string
  },
  usage: {
    promptTokens: number,
    completionTokens: number,
    totalTokens: number
  },
  model: string,
  provider: string,
  inputPrompt: string,
  providerReasoning?: string
}
```

## 9. Exemples de Problèmes dans les Rapports Réels

### Exemple 1 : Client FOODPRINT SRL - Catastrophe de Précision

**Métriques du backtest** (Commande S39729, 14/10/2025) :
- **Précision** : 3% (4 produits corrects sur 133 prédits)
- **Rappel** : 66.7% (4 détectés sur 6 commandés)
- **F1-Score** : 5.8%
- **False Positives** : 129 produits
- **Coût LLM** : $1.07 pour 109 appels

**Problèmes identifiés** :

1. **Sur-prédiction massive** : Le système a prédit 133 produits alors que le client n'en a commandé que 6

2. **Erreurs sur quantités des True Positives** :
   - SAUCE BOURGUIGNONNE : Prédit 200, Réel 400 (erreur 50%)
   - SAUCE BEARNAISE : Prédit 400, Réel 200 (erreur 100%)
   - TARTINAPERO AVOCAT : Prédit 651, Réel 434 (erreur 50%)

3. **False Positives absurdes** :
   - PI TARTI TOMATE : Prédit 7500 unités (non commandé)
   - PI TARTI POIS CHICHES : Prédit 4260 unités (non commandé)
   - PI TARTI BETTERAVE : Prédit 5700 unités (non commandé)
   - LV TARTINADE AUBERGINE : Prédit 2200 unités (non commandé)

4. **Prédictions avec stock suffisant** :
   - MAYONNAISE BIO : Prédit 370u alors que stock = -85u (déjà en rupture!)
   - SAUCE BEARNAISE 125G : Prédit 2100u avec 989u en stock (24j restants)
   - TARTINADE TOMATE : Prédit 2440u avec 750u en stock (22j restants)

### Exemple 2 : Problèmes Systémiques Observés

**Distribution des performances sur 50 clients** :
- **Médiane Recall** : 96.2% (bon)
- **Médiane Precision** : 39.2% (catastrophique)
- **wMAPE moyen** : 28.3%
- **50% des clients** ont une précision <40%
- **Seulement 6%** ont une précision >70%

### Exemple 3 : Cas Individuels Problématiques

**LLM prédit malgré stock suffisant** :
```
Produit : RITCHIE Pamplemousse
Stock estimé : 12.6u (24 jours restants)
Seuil déclenchement : 30 jours
LLM prédit quand même : 13u
```

**LLM et médiane identiques** :
```
Produit : FILOU CHASSEUR 5L
Médiane historique : 160u
LLM après 3700 tokens : 160u (identique)
Valeur ajoutée : 0
```

## 10. Prompt pour Analyste Externe

### Contexte pour Amélioration du Système

Bonjour, nous développons un système de prédiction de quantités pour le réapprovisionnement automatique B2B dans l'agroalimentaire bio. Nous utilisons actuellement un LLM (Moonshot Kimi K2) pour prédire les quantités à commander, mais nous rencontrons des problèmes majeurs de performance.

### Notre Système Actuel

**Architecture** :
- Pour produits avec >2 commandes historiques : Appel LLM avec historique 3 mois + même période N-1
- Pour ≤2 commandes : Médiane simple
- Parallélisation : 10 appels LLM simultanés max
- Structured Output JSON pour garantir format valide

**Prompt utilisé** (résumé) :
```
Tu es un Expert Supply Chain B2B.
Objectif : Prédire quantité avec précision maximale (minimiser MAPE)

Données fournies :
- Historique 3 derniers mois avec jours semaine
- Même période année N-1
- Date de prédiction

Guidelines :
1. Analyse rythmique (intervalles, patterns)
2. Détection outliers (pics 2-3x moyenne)
3. Synthèse (moyenne pondérée 60-70% récent)
4. Gestion jours hors cycle (jamais 0)

Output : JSON avec analysis, recommended_quantity, confidence, reasoning
```

### Problèmes Rencontrés

**Performance globale** :
- WAPE : 58.5%
- Précision médiane : 39.2% (60% de faux positifs)
- 75% des cas : LLM = médiane (pas de valeur ajoutée)
- Coût : ~$0.01-0.02 par prédiction × 100+ produits par client

**Problèmes spécifiques** :
1. **Sur-prédiction massive** : Certains clients avec 129 false positives pour 4 true positives
2. **Erreurs de volume extrêmes** : Prédictions de milliers d'unités non commandées
3. **Stock ignoré** : Prédit même quand stock suffisant pour 20+ jours
4. **LLM inefficace** : Produit souvent la même valeur que la médiane simple

**Exemples d'erreurs** :
- Client prédit 7500 unités, commande 0
- Produit avec stock 24j, système prédit quand même
- LLM utilise 3700 tokens pour arriver à la médiane

### Questions pour l'Analyste

**Questions fondamentales** :
1. Un LLM est-il adapté pour prédire des séries temporelles intermittentes en B2B ?
2. Existe-t-il des approches LLM spécifiques pour la supply chain qui fonctionnent mieux ?
3. Le LLM devrait-il prédire la quantité directement ou plutôt ajuster une baseline statistique ?

**Questions sur le prompt** :
1. Comment structurer le prompt pour réduire les sur-prédictions ?
2. Faut-il donner plus de contexte business (MOQ, prix, péremption) ?
3. Comment mieux gérer les outliers dans le prompt ?
4. Devrait-on demander un intervalle de confiance plutôt qu'une valeur unique ?

**Questions sur l'architecture** :
1. Vaut-il mieux un LLM généraliste ou fine-tuner un modèle spécifique ?
2. Comment filtrer les cas où le LLM n'apporte pas de valeur (utiliser médiane directement) ?
3. Peut-on utiliser le LLM différemment (détection anomalies, validation, etc.) ?

**Questions sur les alternatives** :
1. Les méthodes classiques (ARIMA, Prophet, etc.) seraient-elles plus adaptées ?
2. Un modèle ML supervisé (Random Forest, XGBoost) serait-il préférable ?
3. Comment combiner optimalement statistiques classiques + LLM ?

### Données Disponibles

- Historique de commandes : 730 jours par produit/client
- Métriques détaillées : MAPE, wMAPE, Precision, Recall par client
- Logs LLM : Prompts, réponses, reasoning interne
- Backtests : Comparaison prédictions vs commandes réelles

### Objectif

Nous cherchons à :
1. **Réduire le WAPE** de 58.5% à <30%
2. **Améliorer la précision** de 39% à >70%
3. **Optimiser les coûts** LLM (actuellement ~$1+ par client)
4. **Identifier quand le LLM apporte vraiment de la valeur** vs médiane simple

Pouvez-vous nous aider à comprendre comment améliorer notre utilisation du LLM pour ce cas d'usage, ou s'il existe de meilleures approches pour la prédiction de quantités en contexte B2B avec demande intermittente ?

---

*Ce document présente une analyse factuelle du système actuel de prédiction par LLM, incluant le prompt utilisé, les résultats obtenus, des exemples concrets de problèmes observés dans les rapports réels, et un prompt structuré pour obtenir de l'aide d'un analyste externe.*