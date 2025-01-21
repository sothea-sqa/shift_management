import supabase from '../../config/supabaseClient';

export async function logout() {
  try {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error('Error during logout:', error.message);
      return { success: false, error: error.message };
    }

    console.log('Logout successful');
    return { success: true };
  } catch (error) {
    console.error('Unexpected error during logout:', error.message);
    return { success: false, error: error.message };
  }
}
