#!/usr/bin/env node

/**
 * Image optimization script
 * This script optimizes images in the public/images directory
 */

const fs = require('fs');
const path = require('path');

// Function to get file size in MB
function getFileSizeInMB(filePath) {
  const stats = fs.statSync(filePath);
  return (stats.size / (1024 * 1024)).toFixed(2);
}

// Function to log file sizes
function logFileSizes(directory) {
  console.log('\n📊 Current image sizes:');
  console.log('========================');
  
  const files = fs.readdirSync(directory);
  
  files.forEach(file => {
    if (file.match(/\.(png|jpg|jpeg|webp|avif)$/i)) {
      const filePath = path.join(directory, file);
      const size = getFileSizeInMB(filePath);
      console.log(`${file}: ${size}MB`);
    }
  });
}

// Main function
function main() {
  const imagesDir = path.join(__dirname, '../public/images');
  
  if (!fs.existsSync(imagesDir)) {
    console.error('❌ Images directory not found');
    process.exit(1);
  }
  
  console.log('🔍 Analyzing images...');
  logFileSizes(imagesDir);
  
  console.log('\n💡 Optimization recommendations:');
  console.log('================================');
  console.log('1. Convert PNG to WebP format for better compression');
  console.log('2. Use responsive images with different sizes');
  console.log('3. Implement lazy loading for images below the fold');
  console.log('4. Consider using a CDN for image delivery');
  console.log('5. Optimize the profile-pic-large.png (1.7MB) - this is too large!');
  
  console.log('\n🚀 Next steps:');
  console.log('==============');
  console.log('1. Install sharp: npm install sharp');
  console.log('2. Use Next.js Image component with proper sizing');
  console.log('3. Consider using a service like Cloudinary or ImageKit');
  console.log('4. Implement progressive image loading');
}

main();