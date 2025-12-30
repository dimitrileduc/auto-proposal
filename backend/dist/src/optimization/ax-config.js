/**
 * Configuration ax-llm avec OpenRouter
 *
 * Utilise AxAIOpenRouter natif de ax-llm
 */
import { AxAIOpenRouter } from "@ax-llm/ax";
// Model à utiliser pour l'optimisation
// Gemini Flash est rapide et pas cher - idéal pour les nombreux appels MiPRO
const MODEL = "google/gemini-3-flash-preview";
// Alternative plus puissante (mais plus chère) pour le "teacher" model
const TEACHER_MODEL = "anthropic/claude-sonnet-4";
/**
 * Crée une instance ax avec OpenRouter
 */
export function createAxOpenRouter(model = MODEL) {
    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
        throw new Error("OPENROUTER_API_KEY not configured");
    }
    return new AxAIOpenRouter({
        apiKey,
        config: {
            model,
        },
    });
}
// Instance par défaut pour le "student" (model rapide)
export const studentLLM = createAxOpenRouter(MODEL);
// Instance pour le "teacher" (model plus puissant, optionnel)
export const teacherLLM = createAxOpenRouter(TEACHER_MODEL);
// Export du model name pour référence
export { MODEL, TEACHER_MODEL };
