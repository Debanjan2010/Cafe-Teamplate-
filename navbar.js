class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: linear-gradient(135deg, rgba(217, 119, 6, 0.95) 0%, rgba(180, 83, 9, 0.95) 100%);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          backdrop-filter: blur(10px);
        }
        .logo { 
          color: white; 
          font-weight: bold; 
          font-size: 1.5rem;
          font-family: 'Playfair Display', serif;
        }
        ul { 
          display: flex; 
          gap: 2rem; 
          list-style: none; 
          margin: 0; 
          padding: 0; 
          align-items: center;
        }
        a { 
          color: white; 
          text-decoration: none; 
          transition: all 0.3s ease;
          font-weight: 500;
        }
        a:hover { 
          transform: translateY(-2px);
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        .nav-link {
          position: relative;
          padding: 0.5rem 0;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: white;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .cart-badge {
          background: #ef4444;
          color: white;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          font-size: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: -8px;
          right: -8px;
        }
        .mobile-menu-btn {
          display: none;
        }
        @media (max-width: 768px) {
          ul {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(217, 119, 6, 0.95);
            flex-direction: column;
            padding: 1rem;
            gap: 1rem;
          }
          ul.active {
            display: flex;
          }
          .mobile-menu-btn {
            display: block;
            background: none;
            border: none;
            color: white;
            cursor: pointer;
          }
        }
      </style>
      <nav>
        <div class="logo">Spice & Soul</div>
        <button class="mobile-menu-btn">
          <i data-feather="menu"></i>
        </button>
        <ul>
          <li><a href="index.html" class="nav-link">Home</a></li>
          <li><a href="menu.html" class="nav-link">Menu</a></li>
          <li><a href="login.html" class="nav-link">Login</a></li>
          <li><a href="feedback.html" class="nav-link">Feedback</a></li>
          <li class="relative">
            <a href="#" class="nav-link flex items-center">
              <i data-feather="shopping-cart"></i>
              <span id="cart-count" class="cart-badge hidden">0</span>
            </a>
          </li>
        </ul>
      </nav>
    `;

    // Mobile menu functionality
    const mobileMenuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
    const navMenu = this.shadowRoot.querySelector('ul');
    
    mobileMenuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      feather.replace();
    });

    // Update cart count
    this.updateCartCount();
  }

  updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = this.shadowRoot.getElementById('cart-count');
    if (cartCount && cart.length > 0) {
      cartCount.textContent = cart.length;
      cartCount.classList.remove('hidden');
    }
  }
}

customElements.define('custom-navbar', CustomNavbar);