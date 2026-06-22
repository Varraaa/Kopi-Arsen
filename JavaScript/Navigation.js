/* ==========================================================================
   NAVIGATION — Hamburger Menu & Responsivitas Navbar
   ========================================================================== */

export function initNavigation() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');

    if (!mobileMenuBtn || !navLinks) return;

    mobileMenuBtn.addEventListener('click', () => {
        const isExpanded = navLinks.classList.toggle('show-menu');
        mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
    });

    // Tutup menu otomatis saat link diklik
    navLinks.querySelectorAll('a').forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('show-menu');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        });
    });
}