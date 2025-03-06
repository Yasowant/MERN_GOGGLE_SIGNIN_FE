import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Organize Your Tasks Efficiently</h1>
          <p>
            Boost productivity and stay on top of your work with TaskManager.
          </p>
          <Link to="/signup" className="hero-button">
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose TaskManager?</h2>
        <div className="features-container">
          <div className="feature-card">
            <h3>Easy Task Management</h3>
            <p>
              Organize tasks, set deadlines, and prioritize work effortlessly.
            </p>
          </div>
          <div className="feature-card">
            <h3>Collaboration</h3>
            <p>Share tasks and work together with your team.</p>
          </div>
          <div className="feature-card">
            <h3>Reminders & Alerts</h3>
            <p>Never miss a deadline with automated reminders.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-container">
          <div className="testimonial">
            <p>"TaskManager has transformed how I manage my projects!"</p>
            <h4>- Sarah Johnson</h4>
          </div>
          <div className="testimonial">
            <p>"Incredible features and easy to use. Highly recommended!"</p>
            <h4>- Mark Lee</h4>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>Is TaskManager free to use?</h3>
          <p>
            Yes! You can start using TaskManager for free with basic features.
          </p>
        </div>
        <div className="faq-item">
          <h3>Can I collaborate with my team?</h3>
          <p>
            Absolutely! You can assign tasks, share notes, and track progress
            together.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 TaskManager. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
