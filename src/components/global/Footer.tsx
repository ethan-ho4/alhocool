import useScrollReveal from '../../hooks/useScrollReveal';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
    const contentRevealRef = useScrollReveal();
    const actionsRevealRef = useScrollReveal();
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
          <div className="footer-content reveal reveal-scale" ref={contentRevealRef}>
              <h4 className="title text-shimmer">Thank You for Visiting Alhocool</h4>
              <p className="content">
                Every bottle has a story worth understanding. At Alhocool, we combine historical context and AI-assisted research
                to make the world of drinks easier to explore with confidence.
                <br/><br/>
                <span className="footer-cheers">Please enjoy responsibly and continue exploring.</span>
              </p>
          </div>
          
          <div className="footer-actions reveal reveal-scale" ref={actionsRevealRef}>
              <button className="button pulse-glow" type="button" onClick={scrollToTop}>Back to top</button>
              <div className="footer-note">
                  <p className="note-title">Research-Driven Content</p>
                  <p className="note-text">Our content is educational and intended for responsible, legal-age audiences.</p>
              </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-legal">
              © {new Date().getFullYear()} Alhocool. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <Link to="/about" onClick={() => window.scrollTo(0, 0)}>About</Link>
              <Link to="/search" onClick={() => window.scrollTo(0, 0)}>Search</Link>
              <Link to="/login-signup" onClick={() => window.scrollTo(0, 0)}>Account Access</Link>
              <a href="mailto:support@alhocool.com">Contact</a>
            </div>
          </div>
        </footer>
    );
}
