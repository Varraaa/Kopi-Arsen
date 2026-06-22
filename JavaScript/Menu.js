/* ==========================================================================
   MENU — Filter Logic
   ========================================================================== */

export function initMenu() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const menuItems = document.querySelectorAll('.menu-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            menuItems.forEach(item => {
                const match = filterValue === 'all' || filterValue === item.getAttribute('data-category');
                item.style.display = match ? 'block' : 'none';
                if (match) setTimeout(() => { item.style.opacity = '1'; }, 10);
                else item.style.opacity = '0';
            });
        });
    });
}