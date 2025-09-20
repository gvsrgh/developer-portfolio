import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Type definitions for our database tables (we'll expand these as needed)
export type Profile = {
  id: string
  name: string
  email: string
  bio: string
  avatar_url?: string
  role: string
  tagline: string
  location: string
  social_links: Record<string, string>
  created_at: string
  updated_at: string
}

export type Project = {
  id: string
  title: string
  description: string
  long_description?: string
  image_url?: string
  demo_url?: string
  github_url?: string
  technologies: string[]
  category: string
  featured: boolean
  completed_at: string
  created_at: string
}

export type Skill = {
  id: string
  name: string
  category: string
  level: number // 1-5 scale
  icon?: string
  created_at: string
}