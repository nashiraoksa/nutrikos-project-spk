import Button from 'react-bootstrap/Button';
import { auth, provider } from '../config/firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';

export const SignUp = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    // result contain information about user who signed in
    const result = await signInWithPopup(auth, provider);

    navigate('/DSS');
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        alert('Berhasil Sign Up!');
      })
      .catch((error) => {
        const errorCode = error.code;

        alert(errorCode);
      });
    navigate('/DSS');
  };

  return (
    <div className="login-card">
      <h2 className="login-title">Sign Up</h2>
      <input type="email" className="input-login" placeholder="Email" onChange={(e) => setEmail(e.target.value)} /> <br />
      <input type="password" className="input-login" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /> <br />
      <Button variant="success" className="fill-button" onClick={signUp}>
        Sign Up
      </Button>
      <div className="or-wrap">
        <p className="login-or">or</p>
      </div>
      <Button onClick={signInWithGoogle}>
        <FaGoogle className="google"></FaGoogle> Sign Up With Google
      </Button>
    </div>
  );
};
