/**
 * James Khadan - Personal Homepage
 * CS 5610 Web Development
 * ES6 Module - Main JavaScript
 */

/**
 * Initialize collapsible experience cards
 * This is the creative/original JavaScript feature
 * Click on an experience card to expand/collapse the description
 */
function initCollapsibleCards() {
  const cards = document.querySelectorAll('.experience-card');

  if (!cards.length) {
    return;
  }

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      // Toggle the expanded class on the clicked card
      card.classList.toggle('expanded');
    });

    // Add keyboard accessibility - allow Enter/Space to toggle
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-expanded', 'false');

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.classList.toggle('expanded');
        const isExpanded = card.classList.contains('expanded');
        card.setAttribute('aria-expanded', isExpanded.toString());
      }
    });

    // Update aria-expanded on click as well
    card.addEventListener('click', () => {
      const isExpanded = card.classList.contains('expanded');
      card.setAttribute('aria-expanded', isExpanded.toString());
    });
  });
}

/**
 * Set active navigation link based on current page
 */
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/**
 * Initialize smooth scroll for anchor links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });
}

/**
 * Initialize all functionality when DOM is ready
 */
function init() {
  initCollapsibleCards();
  setActiveNavLink();
  initSmoothScroll();
}

// Run initialization when DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);

// Export for ES6 module compatibility
export { initCollapsibleCards, setActiveNavLink, initSmoothScroll };
