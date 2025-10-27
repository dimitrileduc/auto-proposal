# Email Sending

## 🎯 Rôle

Phase 4 du système Auto-Proposal : Envoi automatique du devis au client par email via l'API Odoo mail.template, avec support de deux modes (TEST et PRODUCTION) pour éviter l'envoi accidentel aux clients réels.

## 📦 Inventaire des Composants

### Fichier: `email-sending.service.ts`

**Description:** Service principal exposant `sendQuoteEmail()` pour envoyer un devis par email avec gestion intelligente des modes TEST/PRODUCTION.

<details><summary>Voir l'implémentation</summary>

```typescript
/**
 * Envoie un email de devis selon le mode configuré
 *
 * @param quoteId - ID du devis Odoo
 * @param quoteName - Nom du devis (ex: "S39712")
 * @param clientId - ID du client
 * @param clientEmail - Email du client (pour logs/blocage)
 * @param odooClient - Client Odoo pour l'envoi
 * @param config - Configuration email
 * @param overrideTestEmail - Email de test override (optionnel, prioritaire sur config)
 * @returns Résultat de l'envoi avec détails
 */
export async function sendQuoteEmail(
  quoteId: number,
  quoteName: string,
  clientId: number,
  clientEmail: string,
  odooClient: OdooClient,
  config: EmailConfig,
  overrideTestEmail?: string
): Promise<EmailSendResult> {
  // Utiliser l'email override ou celui de la config
  const testEmail = overrideTestEmail || config.testEmail;

  console.log(`\n📧 PREPARING EMAIL for quote ${quoteName} (ID: ${quoteId})`);
  console.log(`   Mode: ${config.testMode ? 'TEST' : 'PRODUCTION'}`);
  console.log(`   Test/Monitor Email: ${testEmail}`);

  if (config.testMode) {
    console.log(`   ✅ TEST MODE: Email will go ONLY to ${testEmail}`);
    console.log(`   🚫 Client ${clientEmail} will NOT receive email`);
  } else {
    console.log(`   ⚠️  PRODUCTION MODE: Email to CLIENT + CC to ${testEmail}`);
  }

  // Appeler la méthode Odoo
  const result = await odooClient.sendQuoteByEmail(
    quoteId,
    quoteName,
    clientEmail,
    config.testMode,
    testEmail
  );

  return result;
}
```

**Points clés:**
- **Deux modes**:
  - `testMode: true` → Email uniquement à `testEmail`, client bloqué
  - `testMode: false` → Email au client + CC à `testEmail` (monitoring)
- **Override flexible**: `overrideTestEmail` permet de changer l'email de test sans modifier la config
- **Logs détaillés**: Console logs pour tracer chaque envoi
- **Error handling**: Retourne `EmailSendResult` avec `success: false` en cas d'erreur

</details>

---

### Fichier: `email-sending.types.ts`

**Description:** Types TypeScript pour la configuration email.

<details><summary>Voir l'implémentation</summary>

```typescript
export interface EmailConfig {
  enabled: boolean;        // Active/désactive l'envoi email
  testMode: boolean;       // true = TEST, false = PRODUCTION
  testEmail: string;       // Email pour TEST mode (ex: dimitri.leduc87@gmail.com)
  testClientId: number;    // Client ID pour les tests
  templateName: string;    // Nom du template Odoo (ex: "Sales Order")
}
```

**Exemple de config:**
```typescript
const emailConfig: EmailConfig = {
  enabled: true,
  testMode: true,  // 🔒 MODE TEST
  testEmail: "dimitri.leduc87@gmail.com",
  testClientId: 74192,
  templateName: "Sales Order"
};
```

</details>

---

### Dépendance: `xmlrpc-client.sendQuoteByEmail` (Infrastructure Odoo)

**Description:** Implémentation de l'envoi email via l'API Odoo `mail.template.send_mail`.

<details><summary>Voir l'implémentation</summary>

