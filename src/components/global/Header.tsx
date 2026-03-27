import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useTheme } from '../../context/ThemeContext';
import './Header.css';

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setIsLoggedIn(!!user);
        });
        return unsubscribe;
    }, []);

    const onLinkClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className="header" id="myheader">
            <div className="logo-title-container">
                <Link to="/main" onClick={onLinkClick}>
                    <h1 className="title">ALHOCOOL</h1>
                </Link>
            </div>
            <nav className="nav-links">
                <div className="explore-dropdown">
                    <button className="explore-button" disabled>EXPLORE</button>
                    <div className="dropdown-content">
                        <Link to="/beer" onClick={onLinkClick}>Beers</Link>
                        <Link to="/wine" onClick={onLinkClick}>Wines</Link>
                        <Link to="/spirit" onClick={onLinkClick}>Spirits</Link>
                        <Link to="/liqueurs-cordial" onClick={onLinkClick}>Liqueurs & Cordials</Link>
                        <Link to="/rice-based-alcohol" onClick={onLinkClick}>Rice Based Alcohols</Link>
                        <Link to="/search" onClick={onLinkClick}>Search</Link>
                    </div>
                </div>
                <Link to="/about" className="about" onClick={onLinkClick}>ABOUT</Link>
                
                {!isLoggedIn && <Link to="/login-signup" className="login" onClick={onLinkClick}>LOGIN/SIGNUP</Link>}
                {isLoggedIn && <Link to="/account" className="account" onClick={onLinkClick}>ACCOUNT</Link>}

                <button className="theme-toggle" onClick={toggleTheme}>
                  {theme === 'light' ? '🌙' : '☀️'}
                </button>
            </nav>
        </div>
    );
}
