"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".close-modal");
const btnsOpen = document.querySelectorAll(".show-modal");

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openModal = function () {
  console.log("button clicked");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btnsOpen.length; i++) {
  btnsOpen[i].addEventListener("click", openModal);
  // btnsOpen[i].addEventListener("click",function () {
  //   console.log("button clicked");
  //   modal.classList.remove("hidden");
  //   overlay.classList.remove("hidden");
  // } );

  btnClose.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);
  //  here we are not calling the function directly  (with paranthesis() after function name) when javascript runs.Here we are just defining and we want to execute that function only button clicked then function is called.
  // below code is repeated code so we simplified above by making a name to function closeModal
  // **********************************************************
  // btnClose.addEventListener("click", function () {
  //   modal.classList.add("hidden");
  //   overlay.classList.add("hidden");
  // });

  // overlay.addEventListener("click", function () {
  //   modal.classList.add("hidden");
  //   overlay.classList.add("hidden");
  // });
  // **********************************************************
}



// Handing keyboard events

document.addEventListener('keydown',function(e){
  //  console.log(e);
   console.log(e.key);

   if(e.key==='Escape'){
     if(!modal.classList.contains('hidden')){
        closeModal();
     }
   }
})
// here keydown- means key pressed on key board             keyup - means key released (lift of finger from keyboard)           keypress- when we continusoly keep pressed on a certain key for a mean while time
// here 'e' parameter in function is event (in this case keyboard event)