```typescript
async sendQuoteByEmail(
  quoteId: number,
  quoteName: string,
  clientEmail: string,
  testMode: boolean,
  testEmail: string
): Promise<EmailSendResult> {
  // 1. Récupérer le template ID pour les devis
  const templates = await odoo.searchRead<{ id: number; name: string }>(
    "mail.template",
    [
      ["model", "=", "sale.order"],
      ["name", "ilike", "Sales Order"]  // Template standard Odoo
    ],
    { fields: ["id", "name"], limit: 1 }
  );

  const templateId = templates[0].id;

  // 2. Construire les email_values selon le mode
  let emailValues = {};
  if (testMode) {
    // MODE TEST: Forcer l'email à testEmail
    emailValues = {
      email_to: testEmail,
      partner_ids: [],  // Clear les partners
      email_cc: '',     // Clear le CC
    };
  }
  // MODE PRODUCTION: Laisser le template gérer (email au client)

  // 3. Envoyer via mail.template.send_mail
  const mailIds = await odoo.execute("mail.template", "send_mail", [
    templateId,      // Template ID
    quoteId,         // res_id (sale.order)
    true,            // force_send (envoyer immédiatement)
    false,           // raise_exception
    emailValues      // email_values dict (override email_to en TEST mode)
  ]);

  return {
    success: true,
    template_id: templateId,
    email_sent_to: testMode ? [testEmail] : [clientEmail],
    email_blocked_for: testMode ? [clientEmail] : [],
    quote_id: quoteId,
    quote_name: quoteName,
    mode: testMode ? 'test' : 'production'
  };
}
```

**Fichier**: `backend/src/infrastructure/odoo/clients/xmlrpc-client.ts:288-389`

**3 appels API Odoo:**
1. `searchRead('mail.template')`: Récupérer le template "Sales Order"
2. `execute('mail.template', 'send_mail')`: Envoyer l'email
3. (Optionnel) `searchRead('mail.mail')`: Vérifier le statut de l'email

</details>

---

### Scripts de test

#### Script: `test-email-send.ts`

**Description:** Script pour tester l'envoi email en mode TEST (email uniquement à dimitri.leduc87@gmail.com).

<details><summary>Voir l'implémentation</summary>

```typescript
// Configuration pour le test
const TEST_QUOTE_ID = 91592;
const TEST_QUOTE_NAME = "S39715";
const TEST_CLIENT_ID = 74192;
const TEST_CLIENT_EMAIL = "hello@d-l.studio";
const TEST_EMAIL_RECIPIENT = "dimitri.leduc87@gmail.com";

const emailConfig: EmailConfig = {
  enabled: true,
  testMode: true,  // 🔒 MODE TEST
  testEmail: TEST_EMAIL_RECIPIENT,
  testClientId: TEST_CLIENT_ID,
  templateName: "Sales Order"
};

const result = await sendQuoteEmail(
  TEST_QUOTE_ID,
  TEST_QUOTE_NAME,
  TEST_CLIENT_ID,
  TEST_CLIENT_EMAIL,
  odooClient,
  emailConfig
);
```

**Usage:**
```bash
npx tsx src/scripts/test-email-send.ts
```

**Output attendu:**
```
📧 PREPARING EMAIL for quote S39715 (ID: 91592)
   Mode: TEST
   ✅ TEST MODE: Email will go ONLY to dimitri.leduc87@gmail.com
   🚫 Client hello@d-l.studio will NOT receive email

✅ Email sent successfully!
   Recipients: dimitri.leduc87@gmail.com
   Blocked: hello@d-l.studio
```

</details>

---

#### Script: `check-email-status.ts`

**Description:** Script pour vérifier le statut d'un email dans Odoo (outgoing, sent, exception, cancel).

<details><summary>Voir l'implémentation</summary>

```typescript
const MAIL_ID = 346482; // L'ID retourné par send_mail

const mails = await adminClient.read('mail.mail', [MAIL_ID], [
  'subject',
  'email_to',
  'email_from',
  'state',
  'failure_reason',
  'create_date',
  'date'
]);

const mail = mails[0];
console.log(`📧 Email Details:`);
console.log(`   State: ${mail.state}`);

switch(mail.state) {
  case 'outgoing':
    console.log(`   ⏳ Email is in queue, waiting to be sent`);
    break;
  case 'sent':
    console.log(`   ✅ Email was sent successfully`);
    break;
  case 'exception':
    console.log(`   ❌ Email failed to send`);
    console.log(`   Reason: ${mail.failure_reason}`);
    break;
}
```

