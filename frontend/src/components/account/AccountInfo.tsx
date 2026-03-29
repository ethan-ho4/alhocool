import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import './AccountInfo.css';

export default function AccountInfo() {
  const [email, setEmail] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) return;
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setEmail(user.email);
      } else {
        setEmail(null);
      }
    });
    return unsubscribe;
  }, []);

  const handleLogout = async () => {
    if (!auth) return;
    await signOut(auth);
    navigate('/main');
  };

  return (
    <div className="account-container">
        <div className="account-information">
            {email && (
                <div>
                    <p>Email: {email}</p>
                    {/* Note: Firebase does not expose plaintext passwords, so we only show the email */}
                </div>
            )}
        </div>
        <div className="account-logout">
            <button onClick={handleLogout} className="logout-button">LOGOUT</button>
        </div>
    </div>
  );
}
