import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jrjcprwmgimxpukqwces.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpyamNwcndtZ2lteHB1a3F3Y2VzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0OTkyMjEzNSwiZXhwIjoyMDY1NDk4MTM1fQ.pBYaHyaAbb37HJ-LE4QAZj2zYc46MYdYlbWXzWAOwBs'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase