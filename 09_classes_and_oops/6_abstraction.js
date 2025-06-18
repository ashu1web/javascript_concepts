//Abstraction is the concept of hiding internal implementation details and showing only the essential features of an object.
//It helps simplify complex systems by exposing only what is necessary.


class Vehicle {
  start() {
    this.#checkEngine();  // internal logic hidden from user
    console.log("Vehicle started");
  }

  // Private method - hidden from outside access
  #checkEngine() {
    console.log("Engine check complete");
  }
}

const car = new Vehicle();
car.start();            //  Output: Engine check complete \n Vehicle started
// car.#checkEngine();  //  Error: Private method, can't access from outside
