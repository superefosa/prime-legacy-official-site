/* ============================================
   THE PRIME LEGACY PLACE LTD — Main Script
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* Copyright year */
  document.querySelectorAll('.year').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  /* Active nav link */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.menu a, .mobile-nav a').forEach(link => {
    if (link.classList.contains('btn')) return;

    const href = link.getAttribute('href');

    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* Sticky header effect */
  const header = document.querySelector('.site-header');

  if (header) {
    const updateHeader = () => {
      header.classList.toggle('scrolled', window.scrollY > 10);
    };

    updateHeader();

    window.addEventListener('scroll', updateHeader, { passive: true });
  }

  /* Mobile navigation */
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileClose = document.querySelector('.mobile-nav-close');

  function openMobileNav() {
    if (!hamburger || !mobileNav) return;

    hamburger.classList.add('open');
    mobileNav.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    if (!hamburger || !mobileNav) return;

    hamburger.classList.remove('open');
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      if (mobileNav && mobileNav.classList.contains('open')) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });
  }

  if (mobileClose) {
    mobileClose.addEventListener('click', closeMobileNav);
  }

  if (mobileNav) {
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMobileNav);
    });
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeMobileNav();
    }
  });

  /* Scroll reveal animation */
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

  if (revealEls.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealEls.forEach(el => observer.observe(el));
  }

  /* Contact form — FormSubmit */
  const form = document.getElementById('enquiry-form');

  if (form) {
    form.addEventListener('submit', () => {
      const btn = form.querySelector('.form-submit');

      if (btn) {
        btn.textContent = 'Sending...';
        btn.disabled = true;
      }
    });
  }

});