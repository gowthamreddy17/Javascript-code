"use strict";

// Let's continue with our football betting app! This time, we have a map called
// 'gameEvents' (see below) with a log of the events that happened during the
// game. The values are the events themselves, and the keys are the minutes in which
// each event happened (a football game has 90 minutes plus some extra time).

// Your tasks:
// 1. Create an array 'events' of the different game events that happened (no
// duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log.
// 3. Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽  GOAL

//  GOOD LUCK

const gameEvents = new Map([
  [17, "⚽ GOAL"], //Minutes and event at that time
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"], //Extra time
]);

//Task - 1
const events = [...new Set(gameEvents.values())];
console.log(events);

//task - 2
gameEvents.delete(64);
console.log(gameEvents);

//---- task -3
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
// Formula: Total Time /Number of events

//Bonus - To get time after removing 92 which is above 90 minutes.
const time1 = [...gameEvents.keys()].pop();
//Here we converted all map keys into array by destructuring.And used pop() method (array method) to remove last element. Here pop() method also returns popped or removed element which is stored in time1 variable.
console.log(time1);
console.log(
  `An event happened, on average, every ${time1 / gameEvents.size} minutes`
);

//task 4

for (const [time, event] of gameEvents) {
  console.log(
    time < 45
      ? `[First Half] ${time} : ${event}`
      : `[Second Half] ${time} : ${event}`
  );
}

//or
//Jonas Answer
console.log("Jonas Answer");
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "FIRST" : "SECOND";
  // console.log(`[${half} Half] ${min} : ${event}`); //It also works
}

//task 4
//Bugs - Me First tried :)
//for(const [time,event] of gameEvents){
//   console.log(time<45?console.log(`[First Half] ${time} : ${event}`):console.log(`[Second Half] ${time} : ${event}`));
// }
//Output gets after ecah iteration with undefined after it also.
// The issue in this code lies in the use of console.log inside the conditional operator (?:).
//The console.log function returns undefined, and since you are using it inside the conditional operator, you end up with an undefined value being printed in each iteration.
