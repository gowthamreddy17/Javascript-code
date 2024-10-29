"use strict";
/*
- Write a program that receives a list of variable names written in underscore_case and convert them to camelCase. 
- The input will come from a textarea inserted into the DOM (see code below to  insert the elements), and conversion will happen when the button is pressed. 

Test data (pasted to textarea, including spaces): 
underscore_case 
 first_name 
Some_Variable  
 calculate_AGE 
delayed_departure 

Should produce this output (5 separate console.log outputs): 
underscoreCase  ✅ 
firstName  ✅✅ 
someVariable  ✅✅✅ 
calculateAge  ✅✅✅✅ 
delayedDeparture ✅✅✅✅✅ 

Hints: 
§ Remember which character defines a new line in the textarea 
§ The solution only needs to work for a variable made out of 2 words, like a_b 
§ Start without worrying about the name conversion working ✅. Tackle that only after you have the variable 
§ This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue! 

Afterwards, test with your own test data! 
GOOD LUCK 
�
�
*/

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

const button = document.querySelector("button");

button.addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  // console.log(text);
  const words = text.split("\n");
  // console.log(words);

  for (const [i, word] of words.entries()) {
    const [first, second] = word.toLowerCase().trim().split("_");
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20, " ")} ${"✅".repeat(i + 1)}`);

    //My logic (Just Half  :))- replacing the underscore and getting only the value need to be capitalized.
    // if (camelCaseWord.includes("_")) {
    // const newword = camelCaseWord.replace("_", "");
    // console.log(newword);
    // const secondword = newword[newword.indexOf("_") + 1].toUpperCase();
    // console.log(secondword);
    // }
  }
});


//Here we have to take text from the text area which contains word multiple words have underscore sepearted we have to convert that word after underscore to capital remaining everything to lowercase. So that becomes camel case.(here only two words are targeted).
//First we added a event listener to the click event and then written code inside the function.
//In that function we first read the text area within to text variable.
//Then we splitted them with split() by \n which is new line. so that every word seperated and stored in array.
//Then we looped over that with for of loop. rember that entries() gives values and indexes in an array.
//Then converted each word to lowercase , then trimmed if any spaces, then spllited thweword again the word into two parts by split() using underScore as parameter. Then we destructred the array as first word and second word.
//Then in next line, with second word we use replace method to replace first lower case character to upper case.
//Then in console we printed the output and added padEnd(20) to get equal spaces after string. So that check icons start from same line. Then we used repeat() method to repeat string with index  of the value in each iteration as index+1.(0+1=1, 1+1=2.......)