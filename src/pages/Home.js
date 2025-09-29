import Features from '../components/layout/Features';
import Hero from '../components/layout/Hero';
import CTA from '../components/layout/CTA';
import HowItWorks from '../components/layout/HowItWorks';
import Testimonials from '../components/layout/Testimonials';
import Services from '../components/Services';
import Trusted from '../components/layout/Trusted';
import Stats from '../components/layout/Stats';


console.log("Services component loaded ✅");


function Home() {
  return (
    <div> 
        <Hero />
        <Trusted />
        <Services />
        <Features />
        <HowItWorks />
        <Stats />
        <Testimonials />
        <CTA />
        
    </div>
  );
}

export default Home;