document.addEventListener("DOMContentLoaded", () => {
    // ==========================================================================
    // 01. ANIMASI FADE-IN & SLIDE-UP ON SCROLL (Intersection Observer)
    // ==========================================================================
    const targetElements = document.querySelectorAll('.card, .story-img-container, .story-text, .team-card, .menu-item, .store-container, .res-container');
    
    // Tambahkan kelas inisial prapandangan secara dinamis lewat JS
    targetElements.forEach(el => {
        el.classList.add('scroll-reveal');
    });

    const observerOptions = {
        root: null, // Menggunakan viewport browser
        threshold: 0.15, // Elemen muncul jika 15% bagiannya sudah masuk layar
        rootMargin: "0px 0px -50px 0px"
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
                observer.unobserve(entry.target); // Berhenti mengamati jika sudah muncul
            }
        });
    }, observerOptions);

    targetElements.forEach(el => scrollObserver.observe(el));

    // ==========================================================================
    // 02. PARALLAX EFFECT RINGAN PADA HERO BACKGROUND
    // ==========================================================================
    const heroBgImage = document.querySelector('#hero .hero-bg img');
    
    if (heroBgImage) {
        window.addEventListener('scroll', () => {
            let scrollValue = window.scrollY;
            // Gambar akan bergeser turun sedikit lebih lambat dari kecepatan scroll
            heroBgImage.style.transform = `translateY(${scrollValue * 0.2}px)`;
        });
    }

    // ==========================================================================
    // 03. AUTO ACTIVE NAV-LINKS BASED ON SCROLL POSITION
    // ==========================================================================
    const sections = document.querySelectorAll('section[id], main > section, header, #hero, #about, #menu, #store, #reservasi');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let currentSectionId = "";
        const scrollPosition = window.scrollY + 120; // Offset penyeimbang fixed navbar

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            // Jika href pada link sesuai dengan id section yang sedang aktif
            if (link.getAttribute('href') === `#${currentSectionId}` || (currentSectionId === 'hero' && link.getAttribute('href') === '#')) {
                link.classList.add('active');
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================================================
    // 01. ANIMASI AWAL / INTRO HERO SECTION (Staggered Fade-In)
    // ==========================================================================
    const heroTitle = document.querySelector('.hero-content h1');
    const heroText = document.querySelector('.hero-content .hero-p');
    const heroBtn = document.querySelector('.hero-content .btn-primary');
    const heroOverlay = document.querySelector('.hero-overlay');
    const heroBg = document.querySelector('.hero-bg');

    // Berikan kelas persiapan animasi ke elemen hero
    if (heroTitle && heroText && heroBtn) {
        heroTitle.classList.add('hero-reveal-item');
        heroText.classList.add('hero-reveal-item');
        heroBtn.classList.add('hero-reveal-item');
        
        // Triger animasi sedikit melambat setelah halaman mulai dimuat (100ms)
        setTimeout(() => {
            if(heroBg) heroBg.style.opacity = '1';
            if(heroOverlay) heroOverlay.style.opacity = '1';
            
            // Aktifkan transisi kemunculan satu per satu
            heroTitle.classList.add('hero-revealed');
            heroText.classList.add('hero-revealed');
            heroBtn.classList.add('hero-revealed');
        }, 100);
    }

    // ==========================================================================
    // KODE ANIMASI SCROLL REVEAL YANG SEBELUMNYA (Tetap Biarkan di Sini)
    // ==========================================================================
    const targetElements = document.querySelectorAll('.card, .story-img-container, .story-text, .team-card, .menu-item, .store-container, .res-container');
    targetElements.forEach(el => el.classList.add('scroll-reveal'));

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    targetElements.forEach(el => scrollObserver.observe(el));

    // Parallax Effect Ringan pada Hero Background
    const heroBgImage = document.querySelector('#hero .hero-bg img');
    if (heroBgImage) {
        window.addEventListener('scroll', () => {
            let scrollValue = window.scrollY;
            heroBgImage.style.transform = `translateY(${scrollValue * 0.2}px)`;
        });
    }
});