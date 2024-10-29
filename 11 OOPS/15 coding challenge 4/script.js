/*Coding Challenge #4 

Your tasks: 
1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl' 
child class of the 'CarCl' class 
2. Make the 'charge' property private 
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. Then experiment with chaining! 

Test data: 
§ Data car 1: 'Rivian' going at 120 km/h, with a charge of 23% 
GOOD LUCK 


 */

class Carcl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} km/hr`);
  }
  brake = function () {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} km/hr`);
    return this;
  };
}

//EV class

class EVcl extends Carcl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge--;
    // console.log(this.charge);
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}

const rivian = new EVcl("Rivian", 120, 23);
// rivian.chargeBattery(90);
console.log(rivian);
// console.log(rivian.#charge); //not accessed private field outside class

rivian
  .accelerate()
  .chargeBattery(93)
  .accelerate()
  .brake()
  .accelerate()
  .chargeBattery(20)
  .accelerate()
  .brake();


//-----------------------------------------------------------------------

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   // console.log(this.speed + 10);
//   this.speed += 10;
//   console.log(`${this.make} going at ${this.speed} km/hr`);
// };

// Car.prototype.brake = function () {
//   // console.log(this.speed - 5);
//   this.speed -= 5;
//   console.log(`${this.make} going at ${this.speed} km/hr`);
// };

// const bmw = new Car("BMW", 120);

// const Ev = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// //Linking the prototypes for inheritance
// Ev.prototype = Object.create(Car.prototype);

// Ev.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// Ev.prototype.accelerate = function () {
//   this.speed += 20;
//   this.chargeTo -= 1;
//   // console.log(this.charge);
//   console.log(
//     `${this.make} going at ${this.speed} km/h, with a charge of ${this.chargeTo}%`
//   );
// };

// const tesla = new Ev("Tesla", 120, 23);

// tesla.chargeBattery(90);
// console.log(tesla);

// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
