/**
 * Client inactivity types
 * @module features/client-inactivity/types
 */

/**
 * Inactive client detected during analysis
 */
export interface InactiveClient {
  id: number;
  name: string;
  email: string | null;
}
