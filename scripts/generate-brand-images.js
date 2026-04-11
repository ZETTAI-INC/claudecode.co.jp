const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const BRAND_BLUE_1 = '#2563EB';
const BRAND_BLUE_2 = '#3B82F6';

// ---- Favicon (square) ----
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="512" y2="512" gradientUnits="userSpaceOnUse">
      <stop stop-color="${BRAND_BLUE_1}"/>
      <stop offset="1" stop-color="${BRAND_BLUE_2}"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="112" fill="url(#g)"/>
  <path d="M160 180 L240 256 L160 332" stroke="white" stroke-width="40" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M270 332 L360 332" stroke="white" stroke-width="40" stroke-linecap="round" fill="none"/>
</svg>`;

// ---- OGP (1200x630) ----
const ogpSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F8FAFC"/>
      <stop offset="1" stop-color="#E0E7FF"/>
    </linearGradient>
    <linearGradient id="mark" x1="0" y1="0" x2="1" y2="1">
      <stop stop-color="${BRAND_BLUE_1}"/>
      <stop offset="1" stop-color="${BRAND_BLUE_2}"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="80" y="80" width="1040" height="470" rx="32" fill="white" opacity="0.6"/>

  <!-- Brand mark -->
  <g transform="translate(140, 180)">
    <rect width="120" height="120" rx="26" fill="url(#mark)"/>
    <path d="M36 42 L60 66 L36 90" stroke="white" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M68 90 L92 90" stroke="white" stroke-width="10" stroke-linecap="round" fill="none"/>
  </g>

  <!-- Primary title -->
  <text x="290" y="245" font-family="'Roboto', 'Helvetica Neue', Arial, sans-serif" font-weight="900" font-size="64" fill="#0F172A" letter-spacing="2">CLAUDE CODE</text>
  <text x="290" y="315" font-family="'Noto Sans JP', 'Hiragino Kaku Gothic ProN', sans-serif" font-weight="700" font-size="52" fill="#1E40AF">リスキリング研修</text>

  <!-- Sub text -->
  <text x="140" y="430" font-family="'Noto Sans JP', 'Hiragino Kaku Gothic ProN', sans-serif" font-weight="500" font-size="28" fill="#475569">業務知識 × Claude Code で、つくるAI力を。</text>

  <!-- Footer brand -->
  <rect x="140" y="475" width="6" height="36" rx="3" fill="${BRAND_BLUE_1}"/>
  <text x="162" y="503" font-family="'Roboto', 'Noto Sans JP', sans-serif" font-weight="700" font-size="26" fill="#0F172A">株式会社ZETTAI</text>
</svg>`;

async function run() {
  const pub = path.join(__dirname, '..', 'public');

  // favicon.png (512x512)
  await sharp(Buffer.from(faviconSvg))
    .resize(512, 512)
    .png()
    .toFile(path.join(pub, 'favicon.png'));
  console.log('wrote favicon.png');

  // favicon.svg (for modern browsers)
  fs.writeFileSync(path.join(pub, 'favicon.svg'), faviconSvg);
  console.log('wrote favicon.svg');

  // ogp.png (1200x630)
  await sharp(Buffer.from(ogpSvg))
    .resize(1200, 630)
    .png()
    .toFile(path.join(pub, 'ogp.png'));
  console.log('wrote ogp.png');
}

run().catch(e => { console.error(e); process.exit(1); });
