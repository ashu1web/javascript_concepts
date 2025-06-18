//Encapsulation is the process of wrapping data (variables) and the methods that work on that data into a single unit (usually a class),
//and restricting direct access to some of the object’s components.

class Person {
  #name;   // private field

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  setName(newName) {
    if (newName.length > 0) {
      this.#name = newName;
    }
  }
}

const person = new Person("Ashu");
console.log(person.getName());  // Output: Ashu

person.setName("Riya");
console.log(person.getName());  // Output: Riya

// person.#name = "Hacked";      Error: Cannot access private field
