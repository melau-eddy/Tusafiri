'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createTRPCReact, loggerLink, unstable_httpBatchStreamLink } from '@trpc/react-query'
import { inferRouterInputs, inferRouterOutputs } from '@trpc/server'
import { ReactNode, useState } from 'react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import SuperJSON from 'superjson'

import { type AppRouter } from '@/server'

const createQueryClient = () => new QueryClient()

let clientQuerySingleton: QueryClient | undefined = undefined
const getQueryClient = () => {
  if (typeof window === 'undefined') {
    //Server: always make a new query client
    return createQueryClient()
  }
  //Browser: use singleton pattern to keep the same query client
  return (clientQuerySingleton ??= createQueryClient())
}

export const api = createTRPCReact<AppRouter>()

/**
 * Inference helper for inputs and outputs.
 * @example type HelloInput = RouterInputs['example']['hello']
 * @example type HelloOutput = RouterOutputs['example']['hello']
 */
export type RouterInputs = inferRouterInputs<AppRouter>
export type RouterOutputs = inferRouterOutputs<AppRouter>

export function TRPCReactProvider(props: { children: ReactNode }) {
  const queryClient = getQueryClient()

  const [trpcClient] = useState(() => {
    const client = api.createClient({
      links: [
        loggerLink({
          enabled: (op) =>
            process.env.VERCEL_ENV === 'development' || (op.direction === 'down' && op.result instanceof Error),
        }),

        unstable_httpBatchStreamLink({
          transformer: SuperJSON,
          url: getBaseUrl() + '/api/trpc',
          headers: () => {
            const headers = new Headers()
            headers.set('x-trpc-source', 'nextjs-react')
            return headers
          },
        }),
      ],
    })

    return client
  })

  return (
    <QueryClientProvider client={queryClient}>
      <api.Provider client={trpcClient} queryClient={queryClient}>
        {props.children}
      </api.Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

function getBaseUrl() {
  if (typeof window !== 'undefined') {
    return window.location.origin
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }

  return `https://localhost:${process.env.PORT ?? 3000}`
}
