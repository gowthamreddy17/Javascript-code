'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   // countriesContainer.style.opacity = 1;
// };

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
//   // countriesContainer.style.opacity = 1;
// };

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

const getJSON = function (url, errorMessage = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMessage} (${response.status})`);

    return response.json();
  });
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

//   //we can use the data (from API) after it loaded or recieved from API. It runs asynchronously in background. so we used load event here.
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
// const request = fetch('https://restcountries.com/v3.1/name/usa');
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

///////////////////////////////////////////////////////////////////////////////////////////////////////
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
//     })` `
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('Republic Of India');
//   // getCountryData('Rffdwsss');
// });

//////////////////////////////////////////////////////////////////////////////////////////////////////

// // ******* Event loop in practice

// console.log('Test start');

// setTimeout(() => console.log('0 sec timer '), 0);

// Promise.resolve('resolved promise 1').then(res => console.log(res));
// //promise resolve is used to build a promise or to create a promise that is immediately resolved which has immediate successful value.
// //Here we are passing just string value.

// console.log('Test end');

// //Here normal console messasges test start and test end will executed first which is top level code. After that setTimeout and promise will be executed almost same time (here promise is resolved immediately) but the setTimeout will be sent to call back queue and resolved promise  sent to micro task queue. so that micro task queue has more priority than the call back queue. so event loop takes promise from micro task queue and sends to call stack for executiion (i.e, call tick) when all tasks in mcro task queue executed then event loop looks in the call back queue so at last the setTimeout will be executed.

// //If there is a micro tasks take long time run then the  timer will actually be delayed in setTimeOut taking more than zero seconds. setTimeOut will be run later after  micro tasks has completed.

// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 1000000000; i++) {}
//   console.log(res);
// });
// //Here we are taking a loop for heavy computation. so that set timeout in  call back queue will delayed even after 0 sec completed.

// //so we cannot do high precision things with javascript timers.

////////////////////////////////////////////////////////////////////////////////////

// // ****  creating a simple promise

// // promises are really special kind of objects in javascript.

// const lotteryPromise = new Promise(function (resolve, reject) {
//   // here the function is executor function which produces a future value of the promise. here this function is called by the Promise Constructor as soon it runs.

//   console.log('lottery draw happening 🔮');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You win lottery 💰');
//     } else {
//       reject(new Error('You lost your money 🥲'));
//     }
//   });
// });

// //to cretae a fulfilled promise we will use resolve(). Whatever we will pass into the resolve() that will be available in the then() handler.
// //to mark a promise is rejected we use the reject() and we can pass a value or error message in it and we will use catch handler, to catch that as an error.

// /////
// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// ////////////
// // Promisifying : It means to convert callback based to asynchronous behaviour.

// const wait = function (seconds) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// //consming the promise

// // wait(2)
// //   .then(() => {
// //     console.log(' I waited 2 seconds');
// //     return wait(1);
// //   })
// //   .then(() => console.log('I waited for 1 second'));

// wait(1)
//   .then(() => {
//     console.log('I waited 1 second');
//     return wait(2);
//   })
//   .then(() => {
//     console.log('I waited 2 second');
//     return wait(3);
//   })
//   .then(() => {
//     console.log('I waited 3 seconds');
//     return wait(4);
//   })
//   .then(() => console.log('I waited 4 seconds'));

// //To avoid the callback hell like below we use promisifying like above

// // setTimeout(() => {
// //   console.log('1 second passed');
// //   setTimeout(() => {
// //     console.log('2 second passed');
// //     setTimeout(() => {
// //       console.log('3 second passed');
// //       setTimeout(() => {
// //         console.log('4 second passed');
// //         setTimeout(() => {
// //           console.log('5 second passed');
// //         }, 1000);
// //       }, 1000);
// //     }, 1000);
// //   }, 1000);
// // }, 1000);

// //we can create a resolved promise directly

// Promise.resolve('abc').then(x => console.log(x));

// //we can create a rejected promise directly
// Promise.reject(new Error('Problem!')).catch(x => console.error(x));

/////////////////////////////////////////////////

// //promisifying the geo location API

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // );

//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition().then(pos => console.log(pos));

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;

//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then(response => {
//       console.log(response);
//       if (!response.ok) throw new Error('Something went wrong with geo coding');
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}.`);
//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Country not found (${res.status})`);

//       return res.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.log(err.message));
// };
// // whereAmI(52.508, 13.381);
// // let country = whereAmI(52.508, 13.381);
// // console.log(country);

// // whereAmI(19.037, 72.873);
// // whereAmI(-33.933, 18.474);

// btn.addEventListener('click', whereAmI);

///////////////////////////////////////////////////////////////////////////////////

