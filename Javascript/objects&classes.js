class Triangle {
    constructor(height, base) {
      this.height = height;
      this.base = base;
    }

    // Get area
    get area() {
      return this.calculateArea();
    }
    // Calculate Area Method
    calculateArea() {
      return (0.5 * this.height * this.base);
    }
  }
  
  let traingle1 = new Triangle(20, 50);
  console.log("\n***** Javascript - Objects & classes*****");
  console.log("\n\nCalculate area of Traingle by giving inputs using objects and classes\n\n")
  console.log("The area of the traingle is: "+traingle1.area+"\n"); 