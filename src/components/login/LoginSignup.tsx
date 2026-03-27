import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import './LoginSignup.css';

export default function LoginSignup() {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const navigate = useNavigate();

  const switchMode = (loginMode: boolean) => {
    setIsLoginMode(loginMode);
    setErrorMessage('');
  };

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || password.length < 6) return;
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/main');
    } catch (error: any) {
      if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
        setErrorMessage('Incorrect username or password');
      } else {
        setErrorMessage(error.message);
      }
    }
  };

  const signup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || password.length < 6 || confirmPassword.length < 6) return;
    
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/main');
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        setErrorMessage('Email already exists with an account');
      } else {
        setErrorMessage(error.message);
      }
    }
  };

  return (
    <div className="login-box">
      <div className="login-bar">
        <div onClick={() => switchMode(false)} className={!isLoginMode ? 'active' : ''}>Sign Up</div>
        <div onClick={() => switchMode(true)} className={isLoginMode ? 'active' : ''}>Login</div>
      </div>

      {isLoginMode ? (
        <form onSubmit={login}>
          <p className="login-info">Enter your email address</p>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" autoComplete="off" required />
          <p className="login-info">Enter your password</p>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" autoComplete="off" required minLength={6} />
          <button type="submit" className="login-button" disabled={!email || password.length < 6}>Login</button>
          {errorMessage && <p className="login-error">{errorMessage}</p>}
        </form>
      ) : (
        <form onSubmit={signup}>
          <p className="login-info">Please put a valid email address</p>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" autoComplete="off" required />
          <span className="login-info">Create a password </span>
          <span className="login-requirements">(*Must be at least 6 characters long)</span>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" autoComplete="off" required minLength={6} />
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" autoComplete="off" required minLength={6} />
          <button type="submit" className="login-button" disabled={!email || password.length < 6 || confirmPassword.length < 6}>Sign Up</button>
          {errorMessage && <p className="login-error">{errorMessage}</p>}
        </form>
      )}
    </div>
  );
}
