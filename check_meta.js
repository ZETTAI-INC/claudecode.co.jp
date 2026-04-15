const sharp = require('sharp');
sharp('public/rstaffing/assets/images/mv/pc-b59d3d450f.png').metadata().then(console.log);
