# Plan : Système d'exclusion des clients via tag "exclude-auto-proposal"

## 🎯 Objectif
Permettre aux sales d'exclure définitivement des clients du système auto-proposal via un tag partner.

---

## 🤖 Agent 1 : Script de création du tag + Configuration

### 📋 Responsabilités
1. Créer un script pour créer le tag dans Odoo
2. Mettre à jour la configuration centrale avec l'ID du tag

### 📁 Fichiers concernés
- **CRÉER :** `backend/src/scripts/create-partner-exclusion-tag.ts`
- **MODIFIER :** `backend/src/config/auto-proposal.ts`

### 💬 Prompt pour Agent 1

```
Créer un système d'exclusion de clients pour auto-proposal:

1. CRÉER le script `backend/src/scripts/create-partner-exclusion-tag.ts`:
   - Utiliser le client XML-RPC admin (voir exemples dans src/scripts/)
   - Vérifier si le tag "exclude-auto-proposal" existe déjà dans res.partner.category
   - Si existe: afficher l'ID du tag
   - Si n'existe pas: créer le tag avec:
     * name: "exclude-auto-proposal"
     * color: 9 (rouge)
     * active: true
   - Afficher clairement l'ID créé/trouvé
   - Gérer les erreurs proprement

2. MODIFIER `backend/src/config/auto-proposal.ts`:
   - Dans la section `inactivityDetection`, ajouter:
     ```typescript
     excludedPartnerTagId: XXX, // ← ID du tag (à remplacer après exécution du script)
     ```
   - Ajouter un commentaire expliquant que ce tag exclut définitivement les clients

Assure-toi que le script soit exécutable avec: `npx tsx src/scripts/create-partner-exclusion-tag.ts`
```

### ✅ Critères d'acceptation
- [ ] Script créé et exécutable
- [ ] Tag créé dans Odoo avec le nom "exclude-auto-proposal"
- [ ] L'ID du tag est affiché clairement
- [ ] Config mise à jour avec l'ID du tag

---

## 🤖 Agent 2 : Infrastructure Odoo (Domains, Types, Client)

### 📋 Responsabilités
1. Modifier les domains Odoo pour supporter le filtrage sur tag partner
2. Mettre à jour les types du client Odoo
3. Implémenter le filtrage dans le client XML-RPC

### 📁 Fichiers concernés
- **MODIFIER :** `backend/src/infrastructure/odoo/clients/odoo-domains.ts`
- **MODIFIER :** `backend/src/infrastructure/odoo/clients/odoo-client.types.ts`
- **MODIFIER :** `backend/src/infrastructure/odoo/clients/xmlrpc-client.ts`

### 💬 Prompt pour Agent 2

```
Implémenter le filtrage des clients par tag partner dans l'infrastructure Odoo:

1. MODIFIER `backend/src/infrastructure/odoo/clients/odoo-domains.ts`:
   - Fonction `buildInactivePartnersDomain()`:
     * Ajouter le paramètre `excludedPartnerTagId?: number | null`
     * Après le domain existant, ajouter conditionnellement:
       ```typescript
       if (excludedPartnerTagId != null && excludedPartnerTagId > 0) {
         domain.push(["category_id", "not in", [excludedPartnerTagId]]);
       }
       ```
     * Maintenir la logique existante intacte

2. MODIFIER `backend/src/infrastructure/odoo/clients/odoo-client.types.ts`:
   - Interface `OdooClient`:
     * Méthode `getInactiveCompanyPartners()`:
       - Ajouter le paramètre: `excludedPartnerTagId?: number | null`
       - Signature complète:
         ```typescript
         getInactiveCompanyPartners(
           dateMin: string,
           dateMax: string,
           excludeOrderTagId?: number,
           excludedPartnerTagId?: number | null
         ): Promise<OdooPartner[]>;
         ```

3. MODIFIER `backend/src/infrastructure/odoo/clients/xmlrpc-client.ts`:
   - Méthode `getInactiveCompanyPartners()`:
     * Ajouter le paramètre `excludedPartnerTagId?: number | null`
     * Dans l'appel à `buildInactivePartnersDomain()`, passer le paramètre:
       ```typescript
       buildInactivePartnersDomain(activePartnerIds, excludedPartnerTagId)
       ```
     * Ne rien changer d'autre dans la logique

Important: Ces changements sont rétrocompatibles (paramètre optionnel).
```

### ✅ Critères d'acceptation
- [ ] Domain builder supporte le filtrage sur `category_id`
- [ ] Types mis à jour avec le nouveau paramètre
- [ ] Client XML-RPC passe le paramètre au domain builder
- [ ] Aucune régression sur le comportement existant

---

