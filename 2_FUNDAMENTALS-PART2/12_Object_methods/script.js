"use strict";

const newData = {
  firstName: "sai",
  lastName: "gowtham",
  birthYear: 2004,
  job: "student",
  friends: ["michael", "peter", "Steven"],
  hasDriverLicense: false,

  // calcAge:function(birthYear){
  //   return 2023-birthYear;
  // }

  // calcAge:function(){
  //   console.log(this);     //here 'this' keyword returns the whole newData object because we are calling the function through a method from below console with parameter
  //   return 2023-this.birthYear;    //here 'this' points newData object
  // }

  calcAge: function () {
    this.age = 2023 - this.birthYear;
    console.log(this);
    return this.age;
  },

  getSummary: function () {
    return `${this.lastName} is a ${this.calcAge()} year old ${
      this.job
    }, and he has ${this.hasDriverLicense ? "a" : "no"} drivers license `;
  },
};

console.log(this);

console.log(newData.calcAge());

// console.log(newData['calcAge'](2004));

console.log(newData.age);

console.log(newData.getSummary());
