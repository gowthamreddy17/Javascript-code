'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const nav = document.querySelector('.nav');

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault(); //here we used this to remove the default behaviour of link which scrrolls top when clicked
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////////////////////////////////////////////////////////////////////
//Button Smooth scrolling (Learn more button)

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  //getBoundClient() displays the coordinates (as a rectangle) of the element in that view port(current visible screen).
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect);
  console.log('Current scroll (X/Y)', window.pageXOffset, pageYOffset);
  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //// -- Actual scrolling Logic (old way)

  // window.scrollTo(
  //   s1coords.left + window.pageXOffset, //current position + current scroll
  //   s1coords.top + window.pageYOffset
  // );
  // //scrolling without smooth behaviour and works based on view port of current view

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset, //current position + current scroll
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
  // //scrolling with smooth behaviour and works based on full page without current view

  //modern way - without calculations
  section1.scrollIntoView({ behavior: 'smooth' });
});

//////////////////////////////////////////////////////////////////////////

//Event Delegation In Practice

//Page Navigation

// document.querySelectorAll('.nav__link').forEach(function (element) {
//   element.addEventListener('click', function (e) {
//     e.preventDefault(); //Here it is used to prevent link scrolling by anchor tags
//     // console.log("LINK");

//     const id = this.getAttribute('href'); //here 'this' refer to element which we are iterating
//     console.log(id);

//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//.nav__link returns a node list which contain links so we iterate each of them and adding event listener to each of them.

//With the above then addEventListener copies for all elements instead of that we bubble up with common parent element i.e, nav__links

//Events always bubble up from target element

// ---- event delegation: In this practice, when we want some code to run when the user interacts with any one of a large number of child elements, we set the event listener on their parent and have events that happen on them bubble up to their parent rather than having to set the event listener on every child individually.(to increase performance)

//In Event Delegation  basically  we need two steps

//1. ADD Event Listener to common parent element
//2.In the added event listener - Determine from what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  // console.log(e.target); //where the event is generated

  //Here we need to implement smooth scrolling for nav__link only not for nav__links. Here nav__link should be our target by addEventListener. So we use matching strategy here to check whether element contains a class or something relevant.

  //Matching Strategy
  if (e.target.classList.contains('nav__link')) {
    // console.log("LINK")
    e.preventDefault(); //Here it is used to prevent link scrolling by anchor tags
    const id = e.target.getAttribute('href'); //here 'this' refer to element which we are iterating
    // console.log(id);

    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//The common element of all the links navbar is nav__links

//Simply event delegation optimizes the targeting multiple child elments by targeting their parent element (of all clild elements) and we simply determine the target were event (click) came from. we need matching strategy here (to ignore the parent clicks only accept child clicks)

// *** Another important use case of event delegation is when we are working with elements that are not  yet on the page on runtime (By time page loads).
//A great example are buttons that are added dynamically while using the application.So, it is not possible to add Event handlers on the elements that do not exist but we still be able to handle the events on elements that don't exist on beggining by the help of event delegation.

////////////////////////////////////////

//Tabbed components

//// The below code will create call back function for all tabs that decreases performance

// tabs.forEach(t =>
//   t.addEventListener('click', () => {
//     console.log('TAB');
//   })
// );

//using event delegation - by handling eevnts on common parent element
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab'); //closest() is used to select button because here in target span also selected when we click button
  // console.log(clicked);

  //Guard clause

  //ignore clicks outside buttons (that gives error null)
  if (!clicked) return;
  //the guard clause will return function early if some condition is matched.
  //here the guard clause does if click  happened on button it contains truthy value so that this if condition is not executed. if click not happened on button (or clicked on parent operation_container) it will be null because there will be no parent element found by closest() method of operatons_tab then it becomes falsy value(null) then if condition executed and finall reurn or quit the function.

  // removing active classes for all tabs before adding the class
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  //active tab
  clicked.classList.add('operations__tab--active');

  //activate content area

  // console.log(clicked.dataset.tab); // here tab is attribute added in html
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

/////////////////////////////////////////////////////////////////////////////////

//Menu fade animation

//Here we need to perform event delegation (because of multiple links or childs) so if we only working with then we attached to parent (nav_links) of links. But we need logo also so that we use parent element for both that is nav (class).

//Events always bubble up from target element

// nav.addEventListener('mouseover', function (e) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img');
//     siblings.forEach(el => {
//       if (el !== link) {
//         if (el !== link) el.style.opacity = 0.5;
//       }
//     });
//     logo.style.opacity = 0.5;
//   }
// });

// //mouseenter is similar to mouseover but the difference is that mouseenter does not bubble. so we used mouseover for bubbling and reach target.
// //Opposite of mouseenter is mouseleave and opposite of mouseover is mouseout

// nav.addEventListener('mouseout', function (e) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img');
//     siblings.forEach(el => {
//       if (el !== link) {
//         if (el !== link) el.style.opacity = 1;
//       }
//     });
//     logo.style.opacity = 1;
//   }
// });

//The above code is repetitive inorder to make our code DRY we pass the logic in a function

// const handleHover = function (e, opacity) { //the handler function may have only one real parameter here no need opacity variable. we already set the opacity here on this keyword by the bind method as a value to function.
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== link) {
        if (el !== link) el.style.opacity = this; //here this refers to the value that we passed in bind method and with that we manually making funcrion call. bind doesn't do any function call
      }
    });
    logo.style.opacity = this;
  }
};

