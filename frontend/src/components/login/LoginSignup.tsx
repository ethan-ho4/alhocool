import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import './LoginSignup.css';

function getAuthErrorMessage(code?: string) {
  switch (code) {
    case 'auth/invalid-email':
      return 'Please enter a valid email address.';
    case 'auth/invalid-credential':
    case 'auth/user-not-found':
    case 'auth/wrong-password':
      return 'Incorrect email or password.';
    case 'auth/email-already-in-use':
      return 'An account with this email already exists.';
    case 'auth/weak-password':
      return 'Password must be at least 6 characters.';
    case 'auth/too-many-requests':
      return 'Too many attempts. Please wait and try again.';
    case 'auth/network-request-failed':
      return 'Network error. Check your connection and try again.';
    default:
      return 'Something went wrong. Please try again.';
  }
}

export default function LoginSignup() {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const navigate = useNavigate();

  const switchMode = (loginMode: boolean) => {
    setIsLoginMode(loginMode);
    setErrorMessage('');
    setPassword('');
    setConfirmPassword('');
  };

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');
    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedEmail) {
      setErrorMessage('Email is required.');
      return;
    }
    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters.');
      return;
    }
    
    if (!auth) {
      setErrorMessage('Sign-in is not configured. Add valid Firebase keys to frontend/.env.');
      return;
    }

    try {
      setIsSubmitting(true);
      await signInWithEmailAndPassword(auth, normalizedEmail, password);
      navigate('/main');
    } catch (error: unknown) {
      const code = typeof error === 'object' && error !== null && 'code' in error
        ? String((error as { code?: string }).code)
        : undefined;
      setErrorMessage(getAuthErrorMessage(code));
    } finally {
      setIsSubmitting(false);
    }
  };

  const signup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');
    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedEmail) {
      setErrorMessage('Email is required.');
      return;
    }
    if (password.length < 6 || confirmPassword.length < 6) {
      setErrorMessage('Password must be at least 6 characters.');
      return;
    }
    
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    if (!auth) {
      setErrorMessage('Sign-in is not configured. Add valid Firebase keys to frontend/.env.');
      return;
    }

    try {
      setIsSubmitting(true);
      await createUserWithEmailAndPassword(auth, normalizedEmail, password);
      navigate('/main');
    } catch (error: unknown) {
      const code = typeof error === 'object' && error !== null && 'code' in error
        ? String((error as { code?: string }).code)
        : undefined;
      setErrorMessage(getAuthErrorMessage(code));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-box">
      <div className="login-header">
        <p className="login-eyebrow">Welcome to Alhocool</p>
        <h2>{isLoginMode ? 'Sign in to your account' : 'Create your account'}</h2>
      </div>

      <div className="login-bar">
        <button type="button" onClick={() => switchMode(false)} className={!isLoginMode ? 'active' : ''}>
          Sign Up
        </button>
        <button type="button" onClick={() => switchMode(true)} className={isLoginMode ? 'active' : ''}>
          Login
        </button>
      </div>

      {isLoginMode ? (
        <form className="login-form" onSubmit={login}>
          <label className="login-info" htmlFor="login-email">Email address</label>
          <input id="login-email" type="email" value={email} onChange={(e) => { setEmail(e.target.value); setErrorMessage(''); }} placeholder="Email" autoComplete="email" required />
          <label className="login-info" htmlFor="login-password">Password</label>
          <input id="login-password" type="password" value={password} onChange={(e) => { setPassword(e.target.value); setErrorMessage(''); }} placeholder="Password" autoComplete="current-password" required minLength={6} />
          <button type="submit" className="login-button" disabled={isSubmitting || !email || password.length < 6}>
            {isSubmitting ? 'Logging in...' : 'Login'}
          </button>
          {errorMessage && <p className="login-error">{errorMessage}</p>}
        </form>
      ) : (
        <form className="login-form" onSubmit={signup}>
          <label className="login-info" htmlFor="signup-email">Email address</label>
          <input id="signup-email" type="email" value={email} onChange={(e) => { setEmail(e.target.value); setErrorMessage(''); }} placeholder="Email" autoComplete="email" required />
          <label className="login-info" htmlFor="signup-password">Create password</label>
          <span className="login-requirements">Must be at least 6 characters.</span>
          <input id="signup-password" type="password" value={password} onChange={(e) => { setPassword(e.target.value); setErrorMessage(''); }} placeholder="Password" autoComplete="new-password" required minLength={6} />
          <label className="login-info" htmlFor="signup-confirm-password">Confirm password</label>
          <input id="signup-confirm-password" type="password" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value); setErrorMessage(''); }} placeholder="Confirm Password" autoComplete="new-password" required minLength={6} />
          <button type="submit" className="login-button" disabled={isSubmitting || !email || password.length < 6 || confirmPassword.length < 6}>
            {isSubmitting ? 'Creating account...' : 'Sign Up'}
          </button>
          {errorMessage && <p className="login-error">{errorMessage}</p>}
        </form>
      )}
    </div>
  );
}
