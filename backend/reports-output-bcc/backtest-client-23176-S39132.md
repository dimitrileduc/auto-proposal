# Rapport Backtest - Client Tecofin SRL Le Potager de la Fontenelle

## Contexte

- **Client** : Tecofin SRL Le Potager de la Fontenelle (ID: 23176)
- **Commande réelle** : S39132
- **Date commande** : 2025-09-17 12:19:47
- **Date cutoff système** : 2025-09-16 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 32
- **Tokens**: 30,051 input + 5,064 output = 35,115 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 65.5% | 29 produits prédits, 19 corrects |
| **Rappel** | 100.0% | 19 produits réels, 19 détectés |
| **F1-Score** | 79.2% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.26 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 19.2% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 22.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 11.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 14 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

---

## True Positives (19)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV159] LV Tartinade aux Truffes  135g  | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV155] LV Vinaigrette Caesar 250 ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LV131] LV Tartinade Potiron 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV135] LV Tartinade Basilico 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV137] LV Tartinade Lentilles Curry 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV342] LV Organic Broccoli Spread 190 g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [LV132] LV Tartinade Houmous type 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV331] LV Tartinade Lentils Balsamico 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV133] LV Tartinade Ananas Coco 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV136] LV Tartinade Betterave 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [MF0061] MF Compote | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (19 produits)


<details>
<summary><strong>1. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 1u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 17 juillet 2025, soit 61 jours. L'historique N-1 montre une activité régulière durant l'été et l'automne (juin, juillet, novembre). Bien que le cycle soit irrégulier, le délai écoulé dépasse largement la fréquence habituelle de rotation. En application du principe de précaution B2B (doute sur le cycle = prévoir), un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre des volumes très faibles (majoritairement 1u, parfois 2u). La médiane des commandes est de 1u. Conformément à la règle sur les rotations faibles, on maintient la quantité minimale de 1u sans surestimer.

**Tokens utilises pour cette prediction:**
- **Input**: 988 tokens
- **Output**: 196 tokens
- **Total**: 1,184 tokens



</details>


<details>
<summary><strong>2. [LV155] LV Vinaigrette Caesar 250 ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 1u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 17 juillet 2025, soit 61 jours. Bien que l'historique soit à faible rotation, le délai écoulé dépasse largement les cycles observés précédemment (environ 30-60 jours selon les données N-1). En application du principe de précaution B2B et face à un cycle irrégulier, un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre une constance absolue à 1 unité par commande. La médiane est de 1. Conformément à la règle sur les rotations très faibles (1-2u), la quantité de 1 unité est maintenue.

**Tokens utilises pour cette prediction:**
- **Input**: 901 tokens
- **Output**: 177 tokens
- **Total**: 1,078 tokens



</details>


<details>
<summary><strong>3. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 17 juillet 2025, soit 61 jours. L'historique N-1 montre une commande fin septembre (26/09/2023). Le cycle moyen constaté est d'environ 45 à 60 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà présent pour couvrir la période de septembre/octobre. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent et N-1 oscille strictement entre 1u et 2u. La médiane des commandes est de 2u. Conformément au principe de précaution B2B et à la stabilité de la rotation, la quantité de 2u est retenue pour couvrir le prochain cycle.

**Tokens utilises pour cette prediction:**
- **Input**: 1,007 tokens
- **Output**: 195 tokens
- **Total**: 1,202 tokens



</details>


<details>
<summary><strong>4. [LV131] LV Tartinade Potiron 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 1u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande date du 17 juillet, soit 61 jours écoulés. Bien que l'historique soit limité à une seule commande, le délai dépasse largement le seuil de réapprovisionnement de 30 jours. En B2B, selon le principe de précaution et pour éviter une rupture sur un produit à rotation lente, un besoin est détecté. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité de 1 unité sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 871 tokens
- **Output**: 153 tokens
- **Total**: 1,024 tokens



</details>


