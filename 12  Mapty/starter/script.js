'use strict';

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  clicks = 0;

  constructor(coords, distance, duration) {
    // this.date = .....
    // this.id = ......
    this.coords = coords; // [lat, long]
    this.distance = distance; //in km
    this.duration = duration; // in min
  }

  _setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }
  click() {
    this.clicks++;
  }
}

class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
  }

  calcPace() {
    //mins/km
    this.pace = this.duration / this.distance;
    this._setDescription();
  }
}

class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
  }
  calcSpeed() {
    //km/h
    this.speed = this.distance / this.duration / 60;
    this._setDescription();
  }
}

const run1 = new Running([39, -12], 5.2, 24, 178);
const cycling1 = new Cycling([39, -12], 27, 95, 523);
console.log(run1, cycling1);

//////////////////////////////////////////

//Application Architecture

class App {
  #map;
  #mapZoomlevel = 13;
  #mapEvent;
  #workouts = [];

  constructor() {
    //constructor method is called when immediately new object or instance created of this class.

    //get users position
    this._getPosition();

    //get data from local storage
    this._getLocalStorage();

    //Attach event handlers
    form.addEventListener('submit', this._newWorkOut.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
  }
  _getPosition() {
    //Geo Location API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Could not fetch location');
        }
        //The getCurrentPosition() accepts two callback function when will be run when succesfully browser get the coordinates. Second call bacck function runs when there error to fetch coordinates.
      );
    }
  }

  _loadMap(position) {
    console.log(position);
    const { latitude, longitude } = position.coords;
    //   console.log(latitude, longitude);
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

    //Displaying Map
    const coords = [latitude, longitude];

    this.#map = L.map('map').setView([...coords], this.#mapZoomlevel); // second argument is zoom level of map
    console.log(this.#map);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    //---------------------------------
    //Handling clicks on maps

    //Event created by leaflet library just same as javascript events.
    this.#map.on('click', this._showForm.bind(this));

    //Setting local storage data to display Markers in Map. The reason for calling the method here is that markers can be added only after the map loads otherwise error will be thrown by leaflet.
    this.#workouts.forEach(work => {
      this._renderWorkoutMarker(work);
    });
  }

  _showForm(mapE) {
    this.#mapEvent = mapE; //assigning parameter to global variable
    form.classList.remove('hidden');
    inputDistance.focus();
    // console.log(mapEvent);
  }

  _hideForm() {
    //Empty inputs
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';

    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }

  _toggleElevationField() {
    //closest method opposite to queryselector it selects parents not children.
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkOut(e) {
    e.preventDefault();

    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));

    const allPositive = (...inputs) => inputs.every(inp => inp > 0);

    //Get data from form

    const type = inputType.value;
    const distance = +inputDistance.value; //converting string to a number by adding '+' after =
    const duration = +inputDuration.value;

    const { lat, lng } = this.#mapEvent.latlng;

    let workout;

    //check if data is valid

    //if workout is running, create running object
    if (type === 'running') {
      //check if data is valid
      const cadence = +inputCadence.value;
      if (
        // !Number.isFinite(distance) ||
        // !Number.isFinite(duration) ||
        // !Number.isFinite(cadence)
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert('Inputs must be positive numbers'); //guard clause which we check opposite of our condition. Here if all of them are numbers it become true then => !true = false (then that if statement not executed)

      workout = new Running([lat, lng], distance, duration, cadence);
    }

    //if workout is cycling, create cycling object
    if (type === 'cycling') {
      //check if data is valid
      const elevation = +inputElevation.value;
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return alert('Inputs must be positive numbers');

      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    //Add new object to workout array
    this.#workouts.push(workout);
    console.log(workout);

    //Render workout on map as marker
    this._renderWorkoutMarker(workout);

    //Render workout on list
    this._renderWorkout(workout);

    //Hide form + clear input fields
    this._hideForm();

    //set  local storage to all workouts
    this._setLocalStorage();
  }

  _renderWorkoutMarker(workout) {
    // dispalying the marker where user clicks (for creating workout using these lat, lng)

    L.marker(workout.coords)
      // L.marker([lat, lng])
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
      )
      .openPopup();
  }

  _renderWorkout(workout) {
    let html = `<li class="workout workout--${workout.type}" data-id="${
      workout.id
    }">
          <h2 class="workout__title">${workout.description}</h2>
          <div class="workout__details">
            <span class="workout__icon">${
              workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
            }</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
          </div>`;
    if (workout.type === 'running') {
      html += `  <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.pace.toFixed(1)}</span>
            <span class="workout__unit">min/km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">${workout.cadence}</span>
            <span class="workout__unit">spm</span>
          </div>
        </li>`;
      form.insertAdjacentHTML('afterend', html);
    }
    if (workout.type === 'cycling') {
      html += `<div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed.toFixed(1)}</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.elevationGain}</span>
            <span class="workout__unit">m</span>
          </div>
        </li>`;
      form.insertAdjacentHTML('afterend', html);
    }
  }
  _moveToPopup(e) {
    const workoutEl = e.target.closest('.workout');
    console.log(workoutEl);

    if (!workoutEl) return;

    const workout = this.#workouts.find(
      work => work.id === workoutEl.dataset.id
    );
    console.log(workout);

    this.#map.setView(workout.coords, this.#mapZoomlevel, {
      animate: true,
      pan: {
        duration: 1,
      },
    });
    //using the public interface
    // workout.click();
  }

  _setLocalStorage() {
    //local storage wiil be a simple key value store
    localStorage.setItem('workouts', JSON.stringify(this.#workouts)); //Here workouts is a key and then value must also be string as second parameter. so to convert object to string we use  JSON.stringify() - to convert any object in javascript to a string.
  }

  _getLocalStorage() {
    //Here we are doing opposite of _setLocalStorage. Here we used JSON.parse to convert  string (in local storage) back to Objects

    // const data = localStorage.getItem('workouts');
    const data = JSON.parse(localStorage.getItem('workouts')); //Here 'workouts' is the key.(that we used to store and retrieve)
    console.log(data);

    if (!data) return;

    //setting local storage data to workouts array
    this.#workouts = data;

    //Each object in workout array wiil be rendered back to the list.
    this.#workouts.forEach(work => {
      this._renderWorkout(work);
    });
  }
  //Public interface or method
  reset() {
    localStorage.removeItem('workouts');
    location.reload(); // reloading the page
  }
}

const app = new App();

// app._getPosition();
