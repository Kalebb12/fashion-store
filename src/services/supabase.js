import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient('https://tqaozvtqizypecpgsdih.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxYW96dnRxaXp5cGVjcGdzZGloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMzMTIyMTUsImV4cCI6MjA0ODg4ODIxNX0.tfKeanZUlllKp3DVWu1pG01T1nof-VrxyPHJAJHOANE')

export default supabase