<details>
<summary><strong>5. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande date du 17 juillet 2025, soit il y a 61 jours. L'historique montre un cycle moyen d'environ 30 à 45 jours. Nous avons largement dépassé ce délai et le seuil de réapprovisionnement de 30 jours est atteint. Il existe un risque de rupture ou un besoin imminent. ÉTAPE 2 : Estimation quantité. Les commandes récentes oscillent entre 1u et 3u. La médiane des commandes récentes (1, 2, 3) est de 2u. L'historique N-1 confirme également une stabilité autour de 2u. En suivant le principe de précaution et la médiane, la quantité retenue est de 2u.

**Tokens utilises pour cette prediction:**
- **Input**: 1,021 tokens
- **Output**: 179 tokens
- **Total**: 1,200 tokens



</details>


<details>
<summary><strong>6. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 1u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique montre une rotation très faible et irrégulière. La dernière commande remonte au 17 juillet 2025 (soit 61 jours). Bien que le cycle soit difficile à définir précisément, le délai écoulé depuis la dernière commande dépasse largement les intervalles observés l'année précédente (environ 45-60 jours entre mai et juillet). En application du principe de précaution B2B (incertitude sur le cycle = prévoir commande) et pour couvrir l'horizon de 30 jours, un réapprovisionnement est nécessaire. La quantité est fixée à 1 unité, correspondant à la médiane historique et au volume habituel de maintien pour ce produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 952 tokens
- **Output**: 160 tokens
- **Total**: 1,112 tokens



</details>


<details>
<summary><strong>7. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 1u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 17 juillet 2025, soit 61 jours. L'historique montre un cycle moyen d'environ 45 à 60 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà présent. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre des volumes très faibles et stables (1u ou 2u). La médiane des commandes récentes est de 1,5u. En application de la règle de précaution B2B privilégiant la valeur la plus basse en cas de doute sur une faible rotation, la quantité de 1 unité est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 1,003 tokens
- **Output**: 169 tokens
- **Total**: 1,172 tokens



</details>


<details>
<summary><strong>8. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 1u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle moyen d'environ 60 jours entre les commandes récentes (mai à juillet). La dernière commande datant du 17 juillet 2025, soit il y a 61 jours, le seuil de réapprovisionnement est largement atteint. De plus, l'historique de l'année précédente confirme une activité régulière en septembre (commande le 26/09/2023). En application du principe de précaution B2B et face à l'imminence du besoin, une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane des commandes historiques et à la dernière quantité commandée, ce qui permet de maintenir le stock sans risque de surstockage pour ce produit à rotation modérée.

**Tokens utilises pour cette prediction:**
- **Input**: 993 tokens
- **Output**: 178 tokens
- **Total**: 1,171 tokens



</details>


