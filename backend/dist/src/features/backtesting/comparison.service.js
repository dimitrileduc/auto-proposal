/**
 * Service de comparaison pour le backtesting
 *
 * Compare les prédictions du système auto-proposal avec les commandes réelles Odoo
 * Calcule les métriques: TP/FP/FN, Precision/Recall/F1, MAE, MAPE
 */
/**
 * Compare les prédictions du système auto-proposal avec la commande réelle
 *
 * @param systemProposal - Résultat de la prédiction du système (ProposalPreparationResult)
 * @param realOrderLines - Lignes de la commande réelle Odoo (OdooSaleOrderLine[])
 * @param stockAnalysis - Résultat complet de l'analyse stock (pour analyser les FN)
 * @param orderContext - Contexte de la commande (client, dates, etc.)
 * @returns Résultat complet de la comparaison avec métriques
 */
export function compareSystemPredictionVsRealOrder(systemProposal, realOrderLines, stockAnalysis, orderContext) {
    // 1. Créer des Maps pour faciliter la comparaison (clé = productId)
    const systemProducts = new Map(systemProposal.products.map((p) => [p.product_id, p]));
    // Filtrer les services de la même manière que le système (stock-replenishment.service.ts:48)
    const realProducts = new Map(realOrderLines
        .filter((line) => line.product_type !== "service")
        .map((line) => [line.product_id[0], line]));
    // Map des produits analysés (inclut ceux filtrés par seuil de rupture)
    // Utiliser all_products si disponible (pour backtest), sinon products (pour compatibilité)
    const allProducts = stockAnalysis.all_products ?? stockAnalysis.products;
    const analyzedProducts = new Map(allProducts.map((p) => [p.product_id, p]));
    // 2. Calculer TP/FP/FN
    const truePositives = [];
    const falsePositives = [];
    const falseNegatives = [];
    // 3. Parcourir les prédictions du système
    for (const [productId, systemProduct] of systemProducts) {
        const realProduct = realProducts.get(productId);
        if (realProduct) {
            // TRUE POSITIVE: Le système a prédit ET le client a commandé
            const predictedQty = systemProduct.quantity_to_order;
            const realQty = realProduct.product_uom_qty;
            const absoluteError = Math.abs(predictedQty - realQty);
            // Calcul de l'erreur en pourcentage (pour MAPE)
            // Gérer le cas où realQty = 0 (éviter division par zéro)
            const errorPercent = realQty > 0
                ? (absoluteError / realQty) * 100
                : 0;
            // Récupérer les infos LLM si disponibles
            const analyzedProduct = analyzedProducts.get(productId);
            const quantitySource = analyzedProduct?.quantity_source || 'median';
            const llm_input_data = analyzedProduct?.llm_input_data;
            const llmRequired = analyzedProduct?.llm_required ?? false; // Propagé depuis stock-replenishment
            const llmSuccess = analyzedProduct?.llm_success ?? false; // Propagé depuis stock-replenishment
            const medianQty = quantitySource === 'llm' ? analyzedProduct?.calculation_metadata.median_value : undefined;
            const llmPrediction = analyzedProduct?.llm_prediction;
            truePositives.push({
                productId,
                productName: systemProduct.product_name,
                predictedQty,
                realQty,
                absoluteError,
                errorPercent,
                matchType: classifyQuantityMatch(predictedQty, realQty),
                confidence: systemProduct.calculation_metadata.confidence,
                llm_required: llmRequired,
                llm_success: llmSuccess,
                quantitySource,
                medianQty,
                llm_input_data,
                llmPrediction,
            });
        }
        else {
            // Si on prédit 0, c'est qu'on dit "pas besoin de commander"
            // Donc si le client ne commande pas, c'est CORRECT (True Negative), pas un False Positive
            if (systemProduct.quantity_to_order === 0) {
                // TRUE NEGATIVE: On a prédit 0 (pas de besoin) ET le client n'a pas commandé
                // Ne PAS compter comme False Positive - c'est une bonne prédiction !
                // On pourrait tracker les True Negatives si besoin, mais pour l'instant on skip
                continue;
            }
            // FALSE POSITIVE: Le système a prédit >0 MAIS le client n'a pas commandé
            const analyzedProduct = analyzedProducts.get(productId);
            let reason = "Prédit mais non commandé";
            if (analyzedProduct) {
                const stock = analyzedProduct.stock_prediction.estimated_stock_remaining;
                const days = analyzedProduct.stock_prediction.days_until_stockout;
                reason = `Stock prédit: ${stock.toFixed(1)}u (${days}j restants) → prédit ${systemProduct.quantity_to_order}u mais non commandé`;
            }
            // Déterminer la confidence basée sur l'historique
            const orderCount = analyzedProduct?.order_history?.length ?? 0;
            const confidence = orderCount >= 5 ? 'high' : orderCount >= 2 ? 'medium' : 'low';
            // Récupérer les infos LLM (même structure que TP)
            const fpQuantitySource = analyzedProduct?.quantity_source || 'median';
            const fpLlmInputData = analyzedProduct?.llm_input_data;
            const fpLlmRequired = analyzedProduct?.llm_required ?? false;
            const fpLlmSuccess = analyzedProduct?.llm_success ?? false;
            const fpMedianQty = fpQuantitySource === 'llm' ? analyzedProduct?.calculation_metadata.median_value : undefined;
            const fpLlmPrediction = analyzedProduct?.llm_prediction;
            falsePositives.push({
                productId,
                productName: systemProduct.product_name,
                qty: systemProduct.quantity_to_order,
                reason,
                confidence,
                llm_required: fpLlmRequired,
                llm_success: fpLlmSuccess,
                quantitySource: fpQuantitySource,
                medianQty: fpMedianQty,
                llm_input_data: fpLlmInputData,
                llmPrediction: fpLlmPrediction,
            });
        }
    }
    // 4. Parcourir les commandes réelles pour trouver les FN
    for (const [productId, realProduct] of realProducts) {
        const systemProduct = systemProducts.get(productId);
        // Si on n'a pas du tout prédit ce produit OU si on a prédit 0
        if (!systemProduct || systemProduct.quantity_to_order === 0) {
            // FALSE NEGATIVE: Le client a commandé MAIS le système n'avait pas prédit (ou prédit 0)
            let reason = "Raison inconnue";
            // Vérifier si le produit était dans stockAnalysis (analysé mais filtré)
            const analyzedProduct = analyzedProducts.get(productId);
            if (systemProduct && systemProduct.quantity_to_order === 0) {
                // On avait prédit 0 (pas de besoin) mais le client a commandé
                const stock = analyzedProduct?.stock_prediction.estimated_stock_remaining ?? 0;
                const days = analyzedProduct?.stock_prediction.days_until_stockout ?? 0;
                reason = `LLM avait prédit 0 (pas de besoin) avec stock: ${stock.toFixed(1)}u (${days}j) mais client a commandé ${realProduct.product_uom_qty}u`;
            }
            else if (analyzedProduct) {
                // Produit analysé mais filtré
                const stock = analyzedProduct.stock_prediction.estimated_stock_remaining;
                const days = analyzedProduct.stock_prediction.days_until_stockout;
                const threshold = analyzedProduct.stock_prediction.replenishment_threshold_days;
                // Déterminer la vraie raison du filtrage
                if (days < 0) {
                    reason = `En rupture (${days}j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant)`;
                }
                else if (days > threshold) {
                    reason = `Stock suffisant: ${stock.toFixed(1)}u (${days}j restants > seuil ${threshold}j)`;
                }
                else {
                    reason = `Stock: ${stock.toFixed(1)}u (${days}j restants) - filtré pour autre raison`;
                }
            }
            else {
                // Produit PAS dans stockAnalysis → jamais commandé avant dans la fenêtre d'analyse
                const windowDays = orderContext.analysisWindowDays ?? 120;
                reason = `Jamais commandé avant dans les ${windowDays}j précédents (pas d'historique)`;
            }
            // Déterminer la confidence basée sur l'historique
            const orderCount = analyzedProduct?.order_history?.length ?? 0;
            const confidence = orderCount >= 5 ? 'high' : orderCount >= 2 ? 'medium' : 'low';
            // Récupérer les infos LLM (même structure que TP)
            const fnQuantitySource = analyzedProduct?.quantity_source || 'unknown';
            const fnLlmInputData = analyzedProduct?.llm_input_data;
            const fnLlmRequired = analyzedProduct?.llm_required ?? false;
            const fnLlmSuccess = analyzedProduct?.llm_success ?? false;
            const fnMedianQty = analyzedProduct?.calculation_metadata?.median_value;
            const fnLlmPrediction = analyzedProduct?.llm_prediction;
            falseNegatives.push({
                productId,
                productName: realProduct.product_id[1],
                qty: realProduct.product_uom_qty,
                reason,
                confidence,
                llm_required: fnLlmRequired,
                llm_success: fnLlmSuccess,
                quantitySource: fnQuantitySource,
                medianQty: fnMedianQty,
                llm_input_data: fnLlmInputData,
                llmPrediction: fnLlmPrediction,
            });
        }
    }
    // 5. Calculer les métriques
    const productMetrics = calculateProductMetrics(truePositives.length, falsePositives.length, falseNegatives.length);
    const quantityMetrics = calculateQuantityMetrics(truePositives);
    // 6. Retourner le résultat complet
    return {
        ...orderContext,
        truePositives,
        falsePositives,
        falseNegatives,
        productMetrics,
        quantityMetrics,
        llmUsage: stockAnalysis.llm_usage,
    };
}
/**
 * Calcule les métriques de détection produit (binaire)
 *
 * @param tp - Nombre de True Positives
 * @param fp - Nombre de False Positives
 * @param fn - Nombre de False Negatives
 * @returns Métriques: precision, recall, f1Score, totaux
 */
