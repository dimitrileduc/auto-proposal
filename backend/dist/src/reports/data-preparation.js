/**
 * Prépare les données pour le rapport d'un client
 *
 * Transforme ClientProposalResult (données brutes du workflow)
 * en ClientReportData (données structurées pour le rapport)
 *
 * @param clientResult - Résultat du workflow pour un client
 * @param config - Configuration du workflow
 * @returns Données formatées pour le rapport client
 */
export function prepareClientReportData(clientResult, config) {
    // Ne générer un rapport que si le traitement a réussi
    // (hasRisk n'est plus une condition - utile pour le backtest où on veut voir pourquoi hasRisk=false)
    if (!clientResult.success) {
        return null;
    }
    // Vérifier que les phases requises sont présentes
    if (!clientResult.phases.stockAnalysis || !clientResult.phases.proposalFinal) {
        return null;
    }
    return {
        client: {
            id: clientResult.clientId,
            name: clientResult.clientName,
            email: clientResult.clientEmail,
        },
        config,
        executionDate: new Date().toISOString(),
        executionTime: clientResult.executionTime ?? 0,
        phases: {
            stockAnalysis: clientResult.phases.stockAnalysis,
            proposalInitial: clientResult.phases.proposalFinal, // Pas de proposalInitial dans le workflow actuel
            proposalFinal: clientResult.phases.proposalFinal,
            quote: clientResult.phases.quote,
        },
        summary: {
            productsCount: clientResult.productsCount ?? 0,
            initialAmount: clientResult.initialAmount ?? 0,
            finalAmount: clientResult.finalAmount ?? 0,
            moqAdjusted: clientResult.moqAdjustmentApplied ?? false,
            moqGap: clientResult.moqGapFilled,
            quoteName: clientResult.quoteName,
            quoteId: clientResult.quoteId,
            quoteState: clientResult.phases.quote?.quote_state,
        },
        // TODO: Ajouter orderHistory si nécessaire
        orderHistory: [],
        phaseTiming: {
            stockAnalysis: 0, // TODO: Ajouter timing dans ClientProposalResult
            proposalPreparation: 0,
            quoteGeneration: 0,
        },
    };
}
/**
 * Prépare les données pour les rapports de tous les clients avec risque
 *
 * @param clientResults - Tous les résultats du workflow
 * @param config - Configuration du workflow
 * @returns Liste des données de rapport pour chaque client avec risque
 */
export function prepareAllClientReportData(clientResults, config) {
    return clientResults
        .map((result) => prepareClientReportData(result, config))
        .filter((data) => data !== null);
}
