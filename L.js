//Liskov Substitution Principle

// class Rectangle {
//     constructor(width, height) {
//         this.width = width
//         this.height = height
//     }

//     setWidth(width) {
//         this.width = width
//     }

//     setHeight(height) {
//         this.height = height
//     }

//     area() {
//         return this.width * this.height
//     }
// }

// class Square extends Rectangle {
//    setWidth(width) {
//     this.width = width
//     this.height = width
//    } 

//    setHeight(height) {
//     this.height = height
//     this.width = height
//    }
// }

// function increaseRectangleWidth(rectangle) {
//     rectangle.setWidth(rectangle.width + 1)
// }

// const reactangle1 = new Rectangle(10,2)
// const square = new Square(5,5)

// increaseRectangleWidth(reactangle1)
// increaseRectangleWidth(square)

// console.log(reactangle1.area())
// console.log(square.area())


//LSP applied

class Shape {
    area() {
        return 0;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width
        this.height = height
    }

    area() {
        return this.width * this.height;
    }
}

class Square extends Shape {
    constructor(length) {
        super();
        this.length = length
    }

    area() {
        return this.length**2;
    }
}

class Calculator {
    constructor(shape) {
        this.shape = shape
    }

    calcArea() {
        return this.shape.area()
    }
}

const rect = new Rectangle(10,2)
const squ = new Square(10)
const calArea = new Calculator(rect)  
calArea.shape = squ
console.log(calArea.calcArea())