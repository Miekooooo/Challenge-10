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

const Circle = require('./Circle');

describe('Circle class', () => {
  // Test case 1: Check if Circle constructor initializes properties correctly
  it('should initialize properties correctly', () => {
    const circle = new Circle(5); // Create a Circle instance with a radius of 5

    // Assert that the properties are set as expected
    expect(circle.type).toBe('Circle');
    expect(circle.radius).toBe(5);
  });
});

const Square = require('./Square');

describe('Square class', () => {
  // Test case 1: Check if Square constructor initializes properties correctly
  it('should initialize properties correctly', () => {
    const square = new Square(4); // Create a Square instance with a side length of 4

    // Assert that the properties are set as expected
    expect(square.type).toBe('Square');
    expect(square.sideLength).toBe(4);
  });
});