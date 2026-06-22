/* ==========================================================================
   RESERVASI — WhatsApp Reservation Logic
   ========================================================================== */

export function initReservasi() {
    const reservationForm = document.getElementById('whatsapp-reservation-form');
    if (!reservationForm) return;

    reservationForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('res-name').value.trim();
        const phone = document.getElementById('res-phone').value.trim();
        const date = document.getElementById('res-date').value;
        const time = document.getElementById('res-time').value;
        const guests = document.getElementById('res-guests').value;
        const outlet = document.getElementById('res-outlet').value;

        if (!outlet) {
            alert('Silakan pilih outlet Arsen Coffee terlebih dahulu!');
            return;
        }

        const adminWhatsAppNumber = '6281297577567';

        const message =
            `Halo Admin Arsen Coffee, saya ingin melakukan reservasi meja.%0A%0A` +
            `*--- DATA RESERVASI ---*%0A` +
            `• *Nama Lengkap :* ${name}%0A` +
            `• *No. WhatsApp :* ${phone}%0A` +
            `• *Pilihan Outlet :* ${outlet}%0A` +
            `• *Tanggal :* ${date}%0A` +
            `• *Waktu/Jam :* ${time} WIB%0A` +
            `• *Jumlah Tamu :* ${guests} Orang%0A%0A` +
            `Mohon info ketersediaan tempatnya ya min, terima kasih!`;

        window.open(`https://api.whatsapp.com/send?phone=${adminWhatsAppNumber}&text=${message}`, '_blank');
    });
}