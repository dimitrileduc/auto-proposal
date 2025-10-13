/**
 * Types pour la feature d'envoi d'emails de devis
 */

export interface EmailConfig {
  enabled: boolean;
  testMode: boolean;
  testEmail: string;  // dimitri.leduc87@gmail.com
  testClientId: number;
  templateName: string;
}