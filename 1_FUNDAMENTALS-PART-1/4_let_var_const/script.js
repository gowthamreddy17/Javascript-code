let age=30;
age=31;
console.log(age);
// let is block scoped

const birthYear=2004;
// birthYear=2005;      this will throw error because of constant variable cannot be reassigned

// const age;        Error!  you to have give value also while declaring a constant

var job='programmer';
var job='teacher';
// var is function scoped

firstName = 'sai';
console.log(firstName);
// this will work without declaraing but you cannot use like that is illegal

//const is used more to reduce bugs incase there is no need to change of value