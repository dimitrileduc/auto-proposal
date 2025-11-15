# Analyse Distribution des Patterns de Commandes

**Date d'exécution** : 2025-11-15T09:36:12.935Z

**Configuration système** :
- Fenêtre d'analyse par défaut : 180j
- Stratégie quantités :
  - 0 commandes → Skip
  - 1 commande → Répéter (LOW confidence) ⚠️
  - 2-4 commandes → Médiane (MEDIUM confidence)
  - 5+ commandes → Médiane des 5 dernières (HIGH confidence)

---

## Fenêtre 270 jours

### Distribution des Clients par Nombre de Commandes

| Catégorie | Nombre de Clients | % | Niveau de Confiance |
|-----------|-------------------|---|---------------------|
| 1 commande | 204 | 25.5% | ⚠️ LOW |
| 2-4 commandes | 351 | 43.8% | MEDIUM |
| 5+ commandes | 246 | 30.7% | ✅ HIGH |
| **TOTAL** | **801** | **100%** | - |

### Distribution des Paires Client-Produit par Fréquence de Commande

**Important** : Cette distribution montre combien de fois **chaque client** a commandé **chaque produit spécifique**.

| Fréquence | Nombre de Paires Client-Produit | % | Niveau de Confiance |
|-----------|--------------------------------|---|---------------------|
| 1 commande | 7199 | 42.9% | ⚠️ LOW |
| 2-4 commandes | 7636 | 45.6% | MEDIUM |
| 5+ commandes | 1928 | 11.5% | ✅ HIGH |
| **TOTAL** | **16763** | **100%** | - |

### 💡 Insights

⚠️ **Paires Client-Produit** : 42.9% des paires client-produit (7,199) n'ont qu'**1 seule commande**. Cela explique la faible Precision dans vos backtests (42.7%).

---

## 📋 Recommandations

1. **Fenêtre optimale** : 270 jours maximise le % de clients HIGH confidence

2. **Stratégie d'amélioration pour les paires client-produit** :
   - **Option A** : Exclure les paires avec 1 seule commande (exclure LOW confidence)
   - **Option B** : Pour les paires LOW confidence, utiliser une quantité par défaut basée sur :
     - La médiane du produit tous clients confondus
     - La catégorie produit
     - Les règles métier (UoM, conditionnement)
   - **Option C** : Augmenter la fenêtre d'analyse pour capturer plus d'historique

3. **Impact sur les performances** :
   - Si vous excluez les paires LOW confidence, vous améliorerez la Precision
   - Mais vous réduirez le nombre de produits proposés par client
   - Compromis à trouver entre qualité (Precision) et couverture (Recall)

---

*Généré automatiquement le 2025-11-15T09:36:12.935Z*
