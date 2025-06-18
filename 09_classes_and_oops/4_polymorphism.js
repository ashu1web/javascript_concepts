// 1)Compile time polymorphism     -->Method Overloading
//Compile-time polymorphism means that the decision of which method to call is made at compile time, based on the number or type of arguments.

class Calculator {
  add(a, b, c) {
    if (c !== undefined) {
      return a + b + c;
    } else {
      return a + b;
    }
  }
}

const calc = new Calculator();
console.log("Sum of 2 values:", calc.add(2, 3));        // 5
console.log("Sum of 3 values:", calc.add(2, 3, 4));      // 9


//JavaScript does not allow multiple methods with the same name.
//But we simulate overloading by checking how many arguments were passed.
//So it mimics compile-time polymorphism.




// 2)Run time polymorphism        -->Method Overidding
//When the same method name behaves differently for different objects, and the decision is made while the program is running, 
//it is called runtime polymorphism.

class Animal {
  speak() {
    console.log("The animal makes a sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("The dog barks");
  }
}

class Cat extends Animal {
  speak() {
    console.log("The cat meows");
  }
}

// Creating objects
const a1 = new Animal();
const a2 = new Dog();
const a3 = new Cat();


a1.speak();  // The animal makes a sound
a2.speak();  // The dog barks
a3.speak();  // The cat meows



