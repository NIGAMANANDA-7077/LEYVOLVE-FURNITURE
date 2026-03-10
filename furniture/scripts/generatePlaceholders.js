// Simple Node script to create placeholder SVG images for products
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../public/images');

// Ensure directory exists
if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
}

const categories = [
    { prefix: 'chair', count: 4, color: '#D4B996' },
    { prefix: 'armchair', count: 4, color: '#C9A882' },
    { prefix: 'sofa', count: 4, color: '#B8956A' },
    { prefix: 'table', count: 4, color: '#A68A64' },
    { prefix: 'bed', count: 4, color: '#8C7853' },
    { prefix: 'stool', count: 4, color: '#E8DCC8' },
    { prefix: 'lounge', count: 4, color: '#C4B5A0' },
    { prefix: 'desk', count: 4, color: '#9D8B70' }
];

function createPlaceholderSVG(name, color) {
    return `<svg width="800" height="1000" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="1000" fill="${color}"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="32" fill="#FFFFFF" text-anchor="middle" dy=".3em">${name}</text>
</svg>`;
}

categories.forEach(({ prefix, count, color }) => {
    for (let i = 1; i <= count; i++) {
        const filename = `${prefix}${i}.svg`;
        const filepath = path.join(imagesDir, filename);
        const svg = createPlaceholderSVG(`${prefix} ${i}`, color);
        fs.writeFileSync(filepath, svg);
        console.log(`Created ${filename}`);
    }
});

console.log('All placeholder images created!');
