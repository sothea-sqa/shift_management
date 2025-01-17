import supabase from '../../config/supabaseClient';

export async function createProfile(id, profileData) {
  const { data, error } = await supabase
    .from('profiles')
    .insert([{ id, ...profileData }]);

  if (error) {
    console.error('Error creating profile:', error.message);
    return { success: false, error: error.message };
  }

  return { success: true, data };
}