import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ChihiroCarousel.css';

const slides = [
  { src: '/assets/images/main/chihiro-carousel-images/chihiro-beer.jpg', title: 'Experience the Art of Brewing', subtitle: 'Discover a spectrum of beer varieties and delve into the craft behind brewing', link: '/beer' },
  { src: '/assets/images/main/chihiro-carousel-images/chihiro-wine.jpg', title: 'Unearth the Secrets of the Vine', subtitle: 'Journey through the rich diversity of wine styles and their vine-to-bottle process', link: '/wine' },
  { src: '/assets/images/main/chihiro-carousel-images/chihiro-spirit.jpg', title: 'Demystifying the Spirit World', subtitle: 'Explore the vast range of spirits and the artistry of distillation', link: '/spirit' },
  { src: '/assets/images/main/chihiro-carousel-images/chihiro-liqueurs.jpg', title: 'A Symphony of Sweet Allure', subtitle: 'Immerse in the world of liqueurs and the infusion techniques that amplify their flavors', link: '/liqueurs-cordial' },
  { src: '/assets/images/main/chihiro-carousel-images/chihiro-soju.jpg', title: 'Journey to the East', subtitle: 'Understand the varied rice-based alcohols and the traditional methods used in their creation', link: '/rice-based-alcohol' }
];

export default function ChihiroCarousel() {
  const navigate = useNavigate();

  const navigateToExplore = (link: string) => {
    navigate(link);
    window.scrollTo(0, 0);
  };

  return (
    <div className="carousel-wrapper">
      <Carousel controls={true} indicators={true} slide={true}>
        {slides.map((slide, index) => (
          <Carousel.Item key={index} className="carousel-item-custom">
            <img className="d-block w-100 carousel-image" src={slide.src} alt={slide.title} />
            <Carousel.Caption className={`slide-content slide-content-${index}`}>
              <h2>{slide.title}</h2>
              <p>{slide.subtitle}</p>
              <button onClick={() => navigateToExplore(slide.link)}>Learn More</button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
