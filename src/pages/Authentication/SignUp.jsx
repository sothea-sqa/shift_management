import React, { useState } from 'react';
import { signUp } from '../../api/auth/signUp';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [metadata, setMetadata] = useState({ first_name: '', last_name: '', phone_number: '', role: 'Manager' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await signUp(email, password, metadata);
    if (response.success) {
      console.log('User signed up:', response.user);
    } else {
      console.error('Sign-up error:', response.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="First Name"
        value={metadata.first_name}
        onChange={(e) => setMetadata({ ...metadata, first_name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={metadata.last_name}
        onChange={(e) => setMetadata({ ...metadata, last_name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={metadata.phone_number}
        onChange={(e) => setMetadata({ ...metadata, phone_number: e.target.value })}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;