/* ==========================================================================
   ARSEN WHATSAPP RESERVATION LOGIC
   ========================================================================== */
const reservationForm = document.getElementById('whatsapp-reservation-form');

if (reservationForm) {
    reservationForm.addEventListener('submit', function(event) {
        // Mencegah halaman reload saat form di-submit
        event.preventDefault();

        // 1. Ambil semua data input dari user
        const name = document.getElementById('res-name').value;
        const phone = document.getElementById('res-phone').value;
        const date = document.getElementById('res-date').value;
        const time = document.getElementById('res-time').value;
        const guests = document.getElementById('res-guests').value;
        const outlet = document.getElementById('res-outlet').value;

        // Validasi tambahan untuk pilihan outlet
        if (outlet === "") {
            alert("Silakan pilih outlet Arsen Coffee terlebih dahulu!");
            return;
        }

        // 2. Nomor WhatsApp Admin Arsen (Gunakan format kode negara, tanpa tanda '+')
        const adminWhatsAppNumber = "6281297577567"; 

        // 3. Susun format template pesan teks yang akan dikirim ke WhatsApp admin
        const message = `Halo Admin Arsen Coffee, saya ingin melakukan reservasi meja.%0A%0A` +
                        `*--- DATA RESERVASI ---*%0A` +
                        `• *Nama Lengkap :* ${name}%0A` +
                        `• *No. WhatsApp :* ${phone}%0A` +
                        `• *Pilihan Outlet :* ${outlet}%0A` +
                        `• *Tanggal :* ${date}%0A` +
                        `• *Waktu/Jam :* ${time} WIB%0A` +
                        `• *Jumlah Tamu :* ${guests} Orang%0A%0A` +
                        `Mohon info ketersediaan tempatnya ya min, terima kasih!`;

        // 4. Gabungkan nomor admin dan template pesan ke URL WhatsApp API
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${adminWhatsAppNumber}&text=${message}`;

        // 5. Alihkan atau buka tab baru menuju WhatsApp pelanggan
        window.open(whatsappUrl, '_blank');
    });
}