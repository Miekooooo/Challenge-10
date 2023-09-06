const Triangle = require('./Triangle'); // Replace with the actual path to your Triangle class

describe('Triangle class', () => {
  // Test case 1: Check if Triangle constructor initializes properties correctly
  it('should initialize properties correctly', () => {
    const triangle = new Triangle(3, 4); // Create a Triangle instance with base 3 and height 4

    // Assert that the properties are set as expected
    expect(triangle.type).toBe('Triangle');
    expect(triangle.base).toBe(3);
    expect(triangle.height).toBe(4);
  });
});