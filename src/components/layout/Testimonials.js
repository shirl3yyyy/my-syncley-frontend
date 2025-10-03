import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";
import "./Testimonials.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Freelancer - Web Developer",
      feedback:
        "Syncley connected me with amazing clients. The platform is easy to use, and payments are always secure.",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Michael Smith",
      role: "Client - Startup Founder",
      feedback:
        "Hiring talent through Syncley saved us weeks of effort. The quality of freelancers is outstanding.",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Emily Carter",
      role: "Freelancer - Graphic Designer",
      feedback:
        "I love how seamless the project process is. I’ve built long-term relationships with clients here.",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "James Wilson",
      role: "Client - Agency Owner",
      feedback:
        "Managing multiple projects and freelancers is so much easier with Syncley’s dashboard.",
      img: "https://randomuser.me/api/portraits/men/55.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="testimonials">
      <h2>What Our Users Say</h2>
      <p className="subtitle">
        Freelancers and clients love building together on Syncley.
      </p>

      <Slider {...settings} className="testimonials-slider">
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial-card">
            <FaQuoteLeft className="quote-icon" />
            <p className="feedback">“{t.feedback}”</p>
            <div className="user">
              <img src={t.img} alt={t.name} />
              <div>
                <h4>{t.name}</h4>
                <p>{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Testimonials;
