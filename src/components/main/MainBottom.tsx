import './MainBottom.css';
import useScrollReveal from '../../hooks/useScrollReveal';
import { Link } from 'react-router-dom';

export default function MainBottom() {
  const revealRef = useScrollReveal();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="main-bottom-wrap">
      <div className="main-bottom glass-panel reveal reveal-scale" ref={revealRef}>
        <p className="bottom-kicker">KEEP EXPLORING</p>
        <h2 className="bottom-heading">Ready for More Adventures?</h2>
        <p className="bottom-text">
          Dive deeper into the world of spirits, discover new flavors, and join our community of enthusiasts.
        </p>
        <div className="bottom-grid">
          <Link className="bottom-card" to="/wine" onClick={() => window.scrollTo(0, 0)}>
            <span className="bottom-card-title">Wines</span>
            <span className="bottom-card-text">Explore regions, styles, and pairing notes.</span>
          </Link>
          <Link className="bottom-card" to="/beer" onClick={() => window.scrollTo(0, 0)}>
            <span className="bottom-card-title">Beers</span>
            <span className="bottom-card-text">Discover lagers, ales, and brewing history.</span>
          </Link>
          <Link className="bottom-card" to="/liqueurs-cordial" onClick={() => window.scrollTo(0, 0)}>
            <span className="bottom-card-title">Liqueurs</span>
            <span className="bottom-card-text">Find sweet, bold, and classic cordial profiles.</span>
          </Link>
        </div>
        <div className="bottom-actions">
          <button type="button" className="bottom-cta btn-primary pulse-glow" onClick={scrollToTop}>
            Back to Top
          </button>
          <Link className="bottom-cta btn-outline" to="/about" onClick={() => window.scrollTo(0, 0)}>
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
