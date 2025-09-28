# Système de Propositions Automatiques de Commandes

## 🚀 SETUP INITIAL - PREMIÈRE ÉTAPE

**Ce repo a été copié depuis `bb-backend` → `bb-auto-proposal`**

### Actions à faire dans le nouveau Cursor :

1. **Réinitialiser Git (nouveau projet indépendant)**
   ```bash
   rm -rf .git
   git init
   git add .
   git commit -m "Initial commit: Auto-proposal system setup"
   ```

2. **Nettoyer SEULEMENT l'ancien métier (garder l'archi Hono + Trigger)**
   ```bash
   cd backend/src

   # Supprimer l'ancien domain users
   rm -rf domain/users
   rm -rf infrastructure/database/supabase-user.adapter.ts
   rm -rf infrastructure/email # (on utilisera Odoo)

   # Supprimer les anciens triggers
   rm -rf trigger/workflows
   rm -rf trigger/steps
   rm trigger/schedulers/daily-email-reminder.ts

   # Renommer domain → features
   mv domain features
   ```

3. **Nettoyer les docs inutiles**
   ```bash
   rm IMPLEMENTATION-GUIDE.md
   rm INACTIVITY-NOTIFICATIONS-FIX.md
   rm README.md
   ```

4. **Créer la nouvelle architecture (garder la base Hono/Trigger existante)**
   ```bash
   cd backend/src

   # Créer la nouvelle structure
   mkdir -p features/auto-proposal/{client-inactivity,stock-analysis,proposal-generation,odoo-integration}
   mkdir -p trigger/auto-proposal
   mkdir -p infrastructure/odoo
   ```

5. **Structure finale à obtenir :**
   ```
   backend/src/
   ├── index.ts ✅ (garder - routes Hono)
   ├── routes/ ✅ (garder + ajouter monitoring auto-proposal)
   ├── config/
   │   └── auto-proposal.ts (nouveau)
   ├── features/ (ex-domain)
   │   └── auto-proposal/
   │       ├── client-inactivity/
   │       ├── stock-analysis/
   │       ├── proposal-generation/
   │       └── odoo-integration/
   ├── infrastructure/ ✅ (garder le pattern)
   │   └── odoo/ (nouveau)
   ├── trigger/ ✅ (garder la structure)
   │   ├── schedulers/ ✅ (garder, nouveau contenu)
   │   └── auto-proposal/ (nouveau)
   └── types.ts ✅ (garder + ajouter types auto-proposal)
   ```

6. **Nettoyer package.json**
   ```bash
   # Supprimer les deps inutiles
   npm uninstall @supabase/supabase-js resend

   # Garder : hono, @trigger.dev/sdk, @hono/node-server
   # Ajouter plus tard : dépendances pour Odoo API
   ```

7. **Créer nouveau README.md** pour le projet auto-proposal

**→ Une fois setup terminé, commencer par l'exploration de l'API Odoo**

---

## 📋 Contexte et Objectif

Implémenter un système automatisé qui génère et envoie des propositions de commandes aux clients pour maintenir des commandes régulières sans effort commercial.

### Principe de base
- **Ne proposer que les produits déjà commandés** par le client historiquement
- **Détecter automatiquement** les besoins basés sur l'inactivité et le risque de rupture
- **Automatiser complètement** la génération de devis et l'envoi d'emails

## 🎯 Déclencheurs du Système

### 1. Inactivité Client
- Le client n'a plus commandé depuis **X jours** (paramétrable, ex: 30 jours)