// nav.addEventListener('mouseover', function (e) {
//   handleHover(e, 0.5);
// });

// passing an "argument" into handler
nav.addEventListener('mouseout', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

//////////////////////////////////////////////////////

//Sticky navigation

// const intialCoords = section1.getBoundingClientRect();
// console.log(intialCoords);
// window.addEventListener('scroll', function (e) {
//   // console.log(window.scrollY);
//   if(window.scrollY> intialCoords.top)
//     {
//       nav.classList.add('sticky');
//     }
//     else{
//       nav.classList.remove('sticky');
//     }
// });

//Sticky navigation : Intersection observer API

//This API allows our code to basically observe changes to the way that a certain target element intersects another element, or the way it intersects the viewport.

// -- Lecture of how this API works

// const obsCallback = function (entries, observer) { //here entries are array of threshold entries and observer is the object that we created.
//   //So this callback function here will get called each time that the observed element() so our target element here) is intersecting the root element at the threshold that we defined.

//   entries.forEach(entry =>{
//     console.log(entry);
//   })

// };

// const obsOptions = {
//   root: null,//this root is the element that the target is intersecting. (Here setting null means viewport)
//   // threshold: 0.1, //Threshold, and this is basically the percentage of intersection at which the observer callback will be called. (Here obsCallback is callback function).
//   threshold :[0, 0.2] , //So 0% here means that basically our callback will trigger each time that the target element moves completely out of the view, and also as soon as it enters the view. If we put 1 that the call back only be called when 100% of target is visible. Here 0.2 is 20% visible in viewport (current visible screen).
//   //the callback function will be called when the threshold is passed when moving into the view and when moving out of the view.
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1); //here section1 be target element.

// ------------------------------------------
// --- Implementing Sticky navigation with observer API

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
// console,log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries; // taking first element in array of threshold of entries.
  //  console.log(entry);

  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0, // Here 0 means refer above explained lecture.
  rootMargin: `-${navHeight}px`, //'-90px', //And this root margin here, for example 90, is a box of 90 pixels that will be applied outside of our target element (so of our header here).
});
headerObserver.observe(header);

/////////////////////////////////////////////////////

//Revealing Sections

const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  //Guard class - if not intersecting function will be returned after that remaining code not executed.
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

/////////////////////////////////////////////////////

//---- Lazy Loading images

//Here we we are using the strategy as maintaing a small resolution image first then replace that with large resolution image when page loads.
//Here in 'src' (standard attribute) we defined the low resoltion image
//Here in 'data-src' (Special data attribute - not standard attribute i.e, we can use any other name) we defined the high resoltion image

const imgTargets = document.querySelectorAll('img[data-src]');
console.log(imgTargets);

const loadImg = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  //guard class
  if (!entry.isIntersecting) return;

  //Replacing src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
    //Here we used load Event listener the images to load behind the scenes when we replace image will take time that time we don't know that is based on network. so we used load event handler once the image loads then remove lazy-img class.
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

/////////////////////////////////////////////////////

//---- Implementing Slider

