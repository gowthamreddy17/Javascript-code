"use strict";

/*
Coding Challenge #1 

Let's build a simple poll app! 

A poll has a question, an array of options from which people can choose, and an 
array with the number of replies for each option. This data is stored in the starter 
'poll' object below. 

Your tasks: 

1. Create a method called 'registerNewAnswer' on the 'poll' object. The 
method does 2 things: 
      1.1. Display a prompt window for the user to input the number of the 
      selected option. The prompt should look like this: 
         What is your favourite programming language? 
         0: JavaScript 
         1: Python 
         2: Rust 
         3: C++ 
        (Write option number) 
      1.2. Based on the input number, update the 'answers' array property. For 
      example, if the option is 3, increase the value at position 3 of the array by 
      1. Make sure to check if the input is a number and if the number makes 
      sense (e.g. answer 52 wouldn't make sense, right?) 
2. Call this method whenever the user clicks the "Answer poll" button. 
3. Create a method 'displayResults' which displays the poll results. The 
method takes a string as an input (called 'type'), which can be either 'string' 
or 'array'. If type is 'array', simply display the results array as it is, using 
console.log(). This should be the default option. If type is 'string', display a 
string like "Poll results are 13, 2, 4, 1".  
4. Run the 'displayResults' method at the end of each 
'registerNewAnswer' method call. 

5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test 
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll 
object! So what should the this keyword look like in this situation? 
20 

The Complete JavaScript Course 
Test data for bonus:  
§ Data 1: [5, 2, 3] 
§ Data 2: [1, 5, 3, 9, 6, 1] 
Hints: Use many of the tools you learned about in this and the last section 

GOOD LUCK 
*/

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3:  C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    //Displaying question and options
    let answer = Number(
      prompt(`${this.question} \n ${this.options.join("\n")}`)
    );
    // console.log(answer);
    //Updating the answers
    typeof answer === "number" &&
      answer < this.options.length &&
      this.answers[answer]++;
    //Here We are using short circuiting with AND operator, if the two conditions are satisfied then the value will be incremented at last condition and that will be returned.It is same like if statement below
    /* if (typeof answer === "number" && answer < this.options.length) 
        this.answers[answer]++; */

    this.displayResults(); //Here it takes default argument i.e, array
    this.displayResults("string");
  },
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};

document
  .querySelector(".answer")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));
//Here we selected the button and attached a event listener when it clicked the poll.registerAnswer is called. Then we used bind method to point 'this' keyword to 'poll' object. Without that bind the 'this' keyword in an event handler function will ponts to element which it is attached (here ".answer" button)

//Bonus:
poll.displayResults.call({ answers: [5, 2, 3] }, "string");
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
//Here we called displayResults with call() method and pointing the this keyword that instant created object with 'answers' property and if we pass 'String' as preset argument then type will be taken as string to print in console otherwise it will take default argument i.e, array.



//My try 🙂. Logic is working fine but Without dom it is working (Not focused on this keyword to point object)
// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3:  C++"],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     let option = document
//       .querySelector(".answer")
//       .addEventListener("click", function () {
//         (
//           prompt(` What is your favourite programming language?
//     0: JavaScript
//     1: Python
//     2: Rust
//     3: C++
//    (Write option number) `)
//         );
//         console.log(option);
//         let increment = 1;
//         let options =
//           !isNaN(option) && option >= 0 && option <= 4
//             ? (this.answers[option] += increment)
//             : "Not correct option";
//         console.log(this.answers);
//         console.log(options);
//         poll.displayResults(this.answers);
//       });
//   },
//   displayResults(type){
//      type=this.answers;
//      console.log(...type);
//   }
// };

// poll.registerNewAnswer();
