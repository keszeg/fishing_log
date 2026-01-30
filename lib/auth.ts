import { User } from '@supabase/supabase-js'
import { createSupabaseServerClient } from './supabase'

export type AuthUser = User | null

export async function getCurrentUser(): Promise<AuthUser> {
  const supabase = createSupabaseServerClient()
  
  try {
    const { data: { user }, error } = await supabase.auth.getUser()
    
    if (error) {
      console.error('Error getting user:', error.message)
      return null
    }
    
    return user
  } catch (error) {
    console.error('Error in getCurrentUser:', error)
    return null
  }
}

export async function requireAuth(): Promise<AuthUser> {
  const user = await getCurrentUser()
  
  if (!user) {
    throw new Error('Authentication required')
  }
  
  return user
}
