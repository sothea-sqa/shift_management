// src/api/auth/login.js

import supabase from '../../config/supabaseClient';

export async function login(email, password, rememberMe = false) {
  try {
    // Set session persistence based on remember me option
    if (rememberMe) {
      await supabase.auth.setSession({ persistSession: true });
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error('Login error:', error.message);
      return { success: false, error: error.message };
    }

    if (!data.user) {
      return { 
        success: false, 
        error: 'No user data received' 
      };
    }

    // Get user profile data
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', data.user.id)
      .single();

    if (profileError) {
      console.error('Error fetching profile:', profileError.message);
      return { success: false, error: profileError.message };
    }

    return {
      success: true,
      user: {
        ...data.user,
        profile
      }
    };

  } catch (error) {
    console.error('Unexpected error during login:', error.message);
    return { 
      success: false, 
      error: 'An unexpected error occurred' 
    };
  }
}

// Helper function to check if user is logged in
export async function checkAuthStatus() {
  const { data: { session }, error } = await supabase.auth.getSession();
  
  if (error) {
    console.error('Auth status error:', error.message);
    return { success: false, error: error.message };
  }

  return {
    success: true,
    isAuthenticated: !!session,
    session
  };
}