## 🤖 Agent 3 : Feature Layer + Orchestrator + Tests

### 📋 Responsabilités
1. Mettre à jour le service client-inactivity
2. Mettre à jour les types orchestrator
3. Implémenter le passage du paramètre dans l'orchestrator task
4. Créer les tests de validation

### 📁 Fichiers concernés
- **MODIFIER :** `backend/src/features/client-inactivity/inactivity.service.ts`
- **MODIFIER :** `backend/src/shared/types/orchestrator.types.ts`
- **MODIFIER :** `backend/src/trigger/orchestrator.task.ts`

### 💬 Prompt pour Agent 3

```
Intégrer le filtrage par tag partner dans l'orchestrator et créer les tests:

1. MODIFIER `backend/src/features/client-inactivity/inactivity.service.ts`:
   - Fonction `getInactiveClients()`:
     * Ajouter le paramètre: `excludedPartnerTagId?: number | null`
     * Passer ce paramètre à `odooClient.getInactiveCompanyPartners()`:
       ```typescript
       const partners = await odooClient.getInactiveCompanyPartners(
         dateMin,
         dateMax,
         excludeOrderTagId,
         excludedPartnerTagId
       );
       ```

2. MODIFIER `backend/src/shared/types/orchestrator.types.ts`:
   - Interface `OrchestratorConfig`:
     * Ajouter: `excludedPartnerTagId?: number | null;`

3. MODIFIER `backend/src/trigger/orchestrator.task.ts`:
   - Dans la construction de config (ligne ~63):
     ```typescript
     excludedPartnerTagId:
       payload.config?.excludedPartnerTagId
       ?? autoProposalConfig.inactivityDetection.excludedPartnerTagId,
     ```
   - Dans l'appel à `getInactiveClients()` (ligne ~99):
     ```typescript
     const allInactiveClients = await getInactiveClients(
       config.dateMin,
       config.dateMax,
       config.forceReanalysis
         ? autoProposalConfig.quoteGeneration.autoProposalTagId
         : undefined,
       config.excludedPartnerTagId
     );
     ```

4. TESTS à effectuer via MCP Odoo:
   a) Vérifier que le tag existe:
      ```typescript
      mcp__odoo-mcp-ro__search_records({
        model: "res.partner.category",
        domain: [["name", "=", "exclude-auto-proposal"]],
        fields: ["id", "name"]
      })
      ```

   b) Choisir un client test et lui attribuer le tag (manuellement dans Odoo)

   c) Lancer l'orchestrator et vérifier que ce client est exclu:
      ```bash
      curl -X POST http://localhost:3000/api/orchestrator-task
      ```

   d) Tester l'override avec null (client doit réapparaître):
      ```bash
      curl -X POST http://localhost:3000/api/orchestrator-task \
        -H "Content-Type: application/json" \
        -d '{"config": {"excludedPartnerTagId": null}}'
      ```

Documente les résultats des tests dans la console.
```

### ✅ Critères d'acceptation
- [ ] Service inactivity passe le paramètre au client Odoo
- [ ] Types orchestrator incluent le nouveau paramètre
- [ ] Orchestrator merge correctement config + payload
- [ ] Test 1: Tag créé et visible dans Odoo
- [ ] Test 2: Client tagué est exclu de l'analyse
- [ ] Test 3: Override avec null réactive le client

---

## 📊 Résumé du Flow

```
HTTP Request (excludedPartnerTagId: 195)
    ↓
orchestrator.task.ts (merge config + payload)
    ↓
getInactiveClients(dateMin, dateMax, excludeOrderTagId, 195)
    ↓
odooClient.getInactiveCompanyPartners(..., 195)
    ↓
buildInactivePartnersDomain(activePartnerIds, 195)
    ↓
Domain Odoo: ["category_id", "not in", [195]]
    ↓
Résultat: Clients sans le tag 195 uniquement
```

## ✅ Résultat Final Attendu

- ✅ Tag `"exclude-auto-proposal"` créé dans Odoo
- ✅ Filtrage **actif par défaut** (ID hardcodé dans config)
- ✅ Clients tagués **définitivement exclus**
- ✅ **Indépendant** de `forceReanalysis` (deux systèmes séparés)
- ✅ **Indépendant** du tag commandes ID 82 (deux systèmes séparés)
- ✅ Overridable via payload HTTP (null pour désactiver)

## 🎯 Comportements

| Scénario | Config | Payload | Résultat |
|----------|--------|---------|----------|
| Par défaut | `195` | Rien | Filtre avec tag 195 |
| Override disable | `195` | `null` | Pas de filtrage |
| Override autre tag | `195` | `200` | Filtre avec tag 200 |
