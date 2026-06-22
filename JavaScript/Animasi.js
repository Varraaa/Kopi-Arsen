/* ==========================================================================
   ANIMASI — Scroll Reveal, Parallax, Hero Intro
   ========================================================================== */

export function initAnimasi() {

    // ------------------------------------------------------------------
    // 01. HERO INTRO — Staggered Fade-In
    // ------------------------------------------------------------------
    const heroTitle = document.querySelector('.hero-content h1');
    const heroText = document.querySelector('.hero-content .hero-p');
    const heroBtn = document.querySelector('.hero-content .btn-primary');
    const heroOverlay = document.querySelector('.hero-overlay');
    const heroBg = document.querySelector('.hero-bg');

    if (heroTitle && heroText && heroBtn) {
        heroTitle.classList.add('hero-reveal-item');
        heroText.classList.add('hero-reveal-item');
        heroBtn.classList.add('hero-reveal-item');

        setTimeout(() => {
            if (heroBg) heroBg.style.opacity = '1';
            if (heroOverlay) heroOverlay.style.opacity = '1';
            heroTitle.classList.add('hero-revealed');
            heroText.classList.add('hero-revealed');
            heroBtn.classList.add('hero-revealed');
        }, 100);
    }

    // ------------------------------------------------------------------
    // 02. SCROLL REVEAL — Intersection Observer
    // ------------------------------------------------------------------
    const targetElements = document.querySelectorAll(
        '.card, .story-img-container, .story-text, .team-card, .menu-item, .store-container, .res-container'
    );

    targetElements.forEach(el => el.classList.add('scroll-reveal'));

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    targetElements.forEach(el => scrollObserver.observe(el));

    // ------------------------------------------------------------------
    // 03. PARALLAX RINGAN — Hero Background
    // ------------------------------------------------------------------
    const heroBgImage = document.querySelector('#hero .hero-bg img');

    if (heroBgImage) {
        window.addEventListener('scroll', () => {
            heroBgImage.style.transform = `translateY(${window.scrollY * 0.2}px)`;
        }, { passive: true });
    }
}