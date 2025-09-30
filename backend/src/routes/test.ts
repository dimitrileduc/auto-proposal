import { Hono } from 'hono'
import { getInactiveClients } from '../features/client-inactivity/inactivity.service'
import { getProductOrderHistory } from '../features/stock-analysis/order-history/order-history.service'
import { analyzeStockForClient } from '../features/stock-analysis/stock-analysis.service'

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

/**
 * GET /test/orders/history?partnerId=3&days=360
 * Route de test pour récupérer l'historique des commandes d'un client groupé par produit
 */
test.get('/orders/history', async (c) => {
  try {
    const partnerIdParam = c.req.query('partnerId')
    const daysParam = c.req.query('days')

    const partnerId = partnerIdParam ? parseInt(partnerIdParam, 10) : 3
    const days = daysParam ? parseInt(daysParam, 10) : 360

    if (isNaN(partnerId) || partnerId <= 0) {
      return c.json({ error: 'Le paramètre partnerId doit être un nombre positif' }, 400)
    }

    if (isNaN(days) || days <= 0) {
      return c.json({ error: 'Le paramètre days doit être un nombre positif' }, 400)
    }

    const orderHistory = await getProductOrderHistory(partnerId, days)

    return c.json({
      success: true,
      data: orderHistory,
      productsCount: orderHistory.products.length,
      filters: { partnerId, days }
    })

  } catch (error) {
    console.error('Erreur lors de la récupération de l\'historique des commandes:', error)

    return c.json({
      success: false,
      error: error instanceof Error ? error.message : 'Erreur interne'
    }, 500)
  }
})

/**
 * GET /test/stock/analysis?partnerId=3
 * Route de test pour l'analyse de stock (calcul consommation)
 */
test.get('/stock/analysis', async (c) => {
  try {
    const partnerIdParam = c.req.query('partnerId')
    const partnerId = partnerIdParam ? parseInt(partnerIdParam, 10) : 3  // Arthur par défaut

    console.log('Démarrage analyse stock...')
    const analysis = await analyzeStockForClient(partnerId)

    return c.json({
      success: true,
      data: analysis
    })

  } catch (error) {
    console.error('Erreur lors de l\'analyse stock:', error)
    return c.json({
      success: false,
      error: error instanceof Error ? error.message : 'Erreur interne'
    }, 500)
  }
})

export { test }