<details>
<summary><strong>9. [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 1u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 17 juillet 2025, soit 61 jours. Bien que la rotation soit faible, l'historique N-1 montre une commande fin juillet. Le délai écoulé dépasse largement le cycle habituel observé entre juin et juillet (37 jours). Par principe de précaution B2B et pour éviter une rupture prolongée sur un produit à faible rotation, un besoin est identifié. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 est constant à 1 unité. La médiane des commandes est de 1. On maintient donc cette quantité minimale.

**Tokens utilises pour cette prediction:**
- **Input**: 925 tokens
- **Output**: 151 tokens
- **Total**: 1,076 tokens



</details>


<details>
<summary><strong>10. [LV137] LV Tartinade Lentilles Curry 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 1u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 10 juin 2025, soit plus de 90 jours sans activité, ce qui dépasse largement les cycles habituels observés l'année précédente (environ 20 à 60 jours entre les commandes). Bien que la rotation soit très faible et irrégulière, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, surtout à l'approche de la période où des commandes ont été passées l'an dernier (septembre). La quantité est fixée à 1 unité, correspondant à la médiane historique et au volume standard de ce produit à faible rotation, en ignorant le pic exceptionnel de 2 unités de juin.

**Tokens utilises pour cette prediction:**
- **Input**: 953 tokens
- **Output**: 158 tokens
- **Total**: 1,111 tokens



</details>


<details>
<summary><strong>11. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 10 juin 2025, soit plus de 90 jours sans activité, ce qui dépasse largement le cycle de rotation habituel observé l'année précédente (environ 45 à 60 jours). Bien que l'historique récent soit faible, l'historique N-1 montre une activité régulière sur cette période (septembre/novembre). En application du principe de précaution B2B pour éviter une rupture prolongée sur un produit à rotation lente mais constante, un réapprovisionnement est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane et à la valeur la plus fréquente de l'historique.

**Tokens utilises pour cette prediction:**
- **Input**: 1,024 tokens
- **Output**: 152 tokens
- **Total**: 1,176 tokens



</details>


<details>
<summary><strong>12. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 10 juin 2025, soit plus de 90 jours sans activité pour un produit ayant montré un cycle initial de 26 jours (entre mai et juin). Bien que la rotation soit faible, le délai écoulé dépasse largement le cycle moyen et le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B et pour éviter une rupture prolongée sur un produit à faible rotation, une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane et à la constante observée lors des commandes précédentes.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 137 tokens
- **Total**: 1,026 tokens



</details>


<details>
<summary><strong>13. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique montre un cycle de commande moyen d'environ 45 à 60 jours. La dernière commande remontant au 10 juin 2025 (soit plus de 90 jours), le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours, signalant un risque de rupture ou un besoin imminent. Bien que les données récentes soient espacées, l'historique N-1 confirme une activité régulière sur cette période (commande le 26/09/2023). En application de la règle de précaution B2B et en utilisant la médiane des quantités historiques (2u), une commande de 2 unités est préconisée pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 1,038 tokens
- **Output**: 173 tokens
- **Total**: 1,211 tokens



</details>


<details>
<summary><strong>14. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique montre un cycle de commande irrégulier avec une absence de commande depuis le 10 juin 2025 (soit plus de 90 jours). Bien que la rotation soit faible, le délai écoulé dépasse largement les intervalles habituels constatés en N-1 (environ 45 à 60 jours entre mai et juillet). En application du principe de précaution B2B, un risque de rupture est identifié pour les 30 prochains jours. La quantité retenue correspond à la médiane historique (2u), les commandes oscillant systématiquement entre 1u et 2u.

**Tokens utilises pour cette prediction:**
- **Input**: 988 tokens
- **Output**: 141 tokens
- **Total**: 1,129 tokens



</details>


<details>
<summary><strong>15. [LV331] LV Tartinade Lentils Balsamico 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 1u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 10 juin 2025, soit plus de 90 jours. L'historique montre une rotation très faible et irrégulière (cycle moyen d'environ 60-80 jours). En application du principe de précaution B2B, un délai aussi long sans commande indique un risque de rupture imminent ou un besoin de réapprovisionnement pour maintenir le stock en rayon. ÉTAPE 2 : Estimation quantité. L'historique (N et N-1) est extrêmement stable avec des commandes systématiques de 1 unité. La médiane et la règle de rotation faible (1-2u) imposent de maintenir cette quantité de 1 unité sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 955 tokens
- **Output**: 167 tokens
- **Total**: 1,122 tokens



</details>


<details>
<summary><strong>16. [LV133] LV Tartinade Ananas Coco 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 1u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 15 mai 2025, soit 124 jours. Bien que la rotation soit très faible et irrégulière, l'historique N-1 montre des commandes en septembre et novembre. En application du principe de précaution B2B (mieux vaut détecter un besoin incertain qu'une rupture), un réapprovisionnement est nécessaire pour couvrir la période de fin d'année. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 oscille entre 1 et 2 unités. Conformément à la règle de privilégier la valeur la plus basse en cas de doute sur une rotation faible, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 936 tokens
- **Output**: 170 tokens
- **Total**: 1,106 tokens



</details>


