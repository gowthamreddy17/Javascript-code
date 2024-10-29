'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className) {
  const html = ` <article class="country ${className}">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)} people</p>
    <p class="country__row"><span>🗣️</span>${Object.values(data.languages).join(
      ', '
    )}</p>
    <p class="country__row"><span>💰</span>${Object.values(data.currencies)
      .map(curr => curr.name)
      .join(', ')}</p>
  </div>
</article>
`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

///////////////////////////////////////

// *********** Ajax Calls

// //Without COORS we cannot use third party API
// //JSON - is a big string of text which can can be converted to javascript objects.

// //Old format of Ajax - old school way

// const getCountryData = function (countryName) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);
//   request.send();

//   //we can use the data (from API) after it loaded or recieved from API. It runs aschnously in background. so we used load event here.
//   request.addEventListener('load', function () {
//     // console.log(request);
//     console.log(this.responseText); //this points to request

//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = ` <article class="country">
//           <img class="country__img" src="${data.flags.png}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1000000
//             ).toFixed(1)} people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages.hin}</p>
//             <p class="country__row"><span>💰</span>${
//               data.currencies.INR?.name
//             }</p>
//           </div>
//         </article>
//     `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('Republic Of India');
// getCountryData('usa');
// //some times here usa will be called before india because of asynchronous javascript.
// //If we need to these to work in predefined order we need to chain the requests.This makes second request makes only after first request has finished.

///////////////////////////////////////////////////////////////////////////////////////////////////

// // ********* callback hell

// //Here we are making a sequence of ajax calls i.e, one ajax call dependent on another AJAX call data. Here when we need too get neighbouring country we need to get country first.

// const renderCountry = function (data, className) {
//   const html = ` <article class="country ${className}">
//   <img class="country__img" src="${data.flags.png}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name.common}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       +data.population / 1000000
//     ).toFixed(1)} people</p>
//     <p class="country__row"><span>🗣️</span>${Object.values(data.languages).join(
//       ', '
//     )}</p>
//     <p class="country__row"><span>💰</span>${Object.values(data.currencies)
//       .map(curr => curr.name)
//       .join(', ')}</p>
//   </div>
// </article>
// `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// const getCountryAndNeighbour = function (countryName) {
//   //Ajax Call Country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     //Render country 1
//     renderCountry(data);

//     //Get Neighbour country (2)
//     const neighbour = data.borders?.[0];

//     if (!neighbour) return;
//     //Ajax call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, 'neighbour');
//     });
//   });
// }; //Here we are firing off or enabling the second call back function  in the first call back function(event listner). here second ajax call need data from first ajax call

// getCountryAndNeighbour('Republic Of India');
// // getCountryAndNeighbour('usa');

// //In the above function we used a callback inside a callback i.e, in addeventlistnener we have a call back and in that we have another addeventlistnener with another callback function these are nested call backs.

// //Imagine If there are more requests in a sequence like the neighbour of the neighbour of the neighbour and so on.... That case we will end up with call backs inside of callbacs and inside of callbacks and so on... like 10 times
// //For the above kind of structure or behaviour we have a special name called "CallBack Hell".

// //Call back hell - when we have a lot of nested callbacks inorder to execute asynchronous tasks in sequence.

// //This happens for all asynchronous tasks which are handled by callbacks.Not just only AJAX calls. we can have another example of set timeout function.

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 second passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//         setTimeout(() => {
//           console.log('5 second passed');
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// //Here we can identify the call back hell. It is pretty easy to identify that a triangular shape formatted here.

// //callback hell makes our code messy and code is harder to maintain and very difficult to understand will lead to more bugs.

///////////////////////////////////////////////////

//To avoid callback hell we use promises.

// ** Promises

// const getCountryData = function (countryName) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);
//   request.send();
// };

//------- using fetch API
const request = fetch('https://restcountries.com/v3.1/name/usa');
// console.log(request);

//here we can pass an object of options in fetch

// here request variable becomes the promise.

//it is a container for an asynchronously delivered value (or) Simply a promise is a container for future value.
//Example  for future value is response coming from AJAX call. When we first start AJAX call there is no value but there will be some value in future. so we can use promise to handle that future value.

