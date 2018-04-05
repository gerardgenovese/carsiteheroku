

//==================NAV FUNCTIONALITY=================//

//OPEN & CLOSE NAV
var navCount = 0;
document.querySelector('.hamburger').addEventListener('click', (e) => {
    navCount++;
  var isEven = countNum => countNum % 2 === 0 ? true : false;
  if (isEven(navCount) === false) {
      openSlideMenu();
  } else if (isEven(navCount) === true) {
      closeSlideMenu();
  }
  e.preventDefault();
});

//OPEN MENU
function openSlideMenu() {
  document.getElementById('side-menu').style.width = '250px';
  // document.getElementById('main').style.marginLeft = '250px';

};

//CLOSE MENU
function closeSlideMenu() {
  document.getElementById('side-menu').style.width = '0';
  // document.getElementById('main').style.marginLeft = '0';

  //Get menu element
};






















//ONCLICK CAR TARGET AREA 
document.body.addEventListener('click', function(e){

 

  if(e.target.classList.contains('explore-car') || e.target.classList.contains('explore-car__front') && e.target.classList.contains('camry')) {

    let carAlt = document.getElementById('car-color');
    carAlt = 'red';


    // SET CAR SRC FOR CLICKED IMAGE ==CAMRY==
    let getCarSrcLink = 'img/camry/side-front/camry-side-front-red.jpg';


    // GRAB CAR PRICE AND MILEAGE 
    let getPriceInfo = document.querySelectorAll('.explore-car__price');
    let camryInfo = getPriceInfo[0].innerText;

    //GRAB CAR MODEL TYPE
    let getCarModel = document.querySelectorAll('.explore-car__model');
    let camryModel = getCarModel[0].innerText;
  

    //set car src and price info to local storage
    sessionStorage.setItem('car alt', carAlt)
    sessionStorage.setItem('car src', getCarSrcLink)
    sessionStorage.setItem('car price', camryInfo)
    sessionStorage.setItem('total', 23495)
    sessionStorage.setItem('car model', camryModel);
    sessionStorage.setItem('endPosition', getCarSrcLink);
  }
    
  // SET CAR SRC FOR CLICKED IMAGE ==COROLLA==
  else if (e.target.classList.contains('explore-car') || e.target.classList.contains('explore-car__front') && e.target.classList.contains('corolla')) {

    let getCarSrcLink = 'img/corolla/side-front/corolla-side-front-blue.jpg';
    carAlt = 'blue';

    // GRAB CAR PRICE AND MILEAGE 
    let getPriceInfo = document.querySelectorAll('.explore-car__price');
    let corollaInfo = getPriceInfo[1].innerText;

    //GRAB CAR MODEL TYPE
    let getCarModel = document.querySelectorAll('.explore-car__model');
    let corollaModel = getCarModel[1].innerText;

    //set car src and price info to local storage
    sessionStorage.setItem('car alt', carAlt)
    sessionStorage.setItem('car src', getCarSrcLink)
    sessionStorage.setItem('car price', corollaInfo)
    sessionStorage.setItem('car model', corollaModel);
    sessionStorage.setItem('endPosition', getCarSrcLink);
  }  



  // SET CAR SRC FOR CLICKED IMAGE ==T86==
  else if (e.target.classList.contains('explore-car') || e.target.classList.contains('explore-car__front') && e.target.classList.contains('t86')) {

    let getCarSrcLink = 'img/t86/side-front/t86-side-front-red.jpg';
    carAlt = 'red';

    // GRAB CAR PRICE AND MILEAGE 
    let getPriceInfo = document.querySelectorAll('.explore-car__price');
    let t86Info = getPriceInfo[2].innerText;

    //GRAB CAR MODEL TYPE
    let getCarModel = document.querySelectorAll('.explore-car__model');
    let t86Model = getCarModel[2].innerText;

    //set car src and price info to local storage
    sessionStorage.setItem('car alt', carAlt)
    sessionStorage.setItem('car src', getCarSrcLink)
    sessionStorage.setItem('car price', t86Info)
    sessionStorage.setItem('car model', t86Model);
    sessionStorage.setItem('endPosition', getCarSrcLink);
  }  


  // SET CAR SRC FOR CLICKED IMAGE ==YARIS==
  else if (e.target.classList.contains('explore-car') || e.target.classList.contains('explore-car__front') && e.target.classList.contains('yaris')) {

    let getCarSrcLink = 'img/yaris/side-front/yaris-side-front-blue.jpg';
    carAlt = 'blue';

    // GRAB CAR PRICE AND MILEAGE 
    let getPriceInfo = document.querySelectorAll('.explore-car__price');
    let yarisInfo = getPriceInfo[3].innerText;

    //GRAB CAR MODEL TYPE
    let getCarModel = document.querySelectorAll('.explore-car__model');
    let yarisModel = getCarModel[3].innerText;

    //set car src and price info to local storage
    sessionStorage.setItem('car alt', carAlt)
    sessionStorage.setItem('car src', getCarSrcLink)
    sessionStorage.setItem('car price', yarisInfo)
    sessionStorage.setItem('car model', yarisModel);
    sessionStorage.setItem('endPosition', getCarSrcLink);
  }  

  // SET CAR SRC FOR CLICKED IMAGE ==AVALON==
  else if (e.target.classList.contains('explore-car') || e.target.classList.contains('explore-car__front') && e.target.classList.contains('avalon')) {

 
    let getCarSrcLink = 'img/avalon/side-front/avalon-side-front-white.jpg';
    carAlt = 'white';

    // GRAB CAR PRICE AND MILEAGE 
    let getPriceInfo = document.querySelectorAll('.explore-car__price');
    let avalonInfo = getPriceInfo[4].innerText;

    //GRAB CAR MODEL TYPE
    let getCarModel = document.querySelectorAll('.explore-car__model');
    let avalonModel = getCarModel[4].innerText;
   
    //remove any possibilites of other storage
    //sessionStorage.clear()
    // sessionStorage.removeItem('endPosition');
    // sessionStorage.removeItem('car src');
    // sessionStorage.removeItem('car price');
    // sessionStorage.removeItem('car model');

    //set car src and price info to local storage
    sessionStorage.setItem('car alt', carAlt)
    sessionStorage.setItem('car src', getCarSrcLink)
    sessionStorage.setItem('car price', avalonInfo)
    sessionStorage.setItem('car model', avalonModel);
    sessionStorage.setItem('endPosition', getCarSrcLink);
  }  
});


//GET CAR PRICE FROM SESSION STORAGE & ENTER CAR PRICE ON BUILD PAGE
let grabCarPrice =  sessionStorage.getItem('car price');
let buildCarPrice = document.querySelector('.car-build__main-car-price');

//SHOWS PROPER CAR PRICE
buildCarPrice.innerHTML = grabCarPrice

//GET CAR IMAGE & WHERE TO PLACE IT
let grabCarSrc =  sessionStorage.getItem('car src');
let buildCarSrc = document.querySelector('.car-build__main-car-image');

//SHOWS PROPER CAR IMAGE
buildCarSrc.src = grabCarSrc;

//GET & ENTER CAR MODEL TYPE
let grabCarModel =  sessionStorage.getItem('car model');
let buildCarModel = document.querySelector('.car-build__main-car-title');

//SHOWS PROPER CAR MODEL
buildCarModel.innerHTML = grabCarModel;

//CREATES ALT
carAlt = sessionStorage.getItem('car alt');
buildCarAlt = document.getElementById('car-color');
buildCarAlt.alt = carAlt;


//AUTOPLACE PRICE INTO CALCULATOR AMOUNT SLOT ON BUILD PAGE
let calcCarPrice = grabCarPrice.substr(1,7).replace(/,/g, '');

let amount = document.getElementById('amount').value = parseInt(calcCarPrice);















//=================CAR BUILD PANEL BUTTONS======================//

