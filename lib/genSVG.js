const fs = require('fs');

function genSVG(shape, textColor, shapeColor, text) {
    const svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
    <text x="100" y="150" fill="${textColor}">${text}</text>
    </svg>`;

    fs.writeFileSync('logo.svg', svg);
    console.log('SVG file generated');
}

module.exports = genSVG;