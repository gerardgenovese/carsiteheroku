//Hamburger Nav
// function openSlideMenu() {
//     document.getElementById('side-menu').style.width = '250px';
//     document.getElementById('main').style.marginLeft = '250px';
// };

// function closeSlideMenu() {
//     document.getElementById('side-menu').style.width = '0';
//     document.getElementById('main').style.marginLeft = '0';
// };


// var count = 0;
// $(".hamburger").click(function() {
//     count++;
//     var isEven = function(someNumber) {
//         return (someNumber % 2 === 0) ? true : false;
//     };
//     if (isEven(count) === false) {
//         openSlideMenu();
//     } else if (isEven(count) === true) {
//         closeSlideMenu();
//     }
// });

///////////////--NO JQUERY--/////////////////


// var count = 0;
// document.querySelector('.hamburger').addEventListener('click', function() {
//   count++;
//   var isEven = function(countNum) {
//       return (countNum % 2 === 0) ? true : false;
//   };
//   if (isEven(count) === false) {
//       openSlideMenu();
//   } else if (isEven(count) === true) {
//       closeSlideMenu();
//   }
// });

//==================NAV FUNCTIONALITY=================//
//--REFACTORED--//
var count = 0;
document.querySelector('.hamburger').addEventListener('click', () => {
    count++;
  var isEven = countNum => countNum % 2 === 0 ? true : false;
  if (isEven(count) === false) {
      openSlideMenu();
  } else if (isEven(count) === true) {
      closeSlideMenu();
  }
});

//OPEN MENU
function openSlideMenu() {
  document.getElementById('side-menu').style.width = '250px';
  document.getElementById('main').style.marginLeft = '250px';
};

//CLOSE MENU
function closeSlideMenu() {
  document.getElementById('side-menu').style.width = '0';
  document.getElementById('main').style.marginLeft = '0';
};

















































// GRAB CAR PRICE AND MILEAGE 
// let getPriceInfo = document.querySelectorAll('.explore-car__price');

// let camryInfo = getPriceInfo[0].innerText;
// let corollaInfo = getPriceInfo[1].innerText;
// let t86Info = getPriceInfo[2].innerText;
// let yarisInfo = getPriceInfo[3].innerText;
// let avalonInfo = getPriceInfo[4].innerText;

// console.log('carprice mileage' + camryInfo);

//ONCLICK 
document.body.addEventListener('click', function(e){

  if(e.target.classList.contains('explore-car') || e.target.classList.contains('explore-car__front') && e.target.classList.contains('camry')) {

    // //get all cars
    // let getCars = document.querySelectorAll('.explore-car__front');
    // getCars = Array.from(getCars);
    
    // //get specific car and slice out img src to variable
    // let getCarInfo = getCars[0].src;
    // let getCarSrcLink = getCarInfo.slice(22, getCarInfo.length);

    let getCarSrcLink = 'img/camry/side-front/camry-side-front-red.jpg';



    // GRAB CAR PRICE AND MILEAGE 
    let getPriceInfo = document.querySelectorAll('.explore-car__price');
    let camryInfo = getPriceInfo[0].innerText;

    //GRAB CAR MODEL TYPE
    let getCarModel = document.querySelectorAll('.explore-car__model');
    let camryModel = getCarModel[0].innerText;
    
    //remove any possibilites of other storage
    sessionStorage.removeItem('endPosition');
    sessionStorage.removeItem('car src');
    sessionStorage.removeItem('car price');
    sessionStorage.removeItem('car model');

    //set car src and price info to local storage
    sessionStorage.setItem('car src', getCarSrcLink)
    sessionStorage.setItem('car price', camryInfo)
    sessionStorage.setItem('car model', camryModel);
  }
    
  //IF CLICK ON CERTAIN CAR
  else if (e.target.classList.contains('explore-car') || e.target.classList.contains('explore-car__front') && e.target.classList.contains('corolla')) {

 

    let getCarSrcLink = 'img/corolla/corolla-red.jpg';

    // GRAB CAR PRICE AND MILEAGE 
    let getPriceInfo = document.querySelectorAll('.explore-car__price');
    let corollaInfo = getPriceInfo[1].innerText;

    //GRAB CAR MODEL TYPE
    let getCarModel = document.querySelectorAll('.explore-car__model');
    let corollaModel = getCarModel[1].innerText;

    
    // console.log('car model ' + corollaModel)
    // console.log('car link' + getCarSrcLink);
    // console.log('carprice mileage' + corollaInfo);
    // return getEachCarSourceLink;
      
    //remove any possibilites of other storage
    //sessionStorage.clear()
    sessionStorage.removeItem('endPosition');
    sessionStorage.removeItem('car src');
    sessionStorage.removeItem('car price');
    sessionStorage.removeItem('car model');

    //set car src and price info to local storage
    sessionStorage.setItem('car src', getCarSrcLink)
    sessionStorage.setItem('car price', corollaInfo)
    sessionStorage.setItem('car model', corollaModel);
  }  
});







