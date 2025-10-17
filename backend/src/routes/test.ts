import { Hono } from 'hono'
import { getInactiveClients } from '../features/client-inactivity/inactivity.service'
import { getProductOrderHistory } from '../features/stock-replenishment/order-history/order-history.service'
import { calculateReplenishmentNeeds } from '../features/stock-replenishment/stock-replenishment.service'
import { autoProposalConfig } from '../config/auto-proposal'

const test = new Hono()

/**
 * GET /test/clients/inactive?days=30&excludeAutoProposal=true
 * Route de test pour récupérer les clients inactifs
 */
test.get('/clients/inactive', async (c) => {
  try {
    const daysParam = c.req.query('days')
    const excludeAutoProposalParam = c.req.query('excludeAutoProposal')

    const days = daysParam ? parseInt(daysParam, 10) : 30
    const excludeAutoProposal = excludeAutoProposalParam === 'true'

    if (isNaN(days) || days <= 0) {
      return c.json({ error: 'Le paramètre days doit être un nombre positif' }, 400)
    }

    const excludeTagId = excludeAutoProposal
      ? autoProposalConfig.quoteGeneration.autoProposalTagId
      : undefined

    const inactiveClients = await getInactiveClients(days, excludeTagId)

    return c.json({
      success: true,
      data: inactiveClients,
      count: inactiveClients.length,
      filters: {
        days,
        excludeAutoProposal,
        excludeTagId
      }
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
 * GET /test/stock/replenishment?partnerId=3
 * Route de test pour le calcul des besoins de réapprovisionnement
 */
test.get('/stock/replenishment', async (c) => {
  try {
    const partnerIdParam = c.req.query('partnerId')
    const partnerId = partnerIdParam ? parseInt(partnerIdParam, 10) : 3  // Arthur par défaut

    console.log('Calcul des besoins de réapprovisionnement...')
    const analysis = await calculateReplenishmentNeeds(partnerId)

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