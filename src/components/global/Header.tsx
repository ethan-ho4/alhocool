import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useTheme } from '../../context/ThemeContext';
import './Header.css';

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isExploreOpen, setIsExploreOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const exploreRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setIsLoggedIn(!!user);
        });
        return unsubscribe;
    }, []);

    useEffect(() => {
        const onDocumentClick = (event: MouseEvent) => {
            if (!exploreRef.current?.contains(event.target as Node)) {
                setIsExploreOpen(false);
            }
        };

        const onEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsExploreOpen(false);
            }
        };

        document.addEventListener('mousedown', onDocumentClick);
        document.addEventListener('keydown', onEscape);
        return () => {
            document.removeEventListener('mousedown', onDocumentClick);
            document.removeEventListener('keydown', onEscape);
        };
    }, []);

    const onLinkClick = () => {
        setIsExploreOpen(false);
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
                <div className="explore-dropdown" ref={exploreRef}>
                    <button
                        className="explore-button"
                        type="button"
                        aria-expanded={isExploreOpen}
                        aria-haspopup="menu"
                        aria-controls="explore-menu"
                        onClick={() => setIsExploreOpen((prev) => !prev)}
                        onMouseEnter={() => setIsExploreOpen(true)}
                    >
                        Explore
                    </button>
                    <div
                        id="explore-menu"
                        className={`dropdown-content ${isExploreOpen ? 'open' : ''}`}
                        role="menu"
                        onMouseEnter={() => setIsExploreOpen(true)}
                        onMouseLeave={() => setIsExploreOpen(false)}
                    >
                        <Link to="/beer" onClick={onLinkClick}>Beers</Link>
                        <Link to="/wine" onClick={onLinkClick}>Wines</Link>
                        <Link to="/spirit" onClick={onLinkClick}>Spirits</Link>
                        <Link to="/liqueurs-cordial" onClick={onLinkClick}>Liqueurs & Cordials</Link>
                        <Link to="/rice-based-alcohol" onClick={onLinkClick}>Rice Based Alcohols</Link>
                        <Link to="/search" onClick={onLinkClick}>Search</Link>
                    </div>
                </div>
                <Link to="/about" className="about" onClick={onLinkClick}>About</Link>
                
                {!isLoggedIn && <Link to="/login-signup" className="login" onClick={onLinkClick}>Sign In</Link>}
                {isLoggedIn && <Link to="/account" className="account" onClick={onLinkClick}>Account</Link>}

                <button className="theme-toggle" type="button" aria-label="Toggle theme" onClick={toggleTheme}>
                  {theme === 'light' ? '🌙' : '☀️'}
                </button>
            </nav>
        </div>
    );
}
