const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Coding Challenge #2
// Let's continue with our football betting app! Keep using the 'game' variable from
// before.
// Your tasks:

// 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")

// 2. Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages, you can go check if you don't remember)

// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the
// same property names
// �
// �

// 4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
// Gnarby: 1,
// Hummels: 1,
// Lewandowski: 2
// }


//--- Task 1----
console.log("-----Task 1----");

for (const [goalNumber, playerName] of game.scored.entries()) {
  console.log(` Goal ${goalNumber + 1} : ${playerName}`);
}


//--- Task 2----
console.log("-----Task 2----");

let average = 0;
for (let odd of Object.values(game.odds)) {
  average += odd;
  //average=average+odd;
  //average=0+1.33, average=1.33+3.25, average=4.58+6.5,
  // console.log(average); //average=11.08
}

console.log(average / Object.values(game.odds).length); //--- 11.08/3=3.6933333333333334


//--- Another way (jonas)
let odds = Object.values(game.odds);
let averages = 0;
for (const odds1 of odds) {
  averages += odds1;
}
averages /= odds.length;
console.log(averages);


//--- Task 3----
console.log("-----Task 3----");

for (const [team,odds] of Object.entries(game.odds)) {
  // console.log(team,odds);
  let teamStr=team==='x'?'draw':`victory ${game[team]}`;
  console.log(`Odd of ${teamStr} : ${odds}`);
}

//Here we have taken game.odds to loop over odds object and formed array each of property and value in odds object  and then destructured array with [team,odds]. 
//In the teamStr we used ternary operator if it is 'x' then return it is draw otherwise return `victory ${game[team]}` where game[team] takes team1 and team2, so that  we get name of team names here.
// Here the important point is properties that is in odds object and two names properties of team1 and team2 of game object are same so that when we passed team1 into game object we get team1 name. same thing happens with team2.


//task 4 (Bonus)
console.log("-----Task 4 (Bonus) ----");
const scorers={};
for(const player of game.scored){
   scorers[player]?scorers[player]++:(scorers[player]=1);
}
console.log(scorers);


// const scorers = {};: Initializes an empty object called scorers to store the goal-scoring information.

// for (const player of game.scored) {: Iterates over each element in the scored array of the game object. The scored array contains the names of players who scored goals in the game.

// scorers[player] ? scorers[player]++ : (scorers[player] = 1);: Checks if the player's name already exists as a property in the scorers object. If it does, it increments the corresponding value (goal count) by 1. If the player's name is not a property in the scorers object, it creates a new property with the player's name and sets its value to 1 (indicating that the player scored one goal).