//COLORS BUTTON TO PICK CAR COLOR
function changeColor() {
  document.getElementById("car-build__colors").style.display = "block";
	document.getElementById("car-build__engine").style.display = "none";
	document.getElementById("car-build__calculator").style.display = "none";

  document.getElementById("car-build__accessories").style.display = "none";
}

//ENGINE BUTTON TO PICK ENGINE
function changeEngine() {
  document.getElementById("car-build__colors").style.display = "none";
  document.getElementById("car-build__engine").style.display = "block";
  document.getElementById("car-build__calculator").style.display = "none";
  document.getElementById("car-build__accessories").style.display = "none";
}

//FINANCE BUTTON TO USE LOAN CALCULATOR
function loanCalculator() {
	document.getElementById("car-build__colors").style.display = "none";
  document.getElementById("car-build__engine").style.display = "none";
  document.getElementById("car-build__calculator").style.display = "block";
  document.getElementById("car-build__accessories").style.display = "none";
}

//FINANCE BUTTON TO USE LOAN CALCULATOR
function accessories() {
	document.getElementById("car-build__colors").style.display = "none";
  document.getElementById("car-build__engine").style.display = "none";
  document.getElementById("car-build__calculator").style.display = "none";
  document.getElementById("car-build__accessories").style.display = "block";
}

//ALLOW DIV ELEMENT TO MAINTAIN BUTTON HOVER COLOR
var header = document.querySelector(".car-build__panel");
var btns = header.getElementsByClassName("svg-background");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}









//=======================================CHANGE CAR COLORS===================================//










function changeWhite() {
  
  let car = document.getElementById('car-color');
  car.alt = 'white';
  let endPosition = sessionStorage.getItem('endPosition');
  

  endPosition = endPosition.replace(/black|gray|smoke|blue|red/i, 'white');
  car.src = endPosition;

  sessionStorage.setItem('car src', endPosition);
  sessionStorage.setItem('car alt', 'white');
  sessionStorage.setItem('endPosition', endPosition);

  window.stop();
 
}

function changeBlack() {
  
  let car = document.getElementById('car-color');
  car.alt = 'black';
  let endPosition = sessionStorage.getItem('endPosition');
  

  endPosition = endPosition.replace(/white|gray|smoke|blue|red/i, 'black');
  car.src = endPosition;

  sessionStorage.setItem('car src', endPosition);
  sessionStorage.setItem('car alt', 'black');
  sessionStorage.setItem('endPosition', endPosition);

  window.stop();

}

function changeGray() {
  
  let car = document.getElementById('car-color');
  car.alt = 'gray';
  let endPosition = sessionStorage.getItem('endPosition');
  

  endPosition = endPosition.replace(/white|black|smoke|blue|red/i, 'gray');
  car.src = endPosition;

  sessionStorage.setItem('car src', endPosition);
  sessionStorage.setItem('car alt', 'gray');
  sessionStorage.setItem('endPosition', endPosition);

  window.stop();

}

function changeSmoke() {
  
  let car = document.getElementById('car-color');
  car.alt = 'smoke';
  let endPosition = sessionStorage.getItem('endPosition');
  

  endPosition = endPosition.replace(/white|black|gray|blue|red/i, 'smoke');
  car.src = endPosition;

  sessionStorage.setItem('car src', endPosition);
  sessionStorage.setItem('car alt', 'smoke');
  sessionStorage.setItem('endPosition', endPosition);

  window.stop();

}

function changeBlue() {
  
  let car = document.getElementById('car-color');
  car.alt = 'blue';
  let endPosition = sessionStorage.getItem('endPosition');
  

  endPosition = endPosition.replace(/white|black|gray|smoke|red/i, 'blue');
  car.src = endPosition;

  sessionStorage.setItem('car src', endPosition);
  sessionStorage.setItem('car alt', 'blue');
  sessionStorage.setItem('endPosition', endPosition);

  window.stop();

}
function changeRed() {
  
  let car = document.getElementById('car-color');
  car.alt = 'red';
  let endPosition = sessionStorage.getItem('endPosition');
  

  endPosition = endPosition.replace(/white|black|gray|smoke|blue/i, 'red');
  car.src = endPosition;

  sessionStorage.setItem('car src', endPosition);
  sessionStorage.setItem('car alt', 'red');
  sessionStorage.setItem('endPosition', endPosition);

  window.stop();

}





















// function changeCarViewRight() {
//   let changeCar = document.getElementById('car-color');

//   let source = changeCar.src;

//   changeCar.src = 'img/camry/front/camry-front-red.jpg';
//   console.log(source);
// }








//RIGHT BUTTON CLICK TO CHANGE CAR VIEW

