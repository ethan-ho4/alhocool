import useScrollReveal from '../../hooks/useScrollReveal';
import './Footer.css';

export default function Footer() {
    const revealRef = useScrollReveal();
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer" ref={revealRef}>
          <div className="footer-content reveal reveal-scale">
              <h4 className="title text-shimmer">Before You Stumble Away...</h4>
              <p className="content">
                Every bottle at Alhocool carries a spirit, and behind each spirit is a tale worth telling. 
                Our stories are woven through a blend of timeless tradition and advanced AI, 
                crafting a journey as rich as the libations themselves. 
                As you sip, remember: while our tales are digital, the joy and craftsmanship are very real. 
                Drink responsibly, wander often, and always return for another chapter.
                <br/><br/>
                <span className="footer-cheers">🍻 Cheers from the Alhocool crew! 🍷</span>
              </p>
          </div>
          
          <div className="footer-actions reveal reveal-scale">
              <button className="button pulse-glow" onClick={scrollToTop}>Hic! Take me to the top!</button>
              <div className="footer-joke">
                  <p className="joke">Parting Gag:</p>
                  <p className="joke-text">"Why did the beer file a police report? It got mugged!"</p>
              </div>
          </div>
        </footer>
    );
}
