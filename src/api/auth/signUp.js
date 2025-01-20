import supabase from '../../config/supabaseClient';
import { createProfile } from '../users/createProfile';

export async function signUp(email, password, metadata) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: metadata,
    },
  });

  if (error) {
    console.error('Error during sign-up:', error.message);
    return { success: false, error: error.message };
  }

  const user = data.user;

  if (!user) {
    console.log('Sign-up successful, but user needs to confirm their email.');
    return { success: true, message: 'Please confirm your email to complete the sign-up process.' };
  }
  
  const { role, ...profileData } = metadata;

  const profileResponse = await createProfile(user.id, metadata);
  if (!profileResponse.success) {
    console.error('Error creating profile:', profileResponse.error);
    return { success: false, error: profileResponse.error };
  }

  return { success: true, user };
}
