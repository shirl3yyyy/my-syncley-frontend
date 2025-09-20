import Features from '../components/layout/Features';
import Hero from '../components/layout/Hero';
import About from '../components/layout/About';
import CTA from '../components/layout/CTA';
import HowItWorks from '../components/layout/HowItWorks';
import Testimonials from '../components/layout/Testimonials';
import Board from './CollabBoard';


function Home() {
  return (
    <div> 
        <Hero />
        <HowItWorks />
        <Features />
        <About />
        <HowItWorks />
        <CTA />
        
    </div>
  );
}

export default Home;