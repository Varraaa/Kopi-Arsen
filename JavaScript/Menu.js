/* ==========================================================================
   MENU FILTER LOGIC
   ========================================================================== */
const filterButtons = document.querySelectorAll('.filter-btn');
const menuItems = document.querySelectorAll('.menu-item');

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        // 1. Pindahkan class active antar tombol filter
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        // 2. Ambil nilai kategori dari tombol yang diklik
        const filterValue = this.getAttribute('data-filter');

        // 3. Proses penyaringan menu card
        menuItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');

            if (filterValue === 'all' || filterValue === itemCategory) {
                // Tampilkan menu jika memilih 'all' atau cocok dengan kategorinya
                item.style.display = 'block';
                // Trigger animasi fade-in ringan
                setTimeout(() => { item.style.opacity = '1'; }, 10);
            } else {
                // Sembunyikan menu jika tidak cocok
                item.style.opacity = '0';
                item.style.display = 'none';
            }
        });
    });
});