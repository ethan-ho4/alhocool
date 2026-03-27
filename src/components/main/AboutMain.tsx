import { Link } from 'react-router-dom';
import useScrollReveal from '../../hooks/useScrollReveal';
import './AboutMain.css';

export default function AboutMain() {
  const revealRef = useScrollReveal();

  return (
    <div className="container-about-main">
        <img src="/assets/images/main/about-main-images/cheers.jpg" alt="Friends toasting drinks together" className="image-about" />
        <div className="background-about">
            <div className="text-content-about reveal reveal-right glass-panel" ref={revealRef}>
                <p className="heading-about">THE SPIRIT OF ALHOCOOL</p>
                <div className="content-about">
                    <p className="description1-about">
                      At Alhocool, every drop tells a story. We demystify the world's most iconic drinks by blending rich heritage with modern AI-powered insights.
                    </p>
                    <p className="description2-about">
                      From the misty highlands of Scotland to the sun-drenched vineyards of Bordeaux, discover the craft, culture, and people behind every pour.
                    </p>
                    <div className="about-actions">
                      <Link className="button-about btn-outline" to="/about" onClick={() => window.scrollTo(0, 0)}>
                        Discover our story
                      </Link>
                      <Link className="button-about btn-primary" to="/spirit" onClick={() => window.scrollTo(0, 0)}>
                        Browse spirits
                      </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
