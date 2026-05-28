/* ==========================================================================
   MAIN — Entry point: import & inisialisasi semua modul
   ========================================================================== */
import { initScript    } from './Script.js';
import { initMenu      } from './Menu.js';
import { initReservasi } from './Reservasi.js';
import { initAnimasi   } from './Animasi.js';

document.addEventListener('DOMContentLoaded', () => {
    initScript();
    initMenu();
    initReservasi();
    initAnimasi();
});