//******************** consuming promises */

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//     //   console.log(response.json()); //json method is available on all the response objects coming from fetch function. json() also asynchronous it will return a new promise.
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// };
//to handle fulfilled state we can use then() method available on all promises.
//then() recieves a callback function that we want to be executed as soon as the promise actually fulfilled (as soon as result available).
//then() recieves only one argument once it is called by JS and that argument is the resulting value of fullfiled promise.
//then() method always return a promise no matter that if we actually return anything or not. But if we return a value that will become fulfilment value of return promise.

// getCountryData('Republic Of India');

////--- using arrow functions

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => response.json())
//     .then(data => renderCountry(data[0]));
// };
// getCountryData('Republic Of India');

// // ********** chaining promises
// const getCountryData = function (country) {
//   //Country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => response.json())
//     .then(data => {
//       renderCountry(data[0]);

//       const neighbour = data[0].borders?.[0];
//       console.log(neighbour);
//       if (!neighbour) return;

//       //Country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data[0], 'neighbour'));
// };

// getCountryData('Republic Of India');

// //then() method always return a promise no matter that if we actually return anything or not. But if we return a value that will become fulfilment value of return promise.
// //always the then() method value has fullfilled value of the previous promise which is returned.

// ********** Handling Rejected promises

// const getCountryData = function (country) {
//   //Country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//       // err => alert(err)
//     })
//     .then(data => {
//       renderCountry(data[0]);

//       const neighbour = data[0].borders?.[0];
//       console.log(neighbour);
//       if (!neighbour) return;

//       //Country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(
//       response => {
//         if (!response.ok)
//           throw new Error(`Country not found (${response.status})`);
//         response.json();
//       }
//       // err => alert(err)
//     )
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       renderError(`Something went wrong 🥲  ${err.message} Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     }); //here the call back function in finally will always be called whether the promise is fulfilled or rejected.
//   //then() method will only be called when the promise is fulfilled.
//   //catch() method is called when the promise is rejected.
// };

// btn.addEventListener('click', function () {
//   getCountryData('Republic Of India');
//   // getCountryData('Rffdwsss');
// });

//promises are mainly rejected when there is no internet.
//to handle rejected promises we use second callback function in then() method.
//or we can use catch at the end of all then methods
//throw also like but it returns or throw an error will immediately not executes remaining then() functions.

// const getJSON = function (url, errorMessage = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMessage} (${response.status})`);

//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   //Country 1

//   getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
//     .then(data => {
//       renderCountry(data[0]);

//       const neighbour = data[0].borders?.[0];

//       // console.log(neighbour);
//       if (!neighbour) throw new Error('No neighbour found');

//       //Country 2
//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         'country not found'
//       );
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       renderError(`Something went wrong 🥲  ${err.message} Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('Republic Of India');
//   // getCountryData('Rffdwsss');
// });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

/* Coding Challenge #1 

In this challenge you will build a function 'whereAmI' which renders a country 
only based on GPS coordinates. For that, you will use a second API to geocode 
coordinates. So in this challenge, you’ll use an API on your own for the first time 

Your tasks: 
PART 1 
1. Create a function 'whereAmI' which takes as inputs a latitude value ('lat') 
and a longitude value ('lng') (these are GPS coordinates, examples are in test 
data below). 
2. Do “reverse geocoding” of the provided coordinates. Reverse geocoding means 
to convert coordinates to a meaningful location, like a city and country name. 
Use this API to do reverse geocoding: https://geocode.xyz/api. The AJAX call 
will be done to a URL with this format: 
https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and 
promises to get the data. Do not use the 'getJSON' function we created, that 
is cheating 
3. Once you have the data, take a look at it in the console to see all the attributes that you received about the provided location. Then, using this data, log a message like this to the console: “You are in Berlin, Germany” 
4. Chain a .catch method to the end of the promise chain and log errors to the console 
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does not reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message 

PART 2 
6. Now it's time to use the received data to render a country. So take the relevant 
attribute from the geocoding API result, and plug it into the countries API that 
we have been using. 
7. Render the country and catch any errors, just like we have done in the last 
lecture (you can even copy this code, no need to type the same code)

Test data: 
§ Coordinates 1: 52.508, 13.381 (Latitude, Longitude) 
§ Coordinates 2: 19.037, 72.873 
§ Coordinates 3: -33.933, 18.474 
GOOD LUCK  🙂
*/

const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(response => {
      console.log(response);
      if (!response.ok) throw new Error('Something went wrong with geo coding');
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}.`);
      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.log(err.message));
};
// whereAmI(52.508, 13.381);
let country = whereAmI(52.508, 13.381);
console.log(country);

whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);


