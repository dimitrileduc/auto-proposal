/**
 * Service LLM via ax-llm - Version simplifiée sans demos
 */
import { ax, AxAIOpenRouter } from "@ax-llm/ax";
// Configuration
const MODEL = "google/gemini-3-flash-preview";
// Signature ax - Prompt EXACT généré par Claude Sonnet 4.5 via GEPA
const stockPredictorSignature = `
"Tu es un assistant spécialisé dans la prévision de commandes de produits alimentaires pour un commerce de détail. Ta tâche est de prédire la quantité exacte de la prochaine commande pour un produit donné.

## Données fournies :
- **productName** : Nom et code du produit
- **recentOrders** : Historique des commandes récentes (2025) avec dates et quantités
- **lastYearOrders** : Historique des commandes de l'année précédente (2024 et avant)
- **currentDate** : Date actuelle pour la prévision
- **quantity** : La quantité réelle commandée (pour validation)

## Stratégie de prévision :

### RÈGLE PRINCIPALE : Privilégier la dernière commande
La règle la plus importante est de **vérifier le dernier cycle de commande**. La dernière quantité commandée est souvent le meilleur indicateur, surtout pour les produits à rotation stable.

### Utiliser la MÉDIANE, pas le maximum
- Ne pas surestimer en prenant les valeurs maximales de l'historique
- Calculer la médiane ou la valeur typique des commandes récentes
- Les pics exceptionnels (comme 42u, 48u dans l'historique) ne doivent PAS être utilisés pour la prévision courante
- Les valeurs extrêmes sont souvent des événements ponctuels (promotions, événements spéciaux)

### Analyse de la fréquence et des cycles
1. Identifier l'intervalle typique entre commandes (hebdomadaire, mensuel, bimensuel, etc.)
2. Vérifier si suffisamment de temps s'est écoulé depuis la dernière commande
3. Pour les produits avec historique stable, maintenir la quantité habituelle

### Saisonnalité
- Comparer avec la même période de l'année précédente si disponible
- Ne pas extrapoler des tendances saisonnières sans données solides
- La prudence est de mise pour les périodes sans historique comparable

### Cas particuliers :

**Produits à rotation très faible (1 unité par commande)**
- Si l'historique montre systématiquement 1u, prévoir 1u
- Ne pas augmenter sans raison valable

**Produits sans historique récent**
- Se baser sur lastYearOrders pour la même période si disponible
- Pour les nouveaux produits sans aucun historique, commencer avec 1u (pas 12u ou plus)
- Éviter les quantités spéculatives

**Produits à rotation régulière**
- Si les 3-5 dernières commandes sont identiques (ex: toujours 16u), maintenir cette quantité
- La stabilité historique est un fort indicateur

**Gestion des tendances**
- Une augmentation récente (1u → 2u → 3u) suggère de suivre la tendance, mais avec prudence
- Une diminution récente doit être respectée (ne pas revenir aux anciennes quantités plus élevées)

## Erreurs à éviter :
❌ Surestimer en prenant le maximum de l'historique
❌ Ignorer la dernière commande récente
❌ Prévoir 12u ou plus pour un nouveau produit sans historique
❌ Extrapoler des tendances saisonnières sans données solides
❌ Moyenner aveuglément sans considérer les valeurs aberrantes

## Objectif :
Minimiser l'écart entre la prévision et la quantité réelle en privilégiant la précision sur l'optimisme. En cas de doute entre deux quantités, choisir la plus conservatrice (la plus basse)."

productName:string,
recentOrders:string,
lastYearOrders:string,
currentDate:string
->
quantity:number,
reasoning:string
`;
// Instance LLM (créée une seule fois)
let llmInstance = null;
let predictorInstance = null;
let initialized = false;
/**
 * Initialise le predictor ax
 */
function initPredictor() {
    if (llmInstance && predictorInstance && initialized) {
        return { llm: llmInstance, predictor: predictorInstance };
    }
    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
        throw new Error("OPENROUTER_API_KEY not configured");
    }
    // Créer l'instance LLM
    llmInstance = new AxAIOpenRouter({
        apiKey,
        config: { model: MODEL },
    });
    // Créer le predictor
    predictorInstance = ax(stockPredictorSignature);
    initialized = true;
    console.log(`✅ ax: Predictor initialisé (${MODEL}, sans demos)`);
    return { llm: llmInstance, predictor: predictorInstance };
}
/**
 * Formate les commandes pour le prompt ax
 */
function formatOrders(orders) {
    if (!orders || orders.length === 0) {
        return "(Aucune commande)";
    }
    return orders
        .map((o) => {
        const date = o.date.split(" ")[0];
        const dayName = new Date(date).toLocaleDateString("fr-FR", { weekday: "short" });
        return `${date} (${dayName}): ${o.quantity}u`;
    })
        .join("\n");
}
/**
 * Prédit la quantité à commander via ax
 */
export async function predictWithAxOptimized(input) {
    const { llm, predictor } = initPredictor();
    const currentDate = input.currentDate || new Date().toISOString().split("T")[0];
    // Formater les inputs pour ax
    const axInput = {
        productName: input.productName,
        recentOrders: formatOrders(input.recentOrders),
        lastYearOrders: formatOrders(input.lastYearOrders),
        currentDate,
    };
    try {
        // Appeler ax
        const result = await predictor.forward(llm, axInput);
        // Quantité de la prochaine commande (0 = pas de commande prévue)
        const quantity = Math.max(0, Math.round(result.quantity || 0));
        // Mapper vers LLMPrediction
        const prediction = {
            analysis: {
                frequency_pattern: "Analysé par ax",
                detected_outliers: [],
                seasonality_impact: "none",
                trend_direction: "stable",
            },
            baseline_quantity: quantity,
            recommended_quantity: quantity,
            confidence: "medium",
            reasoning: result.reasoning || "",
            summary: result.summary || "",
        };
        // Récupérer l'usage
        const usage = predictor.getUsage();
        const lastUsage = usage[usage.length - 1] || {};
        const llmUsage = {
            promptTokens: lastUsage.promptTokens || 0,
            completionTokens: lastUsage.completionTokens || 0,
            totalTokens: lastUsage.totalTokens || 0,
        };
        return {
            prediction,
            usage: llmUsage,
            model: MODEL,
            provider: "ax-openrouter",
            inputPrompt: `[ax] ${input.productName}`,
        };
    }
    catch (error) {
        console.error("❌ ax prediction failed:", error);
        throw new Error(`Failed to predict with ax: ${error instanceof Error ? error.message : "Unknown error"}`);
    }
}
/**
 * Export par défaut compatible avec l'ancien service
 */
export { predictWithAxOptimized as predictWithLLM };
