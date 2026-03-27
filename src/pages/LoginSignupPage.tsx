import LoginSignup from '../components/login/LoginSignup';
import './LoginSignupPage.css';

export default function LoginSignupPage() {
  return (
    <div className="login-page-container">
      <LoginSignup />
      <div className="login-page-background">
        <img src="/assets/images/login-background-images/background.svg" alt="background" />
      </div>
    </div>
  );
}
