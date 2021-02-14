import React from 'react';
// DATABASE
import { projectAuth, projectAuthProvider } from './firebase';

const Auth = ({ setUser }) => {
  const handleSignin = () => {
    // sign in stuff ..
    projectAuth
      .signInWithPopup(projectAuthProvider)
      .then((res) => {
        setUser({
          name: res.user.displayName,
          email: res.user.email,
          uid: res.user.uid,
        });
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="auth">
      <h1>FireGram</h1>
      <h1>Join us to create your MEMORY.</h1>
      <button onClick={handleSignin}>Sign with Google</button>
    </div>
  );
};

export default Auth;