const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let currentSlide = 0;
  const maxSlide = slides.length;

  //-- testing code
  // const slider = document.querySelector('.slider');
  // slider.style.transform = 'scale(0.4) translatex(-800px)';
  // slider.style.overflow = 'visible';

  // slides.forEach(
  //   (slide, index) => (slide.style.transform = `translateX(${100 * index}%)`)
  // );
  //0%, 100%, 200%, 300%

  //// Functions

  const createDots = function () {
    slides.forEach(function (_, index) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${index}"></button>`
      );
    });
  };

  // createDots();

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  // activateDot(0);

  const goToSlide = function (Cslide) {
    slides.forEach(
      (slide, index) =>
        (slide.style.transform = `translateX(${100 * (index - Cslide)}%)`)
    );
  };

  // goToSlide(0);

  const nextSlide = function () {
    if (currentSlide == maxSlide - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  const prevSlide = function () {
    if (currentSlide === 0) {
      currentSlide = maxSlide - 1;
    } else {
      currentSlide--;
    }
    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  //Next Slide

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  // btnRight.addEventListener('click', function (e) {
  //   // if (currentSlide == maxSlide - 1) {
  //   //   currentSlide = 0;
  //   // } else {
  //   //   currentSlide++;
  //   // }

  //   // slides.forEach(
  //   //   (slide, index) =>
  //   //     (slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`)
  //   // );
  //   //currentslide = 1 : -100%, 0%, 100%, 200%
  //   //currentslide = 2 : -200%, -100%, 0%, 100%,

  // });

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };

  init();

  //Event handlers

  document.addEventListener('keydown', function (e) {
    console.log(e);
    if (e.key === `ArrowLeft`) prevSlide(); // with normal if
    e.key === 'ArrowRight' && nextSlide(); //with shortcircuiting
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      console.log('dot');

      // const slide = e.target.dataset.slide;
      const { slide } = e.target.dataset;

      goToSlide(slide);
      activateDot(slide);
    }
  });
};

slider();

////////////////////////////////////////////////////////////////////////////////////

//--------------------------------------

// //---Selecting elements

// //to select entire page
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// document.getElementById('section--1');
// //here it returns a node list. it didn't update when dom changes also because it is created when the section still existed when we delete a element also it didn't update.

// //to select all elemnts with a tag name
// const allButtons = document.getElementsByTagName('button');
// // here getElementsByTagName returns a html collection (life living elements) different from node list. when dom changes then immediately this collection updated automatically.
// console.log(allButtons);

// //To get all elements by class name
// console.log(document.getElementsByClassName('btn')); //this will also return html collection

// //--------------------------------------

// //---Creating and inserting elements

// //-  insertAdjacentHTML

// //to create elment
// const message = document.createElement('div');
// console.log(message);
// message.classList.add('cookie-message');
// // message.textContent = 'We use cookies for improved functionality and analytics.';
// message.innerHTML =
//   'We use cookies for improved functionality and analytics <button class="btn btn--close-cookie"> Got it!</button>';

// //To add a element at starting of an element
// // header.prepend(message);
// //Prepend adds our element (here message)as the first child of the element we call or add(here header)

// // //To add a element at last child of an element
// header.append(message);

// //here it only inserted at one place beacuse it is life living elements.Here dom element is unique so it can always exist at one place at a time.
// //we can use prepend and append to insert elements and also move them.

// // //adding multiple copies of same element
// // header.append(message.cloneNode(true));

// //before and after
// // header.before(message); //adds before the element
// // header.after(message); //adds after the element

// //--------------------------------------

// //---Deleting elements

// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove(); //here message variable contains the element

//     //old way without remove method
//     // message.parentElement.removeChild(message);
//   });

// //Styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '100%';
// //The above styles are setted as inline styles in dom.

// //Reading styles
// console.log(message.style.width);
// console.log(message.style.backgroundColor);
// console.log(message.style.height); //here height is not defined as inline style
// console.log(message.style.color); //not an inline style

// // to get the external styles use getComputed()
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// //css variables or custom properties

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// //-- Attributes (src, id, class, alt...)
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.className);

// logo.alt = 'Beautiful minimalist logo';

// //Non-standard
// console.log(logo.designer); //here designer is not a standard attribute even we define in html. To read this follow the getAttribute method.

// console.log(logo.getAttribute('designer'));

// logo.setAttribute('company', 'Bankist');
// //here with setAttribute() we can set different attributes (writing access). getAttribute() only for reading attributes.

// //URL
// console.log(logo.src); //to get absolute url
// console.log(logo.getAttribute('src')); //to get relative url

// // const link = document.querySelector('.twitter-link');
// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// //--data attributes
// console.log(logo.dataset.versionNumber);

// //--classes
// logo.classList.add('class1', 'b-2');
// logo.classList.remove('class1');
// logo.classList.toggle('class1');
// logo.classList.contains('class1');

// //Dont use this it will overide other classes
// logo.className='jonas';

// //---- Event Listeners
// const h1 = document.querySelector('h1');

// const h1Alert = function (e) {
//   alert('addEventListener: Great you are reading heading');
// };
// h1.addEventListener('mouseenter', h1Alert); // mouseenter is hover in css

// setTimeout(() => h1.removeEventListener('mouseenter', h1Alert), 3000);
// // h1.onmouseenter = function (e) {
// //   alert('addEventListener: Great you are reading heading');
// // };

