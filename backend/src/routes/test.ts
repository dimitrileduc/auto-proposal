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
import { createOdooClient } from '../infrastructure/odoo/odoo.service'
import { getTodayAsDateString } from '../utils/date.utils'

const test = new Hono()

/**
 * Fetches inactive clients by inactivity period
 *
 * GET /test/clients/inactive?days=30&excludeAutoProposal=true&companyId=3
 *
 * @query days Inactivity period in days (default: 30)
 * @query excludeAutoProposal Exclude clients with auto-proposal quotes (default: false)
 * @query companyId Filter by selling company ID (default: from config = FOODPRINT SRL)
 * @returns List of inactive clients
 */
test.get('/clients/inactive', async (c) => {
  try {
    const daysParam = c.req.query('days')
    const excludeAutoProposalParam = c.req.query('excludeAutoProposal')
    const companyIdParam = c.req.query('companyId')

    const days = daysParam ? parseInt(daysParam, 10) : 30
    const excludeAutoProposal = excludeAutoProposalParam === 'true'
    const companyId = companyIdParam ? parseInt(companyIdParam, 10) : autoProposalConfig.defaultCompanyId

    if (isNaN(days) || days <= 0) {
      return c.json({ error: 'Parameter days must be a positive number' }, 400)
    }

    const excludeTagId = excludeAutoProposal
      ? autoProposalConfig.quoteGeneration.autoProposalTagId
      : undefined

    // Calculate dateMin and dateMax from days
    const today = getTodayAsDateString()
    const dateMax = today
    const dateMinDate = new Date()
    dateMinDate.setDate(dateMinDate.getDate() - days)
    const dateMin = dateMinDate.toISOString().split('T')[0] + ' 00:00:00'

    const inactiveClients = await getInactiveClients(
      dateMin,
      dateMax,
      excludeTagId,
      undefined, // excludedPartnerTagId
      companyId
    )

    return c.json({
      success: true,
      data: inactiveClients,
      count: inactiveClients.length,
      filters: {
        days,
        dateMin,
        dateMax,
        excludeAutoProposal,
        excludeTagId,
        companyId
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
 * GET /test/orders/history?partnerId=3&days=360&companyId=3
 *
 * @query partnerId Partner ID (default: 3)
 * @query days History period in days (default: 360)
 * @query companyId Filter by selling company ID (default: from config = FOODPRINT SRL)
 * @returns Order history grouped by product
 */
test.get('/orders/history', async (c) => {
  try {
    const partnerIdParam = c.req.query('partnerId')
    const daysParam = c.req.query('days')
    const companyIdParam = c.req.query('companyId')

    const partnerId = partnerIdParam ? parseInt(partnerIdParam, 10) : 3
    const days = daysParam ? parseInt(daysParam, 10) : 360
    const companyId = companyIdParam ? parseInt(companyIdParam, 10) : autoProposalConfig.defaultCompanyId

    if (isNaN(partnerId) || partnerId <= 0) {
      return c.json({ error: 'Parameter partnerId must be a positive number' }, 400)
    }

    if (isNaN(days) || days <= 0) {
      return c.json({ error: 'Parameter days must be a positive number' }, 400)
    }

    const referenceDate = getTodayAsDateString()
    const orderHistory = await getProductOrderHistory(partnerId, days, referenceDate, companyId)

    return c.json({
      success: true,
      data: orderHistory,
      productsCount: orderHistory.products.length,
      filters: { partnerId, days, companyId }
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
 * GET /test/stock/replenishment?partnerId=3&companyId=3
 *
 * @query partnerId Partner ID (default: 3)
 * @query companyId Filter by selling company ID (default: from config = FOODPRINT SRL)
 * @returns Stock replenishment analysis
 */
test.get('/stock/replenishment', async (c) => {
  try {
    const partnerIdParam = c.req.query('partnerId')
    const companyIdParam = c.req.query('companyId')
    const partnerId = partnerIdParam ? parseInt(partnerIdParam, 10) : 3
    const companyId = companyIdParam ? parseInt(companyIdParam, 10) : autoProposalConfig.defaultCompanyId

    const analysis = await calculateReplenishmentNeeds(partnerId, {
      companyId
    })

    return c.json({
      success: true,
      data: analysis,
      filters: { partnerId, companyId }
    })

  } catch (error) {
    console.error('Failed to calculate replenishment needs:', error)
    return c.json({
      success: false,
      error: error instanceof Error ? error.message : 'Internal error'
    }, 500)
  }
})

/**
 * Search partners (companies) by name
 *
 * GET /test/partners/search?name=Footprint
 *
 * @query name Partner name to search (required, case-insensitive)
 * @returns List of matching partners with id, name, email
 */
test.get('/partners/search', async (c) => {
  try {
    const name = c.req.query('name')

    if (!name) {
      return c.json({ error: 'Parameter name is required' }, 400)
    }

    const odooClient = createOdooClient(autoProposalConfig.odooApiType)
    const partners = await odooClient.searchPartnersByName(name)

    return c.json({
      success: true,
      data: partners,
      count: partners.length,
      query: name
    })

  } catch (error) {
    console.error('Failed to search partners:', error)
    return c.json({
      success: false,
      error: error instanceof Error ? error.message : 'Internal error'
    }, 500)
  }
})

export { test }