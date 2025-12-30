/**
 * Health check route
 *
 * Provides a simple endpoint to verify the service is running.
 *
 * @module routes/health
 */

import { Hono } from 'hono'

const health = new Hono()

/**
 * Health check endpoint
 *
 * @returns JSON object with status and timestamp
 */
health.get('/health', (c) => {
  return c.json({
    status: 'OK',
    timestamp: new Date().toISOString()
  })
})

export default health