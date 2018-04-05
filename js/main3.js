

//==================NAV FUNCTIONALITY=================//

//OPEN & CLOSE NAV
var navCount = 0;
document.querySelector('.hamburger').addEventListener('click', () => {
    navCount++;
  var isEven = countNum => countNum % 2 === 0 ? true : false;
  if (isEven(navCount) === false) {
      openSlideMenu();
  } else if (isEven(navCount) === true) {
      closeSlideMenu();
  }
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


//Listen for click outside the element
// let menu = document.getElementById('side-menu');
// let navButton = document.querySelector('.navigation__button');
// let openSlide = document.querySelector('.open-slide');
// let navCheckBox = document.getElementById('navi-toggle');

// window.addEventListener('click', function(e){
//   if (e.target == navButton || e.target == menu || e.target == openSlide || e.target == navCheckBox){
//     menu.style.display = 'block';
//   } 
//   else if (e.target !== navButton || e.target !== menu || e.target !== openSlide || e.target !== navCheckBox) {
//     menu.style.display = 'none';
//     navCheckBox.style.transform = 'rotate(135deg)';
//   }

// });




















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
    
    //remove any possibilites of other storage
    sessionStorage.removeItem('endPosition');
    // sessionStorage.removeItem('car src');
    // sessionStorage.removeItem('car price');
    // sessionStorage.removeItem('car model');

    //set car src and price info to local storage
    sessionStorage.setItem('car alt', carAlt)
    sessionStorage.setItem('car src', getCarSrcLink)
    sessionStorage.setItem('car price', camryInfo)
    sessionStorage.setItem('car model', camryModel);
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
   
    //remove any possibilites of other storage
    //sessionStorage.clear()
    // sessionStorage.removeItem('car alt');
    sessionStorage.removeItem('endPosition');
    // sessionStorage.removeItem('car src');
    // sessionStorage.removeItem('car price');
    // sessionStorage.removeItem('car model');

    //set car src and price info to local storage
    sessionStorage.setItem('car alt', carAlt)
    sessionStorage.setItem('car src', getCarSrcLink)
    sessionStorage.setItem('car price', corollaInfo)
    sessionStorage.setItem('car model', corollaModel);
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
   
    //remove any possibilites of other storage
    //sessionStorage.clear()
    // sessionStorage.removeItem('car alt');
    sessionStorage.removeItem('endPosition');
    // sessionStorage.removeItem('car src');
    // sessionStorage.removeItem('car price');
    // sessionStorage.removeItem('car model');

    //set car src and price info to local storage
    sessionStorage.setItem('car alt', carAlt)
    sessionStorage.setItem('car src', getCarSrcLink)
    sessionStorage.setItem('car price', t86Info)
    sessionStorage.setItem('car model', t86Model);
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
   
    //remove any possibilites of other storage
    //sessionStorage.clear()
    // sessionStorage.removeItem('car alt');
    sessionStorage.removeItem('endPosition');
    // sessionStorage.removeItem('car src');
    // sessionStorage.removeItem('car price');
    // sessionStorage.removeItem('car model');

    //set car src and price info to local storage
    sessionStorage.setItem('car alt', carAlt)
    sessionStorage.setItem('car src', getCarSrcLink)
    sessionStorage.setItem('car price', yarisInfo)
    sessionStorage.setItem('car model', yarisModel);
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
    sessionStorage.removeItem('endPosition');
    // sessionStorage.removeItem('car src');
    // sessionStorage.removeItem('car price');
    // sessionStorage.removeItem('car model');

    //set car src and price info to local storage
    sessionStorage.setItem('car alt', carAlt)
    sessionStorage.setItem('car src', getCarSrcLink)
    sessionStorage.setItem('car price', avalonInfo)
    sessionStorage.setItem('car model', avalonModel);
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

















  // let carAlt = document.getElementById('car-color');

  // if (carAlt.alt === '' && grabCarModel == '2018 Camry') {
  //   carAlt.alt = 'red';
    
  // } 
  // else if (carAlt.alt === '' && grabCarModel == '2018 Corolla') {
  //   carAlt.alt = 'blue';
  // }
  // else if (carAlt.alt === '' && grabCarModel == '2018 86') {
  //   carAlt.alt = 'red';
  // }
  // else if (carAlt.alt === '' && grabCarModel == '2018 Yaris') {
  //   carAlt.alt = 'blue';
  // }
  // else if (carAlt.alt === '' && grabCarModel == '2018 Avalon') {
  //   carAlt.alt = 'white';
  // }
  









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

  let carModel = document.querySelector('.car-build__main-car-title').innerHTML;
  console.log(carModel);

  //CAMRY
  if (carModel == '2018 Camry') {
    let white = document.getElementById('car-color');
    //ALT CREATED FOR CHANGECARVIEWRIGHT()
    white.alt = 'white';

    //Get last position of Car View and Load that angle
    let getEndPosition = sessionStorage.getItem('endPosition');

    if (getEndPosition == null) {
      white.src = 'img/camry/side-front/camry-side-front-white.jpg';
      
      //Save Angle to Local Storage
      position = white.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
    else {
      let replaceColor = getEndPosition.replace(/black|gray|smoke|blue|red/i, 'white');
      white.src = replaceColor;
    
      // Save Angle to Local Storage
      position = white.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
  
  } 

  // COROLLA
  else if (carModel == '2018 Corolla') {
    let white = document.getElementById('car-color');
    white.alt = 'white';

    //Get last position of Car View and Load that angle
    let getEndPosition = sessionStorage.getItem('endPosition');

    if (getEndPosition == null) {
      white.src = 'img/corolla/side-front/corolla-side-front-white.jpg';
      
      //Save Angle to Local Storage
      position = white.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
    else {
      let replaceColor = getEndPosition.replace(/black|gray|smoke|blue|red/i, 'white');
      white.src = replaceColor;
    
      //Save Angle to Local Storage
      position = white.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
 
  }

  // t86
  else if (carModel == '2018 86') {
    let white = document.getElementById('car-color');
    white.alt = 'white';

    //Get last position of Car View and Load that angle
    let getEndPosition = sessionStorage.getItem('endPosition');

    if (getEndPosition == null) {
      white.src = 'img/t86/side-front/t86-side-front-white.jpg';
      
      //Save Angle to Local Storage
      position = white.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
    else {
      let replaceColor = getEndPosition.replace(/black|gray|smoke|blue|red/i, 'white');
      white.src = replaceColor;
    
      //Save Angle to Local Storage
      position = white.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
  
  }

  // Yaris
  else if (carModel == '2018 Yaris') {
    let white = document.getElementById('car-color');
    white.alt = 'white';

    //Get last position of Car View and Load that angle
    let getEndPosition = sessionStorage.getItem('endPosition');

    if (getEndPosition == null) {
      white.src = 'img/yaris/side-front/yaris-side-front-white.jpg';
      
      //Save Angle to Local Storage
      position = white.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
    else {
      let replaceColor = getEndPosition.replace(/black|gray|smoke|blue|red/i, 'white');
      white.src = replaceColor;
    
      //Save Angle to Local Storage
      position = white.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }

  }
  // Avalon
  else if (carModel == '2018 Avalon') {
    let white = document.getElementById('car-color');
    white.alt = 'white';

    //Get last position of Car View and Load that angle
    let getEndPosition = sessionStorage.getItem('endPosition');

    if (getEndPosition == null) {
      white.src = 'img/avalong/side-front/avalong-side-front-white.jpg';
      
      //Save Angle to Local Storage
      position = white.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
    else {
      let replaceColor = getEndPosition.replace(/black|gray|smoke|blue|red/i, 'white');
      white.src = replaceColor;
    
      //Save Angle to Local Storage
      position = white.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
   
  }

sessionStorage.setItem('car alt', 'white');
// position = white.src;
// endPosition = position.substr(22, position.length);
// sessionStorage.setItem('endPosition', endPosition);
}
















function changeBlack() {

  let carModel = document.querySelector('.car-build__main-car-title').innerHTML;
  console.log(carModel);

  if (carModel == '2018 Camry') {
    let black = document.getElementById('car-color');
    black.alt = 'black';

    //Get last position of Car View and Load that angle
    let getEndPosition = sessionStorage.getItem('endPosition');

    if (getEndPosition == null) {
      black.src = 'img/camry/side-front/camry-side-front-black.jpg';

      //Save Angle to Local Storage
      position = black.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
    else {
      let replaceColor = getEndPosition.replace(/white|gray|smoke|blue|red/i, 'black');
      black.src = replaceColor;

      //Save Angle to Local Storage
      position = black.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }

 
  }   
  //COROLLA
  else if (carModel == '2018 Corolla') {
    let black = document.getElementById('car-color');
    black.alt = 'black';

    //Get last position of Car View and Load that angle
    let getEndPosition = sessionStorage.getItem('endPosition');

    if (getEndPosition == null) {
      black.src = 'img/corolla/side-front/corolla-side-front-black.jpg';
      
      //Save Angle to Local Storage
      position = black.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
    else {
      let replaceColor = getEndPosition.replace(/white|gray|smoke|blue|red/i, 'black');
      black.src = replaceColor;
    
      //Save Angle to Local Storage
      position = black.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }

  }


  // t86
  else if (carModel == '2018 86') {
    let black = document.getElementById('car-color');
    black.alt = 'black';

    //Get last position of Car View and Load that angle
    let getEndPosition = sessionStorage.getItem('endPosition');

    if (getEndPosition == null) {
      black.src = 'img/t86/side-front/t86-side-front-black.jpg';
      
      //Save Angle to Local Storage
      position = black.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
    else {
      let replaceColor = getEndPosition.replace(/white|gray|smoke|blue|red/i, 'black');
      black.src = replaceColor;
    
      //Save Angle to Local Storage
      position = black.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }

  }
    
  //Yaris
  else if (carModel == '2018 Yaris') {
    let black = document.getElementById('car-color');
    black.alt = 'black';

    //Get last position of Car View and Load that angle
    let getEndPosition = sessionStorage.getItem('endPosition');

    if (getEndPosition == null) {
      black.src = 'img/yaris/side-front/yaris-side-front-black.jpg';
      
      //Save Angle to Local Storage
      position = black.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
    else {
      let replaceColor = getEndPosition.replace(/white|gray|smoke|blue|red/i, 'black');
      black.src = replaceColor;
    
      //Save Angle to Local Storage
      position = black.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }

  }

  //Avalon
  else if (carModel == '2018 Avalon') {
    let black = document.getElementById('car-color');
    black.alt = 'black';

    //Get last position of Car View and Load that angle
    let getEndPosition = sessionStorage.getItem('endPosition');

    if (getEndPosition == null) {
      black.src = 'img/avalon/side-front/avalon-side-front-black.jpg';
      
      //Save Angle to Local Storage
      position = black.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
    else {
      let replaceColor = getEndPosition.replace(/white|gray|smoke|blue|red/i, 'black');
      black.src = replaceColor;
    
      //Save Angle to Local Storage
      position = black.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }

  }

  sessionStorage.setItem('car alt', 'black');
  // position = black.src;
  // endPosition = position.substr(22, position.length);
  // sessionStorage.setItem('endPosition', endPosition);
   
}













function changeGray() {

  let carModel = document.querySelector('.car-build__main-car-title').innerHTML;
  console.log(carModel);

  if (carModel == '2018 Camry') {
    let gray = document.getElementById('car-color');
    gray.alt = 'gray';

    //Get last position of Car View and Load that angle
    let getEndPosition = sessionStorage.getItem('endPosition');

    if (getEndPosition == null) {
      gray.src = 'img/camry/side-front/camry-side-front-gray.jpg';

      //Save Angle to Local Storage
      position = gray.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
    else {
      let replaceColor = getEndPosition.replace(/white|black|smoke|blue|red/i, 'gray');
      gray.src = replaceColor;

      //Save Angle to Local Storage
      position = gray.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }

  }   

    //COROLLA
  else if (carModel == '2018 Corolla') {
    let gray = document.getElementById('car-color');
    gray.alt = 'gray';

    //Get last position of Car View and Load that angle
    let getEndPosition = sessionStorage.getItem('endPosition');

    if (getEndPosition == null) {
      gray.src = 'img/corolla/side-front/corolla-side-front-gray.jpg';
      
      //Save Angle to Local Storage
      position = gray.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
    else {
      let replaceColor = getEndPosition.replace(/white|black|smoke|blue|red/i, 'gray');
      gray.src = replaceColor;
    
      //Save Angle to Local Storage
      position = gray.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }

  }

  // t86
  else if (carModel == '2018 86') {
    let gray = document.getElementById('car-color');
    gray.alt = 'gray';

    //Get last position of Car View and Load that angle
    let getEndPosition = sessionStorage.getItem('endPosition');

    if (getEndPosition == null) {
      gray.src = 'img/t86/side-front/t86-side-front-gray.jpg';
      
      //Save Angle to Local Storage
      position = gray.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
    else {
      let replaceColor = getEndPosition.replace(/white|black|smoke|blue|red/i, 'gray');
      gray.src = replaceColor;
    
      //Save Angle to Local Storage
      position = gray.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }

  }
  
  // YARIS
  else if (carModel == '2018 Yaris') {
    let gray = document.getElementById('car-color');
    gray.alt = 'gray';

    //Get last position of Car View and Load that angle
    let getEndPosition = sessionStorage.getItem('endPosition');

    if (getEndPosition == null) {
      gray.src = 'img/yaris/side-front/yaris-side-front-gray.jpg';
      
      //Save Angle to Local Storage
      position = gray.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
    else {
      let replaceColor = getEndPosition.replace(/white|black|smoke|blue|red/i, 'gray');
      gray.src = replaceColor;
    
      //Save Angle to Local Storage
      position = gray.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }

  }
  
  // AVALON
  else if (carModel == '2018 Avalon') {
    let gray = document.getElementById('car-color');
    gray.alt = 'gray';

    //Get last position of Car View and Load that angle
    let getEndPosition = sessionStorage.getItem('endPosition');

    if (getEndPosition == null) {
      gray.src = 'img/avalon/side-front/avalon-side-front-gray.jpg';
      
      //Save Angle to Local Storage
      position = gray.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
    else {
      let replaceColor = getEndPosition.replace(/white|black|smoke|blue|red/i, 'gray');
      gray.src = replaceColor;
    
      //Save Angle to Local Storage
      position = gray.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }

  }
  sessionStorage.setItem('car alt', 'gray');
  // position = gray.src;
  // endPosition = position.substr(22, position.length);
  // sessionStorage.setItem('endPosition', endPosition);
}











function changeSmoke() {

  let carModel = document.querySelector('.car-build__main-car-title').innerHTML;
  console.log(carModel);

  if (carModel == '2018 Camry') {
    let smoke = document.getElementById('car-color');
    smoke.alt = 'smoke';

    //Get last position of Car View and Load that angle
    let getEndPosition = sessionStorage.getItem('endPosition');

    if (getEndPosition == null) {
      smoke.src = 'img/camry/side-front/camry-side-front-smoke.jpg';
    
      //Save Angle to Local Storage
      position = smoke.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
    else {
      let replaceColor = getEndPosition.replace(/white|black|gray|blue|red/i, 'smoke');
      smoke.src = replaceColor;

      //Save Angle to Local Storage
      position = smoke.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }

  }  

  else if (carModel == '2018 Corolla') {
    let smoke = document.getElementById('car-color');
    smoke.alt = 'smoke';

    //Get last position of Car View and Load that angle
    let getEndPosition = sessionStorage.getItem('endPosition');

    if (getEndPosition == null) {
      smoke.src = 'img/corolla/side-front/corolla-side-front-smoke.jpg';
      
      //Save Angle to Local Storage
      position = smoke.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
    else {
      let replaceColor = getEndPosition.replace(/white|black|gray|blue|red/i, 'smoke');
      smoke.src = replaceColor;
    
      //Save Angle to Local Storage
      position = smoke.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
  }

  // t86
  else if (carModel == '2018 86') {
    let smoke = document.getElementById('car-color');
    smoke.alt = 'smoke';

    //Get last position of Car View and Load that angle
    let getEndPosition = sessionStorage.getItem('endPosition');

    if (getEndPosition == null) {
      smoke.src = 'img/t86/side-front/t86-side-front-smoke.jpg';
      
      //Save Angle to Local Storage
      position = smoke.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
    else {
      let replaceColor = getEndPosition.replace(/white|black|gray|blue|red/i, 'smoke');
      smoke.src = replaceColor;
    
      //Save Angle to Local Storage
      position = smoke.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
  }
  
  // YARIS
  else if (carModel == '2018 Yaris') {
    let smoke = document.getElementById('car-color');
    smoke.alt = 'smoke';

    //Get last position of Car View and Load that angle
    let getEndPosition = sessionStorage.getItem('endPosition');

    if (getEndPosition == null) {
      smoke.src = 'img/yaris/side-front/yaris-side-front-smoke.jpg';
      
      //Save Angle to Local Storage
      position = smoke.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
    else {
      let replaceColor = getEndPosition.replace(/white|black|gray|blue|red/i, 'smoke');
      smoke.src = replaceColor;
    
      //Save Angle to Local Storage
      position = smoke.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
  }
  
  // AVALON
  else if (carModel == '2018 Avalon') {
    let smoke = document.getElementById('car-color');
    smoke.alt = 'smoke';

    //Get last position of Car View and Load that angle
    let getEndPosition = sessionStorage.getItem('endPosition');

    if (getEndPosition == null) {
      smoke.src = 'img/avalon/side-front/avalon-side-front-smoke.jpg';
      
      //Save Angle to Local Storage
      position = smoke.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
    else {
      let replaceColor = getEndPosition.replace(/white|black|gray|blue|red/i, 'smoke');
      smoke.src = replaceColor;
    
      //Save Angle to Local Storage
      position = smoke.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
  }
  sessionStorage.setItem('car alt', 'smoke');
  // position = smoke.src;
  // endPosition = position.substr(22, position.length);
  // sessionStorage.setItem('endPosition', endPosition);
}





function changeBlue() {

  let carModel = document.querySelector('.car-build__main-car-title').innerHTML;
  console.log(carModel);

  if (carModel == '2018 Camry') {
    let blue = document.getElementById('car-color');
    blue.alt = 'blue';

    //Get last position of Car View and Load that angle
    let getEndPosition = sessionStorage.getItem('endPosition');

    if (getEndPosition == null) {
      blue.src = 'img/camry/side-front/camry-side-front-blue.jpg';

      //Save Angle to Local Storage
      position = blue.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
    else {
      let replaceColor = getEndPosition.replace(/white|black|gray|smoke|red/i, 'blue');
      blue.src = replaceColor;

      //Save Angle to Local Storage
      position = blue.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }


  } 

  //COROLLA
  else if (carModel == '2018 Corolla') {
    let blue = document.getElementById('car-color');
    blue.alt = 'blue';

    //Get last position of Car View and Load that angle
    let getEndPosition = sessionStorage.getItem('endPosition');

    if (getEndPosition == null) {
      blue.src = 'img/corolla/side-front/corolla-side-front-blue.jpg';
      
      //Save Angle to Local Storage
      position = blue.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
    else {
      let replaceColor = getEndPosition.replace(/white|black|gray|smoke|red/i, 'blue');
      blue.src = replaceColor;
    
      //Save Angle to Local Storage
      position = blue.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
  }

  // t86
  else if (carModel == '2018 86') {
    let blue = document.getElementById('car-color');
    blue.alt = 'blue';

    //Get last position of Car View and Load that angle
    let getEndPosition = sessionStorage.getItem('endPosition');

    if (getEndPosition == null) {
      blue.src = 'img/t86/side-front/t86-side-front-blue.jpg';
      
      //Save Angle to Local Storage
      position = blue.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
    else {
      let replaceColor = getEndPosition.replace(/white|black|gray|smoke|red/i, 'blue');
      blue.src = replaceColor;
    
      //Save Angle to Local Storage
      position = blue.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
  }
  
  // YARIS
  else if (carModel == '2018 Yaris') {
    let blue = document.getElementById('car-color');
    blue.alt = 'blue';

    //Get last position of Car View and Load that angle
    let getEndPosition = sessionStorage.getItem('endPosition');

    if (getEndPosition == null) {
      blue.src = 'img/yaris/side-front/yaris-side-front-blue.jpg';
      
      //Save Angle to Local Storage
      position = blue.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
    else {
      let replaceColor = getEndPosition.replace(/white|black|gray|smoke|red/i, 'blue');
      blue.src = replaceColor;
    
      //Save Angle to Local Storage
      position = blue.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
  }
  
  // AVALON
  else if (carModel == '2018 Avalon') {
    let blue = document.getElementById('car-color');
    blue.alt = 'blue';

    //Get last position of Car View and Load that angle
    let getEndPosition = sessionStorage.getItem('endPosition');

    if (getEndPosition == null) {
      blue.src = 'img/avalon/side-front/avalon-side-front-blue.jpg';
      
      //Save Angle to Local Storage
      position = blue.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
    else {
      let replaceColor = getEndPosition.replace(/white|black|gray|smoke|red/i, 'blue');
      blue.src = replaceColor;
    
      //Save Angle to Local Storage
      position = blue.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
  }
  sessionStorage.setItem('car alt', 'blue');
  // position = blue.src;
  // endPosition = position.substr(22, position.length);
  // sessionStorage.setItem('endPosition', endPosition);

}








function changeRed() {

  let carModel = document.querySelector('.car-build__main-car-title').innerHTML;
  console.log(carModel);

  if (carModel == '2018 Camry') {
    let red = document.getElementById('car-color');
    red.alt = 'red';

    //Get last position of Car View and Load that angle
    let getEndPosition = sessionStorage.getItem('endPosition');

    if (getEndPosition == null) {
      red.src = 'img/camry/side-front/camry-side-front-red.jpg';

      //Save Angle to Local Storage
      position = red.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
    else {
      let replaceColor = getEndPosition.replace(/white|black|gray|smoke|blue/i, 'red');
      red.src = replaceColor;

      //Save Angle to Local Storage
      position = red.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }


  }   
  
  //RED
  else if (carModel == '2018 Corolla') {
    let red = document.getElementById('car-color');
    red.alt = 'red';

    //Get last position of Car View and Load that angle
    let getEndPosition = sessionStorage.getItem('endPosition');

    if (getEndPosition == null) {
      red.src = 'img/corolla/side-front/corolla-side-front-red.jpg';
      
      //Save Angle to Local Storage
      position = red.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
    else {
      let replaceColor = getEndPosition.replace(/white|black|gray|smoke|blue/i, 'red');
      red.src = replaceColor;
    
      //Save Angle to Local Storage
      position = red.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
  }

  // t86
  else if (carModel == '2018 86') {
    let red = document.getElementById('car-color');
    red.alt = 'red';

    //Get last position of Car View and Load that angle
    let getEndPosition = sessionStorage.getItem('endPosition');

    if (getEndPosition == null) {
      red.src = 'img/t86/side-front/t86-side-front-red.jpg';
      
      //Save Angle to Local Storage
      position = red.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
    else {
      let replaceColor = getEndPosition.replace(/white|black|gray|smoke|blue/i, 'red');
      red.src = replaceColor;
    
      //Save Angle to Local Storage
      position = red.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
  }
  
  // YARIS
  else if (carModel == '2018 Yaris') {
    let red = document.getElementById('car-color');
    red.alt = 'red';

    //Get last position of Car View and Load that angle
    let getEndPosition = sessionStorage.getItem('endPosition');

    if (getEndPosition == null) {
      red.src = 'img/yaris/side-front/yaris-side-front-red.jpg';
      
      //Save Angle to Local Storage
      position = red.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
    else {
      let replaceColor = getEndPosition.replace(/white|black|gray|smoke|blue/i, 'red');
      red.src = replaceColor;
    
      //Save Angle to Local Storage
      position = red.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
  }
  
  // AVALON
  else if (carModel == '2018 Avalon') {
    let red = document.getElementById('car-color');
    red.alt = 'red';

    //Get last position of Car View and Load that angle
    let getEndPosition = sessionStorage.getItem('endPosition');

    if (getEndPosition == null) {
      red.src = 'img/avalon/side-front/avalon-side-front-red.jpg';
      
      //Save Angle to Local Storage
      position = red.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
    else {
      let replaceColor = getEndPosition.replace(/white|black|gray|smoke|blue/i, 'red');
      red.src = replaceColor;
    
      //Save Angle to Local Storage
      position = red.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
  }
  sessionStorage.setItem('car alt', 'red');
  // position = red.src;
  // endPosition = position.substr(22, position.length);
  // sessionStorage.setItem('endPosition', endPosition);

}






















//RIGHT BUTTON CLICK TO CHANGE CAR VIEW

// let arrowRight = document.querySelector('.car-build__main--right').addEventListener('click', changeCarViewRight);

// let endPosition;

function changeCarViewRight() {

  //endPosition is FINAL CAR VIEW variable ---  TO PERSIST THROUGH COLOR CHANGE
  let endPosition;

  //BUILD CAR MAIN IMAGE ID
  // let changeCar = document.getElementById('car-color');

  // if (changeCar.alt === '' && grabCarModel == '2018 Camry') {
  //   changeCar.alt = 'red'; 
  // } 
  // else if (changeCar.alt === '' && grabCarModel == '2018 Corolla') {
  //   changeCar.alt = 'blue';
  // }
  // else if (changeCar.alt === '' && grabCarModel == '2018 86') {
  //   changeCar.alt = 'red';
  // }
  // else if (changeCar.alt === '' && grabCarModel == '2018 Yaris') {
  //   changeCar.alt = 'blue';
  // }
  // else if (changeCar.alt === '' && grabCarModel == '2018 Avalon') {
  //   changeCar.alt = 'white';
  // }

  let changeCar = document.getElementById('car-color');


  //GET BUILD CAR IMAGE SRC
  let carColorSrc = document.querySelector('.car-build__main-car-image').src;
  carColorSrc = carColorSrc.substr(22, carColorSrc.length);


  //GET SRC ALT COLOR TO ROTATE THROUGH CORRECT COLORS
  if (changeCar.alt === 'red') {
    //GET IMG SRC TO MATCH TO FLIP TO NEXT VIEW OF CORRECT CAR
    if (carColorSrc === 'img/camry/side-front/camry-side-front-red.jpg') {
      changeCar.src = 'img/camry/front/camry-front-red.jpg'

      //GRAB IMG SRC AND SAVE TO SESSION STORAGE SO WE CAN TAKE AND USE THE SAME CAR IMAGE FOR DIFFERENT COLORS WHEN SWITCHING THROUGH CAR COLORS SO THE CAR ANGEL REMAINS
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/camry/front/camry-front-red.jpg') {
      changeCar.src = 'img/camry/back/camry-back-red.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
      // console.log(endPosition);
    } 
    else if (carColorSrc === 'img/camry/back/camry-back-red.jpg') {
      changeCar.src = 'img/camry/side/camry-side-red.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else  if (carColorSrc === 'img/camry/side/camry-side-red.jpg'){
      changeCar.src = 'img/camry/side-front/camry-side-front-red.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
  }

  if (changeCar.alt === 'white') {

    if (carColorSrc === 'img/camry/side-front/camry-side-front-white.jpg') {
      changeCar.src = 'img/camry/front/camry-front-white.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/camry/front/camry-front-white.jpg') {
      changeCar.src = 'img/camry/back/camry-back-white.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/camry/back/camry-back-white.jpg') {
      changeCar.src = 'img/camry/side/camry-side-white.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else  if (carColorSrc === 'img/camry/side/camry-side-white.jpg'){
      changeCar.src = 'img/camry/side-front/camry-side-front-white.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
  }

  if (changeCar.alt === 'black') {

    if (carColorSrc === 'img/camry/side-front/camry-side-front-black.jpg') {
      changeCar.src = 'img/camry/front/camry-front-black.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/camry/front/camry-front-black.jpg') {
      changeCar.src = 'img/camry/back/camry-back-black.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/camry/back/camry-back-black.jpg') {
      changeCar.src = 'img/camry/side/camry-side-black.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else  if (carColorSrc === 'img/camry/side/camry-side-black.jpg'){
      changeCar.src = 'img/camry/side-front/camry-side-front-black.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
  }

  if (changeCar.alt === 'gray') {

    if (carColorSrc === 'img/camry/side-front/camry-side-front-gray.jpg') {
      changeCar.src = 'img/camry/front/camry-front-gray.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/camry/front/camry-front-gray.jpg') {
      changeCar.src = 'img/camry/back/camry-back-gray.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/camry/back/camry-back-gray.jpg') {
      changeCar.src = 'img/camry/side/camry-side-gray.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else  if (carColorSrc === 'img/camry/side/camry-side-gray.jpg'){
      changeCar.src = 'img/camry/side-front/camry-side-front-gray.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
  }

  if (changeCar.alt === 'smoke') {

    if (carColorSrc === 'img/camry/side-front/camry-side-front-smoke.jpg') {
      changeCar.src = 'img/camry/front/camry-front-smoke.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/camry/front/camry-front-smoke.jpg') {
      changeCar.src = 'img/camry/back/camry-back-smoke.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/camry/back/camry-back-smoke.jpg') {
      changeCar.src = 'img/camry/side/camry-side-smoke.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else  if (carColorSrc === 'img/camry/side/camry-side-smoke.jpg'){
      changeCar.src = 'img/camry/side-front/camry-side-front-smoke.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
  }

  if (changeCar.alt === 'blue') {

    if (carColorSrc === 'img/camry/side-front/camry-side-front-blue.jpg') {
      changeCar.src = 'img/camry/front/camry-front-blue.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/camry/front/camry-front-blue.jpg') {
      changeCar.src = 'img/camry/back/camry-back-blue.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/camry/back/camry-back-blue.jpg') {
      changeCar.src = 'img/camry/side/camry-side-blue.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else  if (carColorSrc === 'img/camry/side/camry-side-blue.jpg'){
      changeCar.src = 'img/camry/side-front/camry-side-front-blue.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
  }

  




/////////////////////////////COROLLA///////////////////////////////

   //GET SRC ALT COLOR TO ROTATE THROUGH CORRECT COLORS
   if (changeCar.alt === 'red') {
    //GET IMG SRC TO MATCH TO FLIP TO NEXT VIEW OF CORRECT CAR
    if (carColorSrc === 'img/corolla/side-front/corolla-side-front-red.jpg') {
      changeCar.src = 'img/corolla/front/corolla-front-red.jpg'

      //GRAB IMG SRC AND SAVE TO SESSION STORAGE SO WE CAN TAKE AND USE THE SAME CAR IMAGE FOR DIFFERENT COLORS WHEN SWITCHING THROUGH CAR COLORS SO THE CAR ANGEL REMAINS
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/corolla/front/corolla-front-red.jpg') {
      changeCar.src = 'img/corolla/back/corolla-back-red.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
      // console.log(endPosition);
    } 
    else if (carColorSrc === 'img/corolla/back/corolla-back-red.jpg') {
      changeCar.src = 'img/corolla/side/corolla-side-red.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else  if (carColorSrc === 'img/corolla/side/corolla-side-red.jpg'){
      changeCar.src = 'img/corolla/side-front/corolla-side-front-red.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
  }

  if (changeCar.alt === 'white') {

    if (carColorSrc === 'img/corolla/side-front/corolla-side-front-white.jpg') {
      changeCar.src = 'img/corolla/front/corolla-front-white.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/corolla/front/corolla-front-white.jpg') {
      changeCar.src = 'img/corolla/back/corolla-back-white.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/corolla/back/corolla-back-white.jpg') {
      changeCar.src = 'img/corolla/side/corolla-side-white.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else  if (carColorSrc === 'img/corolla/side/corolla-side-white.jpg'){
      changeCar.src = 'img/corolla/side-front/corolla-side-front-white.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
  }

  if (changeCar.alt === 'black') {

    if (carColorSrc === 'img/corolla/side-front/corolla-side-front-black.jpg') {
      changeCar.src = 'img/corolla/front/corolla-front-black.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/corolla/front/corolla-front-black.jpg') {
      changeCar.src = 'img/corolla/back/corolla-back-black.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/corolla/back/corolla-back-black.jpg') {
      changeCar.src = 'img/corolla/side/corolla-side-black.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else  if (carColorSrc === 'img/corolla/side/corolla-side-black.jpg'){
      changeCar.src = 'img/corolla/side-front/corolla-side-front-black.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
  }

  if (changeCar.alt === 'gray') {

    if (carColorSrc === 'img/corolla/side-front/corolla-side-front-gray.jpg') {
      changeCar.src = 'img/corolla/front/corolla-front-gray.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/corolla/front/corolla-front-gray.jpg') {
      changeCar.src = 'img/corolla/back/corolla-back-gray.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/corolla/back/corolla-back-gray.jpg') {
      changeCar.src = 'img/corolla/side/corolla-side-gray.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else  if (carColorSrc === 'img/corolla/side/corolla-side-gray.jpg'){
      changeCar.src = 'img/corolla/side-front/corolla-side-front-gray.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
  }

  if (changeCar.alt === 'smoke') {

    if (carColorSrc === 'img/corolla/side-front/corolla-side-front-smoke.jpg') {
      changeCar.src = 'img/corolla/front/corolla-front-smoke.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/corolla/front/corolla-front-smoke.jpg') {
      changeCar.src = 'img/corolla/back/corolla-back-smoke.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/corolla/back/corolla-back-smoke.jpg') {
      changeCar.src = 'img/corolla/side/corolla-side-smoke.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else  if (carColorSrc === 'img/corolla/side/corolla-side-smoke.jpg'){
      changeCar.src = 'img/corolla/side-front/corolla-side-front-smoke.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
  }

  if (changeCar.alt === 'blue') {

    if (carColorSrc === 'img/corolla/side-front/corolla-side-front-blue.jpg') {
      changeCar.src = 'img/corolla/front/corolla-front-blue.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/corolla/front/corolla-front-blue.jpg') {
      changeCar.src = 'img/corolla/back/corolla-back-blue.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/corolla/back/corolla-back-blue.jpg') {
      changeCar.src = 'img/corolla/side/corolla-side-blue.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else  if (carColorSrc === 'img/corolla/side/corolla-side-blue.jpg'){
      changeCar.src = 'img/corolla/side-front/corolla-side-front-blue.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
  }















  
/////////////////////////////t86///////////////////////////////

   //GET SRC ALT COLOR TO ROTATE THROUGH CORRECT COLORS
   if (changeCar.alt === 'red') {
    //GET IMG SRC TO MATCH TO FLIP TO NEXT VIEW OF CORRECT CAR
    if (carColorSrc === 'img/t86/side-front/t86-side-front-red.jpg') {
      changeCar.src = 'img/t86/front/t86-front-red.jpg'

      //GRAB IMG SRC AND SAVE TO SESSION STORAGE SO WE CAN TAKE AND USE THE SAME CAR IMAGE FOR DIFFERENT COLORS WHEN SWITCHING THROUGH CAR COLORS SO THE CAR ANGEL REMAINS
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/t86/front/t86-front-red.jpg') {
      changeCar.src = 'img/t86/back/t86-back-red.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
      // console.log(endPosition);
    } 
    else if (carColorSrc === 'img/t86/back/t86-back-red.jpg') {
      changeCar.src = 'img/t86/side/t86-side-red.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else  if (carColorSrc === 'img/t86/side/t86-side-red.jpg'){
      changeCar.src = 'img/t86/side-front/t86-side-front-red.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
  }

  if (changeCar.alt === 'white') {

    if (carColorSrc === 'img/t86/side-front/t86-side-front-white.jpg') {
      changeCar.src = 'img/t86/front/t86-front-white.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/t86/front/t86-front-white.jpg') {
      changeCar.src = 'img/t86/back/t86-back-white.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/t86/back/t86-back-white.jpg') {
      changeCar.src = 'img/t86/side/t86-side-white.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else  if (carColorSrc === 'img/t86/side/t86-side-white.jpg'){
      changeCar.src = 'img/t86/side-front/t86-side-front-white.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
  }

  if (changeCar.alt === 'black') {

    if (carColorSrc === 'img/t86/side-front/t86-side-front-black.jpg') {
      changeCar.src = 'img/t86/front/t86-front-black.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/t86/front/t86-front-black.jpg') {
      changeCar.src = 'img/t86/back/t86-back-black.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/t86/back/t86-back-black.jpg') {
      changeCar.src = 'img/t86/side/t86-side-black.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else  if (carColorSrc === 'img/t86/side/t86-side-black.jpg'){
      changeCar.src = 'img/t86/side-front/t86-side-front-black.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
  }

  if (changeCar.alt === 'gray') {

    if (carColorSrc === 'img/t86/side-front/t86-side-front-gray.jpg') {
      changeCar.src = 'img/t86/front/t86-front-gray.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/t86/front/t86-front-gray.jpg') {
      changeCar.src = 'img/t86/back/t86-back-gray.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/t86/back/t86-back-gray.jpg') {
      changeCar.src = 'img/t86/side/t86-side-gray.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else  if (carColorSrc === 'img/t86/side/t86-side-gray.jpg'){
      changeCar.src = 'img/t86/side-front/t86-side-front-gray.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
  }

  if (changeCar.alt === 'smoke') {

    if (carColorSrc === 'img/t86/side-front/t86-side-front-smoke.jpg') {
      changeCar.src = 'img/t86/front/t86-front-smoke.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/t86/front/t86-front-smoke.jpg') {
      changeCar.src = 'img/t86/back/t86-back-smoke.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/t86/back/t86-back-smoke.jpg') {
      changeCar.src = 'img/t86/side/t86-side-smoke.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else  if (carColorSrc === 'img/t86/side/t86-side-smoke.jpg'){
      changeCar.src = 'img/t86/side-front/t86-side-front-smoke.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
  }

  if (changeCar.alt === 'blue') {

    if (carColorSrc === 'img/t86/side-front/t86-side-front-blue.jpg') {
      changeCar.src = 'img/t86/front/t86-front-blue.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/t86/front/t86-front-blue.jpg') {
      changeCar.src = 'img/t86/back/t86-back-blue.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/t86/back/t86-back-blue.jpg') {
      changeCar.src = 'img/t86/side/t86-side-blue.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else  if (carColorSrc === 'img/t86/side/t86-side-blue.jpg'){
      changeCar.src = 'img/t86/side-front/t86-side-front-blue.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
  }













  
/////////////////////////////Yaris///////////////////////////////

   //GET SRC ALT COLOR TO ROTATE THROUGH CORRECT COLORS
   if (changeCar.alt === 'red') {
    //GET IMG SRC TO MATCH TO FLIP TO NEXT VIEW OF CORRECT CAR
    if (carColorSrc === 'img/yaris/side-front/yaris-side-front-red.jpg') {
      changeCar.src = 'img/yaris/front/yaris-front-red.jpg'

      //GRAB IMG SRC AND SAVE TO SESSION STORAGE SO WE CAN TAKE AND USE THE SAME CAR IMAGE FOR DIFFERENT COLORS WHEN SWITCHING THROUGH CAR COLORS SO THE CAR ANGEL REMAINS
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/yaris/front/yaris-front-red.jpg') {
      changeCar.src = 'img/yaris/back/yaris-back-red.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
      // console.log(endPosition);
    } 
    else if (carColorSrc === 'img/yaris/back/yaris-back-red.jpg') {
      changeCar.src = 'img/yaris/side/yaris-side-red.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else  if (carColorSrc === 'img/yaris/side/yaris-side-red.jpg'){
      changeCar.src = 'img/yaris/side-front/yaris-side-front-red.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
  }

  if (changeCar.alt === 'white') {

    if (carColorSrc === 'img/yaris/side-front/yaris-side-front-white.jpg') {
      changeCar.src = 'img/yaris/front/yaris-front-white.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/yaris/front/yaris-front-white.jpg') {
      changeCar.src = 'img/yaris/back/yaris-back-white.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/yaris/back/yaris-back-white.jpg') {
      changeCar.src = 'img/yaris/side/yaris-side-white.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else  if (carColorSrc === 'img/yaris/side/yaris-side-white.jpg'){
      changeCar.src = 'img/yaris/side-front/yaris-side-front-white.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
  }

  if (changeCar.alt === 'black') {

    if (carColorSrc === 'img/yaris/side-front/yaris-side-front-black.jpg') {
      changeCar.src = 'img/yaris/front/yaris-front-black.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/yaris/front/yaris-front-black.jpg') {
      changeCar.src = 'img/yaris/back/yaris-back-black.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/yaris/back/yaris-back-black.jpg') {
      changeCar.src = 'img/yaris/side/yaris-side-black.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else  if (carColorSrc === 'img/yaris/side/yaris-side-black.jpg'){
      changeCar.src = 'img/yaris/side-front/yaris-side-front-black.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
  }

  if (changeCar.alt === 'gray') {

    if (carColorSrc === 'img/yaris/side-front/yaris-side-front-gray.jpg') {
      changeCar.src = 'img/yaris/front/yaris-front-gray.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/yaris/front/yaris-front-gray.jpg') {
      changeCar.src = 'img/yaris/back/yaris-back-gray.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/yaris/back/yaris-back-gray.jpg') {
      changeCar.src = 'img/yaris/side/yaris-side-gray.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else  if (carColorSrc === 'img/yaris/side/yaris-side-gray.jpg'){
      changeCar.src = 'img/yaris/side-front/yaris-side-front-gray.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
  }

  if (changeCar.alt === 'smoke') {

    if (carColorSrc === 'img/yaris/side-front/yaris-side-front-smoke.jpg') {
      changeCar.src = 'img/yaris/front/yaris-front-smoke.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/yaris/front/yaris-front-smoke.jpg') {
      changeCar.src = 'img/yaris/back/yaris-back-smoke.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/yaris/back/yaris-back-smoke.jpg') {
      changeCar.src = 'img/yaris/side/yaris-side-smoke.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else  if (carColorSrc === 'img/yaris/side/yaris-side-smoke.jpg'){
      changeCar.src = 'img/yaris/side-front/yaris-side-front-smoke.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
  }

  if (changeCar.alt === 'blue') {

    if (carColorSrc === 'img/yaris/side-front/yaris-side-front-blue.jpg') {
      changeCar.src = 'img/yaris/front/yaris-front-blue.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/yaris/front/yaris-front-blue.jpg') {
      changeCar.src = 'img/yaris/back/yaris-back-blue.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/yaris/back/yaris-back-blue.jpg') {
      changeCar.src = 'img/yaris/side/yaris-side-blue.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else  if (carColorSrc === 'img/yaris/side/yaris-side-blue.jpg'){
      changeCar.src = 'img/yaris/side-front/yaris-side-front-blue.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
  }










  /////////////////////////////Avalon///////////////////////////////

   //GET SRC ALT COLOR TO ROTATE THROUGH CORRECT COLORS
   if (changeCar.alt === 'red') {
    //GET IMG SRC TO MATCH TO FLIP TO NEXT VIEW OF CORRECT CAR
    if (carColorSrc === 'img/avalon/side-front/avalon-side-front-red.jpg') {
      changeCar.src = 'img/avalon/front/avalon-front-red.jpg'

      //GRAB IMG SRC AND SAVE TO SESSION STORAGE SO WE CAN TAKE AND USE THE SAME CAR IMAGE FOR DIFFERENT COLORS WHEN SWITCHING THROUGH CAR COLORS SO THE CAR ANGEL REMAINS
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/avalon/front/avalon-front-red.jpg') {
      changeCar.src = 'img/avalon/back/avalon-back-red.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
      // console.log(endPosition);
    } 
    else if (carColorSrc === 'img/avalon/back/avalon-back-red.jpg') {
      changeCar.src = 'img/avalon/side/avalon-side-red.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else  if (carColorSrc === 'img/avalon/side/avalon-side-red.jpg'){
      changeCar.src = 'img/avalon/side-front/avalon-side-front-red.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
  }

  if (changeCar.alt === 'white') {

    if (carColorSrc === 'img/avalon/side-front/avalon-side-front-white.jpg') {
      changeCar.src = 'img/avalon/front/avalon-front-white.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/avalon/front/avalon-front-white.jpg') {
      changeCar.src = 'img/avalon/back/avalon-back-white.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/avalon/back/avalon-back-white.jpg') {
      changeCar.src = 'img/avalon/side/avalon-side-white.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else  if (carColorSrc === 'img/avalon/side/avalon-side-white.jpg'){
      changeCar.src = 'img/avalon/side-front/avalon-side-front-white.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
  }

  if (changeCar.alt === 'black') {

    if (carColorSrc === 'img/avalon/side-front/avalon-side-front-black.jpg') {
      changeCar.src = 'img/avalon/front/avalon-front-black.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/avalon/front/avalon-front-black.jpg') {
      changeCar.src = 'img/avalon/back/avalon-back-black.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/avalon/back/avalon-back-black.jpg') {
      changeCar.src = 'img/avalon/side/avalon-side-black.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else  if (carColorSrc === 'img/avalon/side/avalon-side-black.jpg'){
      changeCar.src = 'img/avalon/side-front/avalon-side-front-black.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
  }

  if (changeCar.alt === 'gray') {

    if (carColorSrc === 'img/avalon/side-front/avalon-side-front-gray.jpg') {
      changeCar.src = 'img/avalon/front/avalon-front-gray.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/avalon/front/avalon-front-gray.jpg') {
      changeCar.src = 'img/avalon/back/avalon-back-gray.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/avalon/back/avalon-back-gray.jpg') {
      changeCar.src = 'img/avalon/side/avalon-side-gray.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else  if (carColorSrc === 'img/avalon/side/avalon-side-gray.jpg'){
      changeCar.src = 'img/avalon/side-front/avalon-side-front-gray.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
  }

  if (changeCar.alt === 'smoke') {

    if (carColorSrc === 'img/avalon/side-front/avalon-side-front-smoke.jpg') {
      changeCar.src = 'img/avalon/front/avalon-front-smoke.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/avalon/front/avalon-front-smoke.jpg') {
      changeCar.src = 'img/avalon/back/avalon-back-smoke.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/avalon/back/avalon-back-smoke.jpg') {
      changeCar.src = 'img/avalon/side/avalon-side-smoke.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else  if (carColorSrc === 'img/avalon/side/avalon-side-smoke.jpg'){
      changeCar.src = 'img/avalon/side-front/avalon-side-front-smoke.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    }
  }

  if (changeCar.alt === 'blue') {

    if (carColorSrc === 'img/avalon/side-front/avalon-side-front-blue.jpg') {
      changeCar.src = 'img/avalon/front/avalon-front-blue.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/avalon/front/avalon-front-blue.jpg') {
      changeCar.src = 'img/avalon/back/avalon-back-blue.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/avalon/back/avalon-back-blue.jpg') {
      changeCar.src = 'img/avalon/side/avalon-side-blue.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else  if (carColorSrc === 'img/avalon/side/avalon-side-blue.jpg'){
      changeCar.src = 'img/avalon/side-front/avalon-side-front-blue.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
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
 document.getElementById('car-build-select-toggle').addEventListener('click', () => {
     selectVehicleCount++;
   var isEven = vehCountNum => vehCountNum % 2 === 0 ? true : false;
   if (isEven(selectVehicleCount) === false) {
       openSelectVehiclesMenu();
   } else if (isEven(selectVehicleCount) === true) {
       closeSelectVehiclesMenu();
   }
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















 ////--CAR BUILD VEHICLE DROP DOWN MENU---////////

 //OPEN & CLOSE UP/DOWN SELECT VEHICLE BUTTON
//  var carChoicesVehicleCount = 0;
//  document.getElementById('car-build-choices__toggle').addEventListener('click', () => {
//      carChoicesVehicleCount++;
//    var isEven = choiceCountNum => choiceCountNum % 2 === 0 ? true : false;
//    if (isEven(carChoicesVehicleCount) === false) {
//        openCarChoicesVehicleMenu();
//    } else if (isEven(carChoicesVehicleCount) === true) {
//        closeCarChoicesVehicleMenu();
//    }
//  });
 
//  //OPEN MENU
//  function openCarChoicesVehicleMenu() {
//    document.getElementById('choices-vehicle').style.height = '25rem';
//    // document.getElementById('main').style.marginLeft = '250px';
//  };
 
//  //CLOSE MENU
//  function closeCarChoicesVehicleMenu() {
//    document.getElementById('choices-vehicle').style.height = '0';
//    // document.getElementById('main').style.marginLeft = '0';
//  };






// CHANGE ALL CAR INFO ON CLICK IN SELECT VEHICLE MENU

function camrySelect() {
  sessionStorage.removeItem('endPosition');

  let camrySelected = document.querySelector('.car-build__main-car-image');
  camrySelected.src = 'img/camry/side-front/camry-side-front-red.jpg';
  camrySelected.alt = 'red';

  //set car src and price info to local storage
  sessionStorage.setItem('car alt', 'red');
  sessionStorage.setItem('car src', 'img/camry/side-front/camry-side-front-red.jpg')
  sessionStorage.setItem('car price', '23,495 starting')
  sessionStorage.setItem('car model', '2018 Camry');

  let carModel = document.querySelector('.car-build__main-car-title')
  let carPrice = document.querySelector('.car-build__main-car-price');

  carModel.innerHTML = '2018 Camry';
  carPrice.innerHTML = '23,495 starting'

  let financeAmount = document.getElementById('amount');
  financeAmount.value = '23495';

  closeSelectVehiclesMenu();
  selectVehicleCount = 0;
}

function corollaSelect() {
  sessionStorage.removeItem('endPosition');

  let corollaSelected = document.querySelector('.car-build__main-car-image');
  corollaSelected.src = 'img/corolla/side-front/corolla-side-front-blue.jpg';
  corollaSelected.alt = 'blue';

  //set car src and price info to local storage
  sessionStorage.setItem('car alt', 'blue');
  sessionStorage.setItem('car src', 'img/corolla/side-front/corolla-side-front-blue.jpg')
  sessionStorage.setItem('car price', '18,550 starting')
  sessionStorage.setItem('car model', '2018 Corolla');

  let carModel = document.querySelector('.car-build__main-car-title')
  let carPrice = document.querySelector('.car-build__main-car-price');

  carModel.innerHTML = '2018 Corolla';
  carPrice.innerHTML = '18,550 starting'

  let financeAmount = document.getElementById('amount');
  financeAmount.value = '18550';

  closeSelectVehiclesMenu();
  selectVehicleCount = 0;
}

function t86Select() {
  sessionStorage.removeItem('endPosition');

  let t86Selected = document.querySelector('.car-build__main-car-image');
  t86Selected.src = 'img/t86/side-front/t86-side-front-red.jpg';
  t86Selected.alt = 'red';

  //set car src and price info to local storage
  sessionStorage.setItem('car alt', 'red');
  sessionStorage.setItem('car src', 'img/t86/side-front/t86-side-front-red.jpg')
  sessionStorage.setItem('car price', '26,255 starting')
  sessionStorage.setItem('car model', '2018 86');

  let carModel = document.querySelector('.car-build__main-car-title')
  let carPrice = document.querySelector('.car-build__main-car-price');

  carModel.innerHTML = '2018 86';
  carPrice.innerHTML = '26,255 starting'

  let financeAmount = document.getElementById('amount');
  financeAmount.value = '26255';

  closeSelectVehiclesMenu();
  selectVehicleCount = 0;
}

function yarisSelect() {
  sessionStorage.removeItem('endPosition');

  let yarisSelected = document.querySelector('.car-build__main-car-image');
  yarisSelected.src = 'img/yaris/side-front/yaris-side-front-blue.jpg';
  yarisSelected.alt = 'blue';

  //set car src and price info to local storage
  sessionStorage.setItem('car alt', 'blue');
  sessionStorage.setItem('car src', 'img/yaris/side-front/yaris-side-front-blue.jpg')
  sessionStorage.setItem('car price', '15,635 starting')
  sessionStorage.setItem('car model', '2018 Yaris');

  let carModel = document.querySelector('.car-build__main-car-title')
  let carPrice = document.querySelector('.car-build__main-car-price');

  carModel.innerHTML = '2018 Yaris';
  carPrice.innerHTML = '15,635 starting'

  let financeAmount = document.getElementById('amount');
  financeAmount.value = '15635';

  closeSelectVehiclesMenu();
  selectVehicleCount = 0;
}

function avalonSelect() {
  sessionStorage.removeItem('endPosition');

  let avalonSelected = document.querySelector('.car-build__main-car-image');
  avalonSelected.src = 'img/avalon/side-front/avalon-side-front-white.jpg';
  avalonSelected.alt = 'white';

  //set car src and price info to local storage
  sessionStorage.setItem('car alt', 'white');
  sessionStorage.setItem('car src', 'img/avalon/side-front/avalon-side-front-white.jpg')
  sessionStorage.setItem('car price', '33,500 starting')
  sessionStorage.setItem('car model', '2018 Avalon');

  let carModel = document.querySelector('.car-build__main-car-title')
  let carPrice = document.querySelector('.car-build__main-car-price');

  carModel.innerHTML = '2018 Avalon';
  carPrice.innerHTML = '33,500 starting'

  let financeAmount = document.getElementById('amount');
  financeAmount.value = '33500';

  closeSelectVehiclesMenu();
  selectVehicleCount = 0;
}







































  // let option1 = document.querySelector('.car-build__engine');
  // let option2 = document.querySelector('.car-build__engine--option-2');

  // option1.addEventListener('click', function(e){



  //   if (e.target == option1) {
  //     console.log('yes')
  //       } else {
  //     console.log('no');
  //       }
  // });



  // var option = document.querySelector('.car-build__engine');

  // option.addEventListener('click', function(e){
  //   var children = option.childNodes;

  //   let li = document.getElementsByTagName('li');

  //   if (e.target === children || e.target === option || e.target === li) {
  //   console.log('yes');
  //   } else {
  //     console.log('no');
  //   }
  // });



 

 