//GET CAR PRICE FROM LS AND ENTER CAR PRICE ON BUILD PAGE
let grabCarPrice =  sessionStorage.getItem('car price');
let buildCarPrice = document.querySelector('.car-build__main-car-price');

//SHOWS PROPER CAR PRICE
buildCarPrice.innerHTML = grabCarPrice

//GET & ENTER CAR IMAGE
let grabCarSrc =  sessionStorage.getItem('car src');
let buildCarSrc = document.querySelector('.car-build__main-car-image');

//SHOWS PROPER CAR IMAGE
buildCarSrc.src = grabCarSrc;

//GET & ENTER CAR MODEL TYPE
let grabCarModel =  sessionStorage.getItem('car model');
let buildCarModel = document.querySelector('.car-build__main-car-title');

//SHOWS PROPER CAR MODEL
buildCarModel.innerHTML = grabCarModel;

//PUT CAR PRICE INTO CALC AMOUNT SLOT ON BUILD PAGE
let calcCarPrice = grabCarPrice.substr(1,7).replace(/,/g, '');

let amount = document.getElementById('amount').value = parseInt(calcCarPrice);











































//=================CAR BUILD MENU BUTTONS======================//

//COLORS BUTTON TO PICK CAR COLOR
function changeColor() {
	document.getElementById("car-build__engine").style.display = "none";
	document.getElementById("car-build__calculator").style.display = "none";
  document.getElementById("car-build__colors").style.display = "block";
}

//ENGINE BUTTON TO PICK ENGINE
function changeEngine() {
  document.getElementById("car-build__colors").style.display = "none";
  document.getElementById("car-build__calculator").style.display = "none";
  document.getElementById("car-build__engine").style.display = "block";
}

