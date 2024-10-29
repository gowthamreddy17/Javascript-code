"use strict";

//Encapsulation: It basically means to keep some properties and methods private inside the class so that they are not accessible from outside of the class. Then the rest of the methods are basically exposed as a public interface, which we can also call API.

/*  Why Encapsulation Needed:

1. **Why Encapsulation is Important**
   - **Prevent External Changes:** Encapsulation stops external code from accidentally changing class data.

2. **When we use a Small Public Interface**
   - **Safe Internal Changes:** With only a few public methods, internal changes can be made without breaking external code.

/*
 **Encapsulation in JavaScript**

   - **Current Limits:** JavaScript classes don't fully support true data privacy yet.
   - **Future Features:** Proposals exist for private class fields and methods.
   - **Temporary Solutions:** Use conventions to mimic encapsulation until true privacy is available.  
*/

//------------- Truly implementin class fields (not yet available in languuage readily)

//Public fields
//Private fields
//Public methods
//Private methods
// there is also the static version

class Account {
  //1. Public fields (available on instances not on prototypes)
  locale = navigator.language;

  // 2. Private fields (available on instances not on prototypes)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //Protected property (by adding _ at starting) - not truly Private
    this.#pin = pin;

    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  //3. Public Methods

  //Public Interface of our objects

  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  //Protecting method - by adding _. It is fake. But every developer will know to not manipulate this outside the class.
  // _approveLoan(val) {
  //   return true;
  // }
  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  static helper() {
    console.log("Helper");
  }

  //4. Private Methods
  // #approveLoan(val) {

  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account("Jonas", "EUR", 1111);
console.log(acc1);

// acc1.movements.push(250);
// acc1.movements.push(-150);

acc1.deposit(250);
acc1.withdraw(150);
acc1.requestLoan(1000);
console.log(acc1);

//These two methods should not accessible public to everyone. So we use encapsulation to keep it private
// acc1.approveLoan(1000);
// console.log(acc1.pin);

// Protecting movements by adding it in public interface by returning array not manipulating it. but with _movements it is bad practice to manipulate that every developer knows.
console.log(acc1.getMovements());

//-- Protecting movements as Private fields - only chrome supports it.

// console(acc1.#movements); //gives error when we access outside the class
// console.log(acc1.#pin);

// console.log(acc1.#approveLoan(100)); // this in present works as a private field not as private method

//static methods not available on instances. available on classes only
// console.log(acc1.helper())
console.log(Account.helper());

//---------------------------------------------------

//Chaining methods inside a class

acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000); // to make sure that work every method return that account class.

console.log(acc1.getMovements());