<details>
<summary><strong>17. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 15 mai 2025, soit plus de 120 jours. Bien que la rotation soit faible, l'historique N-1 montre une activité en septembre (26/09/2023). Compte tenu du délai important depuis la dernière commande et du seuil de réapprovisionnement de 30 jours, un risque de rupture est identifié par précaution B2B. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 oscille entre 1u et 2u. La médiane des commandes historiques est de 1,5u. En suivant la règle de précaution et la médiane, on retient la quantité de 2u pour couvrir la période à venir sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 952 tokens
- **Output**: 189 tokens
- **Total**: 1,141 tokens



</details>


<details>
<summary><strong>18. [LV002] LV Pizza Croccantina au romarin 150 g bio</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 15 mai 2025, soit plus de 120 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement tout cycle raisonnable de réapprovisionnement. En application du principe de précaution B2B (doute sur le cycle = prévoir commande), un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 2 unités. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité historique de 2 unités sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 158 tokens
- **Total**: 1,032 tokens



</details>


<details>
<summary><strong>19. [MF0061] MF Compote</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 1u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Le produit présente une rotation très faible avec une seule commande enregistrée il y a 124 jours. Bien que le cycle soit difficile à déterminer, le principe de précaution B2B s'applique en cas de doute sur le cycle de rotation pour éviter une rupture prolongée. ÉTAPE 2 : En l'absence d'historique multiple, la quantité est basée sur la dernière commande connue (2 unités). Conformément aux règles pour les rotations faibles (1-2u), on maintient ce volume sans augmentation pour limiter le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 864 tokens
- **Output**: 129 tokens
- **Total**: 993 tokens



</details>




### Donnees d'Input LLM (19 produits)


