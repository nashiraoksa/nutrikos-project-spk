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

    navigate('/');
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert('Berhasil Login!');
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
      });
    navigate('/');
  };

  return (
    <div className="login-card">
      <h2 className="login-title">Login</h2>
      <input type="email" className="input-login" placeholder="Email" onChange={(e) => setEmail(e.target.value)} /> <br />
      <input type="password" className="input-login" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /> <br />
      <Button variant="success" className="login-button" onClick={signIn}>
        Login
      </Button>
      <div className="or-wrap">
        <p className="login-or">or</p>
      </div>
      <Button onClick={signInWithGoogle}>Login With Google</Button>
    </div>
  );
};
