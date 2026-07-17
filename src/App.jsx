import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Invitation from './pages/Invitation';
import Background from './components/Background';
import FloatingPetals from './components/FloatingPetals';
import './index.css';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/invitation" element={<Invitation />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <Background />
        <FloatingPetals />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
