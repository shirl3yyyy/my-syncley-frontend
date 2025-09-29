import React from "react";
import "./Testimonials.css";

import aliceImg from "../../assets/alice.jpg";
import bobImg from "../../assets/bob.jpg";
import catherineImg from "../../assets/catherine.jpg";
import sophiaImg from "../../assets/sophia.jpg";
import davidImg from "../../assets/david.jpg";
import emilyImg from "../../assets/emily.jpg";    
import jamesImg from "../../assets/james.jpg";

function Testimonials() {
  const testimonials = [
    { name: "Alice Johnson", role: "Freelancer", text: "Syncley has transformed the way I collaborate with clients.", rating: 5, image: aliceImg },
    { name: "Bob Smith", role: "Client", text: "Finding the right freelancer has never been easier.", rating: 4, image: bobImg },
    { name: "Catherine Lee", role: "Freelancer", text: "The project management tools saved me so much time!", rating: 5, image: catherineImg },
    { name: "Sophia Lee", role: "Freelancer", text: "I love how easy it is to showcase my skills and get work.", rating: 5, image: sophiaImg },
    { name: "David Kim", role: "Client", text: "The platform made collaborating with remote teams seamless.", rating: 4, image: davidImg },
    { name: "Emily Davis", role: "Freelancer", text: "Syncley helped me grow my freelance business faster than I imagined.", rating: 5, image: emilyImg },
    { name: "James Wilson", role: "Client", text: "I can manage multiple projects with talented freelancers effortlessly.", rating: 5, image: jamesImg }
  ];

  const infiniteTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="testimonials">
      <h2>What our lovely users say</h2>
      <div className="testimonial-marquee">
        <div className="testimonial-track">
          {infiniteTestimonials.map((t, idx) => (
            <div className="testimonial-card" key={idx}>
              <img src={t.image} alt={t.name} className="testimonial-img" />
              <h3>{t.name}</h3>
              <p className="testimonial-role">{t.role}</p>
              <div className="testimonial-stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={i < t.rating ? "star filled" : "star"}>★</span>
                ))}
              </div>
              <p className="testimonial-text">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
