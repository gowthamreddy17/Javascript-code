'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

let map, mapEvent;

//Geo Location API
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    //The getCurrentPosition() accepts two callback function when will be run when succesfully browser get the coordinates. Second call bacck function runs when there error to fetch coordinates.

    function (position) {
      console.log(position);
      const { latitude, longitude } = position.coords;
      //   console.log(latitude, longitude);
      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

      //Displaying Map
      const coords = [latitude, longitude];

      map = L.map('map').setView([...coords], 13); // second argument is zoom level of map
      console.log(map);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // L.marker([...coords])
      //   .addTo(map)
      //   .bindPopup('A pretty CSS popup.<br> Easily customizable.')
      //   .openPopup();

      //---------------------------------
      //Handling clicks on maps

      //Event created by leaflet library just same as javascript events.
      map.on('click', function (mapE) {
        mapEvent = mapE; //assigning parameter to global variable
        form.classList.remove('hidden');
        inputDistance.focus();
        // console.log(mapEvent);
      });
    },
    function () {
      alert('Could not fetch location');
    }
    // {maximumAge:0, timeout:5000, enableHighAccuracy: true}
  );
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  //clear input fields
  inputDistance.value =
    inputDuration.value =
    inputCadence.value =
    inputElevation.value =
      '';

  // dispalying the marker where user
  const { lat, lng } = mapEvent.latlng;
  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: 'running-popup',
      })
    )
    .setPopupContent('Workout')
    .openPopup();
});

inputType.addEventListener('change', function () {
  //closest method opposite to queryselectoor it selects parents not children.
  inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
});
