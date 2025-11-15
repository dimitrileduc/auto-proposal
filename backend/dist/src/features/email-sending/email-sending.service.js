/**
 * Service pour l'envoi d'emails de devis
 *
 * Modes:
 * - TEST: Email uniquement à l'adresse de test configurée (client ne reçoit rien)
 * - PRODUCTION: Email au client + CC à l'adresse de test
 */
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
export async function sendQuoteEmail(quoteId, quoteName, clientId, clientEmail, odooClient, config, overrideTestEmail) {
    try {
        // Utiliser l'email override ou celui de la config
        const testEmail = overrideTestEmail || config.testEmail;
        console.log(`\n📧 PREPARING EMAIL for quote ${quoteName} (ID: ${quoteId})`);
        console.log(`   Client: ID ${clientId} (${clientEmail})`);
        console.log(`   Mode: ${config.testMode ? 'TEST' : 'PRODUCTION'}`);
        console.log(`   Test/Monitor Email: ${testEmail}`);
        if (config.testMode) {
            console.log(`   ✅ TEST MODE: Email will go ONLY to ${testEmail}`);
            console.log(`   🚫 Client ${clientEmail} will NOT receive email`);
        }
        else {
            console.log(`   ⚠️  PRODUCTION MODE: Email to CLIENT + CC to ${testEmail}`);
        }
        // Appeler la méthode Odoo avec l'email de test flexible
        const result = await odooClient.sendQuoteByEmail(quoteId, quoteName, clientEmail, config.testMode, testEmail // Utilise l'email flexible
        );
        // Log du résultat
        if (result.success) {
            console.log(`   ✅ Email sent successfully!`);
            console.log(`   Recipients: ${result.email_sent_to.join(', ')}`);
            if (result.email_blocked_for.length > 0) {
                console.log(`   Blocked: ${result.email_blocked_for.join(', ')}`);
            }
        }
        else {
            console.log(`   ❌ Email failed: ${result.error}`);
        }
        return result;
    }
    catch (error) {
        console.error(`❌ Email send failed:`, error);
        return {
            success: false,
            template_id: 0,
            email_sent_to: [],
            email_blocked_for: [clientEmail],
            quote_id: quoteId,
            quote_name: quoteName,
            mode: config.testMode ? 'test' : 'production',
            error: error.message || String(error)
        };
    }
}