<details>
<summary><strong>1. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-17 06:54:41: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-31 10:53:36: 1u
- 2024-06-17 05:56:13: 1u
- 2024-05-27 07:18:33: 1u
- 2024-02-29 14:21:26: 2u
- 2024-01-23 09:00:19: 1u
- 2023-12-07 09:46:08: 1u
- 2023-11-14 09:18:00: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [LV155] LV Vinaigrette Caesar 250 ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-17 06:54:41: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-17 05:56:13: 1u
- 2023-11-14 09:18:00: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-17 06:54:41: 2u
- 2025-06-10 07:03:26: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-31 10:53:36: 2u
- 2024-06-17 05:56:13: 1u
- 2024-05-27 07:18:33: 1u
- 2024-04-18 07:40:36: 2u
- 2024-02-29 14:21:26: 2u
- 2024-01-23 09:00:19: 1u
- 2023-09-26 06:50:05: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [LV131] LV Tartinade Potiron 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-17 06:54:41: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-17 06:54:41: 3u
- 2025-06-10 07:03:26: 2u
- 2025-05-15 06:39:17: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-31 10:53:36: 2u
- 2024-06-17 05:56:13: 2u
- 2024-05-27 07:18:33: 2u
- 2024-04-18 07:40:36: 1u
- 2024-02-29 14:21:26: 2u
- 2024-01-23 09:00:19: 2u
- 2023-09-26 06:50:05: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [LV135] LV Tartinade Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-17 06:54:41: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-31 10:53:36: 1u
- 2024-06-17 05:56:13: 1u
- 2024-05-27 07:18:33: 1u
- 2024-02-29 14:21:26: 1u
- 2023-11-14 09:18:00: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-17 06:54:41: 1u
- 2025-06-10 07:03:26: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-31 10:53:36: 2u
- 2024-06-17 05:56:13: 1u
- 2024-05-27 07:18:33: 1u
- 2024-02-29 14:21:26: 2u
- 2023-12-07 09:46:08: 1u
- 2023-11-14 09:18:00: 1u
- 2023-09-26 06:50:05: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-17 06:54:41: 2u
- 2025-05-15 06:39:17: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-31 10:53:36: 2u
- 2024-06-17 05:56:13: 2u
- 2024-05-27 07:18:33: 1u
- 2024-04-18 07:40:36: 3u
- 2024-02-29 14:21:26: 1u
- 2023-09-26 06:50:05: 4u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-17 06:54:41: 1u
- 2025-06-10 07:03:26: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-31 10:53:36: 1u
- 2024-04-18 07:40:36: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [LV137] LV Tartinade Lentilles Curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-10 07:03:26: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-31 10:53:36: 1u
- 2024-06-17 05:56:13: 1u
- 2024-05-27 07:18:33: 1u
- 2023-12-07 09:46:08: 1u
- 2023-09-26 06:50:05: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-10 07:03:26: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-31 10:53:36: 2u
- 2024-06-17 05:56:13: 1u
- 2024-05-27 07:18:33: 1u
- 2024-04-18 07:40:36: 2u
- 2024-02-29 14:21:26: 2u
- 2024-01-23 09:00:19: 2u
- 2023-12-07 09:46:08: 2u
- 2023-11-14 09:18:00: 1u
- 2023-09-26 06:50:05: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>12. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-10 07:03:26: 2u
- 2025-05-15 06:39:17: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-10 07:03:26: 2u
- 2025-05-15 06:39:17: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-31 10:53:36: 2u
- 2024-06-17 05:56:13: 3u
- 2024-05-27 07:18:33: 1u
- 2024-04-18 07:40:36: 2u
- 2024-02-29 14:21:26: 2u
- 2024-01-23 09:00:19: 2u
- 2023-12-07 09:46:08: 3u
- 2023-11-14 09:18:00: 1u
- 2023-09-26 06:50:05: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>14. [LV132] LV Tartinade Houmous type 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-10 07:03:26: 1u
- 2025-05-15 06:39:17: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-31 10:53:36: 2u
- 2024-05-27 07:18:33: 1u
- 2024-01-23 09:00:19: 2u
- 2023-12-07 09:46:08: 2u
- 2023-11-14 09:18:00: 1u
- 2023-09-26 06:50:05: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>15. [LV331] LV Tartinade Lentils Balsamico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-10 07:03:26: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-31 10:53:36: 1u
- 2024-02-29 14:21:26: 1u
- 2024-01-23 09:00:19: 1u
- 2023-11-14 09:18:00: 1u
- 2023-09-26 06:50:05: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>16. [LV133] LV Tartinade Ananas Coco 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-15 06:39:17: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-31 10:53:36: 1u
- 2024-06-17 05:56:13: 1u
- 2023-11-14 09:18:00: 1u
- 2023-09-26 06:50:05: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>17. [LV136] LV Tartinade Betterave 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-15 06:39:17: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-31 10:53:36: 1u
- 2024-06-17 05:56:13: 2u
- 2024-05-27 07:18:33: 1u
- 2024-02-29 14:21:26: 1u
- 2023-09-26 06:50:05: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>18. [LV002] LV Pizza Croccantina au romarin 150 g bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-15 06:39:17: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>19. [MF0061] MF Compote</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-15 06:39:17: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>




---

## False Positives (10)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV160] LV Tartinade Aubergine 190g | 2 | Predicted 2u but not ordered |
| [LV145] LV Sauce Tartare 200 ml  | 1 | Predicted 1u but not ordered |
| [LV147] LV Sauce Cocktail 200 ml | 1 | Predicted 1u but not ordered |
| [LV156] LV Sauce barbecue 263 ml bio | 1 | Predicted 1u but not ordered |
| [LV129] LV Tartinade Carotte Gingembre 190g | 2 | Predicted 2u but not ordered |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | Predicted 1u but not ordered |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | Predicted 1u but not ordered |
| [LV357] LV Tartinade BIO Asperge 190g | 2 | Predicted 2u but not ordered |
| [LV165] LV Vol-au-vent (avec viande de volaille) 400 g | 1 | Predicted 1u but not ordered |
| [LV157] LV Ketchup aux tomates 263 ml bio | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:09:58.542Z*
