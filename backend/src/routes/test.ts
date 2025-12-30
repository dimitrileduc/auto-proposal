/**
 * Test routes for development and debugging
 *
 * Provides endpoints to test individual features of the stock replenishment system.
 *
 * @module routes/test
 */

import { Hono } from 'hono'
import { getInactiveClients } from '../features/client-inactivity/inactivity.service'
import { getProductOrderHistory } from '../features/stock-replenishment/order-history/order-history.service'
import { calculateReplenishmentNeeds } from '../features/stock-replenishment/stock-replenishment.service'
import { autoProposalConfig } from '../config/auto-proposal'

const test = new Hono()

/**
 * Fetches inactive clients by inactivity period
 *
 * GET /test/clients/inactive?days=30&excludeAutoProposal=true
 *
 * @query days Inactivity period in days (default: 30)
 * @query excludeAutoProposal Exclude clients with auto-proposal quotes (default: false)
 * @returns List of inactive clients
 */
test.get('/clients/inactive', async (c) => {
  try {
    const daysParam = c.req.query('days')
    const excludeAutoProposalParam = c.req.query('excludeAutoProposal')

    const days = daysParam ? parseInt(daysParam, 10) : 30
    const excludeAutoProposal = excludeAutoProposalParam === 'true'

    if (isNaN(days) || days <= 0) {
      return c.json({ error: 'Parameter days must be a positive number' }, 400)
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
    console.error('Failed to fetch inactive clients:', error)

    return c.json({
      success: false,
      error: error instanceof Error ? error.message : 'Internal error'
    }, 500)
  }
})

/**
 * Fetches order history for a partner grouped by product
 *
 * GET /test/orders/history?partnerId=3&days=360
 *
 * @query partnerId Partner ID (default: 3)
 * @query days History period in days (default: 360)
 * @returns Order history grouped by product
 */
test.get('/orders/history', async (c) => {
  try {
    const partnerIdParam = c.req.query('partnerId')
    const daysParam = c.req.query('days')

    const partnerId = partnerIdParam ? parseInt(partnerIdParam, 10) : 3
    const days = daysParam ? parseInt(daysParam, 10) : 360

    if (isNaN(partnerId) || partnerId <= 0) {
      return c.json({ error: 'Parameter partnerId must be a positive number' }, 400)
    }

    if (isNaN(days) || days <= 0) {
      return c.json({ error: 'Parameter days must be a positive number' }, 400)
    }

    const orderHistory = await getProductOrderHistory(partnerId, days)

    return c.json({
      success: true,
      data: orderHistory,
      productsCount: orderHistory.products.length,
      filters: { partnerId, days }
    })

  } catch (error) {
    console.error('Failed to fetch order history:', error)

    return c.json({
      success: false,
      error: error instanceof Error ? error.message : 'Internal error'
    }, 500)
  }
})

/**
 * Calculates replenishment needs for a partner
 *
 * GET /test/stock/replenishment?partnerId=3
 *
 * @query partnerId Partner ID (default: 3)
 * @returns Stock replenishment analysis
 */
test.get('/stock/replenishment', async (c) => {
  try {
    const partnerIdParam = c.req.query('partnerId')
    const partnerId = partnerIdParam ? parseInt(partnerIdParam, 10) : 3

    const analysis = await calculateReplenishmentNeeds(partnerId)

    return c.json({
      success: true,
      data: analysis
    })

  } catch (error) {
    console.error('Failed to calculate replenishment needs:', error)
    return c.json({
      success: false,
      error: error instanceof Error ? error.message : 'Internal error'
    }, 500)
  }
})

export { test }