//FINANCE BUTTON TO USE LOAN CALCULATOR
function loanCalculator() {
	document.getElementById("car-build__colors").style.display = "none";
  document.getElementById("car-build__engine").style.display = "none";
  document.getElementById("car-build__calculator").style.display = "block";
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




















//===========CHANGE CAR COLORS==========//




function changeWhite() {

  let carModel = document.querySelector('.car-build__main-car-title').innerHTML;
  console.log(carModel);
 
  if (carModel == '2018 Camry') {
    let white = document.getElementById('car-color');
    white.alt = 'white';

    //Get last position of Car View and Load that angle
    let getEndPosition = sessionStorage.getItem('endPosition');

    if (getEndPosition === null) {
      white.src = 'img/camry/side-front/camry-side-front-white.jpg';
      
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




  } else if (carModel == '2018 Corolla') {
    let white = document.getElementById('car-color').src='img/corolla/corolla-white.jpg';
  }

}


function changeBlack() {

  let carModel = document.querySelector('.car-build__main-car-title').innerHTML;
  console.log(carModel);

  if (carModel == '2018 Camry') {
    let black = document.getElementById('car-color');
    black.alt = 'black';

    //Get last position of Car View and Load that angle
    let getEndPosition = sessionStorage.getItem('endPosition');

    if (getEndPosition === null) {
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

 

  } else if (carModel == '2018 Corolla') {
    let black = document.getElementById('car-color').src='img/corolla/corolla-black.jpg';
  }
}

function changeGray() {

  let carModel = document.querySelector('.car-build__main-car-title').innerHTML;
  console.log(carModel);

  if (carModel == '2018 Camry') {
    let gray = document.getElementById('car-color');
    gray.alt = 'gray';

    //Get last position of Car View and Load that angle
    let getEndPosition = sessionStorage.getItem('endPosition');

    if (getEndPosition === null) {
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




  } else if (carModel == '2018 Corolla') {
    let gray = document.getElementById('car-color').src='img/corolla/corolla-gray.jpg';
  }
}

function changeSmoke() {

  let carModel = document.querySelector('.car-build__main-car-title').innerHTML;
  console.log(carModel);

  if (carModel == '2018 Camry') {
    let smoke = document.getElementById('car-color');
    smoke.alt = 'smoke';

    //Get last position of Car View and Load that angle
    let getEndPosition = sessionStorage.getItem('endPosition');

    if (getEndPosition === null) {
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


  } else if (carModel == '2018 Corolla') {
    let smoke = document.getElementById('car-color').src='img/corolla/corolla-smoke.jpg';
  }
}

function changeBlue() {

  let carModel = document.querySelector('.car-build__main-car-title').innerHTML;
  console.log(carModel);

  if (carModel == '2018 Camry') {
    let blue = document.getElementById('car-color');
    blue.alt = 'blue';

    //Get last position of Car View and Load that angle
    let getEndPosition = sessionStorage.getItem('endPosition');

    if (getEndPosition === null) {
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


  } else if (carModel == '2018 Corolla') {
    let blue = document.getElementById('car-color').src='img/corolla/corolla-blue.jpg';
  }
}

function changeRed() {

  let carModel = document.querySelector('.car-build__main-car-title').innerHTML;
  console.log(carModel);

  if (carModel == '2018 Camry') {
    let red = document.getElementById('car-color');
    red.alt = 'red';

    //Get last position of Car View and Load that angle
    let getEndPosition = sessionStorage.getItem('endPosition');

    if (getEndPosition === null) {
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


  } else if (carModel == '2018 Corolla') {
    let red = document.getElementById('car-color').src='img/corolla/corolla-red.jpg';
  }
}






















//RIGHT BUTTON CLICK TO CHANGE CAR VIEW

let arrowRight = document.querySelector('.car-build__main--right').addEventListener('click', changeCarViewRight);

// let endPosition;

function changeCarViewRight() {
  //endPosition is FINAL CAR VIEW variable ---  TO PERSIST THROUGH COLOR CHANGE
  let endPosition;


  //==============CAMRY=================//

  //BUILD CAR MAIN IMAGE ID
  let changeCar = document.getElementById('car-color');

  //GET BUILD CAR IMAGE SRC
  let carColorSrc = document.querySelector('.car-build__main-car-image').src;
  carColorSrc = carColorSrc.substr(22, carColorSrc.length);


  //See if Src of variable equals Src to rotate accordingly
  if (changeCar.alt === 'red') {

    if (carColorSrc === 'img/camry/side-front/camry-side-front-red.jpg') {
      changeCar.src = 'img/camry/front/camry-front-red.jpg'

      //GRAB IMG SRC AND SAVE TO LOCAL STORAGE SO WE CAN TAKE AND USE THE SAME CAR IMAGE FOR DIFFERENT COLORS WHEN SWITCHING THROUGH CAR COLORS SO THE CAR ANGEL REMAINS
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
    } 
    else if (carColorSrc === 'img/camry/front/camry-front-red.jpg') {
      changeCar.src = 'img/camry/back/camry-back-red.jpg'
      position = changeCar.src;
      endPosition = position.substr(22, position.length);
      sessionStorage.setItem('endPosition', endPosition);
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

  return endPosition; 
}



//REMOVE endPosition sessionStorage on build-price page load so the car angle resets. If function is removed, clicking on new colors right away will load the last endPosition saved. 
function buildLoad() {
sessionStorage.removeItem('endPosition')
}


































