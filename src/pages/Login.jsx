import Button from 'react-bootstrap/Button';
import { auth, provider } from '../config/firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

export const Login = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    // result contain information about user who signed in
    const result = await signInWithPopup(auth, provider);
    // console.log(result);
    navigate('/');
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const auth = getAuth();
  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert('Berhasil Sign Up!');

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        alert(errorCode);
      });
    navigate('/');
  };

  return (
    <div>
      <h1>LOGIN PAGE</h1>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <Button variant="success" onClick={signIn}>
        Login
      </Button>

      <p>Sign in with Google</p>
      <Button onClick={signInWithGoogle}>Sign In</Button>
    </div>
  );
};
