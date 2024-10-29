'use strict';
const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

// budget[0].value = 10000; //it works
// budget[9]= 'jonas' //not works

//with Object.freeze we can make Object immutable upto one level. we can cahnge the nested ones.

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

// spendingLimits.jay = 8; //not works once object is freezed.
// console.log(spendingLimits);

const getLimit = (limits, user) => limits?.[user] ?? 0;

//Pure Function - which doesn't produce side effects
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  const cleanUser = user.toLowerCase();

  // const limit = spendingLimits[user] ? spendingLimits[user] : 0;

  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
};

//A function that produces side effects is called an impure function.

const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');

const newBudget2 = addExpense(
  newBudget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');

// const checkExpenses1 = function (state, limits) {
//   return state.map(entry => {
//     return entry.value < -getLimit(limits, entry.user)
//       ? { ...entry, flag: 'limit' }
//       : entry;
//   });
// };

const checkExpenses = function (state, limits) {
  return state.map(entry => {
    return entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry;
  });
};

const finalBudget = checkExpenses(newBudget3, spendingLimits);
console.log(finalBudget);

//Impure function - because of console.log present
const logbigExpenses = function (state, bigLimit) {
  const bigExpenses = state
    .filter(entry => entry.value <= -bigLimit)
    .map(entry => entry.description.slice(-2))
    .join('/');
  // .reduce((str, cur)=> `${str} / ${cur.description.slice(-2)}`, '')

  console.log(bigExpenses);

  // let output = '';
  // for (const entry of budget)
  //   output +=
  //     entry.value <= -bigLimit
  //       ? (output += `${entry.description.slice(-2)} / `)
  //       : '';

  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);
};

// console.log(budget);

logbigExpenses(finalBudget, 500);
