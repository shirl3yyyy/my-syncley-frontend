import Features from '../components/layout/Features';
import Hero from '../components/layout/Hero';
import CTA from '../components/layout/CTA';
import HowItWorks from '../components/layout/HowItWorks';
import Testimonials from '../components/layout/Testimonials';
import Services from './Services';
import Trusted from '../components/layout/Trusted';
import Stats from '../components/layout/Stats';
import PricingPlans from '../components/layout/PricingPlans';



console.log("Services component loaded ✅");


function Home() {
  return (
    <div> 
        <Hero />
        <Trusted />
        <HowItWorks />
        <Services />
        <Features />
        <Stats />
        <Testimonials />
        <PricingPlans />
        <CTA />
        
        
    </div>
  );
}

export default Home;