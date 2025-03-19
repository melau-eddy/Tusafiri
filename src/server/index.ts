import { tripRouter } from './routers/trip'
import { createCallerFactory, createTRPCRouter } from './trpc'

/**
 * This is the primary router for your server.
 * All routers added in /api/routers should be manually added here.
 */

export const appRouter = createTRPCRouter({
  trip: tripRouter,
})

export type AppRouter = typeof appRouter
export const createCaller = createCallerFactory(appRouter)
