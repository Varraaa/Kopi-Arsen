/* ==========================================================================
   NAVIGATION — Mengatur Hamburger Menu & Responsivitas Navbar
   ========================================================================== */

export function initNavigation() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');

    if (mobileMenuBtn && navLinks) {
        // Toggle menu saat tombol hamburger diklik
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('show-menu');

            // Mengubah status aria-expanded untuk aksesibilitas
            const isExpanded = navLinks.classList.contains('show-menu');
            mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
        });

        // Tutup menu otomatis saat salah satu link navigasi diklik
        const navItems = navLinks.querySelectorAll('a');
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navLinks.classList.remove('show-menu');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            });
        });
    }
}