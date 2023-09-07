// inquirerPrompts.js
const inquirer = require('inquirer');

async function getLogoInput() {
  return await inquirer.prompt([
    {
      name: 'text',
      message: 'Enter up to three characters:',
      validate: (input) => input.length <= 3,
    },
    {
      name: 'textColor',
      message: 'Enter text color (keyword or hexadecimal number):',
    },
    {
      name: 'shape',
      type: 'list',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      name: 'shapeColor',
      message: 'Enter shape color (keyword or hexadecimal number):',
    },
  ]);
}

module.exports = { getLogoInput };