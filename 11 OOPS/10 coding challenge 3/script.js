/*Coding Challenge #3 
Your tasks: 
1. Use a constructor function to implement an Electric Car (called 'EV') as a child "class" of 'Car'. Besides a make and current speed, the 'EV' also has the current battery charge in % ('charge' property) 
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo' 
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%' 
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! Hint: Review the definiton of polymorphism 

Test data: 
§ Data car 1: 'Tesla' going at 120 km/h, with a charge of 23% 
GOOD LUCK 😉 

 */

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  // console.log(this.speed + 10);
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed} km/hr`);
};

Car.prototype.brake = function () {
  // console.log(this.speed - 5);
  this.speed -= 5;
  console.log(`${this.make} going at ${this.speed} km/hr`);
};

const bmw = new Car("BMW", 120);

//----------------------------------------------------------
//EV constructor
const Ev = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

//Linking the prototypes for inheritance
Ev.prototype = Object.create(Car.prototype);

Ev.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

//Javascript uses accelerate() method in 'Ev' because this method appears first in prototype chain. (the accelarte() method in Car ( appears second in protype chain) will be right after this accelerate in Ev (First appears)).
//A child class can overwrite the method that inherited from parent class - Polymorphism
Ev.prototype.accelerate = function () {
  this.speed += 20;
  this.charge --;
  // console.log(this.charge);
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new Ev("Tesla", 120, 23);

tesla.chargeBattery(90);
console.log(tesla);

tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
