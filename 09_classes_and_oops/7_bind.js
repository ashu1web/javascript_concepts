const person = {
  name: "Ashu",
  sayHello: function () {
    console.log("Hi, I'm " + this.name);
  },
};

function lowerName(username) {
    console.log(`This name is in lower letter: ${this.name.toLowerCase()}`);
}


const boundGreet = person.sayHello.bind(person);
boundGreet();                  //  Output: "Hi, I'm Ashu"



person.sayHello.call(person); // Output: Hi, I'm Ashu
person.sayHello()
console.log(person.name)
lowerName.call(person,"Ashu")


//bind() is a method that creates a new function where the value of this is fixed (or "bound") to a specific object.
//"Hey JavaScript, make me a new function just like sayHello, but always make this point to the person object, no matter how or where I call it."

//call() is a method that calls a function immediately, and you can explicitly set what this refers to during that call.
