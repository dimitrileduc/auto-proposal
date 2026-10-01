/**
 * Readable message of any thrown value (Error, string, object)
 */
export function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error)
}
