// Configuration auto-proposal
export const autoProposalConfig = {
  inactivityDaysThreshold: 30,  // Clients inactifs depuis X jours

  // Inclure les commandes draft dans l'analyse d'inactivité
  // true = inclure les drafts (recommandé pour test car on crée des commandes passées en draft)
  // false = seulement les commandes confirmées (état 'sale')
  includeDraftOrders: true
};