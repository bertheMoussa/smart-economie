import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Subscription from './pages/Subscription';
import Claims from './pages/Claims';
import Contact from './pages/Contact';
import History from './pages/History';

export default function App() {
  return (
    <Router>
      <div className="size-full flex flex-col min-h-screen bg-[#f0f4f8]">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/claims" element={<Claims />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}