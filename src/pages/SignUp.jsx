import Button from 'react-bootstrap/Button';
import { auth, provider } from '../config/firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

export const SignUp = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    // result contain information about user who signed in
    const result = await signInWithPopup(auth, provider);
    // console.log(result);
    navigate('/');
  };

  // const auth = getAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        alert('Berhasil Sign Up!');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        alert(errorCode);
        // ..
      });
    navigate('/');
  };

  return (
    <div>
      <h1>SIGN UP PAGE</h1>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <Button variant="success" onClick={signUp}>
        Sign Up
      </Button>

      <p>Sign in with Google</p>
      <Button onClick={signInWithGoogle}>Sign In</Button>
    </div>
  );
};
