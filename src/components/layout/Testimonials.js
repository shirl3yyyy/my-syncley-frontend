import React, { useState, useEffect, useRef } from "react";
import './Testimonials.css';

function Testimonials() {
  const testimonials = [
    { name: "Alice Johnson", role: "Freelancer", text: "Syncley has transformed the way I collaborate with clients." },
    { name: "Bob Smith", role: "Client", text: "Finding the right freelancer has never been easier." },
    { name: "Catherine Lee", role: "Freelancer", text: "The project management tools saved me so much time!" },
    { name: "Sophia Lee", role: "Freelancer", text: "I love how easy it is to showcase my skills and get work." },
    { name: "David Kim", role: "Client", text: "The platform made collaborating with remote teams seamless." },
    { name: "Emily Davis", role: "Freelancer", text: "Syncley helped me grow my freelance business faster than I imagined." },
    { name: "James Wilson", role: "Client", text: "I can manage multiple projects with talented freelancers effortlessly." }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardWidthRef = useRef(0);

  const nextTestimonial = () => {
    setCurrentIndex(prev => prev + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex(prev => prev - 1);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 3000);
    return () => clearInterval(interval);
  }, []);

  // Duplicate array for seamless infinite scroll
  const infiniteTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="testimonials">
      <h2>What our lovely users say</h2>
      <div className="testimonial-container">
        <button className="carousel-btn left" onClick={prevTestimonial}>&lt;</button>
        <div className="testimonial-cards-wrapper">
          <div
            className="testimonial-cards"
            style={{
              transform: `translateX(-${currentIndex * 320}px)`,
              transition: 'transform 0.5s ease-in-out',
              width: `${infiniteTestimonials.length * 320}px`
            }}
          >
            {infiniteTestimonials.map((t, idx) => (
              <div className="testimonial-card" key={idx}>
                <div className="testimonial-avatar">{t.name[0]}</div>
                <h3>{t.name}</h3>
                <p className="testimonial-role">{t.role}</p>
                <p className="testimonial-text">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
        <button className="carousel-btn right" onClick={nextTestimonial}>&gt;</button>
      </div>
    </section>
  );
}

export default Testimonials;
