import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_LIBRARY_SUPABASE_URL || ''
const supabaseKey = import.meta.env.VITE_LIBRARY_SUPABASE_KEY || ''

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ 錯誤：請設置 .env.local 中的 VITE_LIBRARY_SUPABASE_URL 和 VITE_LIBRARY_SUPABASE_KEY')
}

export const supabase = createClient(supabaseUrl, supabaseKey)
