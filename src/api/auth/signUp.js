import supabase from '../../config/supabaseClient';
import { createProfile } from '../users/createProfile';

export async function signUp(email, password, metadata) {
  const { data, error } = await supabase.auth.signUp(
    {
      email,
      password,
    },
    {
      data: metadata,
    }
  );

  if (error) {
    console.error('Error during sign-up:', error.message);
    return { success: false, error: error.message };
  }

  if (!data.user) {
    console.error('No user returned from sign-up');
    return { success: false, error: 'Sign-up failed' };
  }

  const profileResponse = await createProfile(data.user.id, metadata); // Pass user.id as user_id
  if (!profileResponse.success) {
    console.error('Error creating profile:', profileResponse.error);
    return { success: false, error: profileResponse.error };
  }

  return { success: true, user: data.users };
}
