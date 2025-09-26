import Features from '../components/layout/Features';
import Hero from '../components/layout/Hero';
import CTA from '../components/layout/CTA';
import HowItWorks from '../components/layout/HowItWorks';
import Testimonials from '../components/layout/Testimonials';
import Services from '../components/Services';
import Trusted from '../components/layout/Trusted';


console.log("Services component loaded ✅");


function Home() {
  return (
    <div> 
        <Hero />
        <Trusted />
        <Services />
        <HowItWorks />
        <Features />
        
        <Testimonials />
        <CTA />
        
    </div>
  );
}

export default Home;