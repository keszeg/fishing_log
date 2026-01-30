import { createBrowserClient, createServerClient } from '@supabase/ssr'

// Client-side Supabase client for use in client components
export const createSupabaseClientComponent = () => {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}

// Server-side Supabase client for use in server components and API routes
export const createSupabaseServerClient = async () => {
  // Dynamic import to avoid module-level dependency on next/headers
  const { cookies } = await import('next/headers')
  const cookieStore = await cookies()
  
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: any) {
          cookieStore.set({ name, value, ...options })
        },
        remove(name: string, options: any) {
          cookieStore.set({ name, value: '', ...options })
        },
      },
    }
  )
}

// Legacy support - use createSupabaseClientComponent instead
export const createSupabaseClient = createSupabaseClientComponent
