import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add code here to send the email to your newsletter service
    setShowForm(false);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-links">
          <a href="https://facebook.com/mypage">Facebook</a>
          <a href="https://twitter.com/myhandle">Twitter</a>
          <a href="https://instagram.com/myhandle">Instagram</a>
        </div>
        <p className="newsletter-button" onClick={() => setShowForm(true)}>
          Subscribe to our Newsletter
        </p>
        {showForm && (
          <form onSubmit={handleSubmit} className="newsletter-form">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        )}
        <p>Copyright &copy; {currentYear} My Website</p>
      </div>
    </footer>
  );
};

export default Footer;
