class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: linear-gradient(135deg, #92400e 0%, #78350f 100%);
          color: white;
          padding: 3rem 2rem;
          text-align: center;
          margin-top: auto;
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
        }
        .social-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        .social-link:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }
        .footer-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }
        .footer-links a {
          color: white;
          text-decoration: none;
          transition: opacity 0.3s ease;
        }
        .footer-links a:hover {
          opacity: 0.8;
        }
        .copyright {
          opacity: 0.8;
          font-size: 0.9rem;
        }
      </style>
      <footer>
        <div class="footer-content">
          <div class="social-links">
            <a href="#" class="social-link">
              <i data-feather="facebook"></i>
            </a>
            <a href="#" class="social-link">
              <i data-feather="instagram"></i>
            </a>
            <a href="#" class="social-link">
              <i data-feather="twitter"></i>
            </a>
            <a href="#" class="social-link">
              <i data-feather="youtube"></i>
            </a>
          </div>
          <div class="footer-links">
            <a href="index.html">Home</a>
            <a href="menu.html">Menu</a>
            <a href="login.html">Login</a>
            <a href="feedback.html">Feedback</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
          <p class="copyright">&copy; 2024 Spice & Soul: Pather Pachali Fusion Bistro. All rights reserved.</p>
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);