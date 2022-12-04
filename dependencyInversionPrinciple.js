console.log("hello world");

// Classes can be defined in 2 ways
// class declaration
// hoisting: functions can be called in code that appears before
// they are defined, classes must be defined before they can be
// constructed.

class RectangleInClassDeclaration {
  // constructor: first method to run,
  // it initializes the instance.
  // assigns the initial property values to
  // to the instance when it's created.
  constructor(alto, ancho) {
    //this: this refers to the current object
    this.alto = alto;
    this.ancho = ancho;
  }
  area() {
    // methods are defined with a function declaration
    // methods are needed to perform tasks or actions
    // over the propertys of the instance.
    return this.alto * this.ancho;
  }
}

// classes expressions
const RectangleInClassExpression = class {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
  area() {
    return this.alto * this.ancho;
  }
};

const rectangle = new RectangleInClassExpression(2, 3);

console.log(rectangle.area());
