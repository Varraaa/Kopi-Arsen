/* ==========================================================================
   ARSEN NAVIGATION LOGIC — Scroll Spy, Mobile Menu, Map Switcher
   ========================================================================== */

export function initScript() {

    // --------------------------------------------------------------------------
    // 01. ACTIVE NAV LINK SPY (Scroll Position)
    // --------------------------------------------------------------------------
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('main section');

    function changeActiveLink() {
        const scrollPosition = window.scrollY + 120; // Offset 120px agar pindah sebelum mentok atas

        sections.forEach(section => {
            const sectionTop    = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId     = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', changeActiveLink);
    changeActiveLink(); // Jalankan sekali saat halaman pertama kali dibuka

    // --------------------------------------------------------------------------
    // 02. MOBILE MENU — ARIA-EXPANDED TOGGLE
    // --------------------------------------------------------------------------
    const menuBtn = document.querySelector('.mobile-menu-btn');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
            menuBtn.setAttribute('aria-expanded', String(!isExpanded));
        });
    }

    // --------------------------------------------------------------------------
    // 03. MAP LOKASI — STORE ITEM CLICK SWITCHER
    // --------------------------------------------------------------------------
    const storeItems  = document.querySelectorAll('.store-item');
    const mapDago     = document.getElementById('map-dago');
    const mapBuahBatu = document.getElementById('map-buah-batu');

    storeItems.forEach(item => {
        item.style.cursor = 'pointer';

        item.addEventListener('click', function () {
            // 1. Pindahkan class active
            storeItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');

            // 2. Tentukan iframe mana yang harus ditampilkan
            const targetId = this.querySelector('h3').textContent.includes('Dago')
                ? 'map-dago'
                : 'map-buah-batu';

            // 3. Lazy load: pasang src iframe Buah Batu hanya saat pertama kali diklik
            if (targetId === 'map-buah-batu' && mapBuahBatu.dataset.src) {
                mapBuahBatu.src = mapBuahBatu.dataset.src;
                delete mapBuahBatu.dataset.src; // Tandai sudah di-load, tidak akan load ulang
            }

            // 4. Toggle visibilitas — show yang dipilih, hide yang lain
            mapDago.style.display     = targetId === 'map-dago'      ? 'block' : 'none';
            mapBuahBatu.style.display = targetId === 'map-buah-batu' ? 'block' : 'none';
        });
    });
}