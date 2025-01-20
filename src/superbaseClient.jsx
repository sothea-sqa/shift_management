// this file maybe dont need anymore, because we already have superbaseClient.js

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://psyenyrznststylkxcbo.supabase.co', // Your Supabase URL
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBzeWVueXJ6bnN0c3R5bGt4Y2JvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczNjQxMDU5NiwiZXhwIjoyMDUxOTg2NTk2fQ.NY0eG-1sEEjtF_y_x3MZBF7_E3ymykog-8u0ZiWDDcI'                      // Your Supabase Anon Key
);

export default supabase;
