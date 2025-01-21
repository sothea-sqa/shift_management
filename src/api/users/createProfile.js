import supabase from '../../config/supabaseClient';

export async function createProfile(user_id, profileData) {
  const { data, error } = await supabase
    .from('profiles')
    .insert([{ user_id, ...profileData }]); // Use user_id instead of id

  if (error) {
    console.error('Error creating profile:', error.message);
    return { success: false, error: error.message };
  }

  return { success: true, data };
}
