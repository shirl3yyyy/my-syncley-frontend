import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import RoleSelection from './pages/RoleSelection';
import CollabBoard from './pages/CollabBoard';
import Hero from './components/layout/Hero';
import Features from './components/layout/Features';
import About from './components/layout/About';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/features" element={<Features />} />
        <Route path="/board" element={<CollabBoard/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/inspiration" element={<RoleSelection />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;