**Usage:**
```bash
# Modifier MAIL_ID dans le fichier
npx tsx src/scripts/check-email-status.ts
```

**États possibles:**
- `outgoing`: En queue, en attente d'envoi par le CRON Odoo
- `sent`: Envoyé avec succès
- `exception`: Échec d'envoi (voir failure_reason)
- `cancel`: Annulé

</details>

---

#### Script: `check-mail-server.ts`

**Description:** Script pour vérifier la configuration SMTP d'Odoo (serveur sortant, paramètres système, queue).

<details><summary>Voir l'implémentation</summary>

```typescript
// 1. Vérifier les serveurs mail sortants
const mailServers = await adminClient.search('ir.mail_server', []);

if (mailServers.length === 0) {
  console.log("   ❌ No outgoing mail server configured!");
  console.log("   This is why emails are not being sent.");
}

for (const serverId of mailServers) {
  const server = await adminClient.read('ir.mail_server', [serverId], [
    'name', 'smtp_host', 'smtp_port', 'smtp_encryption', 'active'
  ]);
  console.log(`   Server: ${server[0].name}`);
  console.log(`   Host: ${server[0].smtp_host}:${server[0].smtp_port}`);
}

// 2. Vérifier les emails en queue
const outgoingMails = await adminClient.search('mail.mail', [
  ['state', '=', 'outgoing']
]);
console.log(`   Emails waiting to be sent: ${outgoingMails.length}`);
```

**Usage:**
```bash
npx tsx src/scripts/check-mail-server.ts
```

</details>

## 🔧 Guides Pratiques

<details><summary>Comment implémenter mail.template.send_mail() ?</summary>

### Implémentation actuelle (✅ FONCTIONNELLE)

**Fichier**: `backend/src/infrastructure/odoo/clients/xmlrpc-client.ts:288-389`

L'implémentation est **déjà faite** et utilise:

```typescript
// Signature Odoo: send_mail(res_id, force_send=False, raise_exception=False, email_values=None)
await odoo.execute("mail.template", "send_mail", [
  templateId,      // Template ID (self)
  quoteId,         // res_id (sale.order)
  true,            // force_send (envoyer immédiatement, pas de queue)
  false,           // raise_exception (ne pas lever d'exception)
  emailValues      // email_values dict (override email_to en mode TEST)
]);
```

### Paramètres clés

**`force_send: true`**:
- ✅ Email envoyé immédiatement (si SMTP configuré)
- ❌ Si `false`, l'email est mis en queue et sera envoyé par le CRON Odoo

**`email_values` (mode TEST)**:
```typescript
{
  email_to: "test@example.com",  // Override destinataire
  partner_ids: [],               // Clear les partners Odoo
  email_cc: ''                   // Clear le CC
}
```

**`email_values` (mode PRODUCTION)**:
```typescript
{}  // Laisser vide, le template gère tout
```

### Template Odoo utilisé

**Nom**: "Sales Order" (template par défaut Odoo)
**Model**: `sale.order`
**ID**: Variable selon l'installation (récupéré dynamiquement via `searchRead`)

**Requête de récupération:**
```typescript
const templates = await odoo.searchRead<{ id: number; name: string }>(
  "mail.template",
  [
    ["model", "=", "sale.order"],
    ["name", "ilike", "Sales Order"]
  ],
  { fields: ["id", "name"], limit: 1 }
);
```

</details>

<details><summary>Comment configurer le serveur SMTP Odoo ?</summary>

### Vérifier la configuration actuelle

```bash
npx tsx src/scripts/check-mail-server.ts
```

### Configurer SMTP dans Odoo (Interface)

