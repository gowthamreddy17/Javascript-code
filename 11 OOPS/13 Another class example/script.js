"use strict";

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  //Public Interface of our objects
  deposit(val) {
    this.movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }

  approveLoan(val){
     return true;
  }
  requestLoan(val){
     if(this.approveLoan(val)){
      this.deposit(val);
      console.log(`Loan approved`)
     }
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
acc1.approveLoan(1000);
console.log(acc1.pin);

