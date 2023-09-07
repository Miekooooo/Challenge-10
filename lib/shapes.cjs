
class Shape {
  constructor(type) {
    this.type = type;
  }

  getType() {
    return this.type;
  }

  calculateArea() {
    throw new Error("Subclasses must implement the calculateArea method.");
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super("Triangle");
    this.base = base;
    this.height = height;
  }

  calculateArea() {
    return 0.5 * this.base * this.height;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius ** 2;
  }
}

class Square extends Shape {
  constructor(sideLength) {
    super("Square");
    this.sideLength = sideLength;
  }

  calculateArea() {
    return this.sideLength ** 2;
  }
}

module.exports = { Triangle, Circle, Square };