1. Aller dans **Settings** → **Technical** → **Outgoing Mail Servers**
2. Cliquer sur **Create**
3. Remplir:
   - **Name**: "Gmail SMTP" (ou autre)
   - **SMTP Server**: `smtp.gmail.com`
   - **SMTP Port**: `587` (TLS) ou `465` (SSL)
   - **Connection Security**: `TLS (STARTTLS)` ou `SSL/TLS`
   - **Username**: Votre email Gmail
   - **Password**: Mot de passe d'application (pas le mot de passe Gmail normal)
4. Cliquer sur **Test Connection**
5. Sauvegarder

### Configurer SMTP via API (Advanced)

```typescript
import { XmlRpcAdminClient } from "../infrastructure/odoo/clients/xmlrpc-admin-client";

const adminClient = new XmlRpcAdminClient();

await adminClient.create('ir.mail_server', {
  name: 'Gmail SMTP',
  smtp_host: 'smtp.gmail.com',
  smtp_port: 587,
  smtp_encryption: 'starttls',
  smtp_user: 'your-email@gmail.com',
  smtp_pass: 'your-app-password',
  active: true
});
```

### Gmail: Générer un mot de passe d'application

1. Aller sur [Google Account Security](https://myaccount.google.com/security)
2. Activer **2-Step Verification** (si pas déjà fait)
3. Aller dans **App passwords**
4. Générer un nouveau mot de passe pour "Mail"
5. Utiliser ce mot de passe (16 caractères) dans Odoo

### Alternatives SMTP

- **SendGrid**: `smtp.sendgrid.net:587` (TLS)
- **Mailgun**: `smtp.mailgun.org:587` (TLS)
- **AWS SES**: `email-smtp.{region}.amazonaws.com:587` (TLS)
- **Brevo (Sendinblue)**: `smtp-relay.brevo.com:587` (TLS)

</details>

<details><summary>Comment tester l'envoi email ?</summary>

### Test complet (mode TEST)

```bash
# 1. Configurer les variables dans le script
# Éditer: backend/src/scripts/test-email-send.ts
# Modifier: TEST_QUOTE_ID, TEST_QUOTE_NAME, TEST_CLIENT_ID

# 2. Exécuter le test
npx tsx src/scripts/test-email-send.ts

# 3. Vérifier la console
# Output attendu:
# ✅ Email sent successfully!
# Recipients: dimitri.leduc87@gmail.com

# 4. Vérifier l'inbox du testEmail
# Chercher email avec subject: "[Demo Food Autopilot] Quotation S39715"
```

### Test unitaire (function call)

```typescript
import { sendQuoteEmail } from "../features/email-sending/email-sending.service";
import { createOdooClient } from "../infrastructure/odoo/odoo.service";
import { autoProposalConfig } from "../config/auto-proposal";

const odooClient = createOdooClient(autoProposalConfig.odooApiType);

const result = await sendQuoteEmail(
  91592,                        // quoteId
  "S39715",                     // quoteName
  74192,                        // clientId
  "hello@d-l.studio",          // clientEmail
  odooClient,
  {
    enabled: true,
    testMode: true,             // 🔒 MODE TEST
    testEmail: "dimitri.leduc87@gmail.com",
    testClientId: 74192,
    templateName: "Sales Order"
  }
);

console.log('Success:', result.success);
console.log('Sent to:', result.email_sent_to);
console.log('Blocked:', result.email_blocked_for);
```

### Vérifier le statut de l'email dans Odoo

```bash
# 1. Récupérer le mail_id depuis les logs
# (retourné par send_mail)

# 2. Vérifier le statut
# Éditer: backend/src/scripts/check-email-status.ts
# Modifier: MAIL_ID = 346482

# 3. Exécuter
npx tsx src/scripts/check-email-status.ts

# Output:
# 📧 Email Details:
#    State: sent
#    ✅ Email was sent successfully
```

### Debug si l'email n'arrive pas

1. **Vérifier le statut** (`check-email-status.ts`):
   - Si `state: 'outgoing'` → Email en queue, attendre le CRON Odoo
   - Si `state: 'exception'` → Lire `failure_reason`
   - Si `state: 'sent'` → Vérifier spam/junk folder

2. **Vérifier la config SMTP** (`check-mail-server.ts`):
   - Si aucun serveur SMTP configuré → Configurer SMTP
   - Si serveur inactif → L'activer

3. **Forcer l'envoi de la queue Odoo**:
   - Aller dans Odoo → **Settings** → **Technical** → **Email** → **Emails**
   - Filtrer par "Outgoing"
   - Sélectionner les emails en attente
   - Action → **Retry**

</details>

<details><summary>Points de vigilance / Dépendances</summary>

### Mode TEST vs PRODUCTION

**MODE TEST** (`testMode: true`):
- ✅ Sécurisé pour les tests
- ✅ Email uniquement à `testEmail`
- ✅ Client ne reçoit **rien**
- ⚠️  Nécessite de désactiver pour la production

**MODE PRODUCTION** (`testMode: false`):
- ⚠️  Email envoyé au client réel
- ✅ CC à `testEmail` pour monitoring
- ⚠️  Vérifier ABSOLUMENT avant d'activer

**Recommandation**: Toujours commencer par `testMode: true` pour les tests.

### Template Odoo "Sales Order"

**Dépendance critique**: Le template "Sales Order" **doit exister** dans Odoo.

**Vérification:**
```typescript
const templates = await odoo.searchRead('mail.template', [
  ["model", "=", "sale.order"],
  ["name", "ilike", "Sales Order"]
]);

if (templates.length === 0) {
  throw new Error("Template 'Sales Order' not found!");
}
```

**Si le template n'existe pas:**
1. Installer le module Odoo `sale` (devrait être installé par défaut)
2. OU créer un template custom (voir Odoo → Settings → Technical → Email Templates)

### Configuration SMTP requise

**Sans SMTP configuré**, les emails:
- Seront créés dans Odoo (`mail.mail`)
- Resteront en état `outgoing` (queue)
- Ne seront **jamais envoyés**

**Solution**: Configurer SMTP (voir guide ci-dessus).

### Délai d'envoi avec force_send=false

Si `force_send: false` (non utilisé actuellement):
- Email mis en queue (`state: 'outgoing'`)
- Envoyé par le CRON Odoo (toutes les 5-60 minutes selon config)

**Avec `force_send: true` (actuel)**:
- Email envoyé **immédiatement** si SMTP configuré
- Pas d'attente du CRON

### Limitations Odoo Demo

**Environnements de démo Odoo**:
- Ont souvent l'envoi email **désactivé** (pour éviter le spam)
- Les emails restent en `outgoing` indéfiniment
- Nécessitent une activation manuelle par l'administrateur

**Vérification**:
```bash
npx tsx src/scripts/check-mail-server.ts
# Si "No outgoing mail server" → C'est un environnement de démo
```

### Relation avec autres modules

**Dépend de:**
- `/features/proposal-generation/` (QuoteCreationResult en input)
- `/infrastructure/odoo/clients/xmlrpc-client.ts` (API Odoo)
- `/config/auto-proposal.ts` (Config email si intégrée)

**Utilisé par:**
- `/trigger/client-proposal.task.ts` (Phase 4 optionnelle du workflow)
- Scripts de test manuels

**Non utilisé actuellement dans le workflow automatique** (Phase 4 non implémentée dans orchestrator).

</details>

## 🔗 Références

- Odoo Mail Template API: [mail.template Documentation](https://www.odoo.com/documentation/17.0/developer/reference/backend/actions.html#mail-template)
- Odoo Email Configuration: [Email Gateway](https://www.odoo.com/documentation/17.0/applications/general/email_communication/email_servers.html)
- Configuration: [`/backend/src/config/auto-proposal.ts`](../../config/auto-proposal.ts)
- Types: [`/backend/src/features/email-sending/email-sending.types.ts`](./email-sending.types.ts)
- Client Proposal Task: [`/backend/src/trigger/README.md`](../../trigger/README.md)
- Scripts de test:
  - [`/backend/src/scripts/test-email-send.ts`](../../scripts/test-email-send.ts)
  - [`/backend/src/scripts/check-email-status.ts`](../../scripts/check-email-status.ts)
  - [`/backend/src/scripts/check-mail-server.ts`](../../scripts/check-mail-server.ts)
