import { Link } from 'react-router-dom';
import useScrollReveal from '../../hooks/useScrollReveal';
import './AboutMain.css';

export default function AboutMain() {
  const revealRef = useScrollReveal();

  return (
    <div className="container-about-main">
        <img src="/assets/images/main/about-main-images/cheers.jpg" alt="cheers image" className="image-about" />
        <div className="background-about" ref={revealRef}>
            <div className="text-content-about reveal reveal-right glass-panel">
                <p className="heading-about">THE SPIRIT OF ALHOCOOL</p>
                <div className="content-about">
                    <p className="description1-about">
                      "At Alhocool, every drop tells a story. We’re on a quest to demystify the world’s most iconic spirits, blending rich heritage with cutting-edge AI to bring you tales that are as intoxicating as the drinks themselves.
                    </p>
                    <p className="description2-about">
                      From the misty highlands of Scotland to the sun-drenched vineyards of Bordeaux, join us as we explore the essence of craftsmanship and the joy of shared knowledge."
                    </p>
                    <Link className="button-about btn-outline" to="/about" onClick={() => window.scrollTo(0, 0)}>discover our story</Link>
                </div>
            </div>
        </div>
    </div>
  );
}
