import { Hono } from 'hono'
import { getInactiveClients } from '../features/auto-proposal/client-inactivity/inactivity.service'

const test = new Hono()

/**
 * GET /test/clients/inactive?days=30
 * Route de test pour récupérer les clients inactifs
 */
test.get('/clients/inactive', async (c) => {
  try {
    const daysParam = c.req.query('days')
    const days = daysParam ? parseInt(daysParam, 10) : 30

    if (isNaN(days) || days <= 0) {
      return c.json({ error: 'Le paramètre days doit être un nombre positif' }, 400)
    }

    const inactiveClients = await getInactiveClients(days)

    return c.json({
      success: true,
      data: inactiveClients,
      count: inactiveClients.length,
      filters: { days }
    })

  } catch (error) {
    console.error('Erreur lors de la récupération des clients inactifs:', error)

    return c.json({
      success: false,
      error: error instanceof Error ? error.message : 'Erreur interne'
    }, 500)
  }
})

export { test }