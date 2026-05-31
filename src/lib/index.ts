// place files you want to import through the `$lib` alias in this folder.
import { QueryClient } from "@tanstack/svelte-query"

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 30_000,
            refetchOnWindowFocus: true
        }
    }
})

// Services
export * from './services/places'

// Types
export * from './types/places'