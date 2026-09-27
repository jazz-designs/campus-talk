import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jodnqenkuzpmswtoczzj.supabase.co'
const supabaseAnonKey = 'sb_publishable_c7LcYMEiiEVv_Bj8lI0F-A_7NjjRG7o'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