function changeCarViewRight() {

  let changeCar = document.getElementById('car-color');

  //GET BUILD CAR IMAGE SRC
  let carColorSrc = document.querySelector('.car-build__main-car-image').src;

  // //live server
  // carColorSrc = carColorSrc.substr(22, carColorSrc.length);

  // //chrome
  carColorSrc = carColorSrc.substr(72, carColorSrc.length);
  console.log(changeCar);
console.log(carColorSrc);
  // console.log(carColorSrc);

  //GET SRC ALT COLOR TO ROTATE THROUGH CORRECT COLORS
  if (changeCar.alt === 'red') {
    //GET IMG SRC TO MATCH TO FLIP TO NEXT VIEW OF CORRECT CAR
    if (carColorSrc === 'img/camry/side-front/camry-side-front-red.jpg') {
      changeCar.src = 'img/camry/front/camry-front-red.jpg';

      //GRAB IMG SRC AND SAVE TO SESSION STORAGE SO WE CAN TAKE AND USE THE SAME CAR IMAGE FOR DIFFERENT COLORS WHEN SWITCHING THROUGH CAR COLORS SO THE CAR ANGEL REMAINS
      // position = changeCar.src;
      // endPosition = position.substr(22, position.length);

      endPosition = 'img/camry/front/camry-front-red.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/camry/front/camry-front-red.jpg') {
      changeCar.src = 'img/camry/back/camry-back-red.jpg';
     
      endPosition = 'img/camry/back/camry-back-red.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/camry/back/camry-back-red.jpg') {
      changeCar.src = 'img/camry/side/camry-side-red.jpg';
 
      endPosition = 'img/camry/side/camry-side-red.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else  if (carColorSrc === 'img/camry/side/camry-side-red.jpg'){
      changeCar.src = 'img/camry/side-front/camry-side-front-red.jpg';
   
      endPosition = 'img/camry/side-front/camry-side-front-red.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    }
  }


  if (changeCar.alt === 'white') {

    if (carColorSrc === 'img/camry/side-front/camry-side-front-white.jpg') {
      changeCar.src = 'img/camry/front/camry-front-white.jpg';
   
      endPosition = 'img/camry/front/camry-front-white.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/camry/front/camry-front-white.jpg') {
      changeCar.src = 'img/camry/back/camry-back-white.jpg';
 
      endPosition = 'img/camry/back/camry-back-white.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/camry/back/camry-back-white.jpg') {
      changeCar.src = 'img/camry/side/camry-side-white.jpg';
    
      endPosition = 'img/camry/side/camry-side-white.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else  if (carColorSrc === 'img/camry/side/camry-side-white.jpg'){
      changeCar.src = 'img/camry/side-front/camry-side-front-white.jpg';

      endPosition = 'img/camry/side-front/camry-side-front-white.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    }
  }

  if (changeCar.alt === 'black') {

    if (carColorSrc === 'img/camry/side-front/camry-side-front-black.jpg') {
      changeCar.src = 'img/camry/front/camry-front-black.jpg';
 
      endPosition = 'img/camry/front/camry-front-black.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/camry/front/camry-front-black.jpg') {
      changeCar.src = 'img/camry/back/camry-back-black.jpg';
      
      endPosition = 'img/camry/back/camry-back-black.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/camry/back/camry-back-black.jpg') {
      changeCar.src = 'img/camry/side/camry-side-black.jpg';
  
      endPosition = 'img/camry/side/camry-side-black.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else  if (carColorSrc === 'img/camry/side/camry-side-black.jpg'){
      changeCar.src = 'img/camry/side-front/camry-side-front-black.jpg';

      endPosition = 'img/camry/side-front/camry-side-front-black.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    }
  }

  if (changeCar.alt === 'gray') {

    if (carColorSrc === 'img/camry/side-front/camry-side-front-gray.jpg') {
      changeCar.src = 'img/camry/front/camry-front-gray.jpg';
      
      endPosition = 'img/camry/front/camry-front-gray.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/camry/front/camry-front-gray.jpg') {
      changeCar.src = 'img/camry/back/camry-back-gray.jpg';
      
      endPosition = 'img/camry/back/camry-back-gray.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/camry/back/camry-back-gray.jpg') {
      changeCar.src = 'img/camry/side/camry-side-gray.jpg';
      
      endPosition = 'img/camry/side/camry-side-gray.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else  if (carColorSrc === 'img/camry/side/camry-side-gray.jpg'){
      changeCar.src = 'img/camry/side-front/camry-side-front-gray.jpg';
      
      endPosition = 'img/camry/side-front/camry-side-front-gray.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    }
  }

  if (changeCar.alt === 'smoke') {

    if (carColorSrc === 'img/camry/side-front/camry-side-front-smoke.jpg') {
      changeCar.src = 'img/camry/front/camry-front-smoke.jpg';
      
      endPosition = 'img/camry/front/camry-front-smoke.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/camry/front/camry-front-smoke.jpg') {
      changeCar.src = 'img/camry/back/camry-back-smoke.jpg';
      
      endPosition = 'img/camry/back/camry-back-smoke.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/camry/back/camry-back-smoke.jpg') {
      changeCar.src = 'img/camry/side/camry-side-smoke.jpg';
      
      endPosition = 'img/camry/side/camry-side-smoke.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else  if (carColorSrc === 'img/camry/side/camry-side-smoke.jpg'){
      changeCar.src = 'img/camry/side-front/camry-side-front-smoke.jpg';
      
      endPosition = 'img/camry/side-front/camry-side-front-smoke.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    }
  }

  if (changeCar.alt === 'blue') {

    if (carColorSrc === 'img/camry/side-front/camry-side-front-blue.jpg') {
      changeCar.src = 'img/camry/front/camry-front-blue.jpg';
      
      endPosition = 'img/camry/front/camry-front-blue.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/camry/front/camry-front-blue.jpg') {
      changeCar.src = 'img/camry/back/camry-back-blue.jpg';
      
      endPosition = 'img/camry/back/camry-back-blue.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/camry/back/camry-back-blue.jpg') {
      changeCar.src = 'img/camry/side/camry-side-blue.jpg';
      
      endPosition = 'img/camry/side/camry-side-blue.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else  if (carColorSrc === 'img/camry/side/camry-side-blue.jpg'){
      changeCar.src = 'img/camry/side-front/camry-side-front-blue.jpg';
      
      endPosition = 'img/camry/side-front/camry-side-front-blue.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    }
  }

  




/////////////////////////////COROLLA///////////////////////////////

   //GET SRC ALT COLOR TO ROTATE THROUGH CORRECT COLORS
   if (changeCar.alt === 'red') {
    //GET IMG SRC TO MATCH TO FLIP TO NEXT VIEW OF CORRECT CAR
    if (carColorSrc === 'img/corolla/side-front/corolla-side-front-red.jpg') {
      changeCar.src = 'img/corolla/front/corolla-front-red.jpg';
      
      endPosition = 'img/corolla/front/corolla-front-red.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/corolla/front/corolla-front-red.jpg') {
      changeCar.src = 'img/corolla/back/corolla-back-red.jpg';
      
      endPosition = 'img/corolla/back/corolla-back-red.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
     
    } 
    else if (carColorSrc === 'img/corolla/back/corolla-back-red.jpg') {
      changeCar.src = 'img/corolla/side/corolla-side-red.jpg';
      
      endPosition = 'img/corolla/side/corolla-side-red.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else  if (carColorSrc === 'img/corolla/side/corolla-side-red.jpg'){
      changeCar.src = 'img/corolla/side-front/corolla-side-front-red.jpg';
      
      endPosition = 'img/corolla/side-front/corolla-side-front-red.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    }
  }

  if (changeCar.alt === 'white') {

    if (carColorSrc === 'img/corolla/side-front/corolla-side-front-white.jpg') {
      changeCar.src = 'img/corolla/front/corolla-front-white.jpg';
      
      endPosition = 'img/corolla/front/corolla-front-white.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/corolla/front/corolla-front-white.jpg') {
      changeCar.src = 'img/corolla/back/corolla-back-white.jpg';
      
      endPosition = 'img/corolla/back/corolla-back-white.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/corolla/back/corolla-back-white.jpg') {
      changeCar.src = 'img/corolla/side/corolla-side-white.jpg';
      
      endPosition = 'img/corolla/side/corolla-side-white.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else  if (carColorSrc === 'img/corolla/side/corolla-side-white.jpg'){
      changeCar.src = 'img/corolla/side-front/corolla-side-front-white.jpg';
      
      endPosition = 'img/corolla/side-front/corolla-side-front-white.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    }
  }

  if (changeCar.alt === 'black') {

    if (carColorSrc === 'img/corolla/side-front/corolla-side-front-black.jpg') {
      changeCar.src = 'img/corolla/front/corolla-front-black.jpg';
      
      endPosition = 'img/corolla/front/corolla-front-black.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/corolla/front/corolla-front-black.jpg') {
      changeCar.src = 'img/corolla/back/corolla-back-black.jpg';
      
      endPosition = 'img/corolla/back/corolla-back-black.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/corolla/back/corolla-back-black.jpg') {
      changeCar.src = 'img/corolla/side/corolla-side-black.jpg';
      
      endPosition = 'img/corolla/side/corolla-side-black.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else  if (carColorSrc === 'img/corolla/side/corolla-side-black.jpg'){
      changeCar.src = 'img/corolla/side-front/corolla-side-front-black.jpg';
      
      endPosition = 'img/corolla/side-front/corolla-side-front-black.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    }
  }

  if (changeCar.alt === 'gray') {

    if (carColorSrc === 'img/corolla/side-front/corolla-side-front-gray.jpg') {
      changeCar.src = 'img/corolla/front/corolla-front-gray.jpg';
      
      endPosition = 'img/corolla/front/corolla-front-gray.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/corolla/front/corolla-front-gray.jpg') {
      changeCar.src = 'img/corolla/back/corolla-back-gray.jpg';
      
      endPosition = 'img/corolla/back/corolla-back-gray.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/corolla/back/corolla-back-gray.jpg') {
      changeCar.src = 'img/corolla/side/corolla-side-gray.jpg';
      
      endPosition = 'img/corolla/side/corolla-side-gray.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else  if (carColorSrc === 'img/corolla/side/corolla-side-gray.jpg'){
      changeCar.src = 'img/corolla/side-front/corolla-side-front-gray.jpg';
      
      endPosition = 'img/corolla/side-front/corolla-side-front-gray.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    }
  }

  if (changeCar.alt === 'smoke') {

    if (carColorSrc === 'img/corolla/side-front/corolla-side-front-smoke.jpg') {
      changeCar.src = 'img/corolla/front/corolla-front-smoke.jpg';
      
      endPosition = 'img/corolla/front/corolla-front-smoke.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/corolla/front/corolla-front-smoke.jpg') {
      changeCar.src = 'img/corolla/back/corolla-back-smoke.jpg';
      
      endPosition = 'img/corolla/back/corolla-back-smoke.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/corolla/back/corolla-back-smoke.jpg') {
      changeCar.src = 'img/corolla/side/corolla-side-smoke.jpg';
      
      endPosition = 'img/corolla/side/corolla-side-smoke.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else  if (carColorSrc === 'img/corolla/side/corolla-side-smoke.jpg'){
      changeCar.src = 'img/corolla/side-front/corolla-side-front-smoke.jpg';
      
      endPosition = 'img/corolla/side-front/corolla-side-front-smoke.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    }
  }

  if (changeCar.alt === 'blue') {

    if (carColorSrc === 'img/corolla/side-front/corolla-side-front-blue.jpg') {
      changeCar.src = 'img/corolla/front/corolla-front-blue.jpg';
      
      endPosition = 'img/corolla/front/corolla-front-blue.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/corolla/front/corolla-front-blue.jpg') {
      changeCar.src = 'img/corolla/back/corolla-back-blue.jpg';
      
      endPosition = 'img/corolla/back/corolla-back-blue.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/corolla/back/corolla-back-blue.jpg') {
      changeCar.src = 'img/corolla/side/corolla-side-blue.jpg';
      
      endPosition = 'img/corolla/side/corolla-side-blue.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else  if (carColorSrc === 'img/corolla/side/corolla-side-blue.jpg'){
      changeCar.src = 'img/corolla/side-front/corolla-side-front-blue.jpg';
      
      endPosition = 'img/corolla/side-front/corolla-side-front-blue.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    }
  }















  
/////////////////////////////t86///////////////////////////////

   //GET SRC ALT COLOR TO ROTATE THROUGH CORRECT COLORS
  if (changeCar.alt === 'red') {
    //GET IMG SRC TO MATCH TO FLIP TO NEXT VIEW OF CORRECT CAR
    if (carColorSrc === 'img/t86/side-front/t86-side-front-red.jpg') {
      changeCar.src = 'img/t86/front/t86-front-red.jpg'

      //GRAB IMG SRC AND SAVE TO SESSION STORAGE SO WE CAN TAKE AND USE THE SAME CAR IMAGE FOR DIFFERENT COLORS WHEN SWITCHING THROUGH CAR COLORS SO THE CAR ANGEL REMAINS
      
      endPosition = 'img/t86/front/t86-front-red.jpg'
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/t86/front/t86-front-red.jpg') {
      changeCar.src = 'img/t86/back/t86-back-red.jpg';
      
      endPosition = 'img/t86/back/t86-back-red.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/t86/back/t86-back-red.jpg') {
      changeCar.src = 'img/t86/side/t86-side-red.jpg';
      
      endPosition = 'img/t86/side/t86-side-red.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/t86/side/t86-side-red.jpg'){
      changeCar.src = 'img/t86/side-front/t86-side-front-red.jpg';
      
      endPosition = 'img/t86/side-front/t86-side-front-red.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    }
  }

  if (changeCar.alt === 'white') {

    if (carColorSrc === 'img/t86/side-front/t86-side-front-white.jpg') {
      changeCar.src = 'img/t86/front/t86-front-white.jpg';
      
      endPosition = 'img/t86/front/t86-front-white.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/t86/front/t86-front-white.jpg') {
      changeCar.src = 'img/t86/back/t86-back-white.jpg';
      
      endPosition = 'img/t86/back/t86-back-white.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/t86/back/t86-back-white.jpg') {
      changeCar.src = 'img/t86/side/t86-side-white.jpg';
      
      endPosition = 'img/t86/side/t86-side-white.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/t86/side/t86-side-white.jpg'){
      changeCar.src = 'img/t86/side-front/t86-side-front-white.jpg';
      
      endPosition = 'img/t86/side-front/t86-side-front-white.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    }
  }

  if (changeCar.alt === 'black') {

    if (carColorSrc === 'img/t86/side-front/t86-side-front-black.jpg') {
      changeCar.src = 'img/t86/front/t86-front-black.jpg';
      
      endPosition = 'img/t86/front/t86-front-black.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);

    } 
    else if (carColorSrc === 'img/t86/front/t86-front-black.jpg') {
      changeCar.src = 'img/t86/back/t86-back-black.jpg';
      
      endPosition = 'img/t86/back/t86-back-black.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);

    } 
    else if (carColorSrc === 'img/t86/back/t86-back-black.jpg') {
      changeCar.src = 'img/t86/side/t86-side-black.jpg';
      
      endPosition = 'img/t86/side/t86-side-black.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);

    } 
    else if (carColorSrc === 'img/t86/side/t86-side-black.jpg'){
      changeCar.src = 'img/t86/side-front/t86-side-front-black.jpg';
      
      endPosition = 'img/t86/side-front/t86-side-front-black.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    }
  }

  if (changeCar.alt === 'gray') {

    if (carColorSrc === 'img/t86/side-front/t86-side-front-gray.jpg') {
      changeCar.src = 'img/t86/front/t86-front-gray.jpg';
      
      endPosition = 'img/t86/front/t86-front-gray.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/t86/front/t86-front-gray.jpg') {
      changeCar.src = 'img/t86/back/t86-back-gray.jpg';
      
      endPosition = 'img/t86/back/t86-back-gray.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/t86/back/t86-back-gray.jpg') {
      changeCar.src = 'img/t86/side/t86-side-gray.jpg';
      
      endPosition = 'img/t86/side/t86-side-gray.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/t86/side/t86-side-gray.jpg'){
      changeCar.src = 'img/t86/side-front/t86-side-front-gray.jpg';
      
      endPosition = 'img/t86/side-front/t86-side-front-gray.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    }
  }

  if (changeCar.alt === 'smoke') {

    if (carColorSrc === 'img/t86/side-front/t86-side-front-smoke.jpg') {
      changeCar.src = 'img/t86/front/t86-front-smoke.jpg';
      
      endPosition = 'img/t86/front/t86-front-smoke.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/t86/front/t86-front-smoke.jpg') {
      changeCar.src = 'img/t86/back/t86-back-smoke.jpg';
      
      endPosition = 'img/t86/back/t86-back-smoke.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/t86/back/t86-back-smoke.jpg') {
      changeCar.src = 'img/t86/side/t86-side-smoke.jpg';
      
      endPosition = 'img/t86/side/t86-side-smoke.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/t86/side/t86-side-smoke.jpg'){
      changeCar.src = 'img/t86/side-front/t86-side-front-smoke.jpg';
      
      endPosition = 'img/t86/side-front/t86-side-front-smoke.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    }
  }

  if (changeCar.alt === 'blue') {

    if (carColorSrc === 'img/t86/side-front/t86-side-front-blue.jpg') {
      changeCar.src = 'img/t86/front/t86-front-blue.jpg';
      
      endPosition = 'img/t86/front/t86-front-blue.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/t86/front/t86-front-blue.jpg') {
      changeCar.src = 'img/t86/back/t86-back-blue.jpg';
      
      endPosition = 'img/t86/back/t86-back-blue.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/t86/back/t86-back-blue.jpg') {
      changeCar.src = 'img/t86/side/t86-side-blue.jpg';
      
      endPosition = 'img/t86/side/t86-side-blue.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/t86/side/t86-side-blue.jpg'){
      changeCar.src = 'img/t86/side-front/t86-side-front-blue.jpg';
      
      endPosition = 'img/t86/side-front/t86-side-front-blue.jpg'
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    }
  }













  
/////////////////////////////Yaris///////////////////////////////

   //GET SRC ALT COLOR TO ROTATE THROUGH CORRECT COLORS
   if (changeCar.alt === 'red') {
    //GET IMG SRC TO MATCH TO FLIP TO NEXT VIEW OF CORRECT CAR
    if (carColorSrc === 'img/yaris/side-front/yaris-side-front-red.jpg') {
      changeCar.src = 'img/yaris/front/yaris-front-red.jpg'

      //GRAB IMG SRC AND SAVE TO SESSION STORAGE SO WE CAN TAKE AND USE THE SAME CAR IMAGE FOR DIFFERENT COLORS WHEN SWITCHING THROUGH CAR COLORS SO THE CAR ANGEL REMAINS
      
      endPosition = 'img/yaris/front/yaris-front-red.jpg'
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/yaris/front/yaris-front-red.jpg') {
      changeCar.src = 'img/yaris/back/yaris-back-red.jpg';
      
      endPosition = 'img/yaris/back/yaris-back-red.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/yaris/back/yaris-back-red.jpg') {
      changeCar.src = 'img/yaris/side/yaris-side-red.jpg';
      
      endPosition = 'img/yaris/side/yaris-side-red.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/yaris/side/yaris-side-red.jpg'){
      changeCar.src = 'img/yaris/side-front/yaris-side-front-red.jpg';
      
      endPosition = 'img/yaris/side-front/yaris-side-front-red.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    }
  }

  if (changeCar.alt === 'white') {

    if (carColorSrc === 'img/yaris/side-front/yaris-side-front-white.jpg') {
      changeCar.src = 'img/yaris/front/yaris-front-white.jpg'
      ;
      endPosition = 'img/yaris/front/yaris-front-white.jpg'
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/yaris/front/yaris-front-white.jpg') {
      changeCar.src = 'img/yaris/back/yaris-back-white.jpg';
      
      endPosition = 'img/yaris/back/yaris-back-white.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/yaris/back/yaris-back-white.jpg') {
      changeCar.src = 'img/yaris/side/yaris-side-white.jpg';
      
      endPosition = 'img/yaris/side/yaris-side-white.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/yaris/side/yaris-side-white.jpg'){
      changeCar.src = 'img/yaris/side-front/yaris-side-front-white.jpg';
      
      endPosition = 'img/yaris/side-front/yaris-side-front-white.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    }
  }

  if (changeCar.alt === 'black') {

    if (carColorSrc === 'img/yaris/side-front/yaris-side-front-black.jpg') {
      changeCar.src = 'img/yaris/front/yaris-front-black.jpg';
      
      endPosition = 'img/yaris/front/yaris-front-black.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/yaris/front/yaris-front-black.jpg') {
      changeCar.src = 'img/yaris/back/yaris-back-black.jpg';
      
      endPosition = 'img/yaris/back/yaris-back-black.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/yaris/back/yaris-back-black.jpg') {
      changeCar.src = 'img/yaris/side/yaris-side-black.jpg';
      
      endPosition = 'img/yaris/side/yaris-side-black.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/yaris/side/yaris-side-black.jpg'){
      changeCar.src = 'img/yaris/side-front/yaris-side-front-black.jpg';
      
      endPosition = 'img/yaris/side-front/yaris-side-front-black.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    }
  }

  if (changeCar.alt === 'gray') {

    if (carColorSrc === 'img/yaris/side-front/yaris-side-front-gray.jpg') {
      changeCar.src = 'img/yaris/front/yaris-front-gray.jpg';
      
      endPosition = 'img/yaris/front/yaris-front-gray.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/yaris/front/yaris-front-gray.jpg') {
      changeCar.src = 'img/yaris/back/yaris-back-gray.jpg';
      
      endPosition = 'img/yaris/back/yaris-back-gray.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/yaris/back/yaris-back-gray.jpg') {
      changeCar.src = 'img/yaris/side/yaris-side-gray.jpg';
      
      endPosition = 'img/yaris/side/yaris-side-gray.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/yaris/side/yaris-side-gray.jpg'){
      changeCar.src = 'img/yaris/side-front/yaris-side-front-gray.jpg';
      
      endPosition = 'img/yaris/side-front/yaris-side-front-gray.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    }
  }

  if (changeCar.alt === 'smoke') {

    if (carColorSrc === 'img/yaris/side-front/yaris-side-front-smoke.jpg') {
      changeCar.src = 'img/yaris/front/yaris-front-smoke.jpg';
      
      endPosition = 'img/yaris/front/yaris-front-smoke.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/yaris/front/yaris-front-smoke.jpg') {
      changeCar.src = 'img/yaris/back/yaris-back-smoke.jpg';
      
      endPosition = 'img/yaris/back/yaris-back-smoke.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/yaris/back/yaris-back-smoke.jpg') {
      changeCar.src = 'img/yaris/side/yaris-side-smoke.jpg';
      
      endPosition = 'img/yaris/side/yaris-side-smoke.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/yaris/side/yaris-side-smoke.jpg'){
      changeCar.src = 'img/yaris/side-front/yaris-side-front-smoke.jpg';
      
      endPosition = 'img/yaris/side-front/yaris-side-front-smoke.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    }
  }

  if (changeCar.alt === 'blue') {

    if (carColorSrc === 'img/yaris/side-front/yaris-side-front-blue.jpg') {
      changeCar.src = 'img/yaris/front/yaris-front-blue.jpg';
      
      endPosition = 'img/yaris/front/yaris-front-blue.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/yaris/front/yaris-front-blue.jpg') {
      changeCar.src = 'img/yaris/back/yaris-back-blue.jpg';
      
      endPosition = 'img/yaris/back/yaris-back-blue.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/yaris/back/yaris-back-blue.jpg') {
      changeCar.src = 'img/yaris/side/yaris-side-blue.jpg';
      
      endPosition = 'img/yaris/side/yaris-side-blue.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/yaris/side/yaris-side-blue.jpg'){
      changeCar.src = 'img/yaris/side-front/yaris-side-front-blue.jpg';
      
      endPosition = 'img/yaris/side-front/yaris-side-front-blue.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    }
  }










  /////////////////////////////Avalon///////////////////////////////

   //GET SRC ALT COLOR TO ROTATE THROUGH CORRECT COLORS
   if (changeCar.alt === 'red') {
    //GET IMG SRC TO MATCH TO FLIP TO NEXT VIEW OF CORRECT CAR
    if (carColorSrc === 'img/avalon/side-front/avalon-side-front-red.jpg') {
      changeCar.src = 'img/avalon/front/avalon-front-red.jpg';
      
      endPosition = 'img/avalon/front/avalon-front-red.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/avalon/front/avalon-front-red.jpg') {
      changeCar.src = 'img/avalon/back/avalon-back-red.jpg';
  
      endPosition = 'img/avalon/back/avalon-back-red.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/avalon/back/avalon-back-red.jpg') {
      changeCar.src = 'img/avalon/side/avalon-side-red.jpg';
  
      endPosition = 'img/avalon/side/avalon-side-red.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/avalon/side/avalon-side-red.jpg'){
      changeCar.src = 'img/avalon/side-front/avalon-side-front-red.jpg';
  
      endPosition = 'img/avalon/side-front/avalon-side-front-red.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    }
  }

  if (changeCar.alt === 'white') {

    if (carColorSrc === 'img/avalon/side-front/avalon-side-front-white.jpg') {
      changeCar.src = 'img/avalon/front/avalon-front-white.jpg';
  
      endPosition = 'img/avalon/front/avalon-front-white.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/avalon/front/avalon-front-white.jpg') {
      changeCar.src = 'img/avalon/back/avalon-back-white.jpg';
  
      endPosition = 'img/avalon/back/avalon-back-white.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/avalon/back/avalon-back-white.jpg') {
      changeCar.src = 'img/avalon/side/avalon-side-white.jpg';
  
      endPosition = 'img/avalon/side/avalon-side-white.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/avalon/side/avalon-side-white.jpg'){
      changeCar.src = 'img/avalon/side-front/avalon-side-front-white.jpg';
  
      endPosition = 'img/avalon/side-front/avalon-side-front-white.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    }
  }

  if (changeCar.alt === 'black') {

    if (carColorSrc === 'img/avalon/side-front/avalon-side-front-black.jpg') {
      changeCar.src = 'img/avalon/front/avalon-front-black.jpg';
  
      endPosition = 'img/avalon/front/avalon-front-black.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/avalon/front/avalon-front-black.jpg') {
      changeCar.src = 'img/avalon/back/avalon-back-black.jpg';
  
      endPosition = 'img/avalon/back/avalon-back-black.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/avalon/back/avalon-back-black.jpg') {
      changeCar.src = 'img/avalon/side/avalon-side-black.jpg';
  
      endPosition = 'img/avalon/side/avalon-side-black.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/avalon/side/avalon-side-black.jpg'){
      changeCar.src = 'img/avalon/side-front/avalon-side-front-black.jpg';
  
      endPosition = 'img/avalon/side-front/avalon-side-front-black.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    }
  }

  if (changeCar.alt === 'gray') {

    if (carColorSrc === 'img/avalon/side-front/avalon-side-front-gray.jpg') {
      changeCar.src = 'img/avalon/front/avalon-front-gray.jpg';
  
      endPosition = 'img/avalon/front/avalon-front-gray.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/avalon/front/avalon-front-gray.jpg') {
      changeCar.src = 'img/avalon/back/avalon-back-gray.jpg';
  
      endPosition = 'img/avalon/back/avalon-back-gray.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/avalon/back/avalon-back-gray.jpg') {
      changeCar.src = 'img/avalon/side/avalon-side-gray.jpg';
  
      endPosition = 'img/avalon/side/avalon-side-gray.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/avalon/side/avalon-side-gray.jpg'){
      changeCar.src = 'img/avalon/side-front/avalon-side-front-gray.jpg';
  
      endPosition = 'img/avalon/side-front/avalon-side-front-gray.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    }
  }

  if (changeCar.alt === 'smoke') {

    if (carColorSrc === 'img/avalon/side-front/avalon-side-front-smoke.jpg') {
      changeCar.src = 'img/avalon/front/avalon-front-smoke.jpg';
  
      endPosition = 'img/avalon/front/avalon-front-smoke.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/avalon/front/avalon-front-smoke.jpg') {
      changeCar.src = 'img/avalon/back/avalon-back-smoke.jpg';
  
      endPosition = 'img/avalon/back/avalon-back-smoke.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/avalon/back/avalon-back-smoke.jpg') {
      changeCar.src = 'img/avalon/side/avalon-side-smoke.jpg';
  
      endPosition = 'img/avalon/side/avalon-side-smoke.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/avalon/side/avalon-side-smoke.jpg'){
      changeCar.src = 'img/avalon/side-front/avalon-side-front-smoke.jpg';
  
      endPosition = 'img/avalon/side-front/avalon-side-front-smoke.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    }
  }

  if (changeCar.alt === 'blue') {

    if (carColorSrc === 'img/avalon/side-front/avalon-side-front-blue.jpg') {
      changeCar.src = 'img/avalon/front/avalon-front-blue.jpg';
  
      endPosition = 'img/avalon/front/avalon-front-blue.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/avalon/front/avalon-front-blue.jpg') {
      changeCar.src = 'img/avalon/back/avalon-back-blue.jpg';
  
      endPosition = 'img/avalon/back/avalon-back-blue.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/avalon/back/avalon-back-blue.jpg') {
      changeCar.src = 'img/avalon/side/avalon-side-blue.jpg';
  
      endPosition = 'img/avalon/side/avalon-side-blue.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    } 
    else if (carColorSrc === 'img/avalon/side/avalon-side-blue.jpg'){
      changeCar.src = 'img/avalon/side-front/avalon-side-front-blue.jpg';
  
      endPosition = 'img/avalon/side-front/avalon-side-front-blue.jpg';
      sessionStorage.setItem('endPosition', endPosition);
      sessionStorage.setItem('car src', endPosition);
    }
  }

}
























//================LOAN CALCULATOR===============//

//Listen for Submit
const submit = document.getElementById('loan-form').addEventListener('submit', function(e){
  //Hide results
  document.getElementById('results').style.display = 'none';

  //Show loader
  document.getElementById('loading').style.display = 'block';

  //Wait 1 second so Loading Gif shows
  setTimeout(calculateResults, 1000);

  e.preventDefault();
});

//CalculateResults Function
function calculateResults() {

  //UI variables
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  //Forumlas for calc
  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) /100 /12;
  const calculatedPayments = parseFloat(years.value) * 12;
 
  //Compute monthy payments
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

    //Show results
    document.getElementById('results').style.display = 'block';
    //Hide loader
    document.getElementById('loading').style.display = 'none';

  } else {
    showError('Please check your Numbers');
  }
}

//Show Error Function
function showError(error) {
  //Show results
  document.getElementById('results').style.display = 'none';
  //Hide loader
  document.getElementById('loading').style.display = 'none';
  //create div
  const errorDiv = document.createElement('div');

  //Get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  //Add class
  errorDiv.className = 'alert alert-danger';

  //Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  //Insert error about heading
  card.insertBefore(errorDiv, heading);

  //Clear error 
  setTimeout(clearError, 3000);

  //Clear error Function
  function clearError() {
    document.querySelector('.alert').remove();
  }
}








////===========ACCESSORIES================//////


  let addItem1 = document.getElementById('addItem1');
  let addItem2 = document.getElementById('addItem2');
  let addItem3 = document.getElementById('addItem3');

  // let addRemove1 = document.getElementById('addRemove1');
  // let addRemove2 = document.getElementById('addRemove2');
  // let addRemove3 = document.getElementById('addRemove3');


addItem1.addEventListener('click', function(){
  if (addItem1.checked) {
    addRemove1.innerHTML = 'ADDED';
  } else {
    addRemove1.innerHTML = 'ADD';
  }
});
addItem2.addEventListener('click', function(){
  if (addItem2.checked) {
    addRemove2.innerHTML = 'ADDED';
  } else {
    addRemove2.innerHTML = 'ADD';
  }
});
addItem3.addEventListener('click', function(){
  if (addItem3.checked) {
    addRemove3.innerHTML = 'ADDED';
  } else {
    addRemove3.innerHTML = 'ADD';
  }
});















////--SELECT VEHICLE DROP DOWN MENU---////////

 //OPEN & CLOSE UP/DOWN SELECT VEHICLE BUTTON
 var selectVehicleCount = 0;
 document.getElementById('car-build-select-toggle').addEventListener('click', (e) => {
     selectVehicleCount++;
   var isEven = vehCountNum => vehCountNum % 2 === 0 ? true : false;
   if (isEven(selectVehicleCount) === false) {
       openSelectVehiclesMenu();
   } else if (isEven(selectVehicleCount) === true) {
       closeSelectVehiclesMenu();
   }

   e.preventDefault();
 });
 
 //OPEN MENU
 function openSelectVehiclesMenu() {
   document.getElementById('select-vehicle').style.height = '25rem';
   // document.getElementById('main').style.marginLeft = '250px';
 };
 
 //CLOSE MENU
 function closeSelectVehiclesMenu() {
   document.getElementById('select-vehicle').style.height = '0';
   // document.getElementById('main').style.marginLeft = '0';
 };



 ////--CAR BUILD CHOICES VEHICLE DROP DOWN MENU---////////

 //OPEN & CLOSE UP/DOWN SELECT VEHICLE BUTTON
 var carChoicesVehicleCount = 0;
 document.getElementById('car-build-choices__toggle').addEventListener('click', (e) => {
     carChoicesVehicleCount++;
   var isEven = choiceCountNum => choiceCountNum % 2 === 0 ? true : false;
   if (isEven(carChoicesVehicleCount) === false) {
       openCarChoicesVehicleMenu();
   } else if (isEven(carChoicesVehicleCount) === true) {
       closeCarChoicesVehicleMenu();
   }
   e.preventDefault();
 });
 
 //OPEN MENU
 function openCarChoicesVehicleMenu() {
   document.getElementById('choices-vehicle').style.height = '25rem';
   // document.getElementById('main').style.marginLeft = '250px';
 };
 
 //CLOSE MENU
 function closeCarChoicesVehicleMenu() {
   document.getElementById('choices-vehicle').style.height = '0';
   // document.getElementById('main').style.marginLeft = '0';
 };



















// CHANGE ALL CAR INFO ON CLICK IN SELECT VEHICLE MENU

function camrySelect() {
  document.getElementById('engine-price').checked = true;
  sessionStorage.setItem('engine price', 0);

  document.getElementById('addItem1').checked = false;
  document.getElementById('addItem2').checked = false;
  document.getElementById('addItem3').checked = false;

  sessionStorage.setItem('Alloy Wheels', 0);
  sessionStorage.setItem('Leather Mats', 0);
  sessionStorage.setItem('Cargo Tote', 0);
  

  let carPos = 'img/camry/side-front/camry-side-front-red.jpg';
  sessionStorage.setItem('endPosition', carPos);

  let camrySelected = document.querySelector('.car-build__main-car-image');
  camrySelected.src = carPos;
  camrySelected.alt = 'red';

  //set car src and price info to local storage
  sessionStorage.setItem('car alt', 'red');
  sessionStorage.setItem('car src', 'img/camry/side-front/camry-side-front-red.jpg')
  sessionStorage.setItem('car price', '$23,495')
  sessionStorage.setItem('total', '23495')
  sessionStorage.setItem('car model', '2018 Camry');

  let carModel = document.querySelector('.car-build__main-car-title')
  let carPrice = document.querySelector('.car-build__main-car-price');

  carModel.innerHTML = '2018 Camry';
  carPrice.innerHTML = '$23,495';

  let financeAmount = document.getElementById('amount');
  financeAmount.value = '23495';

  closeSelectVehiclesMenu();
  selectVehicleCount = 0;
}

function corollaSelect() {
  document.getElementById('engine-price').checked = true;
  sessionStorage.setItem('engine price', 0);

  document.getElementById('addItem1').checked = false;
  document.getElementById('addItem2').checked = false;
  document.getElementById('addItem3').checked = false;

  sessionStorage.setItem('Alloy Wheels', 0);
  sessionStorage.setItem('Leather Mats', 0);
  sessionStorage.setItem('Cargo Tote', 0);
  


  let carPos = 'img/corolla/side-front/corolla-side-front-blue.jpg';
  sessionStorage.setItem('endPosition', carPos);



  let corollaSelected = document.querySelector('.car-build__main-car-image');
  corollaSelected.src = 'img/corolla/side-front/corolla-side-front-blue.jpg';
  corollaSelected.alt = 'blue';

  //set car src and price info to local storage
  sessionStorage.setItem('car alt', 'blue');
  sessionStorage.setItem('car src', 'img/corolla/side-front/corolla-side-front-blue.jpg')
  sessionStorage.setItem('car price', '$18,550')
  sessionStorage.setItem('total', '$18,550')
  sessionStorage.setItem('car model', '2018 Corolla');

  let carModel = document.querySelector('.car-build__main-car-title')
  let carPrice = document.querySelector('.car-build__main-car-price');

  carModel.innerHTML = '2018 Corolla';
  carPrice.innerHTML = '$18,550';

  let financeAmount = document.getElementById('amount');
  financeAmount.value = '18550';

  closeSelectVehiclesMenu();
  selectVehicleCount = 0;
}

function t86Select() {
  document.getElementById('engine-price').checked = true;
  sessionStorage.setItem('engine price', 0);

  document.getElementById('addItem1').checked = false;
  document.getElementById('addItem2').checked = false;
  document.getElementById('addItem3').checked = false;

  sessionStorage.setItem('Alloy Wheels', 0);
  sessionStorage.setItem('Leather Mats', 0);
  sessionStorage.setItem('Cargo Tote', 0);
  
  
  let carPos = 'img/t86/side-front/t86-side-front-red.jpg';
  sessionStorage.setItem('endPosition', carPos);

  let t86Selected = document.querySelector('.car-build__main-car-image');
  t86Selected.src = 'img/t86/side-front/t86-side-front-red.jpg';
  t86Selected.alt = 'red';

  //set car src and price info to local storage
  sessionStorage.setItem('car alt', 'red');
  sessionStorage.setItem('car src', 'img/t86/side-front/t86-side-front-red.jpg')
  sessionStorage.setItem('car price', '$26,255')
  sessionStorage.setItem('total', '$26,255')
  sessionStorage.setItem('car model', '2018 86');

  let carModel = document.querySelector('.car-build__main-car-title')
  let carPrice = document.querySelector('.car-build__main-car-price');

  carModel.innerHTML = '2018 86';
  carPrice.innerHTML = '$26,255';

  let financeAmount = document.getElementById('amount');
  financeAmount.value = '26255';

  closeSelectVehiclesMenu();
  selectVehicleCount = 0;
}

function yarisSelect() {
  document.getElementById('engine-price').checked = true;
  sessionStorage.setItem('engine price', 0);

  document.getElementById('addItem1').checked = false;
  document.getElementById('addItem2').checked = false;
  document.getElementById('addItem3').checked = false;

  sessionStorage.setItem('Alloy Wheels', 0);
  sessionStorage.setItem('Leather Mats', 0);
  sessionStorage.setItem('Cargo Tote', 0);
  

  document.getElementById('addItem1').checked = false;
  document.getElementById('addItem2').checked = false;
  document.getElementById('addItem3').checked = false;

  sessionStorage.setItem('Alloy Wheels', 0);
  sessionStorage.setItem('Leather Mats', 0);
  sessionStorage.setItem('Cargo Tote', 0);
  

  let carPos = 'img/yaris/side-front/yaris-side-front-blue.jpg';
  sessionStorage.setItem('endPosition', carPos);

  let yarisSelected = document.querySelector('.car-build__main-car-image');
  yarisSelected.src = 'img/yaris/side-front/yaris-side-front-blue.jpg';
  yarisSelected.alt = 'blue';

  //set car src and price info to local storage
  sessionStorage.setItem('car alt', 'blue');
  sessionStorage.setItem('car src', 'img/yaris/side-front/yaris-side-front-blue.jpg')
  sessionStorage.setItem('car price', '$15,635')
  sessionStorage.setItem('total', '$15,635')
  sessionStorage.setItem('car model', '2018 Yaris');

  let carModel = document.querySelector('.car-build__main-car-title')
  let carPrice = document.querySelector('.car-build__main-car-price');

  carModel.innerHTML = '2018 Yaris';
  carPrice.innerHTML = '$15,635'

  let financeAmount = document.getElementById('amount');
  financeAmount.value = '15635';

  closeSelectVehiclesMenu();
  selectVehicleCount = 0;
}

function avalonSelect() {
  document.getElementById('engine-price').checked = true;
  sessionStorage.setItem('engine price', 0);

  document.getElementById('addItem1').checked = false;
  document.getElementById('addItem2').checked = false;
  document.getElementById('addItem3').checked = false;

  sessionStorage.setItem('Alloy Wheels', 0);
  sessionStorage.setItem('Leather Mats', 0);
  sessionStorage.setItem('Cargo Tote', 0);
  

  let carPos = 'img/avalon/side-front/avalon-side-front-white.jpg';
  sessionStorage.setItem('endPosition', carPos);

  let avalonSelected = document.querySelector('.car-build__main-car-image');
  avalonSelected.src = 'img/avalon/side-front/avalon-side-front-white.jpg';
  avalonSelected.alt = 'white';

  //set local storage
  sessionStorage.setItem('car alt', 'white');
  sessionStorage.setItem('car src', 'img/avalon/side-front/avalon-side-front-white.jpg')
  sessionStorage.setItem('car price', '$33,500')
  sessionStorage.setItem('total', '$33,500')
  sessionStorage.setItem('car model', '2018 Avalon');

  let carModel = document.querySelector('.car-build__main-car-title')
  let carPrice = document.querySelector('.car-build__main-car-price');

  carModel.innerHTML = '2018 Avalon';
  carPrice.innerHTML = '$33,500'

  let financeAmount = document.getElementById('amount');
  financeAmount.value = '33500';

  closeSelectVehiclesMenu();
  selectVehicleCount = 0;
}



 

 function yourVehicleCart() {
  //CAR IMAGE
  let carShowcase = document.querySelector('.car-build-choices-dropdown__carImg');
  let carChoice = sessionStorage.getItem('car src');
  carShowcase.src = carChoice;

  //CAR COLOR(TEXT)
  let carColor = document.querySelector('.car-build-choices-dropdown__carColor');
  carColor.alt = sessionStorage.getItem('car alt')
  // carColor.innerHTML = carColor.alt;
   

   console.log(carColor.alt);


  switch (carColor.alt) {
    case 'white':
      carColor.style.background = 'white';
      carColor.style.color = 'black';
      break;
    case 'black':
      carColor.style.background = 'black';
      carColor.style.color = 'white';
      break;
    case 'gray':
      carColor.style.background = 'gray';
      carColor.style.color = 'black';
      break;
    case 'smoke':
      carColor.style.background = 'smoke';
      carColor.style.color = 'black';
      break;
    case 'blue':
      carColor.style.background = 'blue';
      carColor.style.color = 'white';
      break;
    case 'red':
      carColor.style.background = 'red';
      carColor.style.color = 'white';
  }

   //CAR PRICE(TEXT)
   let carPrice = document.querySelector('.car-build-choices-dropdown__carPrice');
   carPrice.innerHTML = sessionStorage.getItem('car price')

 }


// function totalPrice() {
//   let totalCost = document.querySelector('.car-build__main-car-price').innerHTML;
//   totalCost = parseInt(totalCost.substr(1,6).replace(/,/g, ''));

//   totalCost = totalCost + enginePrice;
//  console.log(totalCost);
// }










// //GET ENGINE PRICE
// let enginePrice = function(cost) {
//   //Grab innerHTML from Input and set to variable
//   let getCost = document.getElementById('engine-price').innerHTML = cost;

//   //Save to Storage
//   sessionStorage.setItem('engine price', getCost);

//   //Change from String to Number for addition
//   let engineCost = parseInt(sessionStorage.getItem('engine price'));

//   //Grab the Car Price
//   let grabCarPrice = sessionStorage.getItem('car price');
//   //Remove Dollar Sign with substr and comma with replace
//   let carPrice = grabCarPrice.substr(1,6).replace(/,/g, '');
//   //Change from String to Number for addition
//   carPrice = parseInt(carPrice);

//   //Add engine cost and car price and convert back to string
//   let price = String(carPrice + engineCost);

//   //Split cost so dollar sign and comma can be added later
//   let priceFirstHalf = price.substr(0,2); 
//   let priceSecondHalf = price.substr(2,5); 

//   //Add dollar sign and comma
//   let total = `$${priceFirstHalf},${priceSecondHalf}`

//   //Change the innerHTML accoringly
//   let changeEngineTotal = document.querySelector('.car-build__main-car-price').innerHTML = total;

//   //Save total price of car to storage
//   sessionStorage.setItem('total', total )
//   console.log(total);
  
// }



// let enginePrice = function(cost) {
//     //Grab innerHTML from Input and set to variable
//     let getCost = document.getElementById('engine-price').innerHTML = cost;

//     //Save to Storage
//     sessionStorage.setItem('engine price', getCost);

//     //Grab total Price
//     let grabTotalPrice = sessionStorage.getItem('total');
//     //Remove Dollar Sign with substr and comma with replace
//     let totalPrice = grabTotalPrice.substr(1,6).replace(/,/g, '');
//     //Change from String to Number for addition
//     totalPrice = parseInt(totalPrice);
//     getCost = parseInt(getCost);
  
//     let finalTotal = totalPrice + getCost;
//     let total = String(finalTotal);

//     let priceFirstHalf = total.substr(0,2); 
//     let priceSecondHalf = total.substr(2,5); 

//     total = `$${priceFirstHalf},${priceSecondHalf}`;

//     document.querySelector('.car-build__main-car-price').innerHTML = total;

//     sessionStorage.setItem('total', total);
//     console.log('engine ' + total);
// }

// let enginePrice = function(cost) {
//   let getCost = document.getElementById('engine-price').innerHTML = cost;

//   sessionStorage.setItem('engine price', getCost);

//   let grabTotalPrice = sessionStorage.getItem('total');
//   // grabTotalPrice = grabTotalPrice.substr(1,6).replace(/,/g, '');
//   grabTotalPrice = parseInt(grabTotalPrice);


//   let totalEnginePrice = parseInt(getCost);
//   let total;
//   let purchaseEngine = sessionStorage.getItem('engine price');
//   if (purchaseEngine == '500') {
//     total = grabTotalPrice + totalEnginePrice;
//     sessionStorage.setItem('total', total);
//     console.log('yes');
//   } else if (purchaseEngine == '0') {
//     total = sessionStorage.getItem('car price');
//     total = parseInt(total.substr(1,6).replace(/,/g, ''));
//     console.log('no');
//   }

  
  

    
//     // let priceFirstHalf = total.toString().substr(0,2); 
//     // let priceSecondHalf = total.toString().substr(2,5); 

//   // document.querySelector('.car-build__main-car-price').innerHTML = `$${priceFirstHalf},${priceSecondHalf}`;
//   console.log(total);
// }


function enginePrice(cost) {

sessionStorage.setItem('engine cost', cost);

cost = parseInt(cost);
let total = parseInt(sessionStorage.getItem('total'));

let carPrice = document.querySelector('.car-build__main-car-price');
carPrice.innerHTML = cost + total;

finalTotal = cost + total;
getTotal = finalTotal;



console.log(getTotal);
}


//GET ACCESSORY CHOICES PRICE
let accessoryChoices = function() {
  let accessory1 = document.getElementById('addItem1').checked;
  let accessory2 = document.getElementById('addItem2').checked;
  let accessory3 = document.getElementById('addItem3').checked;
  let accessoryTotal1;
  let accessoryTotal2;
  let accessoryTotal3;


  if (accessory1 === true) {
    sessionStorage.setItem('Alloy Wheels', '75');
    accessoryTotal1 = 75;
  } else if (accessory1 === false) {
    sessionStorage.setItem('Alloy Wheels', '0');
    accessoryTotal1 = 0;
  }
  if (accessory2 === true) {
    sessionStorage.setItem('Leather Mats', '75');
    accessoryTotal2 = 75;
  } else if (accessory2 === false) {
    sessionStorage.setItem('Leather Mats', '0');
    accessoryTotal2 = 0;
  }
  if (accessory3 === true) {
    sessionStorage.setItem('Cargo Tote', '75');
    accessoryTotal3 = 75;
  } else if (accessory3 === false) {
    sessionStorage.setItem('Cargo Tote', '0');
    accessoryTotal3 = 0;
  }
  let finalTotal = accessoryTotal1 + accessoryTotal2 + accessoryTotal3;

  //Grab total Price
  let grabTotalPrice = sessionStorage.getItem('total');
//Remove Dollar Sign with substr and comma with replace
  let totalPrice = grabTotalPrice.substr(1,6).replace(/,/g, '');
  //Change from String to Number for addition
  totalPrice = parseInt(totalPrice);

  let total = totalPrice + finalTotal;



  // //Remove Dollar Sign with substr and comma with replace
  // let carPrice = grabCarPrice.substr(1,6).replace(/,/g, '');
  // //Change from String to Number for addition
  // carPrice = parseInt(carPrice);

  // //Add engine cost and car price and convert back to string
  // let price = String(carPrice + engineCost);

  // //Split cost so dollar sign and comma can be added later
  // let priceFirstHalf = price.substr(0,2); 
  // let priceSecondHalf = price.substr(2,5); 

  // //Add dollar sign and comma
  // let total = `$${priceFirstHalf},${priceSecondHalf}`

  // //Change the innerHTML accoringly
  // let changeEngineTotal = document.querySelector('.car-build__main-car-price').innerHTML = total;


  console.log(total);
 
}


// function totalPrice() {
//   let totalCost = document.querySelector('.car-build__main-car-price').innerHTML;
//   totalCost = parseInt(totalCost.substr(1,6).replace(/,/g, ''));

//   totalCost = totalCost + enginePrice;
// //  console.log(totalCost);
// }



// var a = document.querySelector('.car-build__main-car-price').innerHTML;
// console.log(a);