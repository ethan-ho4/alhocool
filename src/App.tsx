import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/global/Header';
import Footer from './components/global/Footer';
import MainPage from './pages/MainPage';
import LoginSignupPage from './pages/LoginSignupPage';
import AboutPage from './pages/AboutPage';
import AccountPage from './pages/AccountPage';
import BeerPage from './pages/BeerPage';
import WinePage from './pages/WinePage';
import SpiritPage from './pages/SpiritPage';
import LiqueurPage from './pages/LiqueurPage';
import RiceAlcoholPage from './pages/RiceAlcoholPage';
import SearchPage from './pages/SearchPage';
import BlankPage from './pages/BlankPage';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/login-signup" element={<LoginSignupPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/beer" element={<BeerPage />} />
          <Route path="/wine" element={<WinePage />} />
          <Route path="/spirit" element={<SpiritPage />} />
          <Route path="/liqueurs-cordial" element={<LiqueurPage />} />
          <Route path="/rice-based-alcohol" element={<RiceAlcoholPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/blank-page" element={<BlankPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
