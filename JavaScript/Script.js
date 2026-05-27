/* ==========================================================================
   ARSEN NAVIGATION LOGIC (Scroll & Click Active Link Spy)
   ========================================================================== */
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('main section');

// Fungsi memindahkan class active berdasarkan posisi scroll layar
function changeActiveLink() {
    let scrollPosition = window.scrollY + 120; // Offset 120px agar pindah sebelum mentok atas

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

// Jalankan fungsi saat web di-scroll
window.addEventListener('scroll', changeActiveLink);

// Jalankan fungsi sekali saat halaman pertama kali dibuka
window.addEventListener('DOMContentLoaded', changeActiveLink);

// MAP LOKAASI LOGIC 
const storeItems = document.querySelectorAll('.store-item');
const mapFrame = document.getElementById('map-frame');
const mapFrame2 = document.getElementById('map-frame-2');

storeItems.forEach(item => {
    item.style.cursor = 'pointer'; 
    item.addEventListener('click', function() {
        const targetMap = this.getAttribute('data-map');
        if (mapFrame && targetMap) {
            mapFrame.setAttribute('src', targetMap);
        }
        if (mapFrame2 && targetMap) {
            mapFrame2.setAttribute('src', targetMap);
        }
        storeItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});