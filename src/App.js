import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Services from "./components/Services";
import RoleSelection from './pages/RoleSelection';
import CollabBoard from './pages/CollabBoard';
import Hero from './components/layout/Hero';
import ProjectDetails from "./pages/ProjectDetails";
import Features from './components/layout/Features';
import About from './components/layout/About';
import Profile from "./pages/Profile";
import SearchPage from "./pages/SearchPage";
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
        <Route path="/board" element={<CollabBoard />} />
        <Route path="/inspiration" element={<RoleSelection />} />
        <Route path="/about" element={<About />} />

        {/* role-based signup routes */}
        <Route path="/signup-client" element={<Signup role="client" />} />
        <Route path="/signup-freelancer" element={<Signup role="freelancer" />} />

        {/* Dynamic profile route */}
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/services" element={<Services />} />
        <Route path="/search" element={<SearchPage />} />

        <Route path="*" element={<div style={{ padding: '2rem' }}><h2>404 - Page Not Found</h2></div>} />

      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
