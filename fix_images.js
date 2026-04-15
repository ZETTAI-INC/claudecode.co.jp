const sharp = require('sharp');
const fs = require('fs');

async function processImage(inputPath, outputPath, canvasWidth, canvasHeight, offsetX, offsetY, resizeWidth) {
  // Read generated image, resize it, and remove white background
  let input = await sharp(inputPath).toBuffer();
  
  if (resizeWidth) {
    input = await sharp(input).resize({ width: resizeWidth }).toBuffer();
  }
  
  // Create a transparent image the same size
  const transparentInput = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
    
  const { data, info } = transparentInput;
  
  // Make white pixels transparent (floodfill-like logic)
  const tolerance = 15;
  for (let i = 0; i < data.length; i += info.channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    if (r > 255 - tolerance && g > 255 - tolerance && b > 255 - tolerance) {
      data[i + 3] = 0; // Alpha
    }
  }

  // Then put it back
  const cleanImage = await sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: info.channels,
    }
  })
  .png()
  .toBuffer();

  // Composite onto new canvas
  await sharp({
    create: {
      width: canvasWidth,
      height: canvasHeight,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
  .composite([
    {
      input: cleanImage,
      top: offsetY,
      left: offsetX,
    }
  ])
  .toFile(outputPath);
  
  console.log('Processed:', outputPath);
}

async function run() {
  const pcSrc = '/Users/a1/.gemini/antigravity/brain/a8f8e85a-536d-4cf6-95cc-f1a5fe8f8e22/rstaffing_pc_new_1775902017350.png';
  const spSrc = '/Users/a1/.gemini/antigravity/brain/a8f8e85a-536d-4cf6-95cc-f1a5fe8f8e22/rstaffing_sp_new_1775902046717.png';
  
  // Original PC image is 2880x1728
  // The people were somewhat centered. Let's make the generated image cover the center area.
  // 1024x1024 resized to 1400 wide.
  await processImage(pcSrc, 'public/rstaffing/assets/images/mv/pc-b59d3d450f.png', 2880, 1728, 740, 200, 1400);
  
  // Original SP image is 750x1994
  // Resized to 700 wide
  await processImage(spSrc, 'public/rstaffing/assets/images/mv/sp-3bcf47e461.png', 750, 1994, 25, 200, 700);
}

run().catch(console.error);
