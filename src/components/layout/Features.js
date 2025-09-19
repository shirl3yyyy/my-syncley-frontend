 import React from 'react';
 
 function Features() {
    
  return (
    <section className="features">
        <h2>Why choose Syncley</h2>
            <div className="features-grid">
            <div className="feature-card">
                <h3>Collaboration</h3>
                <p>Work together seamlessly with our collaboration tools designed for teams of all sizes.</p>
            </div>

            <div className="feature-card">
                <h3>Real-time chat</h3>
                <p>Communicate instantly with team members and clients using our integrated chat feature.</p>
            </div>

            <div className="feature-card">
                <h3>Project Management</h3>
                <p>Keep track of your projects, deadlines, and tasks with our intuitive project management tools.</p>
            </div>

            <div className="feature-card">
                <h3>Inspiration Sharing</h3>
                <p>Share ideas and inspiration with your team to foster creativity and innovation.</p>
            </div>

            <div className="feature-card">
                <h3>Secure Payments</h3>
                <p>We ensure that your payments are safe and secure through our trusted payment gateway.</p>
            </div>
        </div>
    </section>
  );
}

export default Features;