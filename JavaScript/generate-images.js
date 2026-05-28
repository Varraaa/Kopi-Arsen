const sharp = require('sharp');
const path = require('path');

const root = path.join(__dirname, '..');

const images = [
  // [input, output, lebar]
  ['Image/heroBG.webp',                  'Image/heroBG-480.webp',                   480],
  ['Image/heroBG.webp',                  'Image/heroBG-960.webp',                   960],
  ['Image/gula aren landscape.webp',     'Image/gula aren landscape-400.webp',      400],
  ['Image/gula aren landscape.webp',     'Image/gula aren landscape-800.webp',      800],
  ['Image/gula aren landscape.webp',     'Image/gula aren landscape-200.webp',      200],
  ['Image/macchiato.webp',               'Image/macchiato-200.webp',                200],
  ['Image/macchiato.webp',               'Image/macchiato-400.webp',                400],
  ['Image/klepon latte.webp',            'Image/klepon latte-200.webp',             200],
  ['Image/klepon latte.webp',            'Image/klepon latte-400.webp',             400],
  ['Image/place.webp',                   'Image/place-300.webp',                    300],
  ['Image/place.webp',                   'Image/place-600.webp',                    600],
  ['Image/gula aren latte.webp',         'Image/gula aren latte-200.webp',          200],
  ['Image/gula aren latte.webp',         'Image/gula aren latte-400.webp',          400],
  ['Image/classic cappucino.webp',       'Image/classic cappucino-200.webp',        200],
  ['Image/classic cappucino.webp',       'Image/classic cappucino-400.webp',        400],
  ['Image/matcha latte.webp',            'Image/matcha latte-200.webp',             200],
  ['Image/matcha latte.webp',            'Image/matcha latte-400.webp',             400],
  ['Image/lemon tea.webp',               'Image/lemon tea-200.webp',                200],
  ['Image/lemon tea.webp',               'Image/lemon tea-400.webp',                400],
  ['Image/churros.webp',                 'Image/churros-200.webp',                  200],
  ['Image/churros.webp',                 'Image/churros-400.webp',                  400],
  ['Image/potato chips.webp',            'Image/potato chips-200.webp',             200],
  ['Image/potato chips.webp',            'Image/potato chips-400.webp',             400],
];

(async () => {
  for (const [input, output, width] of images) {
    await sharp(path.join(root, input)).resize(width).toFile(path.join(root, output));
    console.log(`✅ ${output}`);
  }
  console.log('Semua gambar selesai di-generate!');
})();