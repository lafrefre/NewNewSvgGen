const {Triangle, Square, Circle} = require('./shapes');

describe('Triangle', () => {
    it('should render a triangle SVG', () => {
        const triangle = new Triangle();
        triangle.setColor('red');
        const svg = triangle.render();
        expect(svg).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="red" />');
    });
});

describe ('Square', () => {
    it('should render a square SVG', () => {
        const square = new Square();
        square.setColor('blue');
        const svg = square.render();
        expect(svg).toEqual('<rect x="73" y="40" width="160" height="160" fill="blue" />');
    });
});

describe ('Circle', () => {
    it('should render a circle SVG', () => {
        const circle = new Circle();
        circle.setColor('green');
        const svg = circle.render();
        expect(svg).toEqual('<circle cx="150" cy="115" r="80" fill="green" />');
    });
});