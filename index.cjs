// index.cjs
const fs = require('fs');
const SVG = require('svg.js');
const { getLogoInput } = require('./inquirerPrompts');

// Function to create the logo SVG based on user input
function createLogoSvg(text, textColor, shape, shapeColor) {
  // Create an SVG canvas
  const canvas = SVG(document.createElement('div')).size(300, 200);

  // Create the shape based on user input
  switch (shape.toLowerCase()) {
    case 'circle':
      canvas.circle(100).cx(150).cy(100).fill(shapeColor);
      break;
    case 'triangle':
      canvas.polygon('50,10 10,190 90,190').fill(shapeColor);
      break;
    case 'square':
      canvas.rect(100, 100).move(50, 50).fill(shapeColor);
      break;
    default:
      throw new Error('Invalid shape');
  }

  // Add the text
  canvas.text(text).font({ size: 24 }).fill(textColor).center(150, 100);

  // Return the SVG as a string
  return canvas.svg();
}

// Function to start the logo generation process
async function generateLogo() {
  try {
    const userInput = await getLogoInput(); // Use the inquirer prompts from the CommonJS module

    // Generate the SVG based on user input
    const svgCode = createLogoSvg(
      userInput.text,
      userInput.textColor,
      userInput.shape,
      userInput.shapeColor
    );

    // Save the SVG to logo.svg
    fs.writeFileSync('logo.svg', svgCode);

    console.log('Generated logo.svg');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// Run the logo generation process
generateLogo();