'use client'

import { trpc } from "@/app/_trpc/client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { httpBatchLink } from "@trpc/client"
import { PropsWithChildren, useState } from "react"

const Providers = ({ children }: PropsWithChildren) => {
    //QueryClient is responsible for managing all the data fetching, caching, synchronization, and state management logic related to queries in your application. It provides methods to interact with the cache, invalidate queries, refetch data, and more.
    const [queryClient] = useState(() => new QueryClient())
    const [trpcClient] = useState(() =>
        trpc.createClient({
            links: [
                httpBatchLink({
                    url: 'http://localhost:3000/api/trpc'
                })
            ]
        }))
    return (
        <trpc.Provider
            client={trpcClient}
            queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </trpc.Provider>
    )
}
export default Providers