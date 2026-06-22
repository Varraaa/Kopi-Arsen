/* ==========================================================================
   SCRIPT — Scroll Spy & Map Switcher
   ========================================================================== */

export function initScript() {

    // ------------------------------------------------------------------
    // 01. ACTIVE NAV LINK SPY (Scroll Position)
    // ------------------------------------------------------------------
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('main section');

    function changeActiveLink() {
        const scrollPosition = window.scrollY + 120;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

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

    window.addEventListener('scroll', changeActiveLink, { passive: true });
    changeActiveLink();

    // ------------------------------------------------------------------
    // 02. MAP SWITCHER — Store Locator
    // ------------------------------------------------------------------
    const storeItems = document.querySelectorAll('.store-item');
    const mapDago = document.getElementById('map-dago');
    const mapBuahBatu = document.getElementById('map-buah-batu');

    function activateStore(item) {
        storeItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        const isDago = item.querySelector('h3').textContent.includes('Dago');

        // Lazy load: pasang src iframe Buah Batu hanya saat pertama kali diklik
        if (!isDago && mapBuahBatu.dataset.src) {
            mapBuahBatu.src = mapBuahBatu.dataset.src;
            delete mapBuahBatu.dataset.src;
        }

        mapDago.style.display = isDago ? 'block' : 'none';
        mapBuahBatu.style.display = isDago ? 'none' : 'block';
    }

    storeItems.forEach(item => {
        item.addEventListener('click', () => activateStore(item));
        // Keyboard accessibility
        item.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                activateStore(item);
            }
        });
    });
}