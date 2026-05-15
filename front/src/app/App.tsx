import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ChatMessenger from './components/ChatMessenger';
import { ProtectedRoute } from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import HomeEntreprise from './pages/HomeEntreprise';
import About from './pages/About';
import Subscription from './pages/Subscription';
import Claims from './pages/Claims';
import Contact from './pages/Contact';
import History from './pages/History';
import Login from './pages/Login';
import DashboardParticulier from './pages/DashboardParticulier';
import DashboardEntreprise from './pages/DashboardEntreprise';

function AppContent() {
  const location = useLocation();
  
  // Routes sans header/footer
  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    <div className="size-full flex flex-col min-h-screen bg-[#f0f4f8]">
      {!isDashboard && <Header />}
      <main className="flex-grow">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/entreprise" element={<HomeEntreprise />} />
          <Route path="/about" element={<About />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/claims" element={<Claims />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/history" element={<History />} />

          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />

          {/* Protected Dashboard Routes */}
          <Route
            path="/dashboard/particulier"
            element={
              <ProtectedRoute requiredType="particulier">
                <DashboardParticulier />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/entreprise"
            element={
              <ProtectedRoute requiredType="entreprise">
                <DashboardEntreprise />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      {!isDashboard && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
        <ChatMessenger />
      </AuthProvider>
    </Router>
  );
}