// //------------Event propagation in practice
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// // console.log(randomColor());

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   //In an event handler this keyword always points to element on which event handler is attached.
//   console.log('Link', e.target); //here target means where the event first happened.(here target is not an element on which event handler is attached)
//   console.log(e.currentTarget === this); // here current target and this points to same element that handler is attached.

//   //Stop Propogation (Unlinking the event handler to parent elements)
//   // e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('container', e.target, e.currentTarget);
// });

// //If the click event happens on nav__link then it is also happened on the nav__links  this because event actually happens at document root then it travels down to target element (nav__link) then from there it bubbles up.
// //It bubbles up and performs same event of child  on the parent element also, only when the same type of event handler is attached to its parents elements.
// //But when we click on parent element here (nav__links) then on child the event will not occur. it will occur on parent element only because the event bubbles up its parrent elements.

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target, e.currentTarget);
// });

// //Same thing happens here (nav) But This is parent element for nav__links and nav__link.
// //When we click any of them target element will be same because all of them handling exact same event (which is 'e' recives on every function there). This is because the event bubbling here the event happens on child or yarget link then it bubbles up to its parent element.
// //Butt the current target shows the current element where event is happening. it is not same.

// /////---- Capturing phase
// // document.querySelector('.nav').addEventListener('click', function (e) {
// //   this.style.backgroundColor = randomColor();
// //   console.log('NAV', e.target, e.currentTarget);
// // },true); //here we set second argument as true for capturing phase where the event happens from this element (i.e, nav)

////////////////////////////////////////
// //DOM TRAVERSING

// //Dom traversing is basically walking through the Dom. Which means that we can select an element based on another element.
// //And this is very important because sometimes we need to select elements relative to a certain other element.For example, a direct child or a direct parent element. Or sometimes we don't even know the structure of the Dom at runtime.
// //And in all these cases above mentioned, we need Dom traversing.

// //querySelector() it would go down as deep as necessary into the Dom tree. For example to select all the children elements of that particular parent.

// const h1 = document.querySelector('h1');

// //-- Going Downwards : selecting childs
// console.log(h1.querySelectorAll('.highlight'));

// //Here querySelectorAll() selects all elements that are children for h1 element. That would work no matter how these child elements inside of h1 element. Here .highlight child are direct children but it would go as deep as necessary into the dom tree if needed.

// console.log(h1.childNodes); //gives all childs as node list
// console.log(h1.children); // gives html collection of children elements in h1. This will work for direct children only.

// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'red';

// //-- going upwards : selecting parents
// console.log(h1.parentNode); //direct parent selecting
// console.log(h1.parentElement);

// //selecting a non direct parent element

// h1.closest('.header').style.background = 'orangered';
// //here it selects the closest header (parent) for h1 element (child).
// h1.closest('h1').style.background = 'var(--gradient-primary)'; //Here the same element returned

// //**** closest() is opposite of querySelector() both recevies a query string as input but querySelector finds children no matter how deep is the dom tree while the closest method find parents no matter how far up in dom tree.

// //--- Going Sideways : selecting siblings

// //In js we can access direct siblings basically previous and next one.

// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// //If we need all siblings not just previous and next one then we can use the trick of moving up to the parent element and then read all the children from there.

// console.log(h1.parentElement.children); //It selects all siblings and the elemennt itself

// //changing styles of siblings
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) {
//     el.style.transform = 'scale(0.5)';
//   }
// });

// ------------------------------------------------------------------------

////---Life cycle of DOM events

// // DOMContentLoaded event

// document.addEventListener('DOMContentLoaded', function (e) {
//   console.log('HTML Parsed and DOM Tree built', e);
// });

// //This DOMContentLoaded is fired by document as soon as the HTML is completely parsed. Which means HTML is downloaded and converted into DOM tree.Also all scripts must be downloaded and executed before the DOM contentloaded event can happen.
// //This DOMContentLoaded event does not wait for other external resources to load.Just HTML and javascript needs to be loaded.
// //With this event we can execute our code after the DOM is available or we want to execute all our code after the DOM is ready.
// //so we dont need to wrap up our entire code in this function. just only script tag is enough at the end of html tag. then first html is parsed then javascript is parsed. In this case we dont need to listen domcontentloaded event.

// //load event

// window.addEventListener('load', function (e) {
//   console.log('Page fully loaded', e);
// });

// //load Event is fired by window when all the resources in page (complete page) are loaded not only html, javascript but also images, css and other external sources are loaded.

// // beforeunload Event

// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault(); //in chrome doesn,t require some other browsers it require.
//   console.log(e);
//   e.returnValue = ''; //Here we dont need to message in string. only defalut will be displayed.
// });

// //this event is created when the user about to leave our page or website. (to ask users to leave page or not)


