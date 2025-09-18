import './Hero.css';

function Hero() {
  return (
    <div className="hero">
      <video autoPlay loop muted playsInline className="hero-video">
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

        <div className="hero-content">
            <h1>Welcome to Syncley</h1>
            <p>Your gateway to seamless freelancing and job opportunities.</p>
            <a href="/signup" className="hero-button">Get Started</a>
        </div>
    </div>
  );
}

export default Hero;
