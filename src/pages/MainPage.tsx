import ChihiroCarousel from '../components/main/ChihiroCarousel';
import Recommended from '../components/main/Recommended';
import AboutMain from '../components/main/AboutMain';
import MainBottom from '../components/main/MainBottom';

export default function MainPage() {
  return (
    <>
      <ChihiroCarousel />
      <Recommended />
      <AboutMain />
      <MainBottom />
    </>
  );
}