### 2. Risque de Rupture Estimé
- Calcul basé sur : **consommation/jour** (calculée sur l'historique) + **dernière commande**
- Estimation du stock restant théorique
- Prédiction de rupture selon la couverture cible

## ⚙️ Paramètres de Configuration

### Paramètres Globaux (pas par client pour simplicité)
- **X jours d'inactivité** : seuil de déclenchement (ex: 30 jours)
- **Couverture cible** : nombre de jours de stock souhaité (ex: 14 jours)
- **Lead time** : délai de livraison (ex: 5 jours)
- **MOQ & multiples d'UoM** : minimum de commande (ex: 300€ ou moyenne des 12 derniers mois)

## 🔄 Workflow Technique

```
┌─ CRON Quotidien ─┐
│                  │
├─ 1. Analyse Inactivité
│  └─ Clients sans commande depuis X jours
│
├─ 2. Analyse Risque Rupture ⭐
│  ├─ Calcul consommation/jour par produit
│  ├─ Estimation stock restant
│  ├─ Calcul date rupture estimée
│  └─ Filtrage selon couverture cible + lead time
│
├─ 3. Génération Devis Odoo
│  ├─ Calcul quantités suggérées
│  ├─ Respect MOQ & multiples
│  └─ Création devis automatique (draft)
│
└─ 4. Notification Email
   ├─ Template email standard Odoo
   ├─ Tag "Auto-proposal" pour suivi
   └─ Envoi automatique au client
```

## 🏗️ Architecture Technique

### Stack Technologique
- **Backend** : Hono.js + TypeScript
- **Orchestration** : Trigger.dev v4 (tasks + scheduled jobs)
- **Intégration** : API Odoo pour devis et emails
- **Cron** : Exécution quotidienne via Trigger.dev

### Structure de Fichiers

```
src/
├── config/
│   └── auto-proposal.ts              // Paramètres globaux configurables
├── features/                         // Organisation par fonctionnalité métier
│   ├── client-inactivity/
│   │   ├── inactivity.service.ts     // Logique détection inactivité
│   │   └── inactivity.utils.ts       // Utils dates, calculs simples
│   ├── stock-analysis/
│   │   ├── stock.service.ts          // Algo prédiction rupture
│   │   ├── consumption.utils.ts      // Calculs consommation/jour
│   │   └── prediction.utils.ts       // Utils prédiction stock
│   ├── proposal-generation/
│   │   ├── proposal.service.ts       // Génération devis Odoo
│   │   ├── quantity.utils.ts         // Calculs quantités, MOQ
│   │   └── formatting.utils.ts       // Format devis
│   └── odoo-integration/
│       ├── odoo.service.ts           // API calls Odoo
│       └── odoo.adapter.ts           // Mapping données
├── trigger/
│   ├── auto-proposal.task.ts         // Task principale (orchestrateur)
│   └── daily-scheduler.ts            // Cron quotidien
└── types.ts                          // Types TypeScript
```

## 🧮 Algorithme de Détection (Cœur du Système)

```javascript
pour chaque client {
  dernière_commande = date_dernière_commande(client)

  // 1. Check inactivité
  si (aujourd'hui - dernière_commande > seuil_inactivité) {

    // 2. Pour chaque produit commandé historiquement
    pour chaque produit_historique {
      // Calcul consommation moyenne
      conso_jour = moyenne_commandes_12_mois / 30

      // Estimation stock restant
      jours_écoulés = aujourd'hui - dernière_commande
      stock_estimé = dernière_quantité - (jours_écoulés * conso_jour)

      // Prédiction rupture
      jours_avant_rupture = stock_estimé / conso_jour

      // Déclenchement si risque
      si (jours_avant_rupture <= couverture_cible + lead_time) {
        quantité_suggérée = (couverture_cible + lead_time) * conso_jour
        // → Ajouter au devis automatique
      }
    }
  }
}
```

## 🎯 Actions Automatisées

### 1. Génération Devis Odoo
- Création automatique d'un devis en mode **draft**
- Calcul intelligent des quantités basé sur l'algorithme
- Respect des contraintes MOQ et multiples d'UoM

### 2. Envoi Email
- Template email standard d'Odoo
- Message type : *"Ci-joint une proposition de commande"*
- Pièce jointe : devis PDF généré

### 3. Suivi et Traçabilité
- Tag **"Auto-proposal"** sur tous les devis générés
- Logs détaillés pour monitoring
- Métriques de performance du système

## 📊 Avantages Business

- **Maintien de commandes régulières** sans intervention commerciale
- **Anticipation des ruptures** de stock client
- **Automatisation complète** du processus de relance
- **Personnalisation** basée sur l'historique réel du client
- **Gain de temps commercial** significatif

## 🚀 Mise en Production

### Phase 1 : Implémentation Core
1. Développement de l'algorithme de détection
2. Intégration API Odoo (devis + emails)
3. Configuration du cron quotidien

### Phase 2 : Monitoring & Optimisation
1. Tableaux de bord de performance
2. Ajustement des paramètres selon retours terrain
3. Extensions possibles (paramétrage par client si nécessaire)

---

**Status** : 🔄 En conception
**Complexité estimée** : Moyenne (focus sur l'algorithme de prédiction)
**Impact business** : Élevé (automatisation des relances commerciales)