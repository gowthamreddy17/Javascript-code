'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//Lecture DOM creating elements

//Instead of using the values in  global variables try to use them in functions.

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ''; //To empty the containerMovements for removing static defined movement rows in html so that we cannot confuse while adding movement rows dynamically (as below logic).
  //innerHTML is same as textContent but innerHTML returns everything including HTML tags and text inside html tags whereas textContent only returns text inside html but not html tags.

  //--Sorting functionality
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  //Here we use slice() method to create copy of array because sort() mutates original array.
  //Here we used a-b (ascending order) because the elements are arranged in application bottom to top. so that in order to achieve descending order in application the elements should be sorted in ascending order from bottom so that we get opposite descending order from top to bottom.
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
  <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}€</div>
  </div>`;
    //Inserting movements_row in the movements (container in dom)
    containerMovements.insertAdjacentHTML('afterbegin', html);
    //InsertAdjacentHTML() accepts two strings as arguments the first one is the position where we want to attach html. second one is the string format of html or html tags (here all the html stored as string in the  html variable).
    //For this case only about beforeend and afterbegin, actual working refer mdn docs
    //beforeend- each new element here is added here after previous one.
    //afterbegin - each new element here is added here before previous one.
  });
};

// console.log(containerMovements.innerHTML); //to read html of particular class or id

//--Computing user names

const user = 'Steven Thomas Williams';
// const username = user
//   .toLowerCase()
//   .split(' ')
//   .map(function (word) {
//     return word[0];
//   })
//   .join('');

const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUserNames(accounts);
// console.log(accounts);

// const calcDisplayBalance = function (movements) {
//   const balance = movements.reduce((acc, mov) => (acc += mov), 0);
//   labelBalance.textContent = `${balance}€`;
// };
const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce((acc, mov) => (acc += mov), 0);
  labelBalance.textContent = `${account.balance}€`;
};

const calcDisplaySummary = function (account) {
  // const income = movements
  const income = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => mov + acc);
  // console.log(income);
  labelSumIn.textContent = `${income}€`;

  const out = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov);
  // console.log(out);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  //If the bank pays 1.2% for every deposited amount and add all the interests if thet are greater than 1.
  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter(interest => interest >= 1)
    .reduce((acc, mov) => acc + mov, 0);
  // console.log(interest);
  labelSumInterest.textContent = `${interest}€`;
};

const updateUI = function (currentAcc) {
  //Display Movements
  displayMovements(currentAcc.movements);

  //Display balance
  calcDisplayBalance(currentAcc);

  //Display summary
  calcDisplaySummary(currentAcc);
};

let currentAccount;

//Add event listeners

btnLogin.addEventListener('click', function (e) {
  e.preventDefault(); //In this case, to remove defualt load when click on submit in forms.
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Used optional chaining to check whether the current account exists or not then only it checks the pin.

    //Display UI and welcome message

    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    //clear the input fields
    inputLoginUsername.value = inputLoginPin.value = '';

    inputLoginPin.blur(); //to lose focus like cursor blinking
    //Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const recieverAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  console.log(amount);
  console.log(recieverAccount);
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    recieverAccount &&
    currentAccount.balance >= amount &&
    recieverAccount?.username !== currentAccount.username
  ) {
    // console.log("Transfer valid");
    currentAccount.movements.push(-amount);
    recieverAccount.movements.push(amount);

    //Update UI
    updateUI(currentAccount);
  } else {
    console.log('transfer invalid');
  }
});

//The loan is granted if atleast one deposit, with 10% of requested loan amount (if 3000 is requested then there must be movement of 300 as deposit).
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //Add movement
    currentAccount.movements.push(amount);
    //Display UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

//closing account
//findIndex is similar to find method the difference is the find method returns the element but the findIndex returns the index of that element.
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    //Deleting the user
    accounts.splice(index, 1);
    // console.log(accounts);

    //Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false; //Here we change the state of variable when we click on button each time.
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted; //Flipping the variable condition
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//Map Method - to loop over arrays but it returns a new array as result which contains the results of applying a callback function to the original array elements.

// movements.map(function (mov,i, arr)

const eurToUSD = 1.1;

const movementsUSD = movements.map(function (mov) {
  //  return 23;
  return mov * eurToUSD;
});

console.log(movements);
console.log(movementsUSD);

//Here we returned mov*eurTOUSD  from call back function where every multipled by eurToUSD and all the multiplied elements returned in new array by Map.
//Here What we returns from the call back function will be stored new array by Map. Orignal array is not  mutated or changed here.
//Here map method calls the callback function for each of the elements in array.
//The above method with Map is example of functional programming when compared to for of loop which is a different paradigm.

//with for of loop
let movementsUSD1 = [];
for (const mov of movements) {
  // console.log(mov*eurToUSD);
  movementsUSD1.push(mov * eurToUSD);
}
console.log(movementsUSD1);

//With arrow function
const movementsArrow = movements.map(mov => mov * eurToUSD);
console.log(movementsArrow);

const movDesc = movements.map(
  (mov, i, arr) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
  //{
  // if(mov>0){
  //   return `Movement ${i+1}: You deposited ${mov}`;
  // }else{
  //   return `Movement ${i+1} : You withdrew ${Math.abs(mov)}`;
  // }
  //}
);
console.log(movDesc);

//forEach and map are similar but difference is:
// In forEach we create a side effect (i.e, some action that every iteration is visible in console) from an array with a call back function. But in Map method with callback function a new array is returned.

//-----------------------------------------------------------------

//-- filter Method - It is used to filter elements on specified condition and store those filtered elements in new array.

// const deposits = movements.filter(function (mov,i, arr) {
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);

//Here the the only the array elements which returns true on the condition(mov>0) will added into the new array and remaining elements are filtered out.

const depositsFor = [];
for (const mov of movements) {
  if (mov > 0) {
    depositsFor.push(mov);
  }
}
console.log(depositsFor);

// const withdrawals=movements.filter(function(mov){
//    return mov<0;
// })
const withdrawals = movements.filter(mov => mov < 0);

console.log(withdrawals);

//-----------------------------------------------------------------

//Reduce method - Which is used to merge all the array elments into a single value.

const balance=movements.reduce(function(acc,curr,i,arr){
  console.log(`Iteration ${i}:${acc}`);
    return acc+ curr
},0);

// const balance = movements.reduce((acc, curr, i, arr) => acc + curr, 0);

//Here the first parameter is accumulator which is like a snow ball that keeps accumulating (adding) the value that we ultimately want to return.

// Here accumulator is current sum of all previous values.In each iteration we will keep adding to the  accumulator or simply In each iteration we return the updated accumulator with current value being added in the next iterations .

//Here reduce method instead of callback function it has second parameter which is intial value of accumulator  (here in above ex:0) in first loop iteration. So for that intial value the sum is getting added.

console.log(balance);

//for of loop
let balance2 = 0;
for (const mov of movements) {
  balance2 += mov;
}
console.log(balance2);
//Here we need extra variable need to be declared outside of loop.

//to get max of array
const max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements[0]);

//Here in first iteration the intial acc = 200 and then mov=200. Here it checks the condition acc>mov which is false. so mov is returned. Then acc becomes 200
//Here in second iteration the acc = 200, mov=450; then acc>mov which is false. so mov is returned in else block. Then acc=450.
//In third iteration acc=450, mov =-400. then acc>mov is true. then acc still remains 450.
//In fourth iteration the acc=450, mov=3000. then acc>mov is false; then mov is returned and stored as acc. then acc=3000.
//.....It continues till all the array.

//----------------------------------------------------------------

//Chaining methods

const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  // .map(mov => mov * eurToUSD)
  .map((mov, i, arr) => {
    // console.log(arr); //To see the previous array returned by filter
    return mov * eurToUSD;
  })
  .reduce((acc, mov) => acc + mov);

console.log(totalDepositsUSD);

//----------------------------------------------------------------

//---Find method - which is used to retrieve one element in array based on a condition.

// const firstWithDawal=movements.find(mov=>mov<0);
const firstWithDrawal = movements.find(function (mov) {
  return mov < 0;
});
console.log(firstWithDrawal);

//Find method is also same as filter method but there are two differences:
//1. Filter returns all the elements that match the condition but the Find method returns only first element.
//2. Filter method returns a new array but the find method returns only element itself.

console.log(accounts);
const account = accounts.find(userAcc => userAcc.owner === 'Jessica Davis');
console.log(account);

// let accountFor;
// for (const account of accounts.entries()) {
//   if (account.owner === 'Jessica Davis') {
//     accountFor = account;
//     break;
//   }
// }
// console.log(accountFor);

//-----------------------------------------------------------------

//Some and every methods

//EQUALITY is only checked here
console.log(movements.includes(-130));

//any CONDITION can be checked here in some().
//some() it checks for the any (or some) value in array where the condition is true.
console.log(movements.some(mov => mov === -130));

const anyDeposit = movements.some(mov => mov > 0); //checks any deposit exist or not in the array by specific condition
console.log(anyDeposit);

const anyDeposit1 = movements.some(mov => mov > 2000);
console.log(anyDeposit1);

const anyDeposit2 = movements.some(mov => mov > 5000);
console.log(anyDeposit2);

//-------------------------------------

//Every - It is same as some() but it only returns true if all the array elements satisfy the condition.
console.log(movements.every(mov => mov > 0));
console.log(account4.movements);
console.log(account4.movements.every(mov => mov > 0));

//Passing callbacks to array methods seperately
const deposits3 = mov => mov > 0;
console.log(movements.some(deposits3));
console.log(movements.every(deposits3));
console.log(movements.filter(deposits3));

//-----------------------------------------------------------------

//flat and flatMap

//flat - to flatten the arrays i.e, making nested arrays into a single flat array.

const arr = [[1, 2], 3, 4, [5, 6]]; //Nesting level 1 or depth 1
console.log(arr.flat());

//If you have more than one nesting levels you specify the nesting level inside the flat()
const arr2 = [[[1, 2], 3], 4, 5, [[6, 7], 8]]; //nesting level 2 or depth 2

console.log(arr2.flat(2));

//To calculate overall balance with all movements
const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov);
console.log(overallBalance);

//Calculating balance with flatMap
//Here flatMap is a combination flat and Map methods, it accepts a callback function and loops over array with condition and flats the array finally. It accepts only the array with depth 1 or nesting level 1. If you have more nesting level just use flat() method seperately as shown above.

const overallBalance2 = accounts
  .map(acc => acc.movements)
  .reduce((acc, mov) => acc + mov);
console.log(overallBalance2);

// --------------------------------------------------------------

//sorting arrays - It mutates the original array when elements are sorted.
//sort() method works based on strings - basically it converts everything to strings then it sorts.
const owners = ['Jonas', 'Gowtham', 'Sai', 'Ravi', 'Ramu'];
console.log(owners.sort());
console.log(owners);

console.log(movements);
// console.log(movements.sort());

//--Ascending order

//return<0 A,B (keep order)
//return>0 B,A (switch order)

// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
//If it a>b we return a positive number otherwise a<b we return a negative number

movements.sort((a, b) => a - b);
//If  'a' is greater than 'b', then a-b returns a positive number to sort() then order will be switched.
//If  'b' is greater than 'a', then a-b returns a negative number to sort() then order will remain same.
//If a-b returns 0 their positions will remain same.

console.log(movements);

//--Descending order

// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
//If it a>b we return a negative number otherwise a<b we return a positive number

movements.sort((a, b) => b - a);
//If  'a' is greater than 'b', then b-a returns a negative number to sort() then order will remain same.
//If  'b' is greater than 'a', then b-a returns a positive number to sort() then order will be switched.
//If b-a returns 0 their positions will remain same.
console.log(movements);

// ------------------------------------------------------------------------------------------------

//More ways to creating and filling arrays

//Traditional way - manually creating
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(new Array(1, 2, 3, 4, 5, 6, 7, 8));

//Fill method + empty arrays
//Generating arrays programatically
const x = new Array(7); //Weird behaviour the empty array of that argument length specificed will be created.
console.log(x);

// console.log(x.map(()=>5)); //this wont work here

//--fill()
// x.fill(5);
console.log(x);

x.fill(5, 2, 5); //here we can specify first argument-number to fill, second and third starting and ending postions to fill.
console.log(x);

//we can use fill() on existing array with elements in it
arr3.fill(23, 3, 6);
console.log(arr3);

//Array.from()

const y = Array.from({ length: 7 }, () => 1);
//first argument is an object with length property and second one is a mapping function (like callback function we pass into map() method).
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);
//Here current element is not required so we used throw away variable ('_').

//clicked on balance getting all movements from UI
labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    ele => Number(ele.textContent.replace('€', ' '))
  );

  // console.log(movementsUI.map(ele => ele.textContent.replace('€', ' ')));
  console.log(movementsUI);

  //we can also do with spread operator but we needto do mapping function seperately with map().
  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
});

//querySelectorAll() which returns a node list looks like an array but not an real array. So it doesn't have most of array methods like map(), reduce().....
//If we want to use those array methods on node list we first need to convert that nodelist to an array, so we Array.from() in this case.

//Here we with Array.from() to create an array from querySelectorAll (which is a node list not real array but array like structure). So that nodeList is easily converted to array using Array.from().
//And also we included a mapping function that an intial array to the numbers of movements.(raw element to text content and replacing euro sign with nothing).

//Array methods in practice

//1. Total deposits sum

// const bankDeposits = accounts.map(acc => acc.movements).flat();
const bankDeposits = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, mov) => sum + mov, 0);
console.log(bankDeposits);

//2. Number of Deposits atleast 1000

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000).length;
console.log(numDeposits1000);

//Another way Number of Deposits atleast 1000 using reduce
const num2Deposits1000 = accounts
  .flatMap(acc => acc.movements)
  // .reduce((count, curr) => (curr >= 1000 ? count+1 : count), 0);
  .reduce((count, curr) => (curr >= 1000 ? ++count : count), 0);
console.log(num2Deposits1000);

//Here we cannot use 'count++' because the count value cannot be updated here it will be still zero on that iteration or line there that will be passed to count as zero in every iteration. so we used ++count.
let a = 10;
console.log(a++);
console.log(a);
console.log(++a);

//3. to create an object which contains sum of the deposits and with drawals.

const sums = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sum, curr) => {
      // curr > 0 ? (sum.deposits += curr) : (sum.withdrawals += curr);
      sum[curr > 0 ? 'deposits' : 'withdrawals'] += curr;
      return sum;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(sums);

//4. simple function to convert any string to title case (all the letters are capitalized except some exceptions).

//Ex: this is a nice title -> This Is a Nice Title

const convertTitleCase = function (title) {
  
  const capitalize = str=> str[0].toUpperCase() + str.slice(1)

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word =>
      exceptions.includes(word)
        ? word : capitalize(word)     
    ).join(' ');
  // return titleCase;
  return capitalize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
