//In JavaScript, every object has a prototype, which is another object it inherits properties and methods from.
//This is how JavaScript achieves inheritance.
//In short  Prototype is a blueprint from which objects can inherit behavior.


function Person(name) {
  this.name = name;
}

// Adding a method to the prototype
Person.prototype.sayHello = function () {
  console.log("Hi, I'm " + this.name);
};

const p1 = new Person("Ashu");
const p2 = new Person("Riya");

p1.sayHello(); // Hi, I'm Ashu
p2.sayHello(); // Hi, I'm Riya


