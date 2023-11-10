const inquirer = require('inquirer');
const {Triangle, Square, Circle} = require('./lib/shapes');
const genSVG = require('./lib/genSVG');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters:',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['Triangle', 'Square', 'Circle'],
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a text color:',
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a shape color:',
    },
];

inquirer.prompt(questions).then((answers) => {
    const {text, shape, textColor, shapeColor} = answers;
    
    const shapeInstance = new (eval(shape))();
    shapeInstance.setColor(shapeColor);

    genSVG(shapeInstance, textColor, shapeColor, text);
});