export function calculateProductMetrics(tp, fp, fn) {
    const totalPredicted = tp + fp;
    const totalReal = tp + fn;
    // Precision = TP / (TP + FP)
    // "Sur 100 produits prédits, combien sont vraiment commandés ?"
    const precision = totalPredicted > 0 ? tp / totalPredicted : 0;
    // Recall = TP / (TP + FN)
    // "Sur 100 produits commandés, combien ont été détectés ?"
    const recall = totalReal > 0 ? tp / totalReal : 0;
    // F1-Score = 2 × (Precision × Recall) / (Precision + Recall)
    // Score équilibré entre précision et rappel
    const f1Score = precision + recall > 0
        ? (2 * (precision * recall)) / (precision + recall)
        : 0;
    return {
        precision,
        recall,
        f1Score,
        totalPredicted,
        totalReal,
    };
}
/**
 * Calcule les métriques de précision quantité (continue)
 *
 * @param truePositives - Liste des produits correctement prédits avec quantités
 * @returns Métriques: MAE (principale), wMAPE (robuste), MAPE (info), distribution
 */
export function calculateQuantityMetrics(truePositives) {
    if (truePositives.length === 0) {
        return {
            mae: 0,
            wmape: 0,
            mape: 0,
            bias: 0,
            distribution: { exactMatch: 0, partialMatch: 0 },
        };
    }
    // MAE = Mean Absolute Error (unités) - MÉTRIQUE PRINCIPALE
    // Formule: MAE = (1/N) × Σ |Qté_Prédite - Qté_Réelle|
    // Avantages: Symétrique, facile à interpréter ("en moyenne, on se trompe de X unités")
    const mae = truePositives.reduce((sum, tp) => sum + tp.absoluteError, 0) /
        truePositives.length;
    // wMAPE = Weighted Mean Absolute Percentage Error (%) - MÉTRIQUE ROBUSTE RECOMMANDÉE
    // Formule: wMAPE = Σ |Qté_Prédite - Qté_Réelle| / Σ Qté_Réelle × 100%
    // Avantages: Pas de biais asymétrique, robuste aux petites quantités, recommandé en supply chain
    const totalAbsoluteError = truePositives.reduce((sum, tp) => sum + tp.absoluteError, 0);
    const totalActual = truePositives.reduce((sum, tp) => sum + tp.realQty, 0);
    const wmape = totalActual > 0 ? (totalAbsoluteError / totalActual) * 100 : 0;
    // MAPE = Mean Absolute Percentage Error (%) - INFO (biaisé, gardé pour comparaison historique)
    // Formule: MAPE = (1/N) × Σ |Qté_Prédite - Qté_Réelle| / Qté_Réelle × 100%
    // Limitations: Asymétrique (pénalise 2-3× plus sur-estimation), explose sur petites quantités
    const mape = truePositives.reduce((sum, tp) => sum + tp.errorPercent, 0) /
        truePositives.length;
    // BIAS = Biais directionnel (%) - DIAGNOSTIC SUR/SOUS-ESTIMATION
    // Formule: Bias = Σ (Qté_Prédite - Qté_Réelle) / Σ Qté_Réelle × 100%
    // Interprétation: > 0 = surestimation, < 0 = sous-estimation, = 0 = équilibré
    const totalSignedError = truePositives.reduce((sum, tp) => sum + (tp.predictedQty - tp.realQty), 0);
    const bias = totalActual > 0 ? (totalSignedError / totalActual) * 100 : 0;
    // Distribution: exact (erreur = 0) vs partial (erreur > 0)
    const exactMatch = truePositives.filter((tp) => tp.matchType === "exact")
        .length;
    const partialMatch = truePositives.filter((tp) => tp.matchType === "partial")
        .length;
    return {
        mae,
        wmape,
        mape,
        bias,
        distribution: { exactMatch, partialMatch },
    };
}
/**
 * Classifie la qualité d'un match selon l'erreur absolue de quantité
 *
 * Classification simple à 2 niveaux:
 * - Exact: erreur = 0 (égalité parfaite)
 * - Partial: erreur > 0 (avec erreur, quelle qu'elle soit)
 *
 * @param predictedQty - Quantité prédite par le système
 * @param realQty - Quantité réelle commandée
 * @returns Type de match: 'exact' | 'partial'
 */
export function classifyQuantityMatch(predictedQty, realQty) {
    const absoluteError = Math.abs(predictedQty - realQty);
    if (absoluteError === 0)
        return "exact"; // Égalité parfaite
    return "partial"; // Toute erreur > 0
}