// //Consuming  Promises using Async , Await

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = async function () {
//   try {
//     //geo location
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;

//     //reverse geo coding
//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     if (!resGeo.ok) throw new Error('Problem getting location data');

//     const dataGeo = await resGeo.json();
//     console.log(dataGeo);
//     //country data

//     // fetch(`https://restcountries.com/v3.1/name/${country}`).then(res =>
//     //   console.log(res)
//     // );

//     const res = await fetch(
//       `https://restcountries.com/v3.1/name/${dataGeo.country}`
//     );
//     if (!res.ok) throw new Error('Problem getting country');

//     const data = await res.json();

//     // console.log(data);
//     renderCountry(data[0]);

//     return `You are in ${dataGeo.city}, ${dataGeo.country}`;
//   } catch (err) {
//     console.error(err);
//     renderError(`something went wrong 🥲 ${err.message}`);

//     //Reject promise promise from async function
//     throw err;
//   }
// };

// console.log(`1: will get location`);

// // const city = whereAmI();
// // console.log(city);

// // whereAmI()
// //   .then(city => console.log(`2:${city}`))
// //   .catch(err => console.error(`2: ${err.message}`))
// //   .finally(() => console.log('3: finished getting location'));

// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(`2:${city}`);
//   } catch (err) {
//     console.error(`2: ${err.message}`);
//   }
//   console.log('3: finished getting location');
// });

// //async function will keep run in the background while performing the code that inside of it, then if the function is done then it automatically returns a promise.
// // inside async function we can have one or more await statements. in an async function we can use the await keyword to basically await for the result of the promise (fulfilled or fetched the data successfully).
// //once the promise is resolved then value of await expression will be the resolved value of the promise.

// // try {
// //   let y = 1;
// //   const x = 2;
// //   x = 3;
// // } catch (err) {
// //   alert(err.message);
// // }

////////////////////////////////////////////////////////////////////////////

// //Running promises in parallel

// const get3countries = async function (C1, C2, C3) {
//   try {
//     // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${C1}`);
//     // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${C2}`);
//     // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${C3}`);

//     // console.log(data1.capital, data2.capital, data3.capital);

//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v3.1/name/${C1}`),
//       getJSON(`https://restcountries.com/v3.1/name/${C2}`),
//       getJSON(`https://restcountries.com/v3.1/name/${C3}`),
//     ]);

//     console.log(data.map(d => d[0].capital).map(d1 => d1[0]));

//     // Promise.all() - (is also called combinator function because it allows to combine multiple promises) takes an array of promises and returns a new promise Which will make to run all the promises in the array at the same time.
//     //Promise.all() recieves an array and returns an array
//     //In this, if one promise rejects the whole Promise.all(). It short circuits when one promise rejects so entire thing will rejected as well.
//   } catch (err) {
//     console.log(err);
//   }
// };

// get3countries('Republic Of India', 'USA', 'Portugal');

/////////////////////////////////////////////////////////////////////////

//Other Promise combinators

//Promise.race

//-It also recieves an array of promises and returns a promise.
//the promise returned by promise.race  is settled as soon as one of the input promise settles. (settled means value is available but doesn't matter if promise got rejected or fulfilled).
//In Promise.race first setttled prtomise wins the race

(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/USA`),
    getJSON(`https://restcountries.com/v3.1/name/Italy`),
    getJSON(`https://restcountries.com/v3.1/name/mexico`),
  ]);

  console.log(res[0]);
})();

//these three promise will race againist each other. Now winnig promise is then a fulfilled promise then the fulfillment value of this whole race promise will be the fulfillment of winning promise.
//so in promise.race() we will get only one result and not array of all the values.

// A promise that is rejected can also win the race. so promise.race short circuits whenever one of the promises gets settled. (no matter fulfilled or rejected).

const timeOut = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('request took too long'));
    }, sec * 1000);
  });
};

Promise.race([getJSON(`https://restcountries.com/v3.1/name/UK`), timeOut(1)])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

/////////
//Promise.allSettled

//It also recieves an array of promises and returns an arrray of all the settled promises.
//It is similar to promise.all() but the promise.all() short citcuits when one promise rejects. but the promise.allSettled never short circuits.
//Promise.allSettled() never short circuits even of the promise is rejected.

Promise.allSettled([
  Promise.resolve('success'),
  Promise.reject('error'),
  Promise.resolve('another success'),
]).then(res => console.log(res));

Promise.all([
  Promise.resolve('success'),
  Promise.reject('error'),
  Promise.resolve('another success'),
]).then(res => console.log(res)).catch(err => console.error(err));


//Promise.any() (ES2021)
Promise.any([
  Promise.resolve('success'),
  Promise.reject('error'),
  Promise.resolve('another success'),
]).then(res => console.log(res)).catch(err => console.error(err));
//It takes an aray of multiple promises and this one will then return the first fulfilled promise and rejected promises are ignored.