

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
};


/////////////////////////////////////////////////////////





////////////////////////////////////////////////////////////




class Car {
  constructor(name, year, price, miles, color, engine, alloyWheel, mat, cargo, sideFront, front, back, side) {
    this.name = name;
    this.year = year;
    this.price = price;
    this.miles = miles;
    this.color = color;
    this.engine = 0;
    this.alloyWheel = 0;
    this.mat = 0;
    this.cargo = 0;
    this.sideFront = sideFront;
    this.front = front;
    this.back = back;
    this.side = side;
  }
  //Engine functin for radio button choice
  static enginePrice(cost) {
    // let standardEngine = document.getElementById('engine-standard').checked;
    // let manualEngine = document.getElementById('engine-manual').checked;
    
    if (cost == '500') {
      sessionStorage.setItem('engine', 500)
      console.log(cost);
    } else {
      sessionStorage.setItem('engine', 0);
      console.log(cost);
    }
    totalCarPrice();
    return cost;
  }
  //Accessory function for checklist
  static accessoryPrice() {
    let accessory1 = document.getElementById('addItem1').checked;
    let accessory2 = document.getElementById('addItem2').checked;
    let accessory3 = document.getElementById('addItem3').checked;
    let accessoryTotal1;
    let accessoryTotal2;
    let accessoryTotal3;

    if (accessory1 === true) {
      sessionStorage.setItem('alloy wheels', 75);
      accessoryTotal1 = 75;
    } else if (accessory1 === false) {
      sessionStorage.setItem('alloy wheels', 0);
      accessoryTotal1 = 0;
    }
    if (accessory2 === true) {
      sessionStorage.setItem('leather mats', 75);
      accessoryTotal2 = 75;
    } else if (accessory2 === false) {
      sessionStorage.setItem('leather mats', 0);
      accessoryTotal2 = 0;
    }
    if (accessory3 === true) {
      sessionStorage.setItem('cargo tote', 75);
      accessoryTotal3 = 75;
    } else if (accessory3 === false) {
      sessionStorage.setItem('cargo tote', 0);
      accessoryTotal3 = 0;
    }
    totalCarPrice();
  }
} //construtor end

//CAR OBJECTS
const camry = new Car('Camry', '2018', 23495, '29/41', 'red', 0, 0, 0, 0, 'img/camry/side-front/camry-side-front-red.jpg','img/camry/front/camry-front-red.jpg','img/camry/back/camry-back-red.jpg','img/camry/side/camry-side-red.jpg');

const corolla = new Car('Corolla', '2018', 18550, '28/36', 'blue', 0, 0, 0, 0, 'img/corolla/side-front/corolla-side-front-blue.jpg','img/corolla/front/corolla-front-blue.jpg','img/corolla/back/corolla-back-blue.jpg','img/corolla/side/corolla-side-blue.jpg');




//VARIABLES
let carImgDisplay = document.getElementById('carImgDisplay')
let carTitleDisplay = document.getElementById('carTitleDisplay');
let carPriceDisplay = document.getElementById('carPriceDisplay');
let carAlt = sessionStorage.getItem('car alt');



//HOME PAGE CAR SELECTION GENERATING CAR VALUES IN SESSIONS STORAGE
document.body.addEventListener('click', function(e){

  let target = e.target.classList.contains('explore-car') || e.target.classList.contains('explore-car__front');
  
  if (target && e.target.classList.contains(camry.name.toLowerCase())) {
    sessionStorage.setItem('car img', camry.sideFront)
    sessionStorage.setItem('car angle', camry.sideFront)
    sessionStorage.setItem('car title', camry.name);
    sessionStorage.setItem('car price', camry.price);
    sessionStorage.setItem('car alt', 'red');
    sessionStorage.setItem('engine', 0);
    sessionStorage.setItem('alloy wheels', 0);
    sessionStorage.setItem('leather mats', 0);
    sessionStorage.setItem('cargo tote', 0);
  }
  else if (target && e.target.classList.contains(corolla.name.toLowerCase())) {
    sessionStorage.setItem('car img', corolla.sideFront)
    sessionStorage.setItem('car angle', corolla.sideFront)
    sessionStorage.setItem('car title', corolla.name);
    sessionStorage.setItem('car price', corolla.price);
    sessionStorage.setItem('car alt', 'blue');
    sessionStorage.setItem('engine', 0);
    sessionStorage.setItem('alloy wheels', 0);
    sessionStorage.setItem('leather mats', 0);
    sessionStorage.setItem('cargo tote', 0);
  }






});

//DISPLAY CAR VALUES AND IMG ON BUILD PAGE FROM SESSION STORAGE
(function whenLoaded() {

  let carImg = sessionStorage.getItem('car img');
  carImgDisplay.src = carImg;

  let carTitle = sessionStorage.getItem('car title');
    carTitleDisplay.innerHTML = carTitle;

  let carPrice = sessionStorage.getItem('car price');
    carPriceDisplay.innerHTML = carPrice;

  let carAlt = sessionStorage.getItem('car alt');
    carImgDisplay.alt = carAlt;


}());
//Grabs all session storage numbers and adds total price
function totalCarPrice() {
  let carPrice = parseInt(sessionStorage.getItem('car price'));
  let engine = parseInt(sessionStorage.getItem('engine'));
  let alloyWheels = parseInt(sessionStorage.getItem('alloy wheels'));
  let leatherMats = parseInt(sessionStorage.getItem('leather mats'));
  let cargoTote = parseInt(sessionStorage.getItem('cargo tote'));

  carPriceDisplay.innerHTML = carPrice + engine + alloyWheels + leatherMats + cargoTote;
  // console.log(carPriceDisplay.innerHTML);
};
















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
function hover() {
  var header = document.querySelector(".car-build__panel");
  var btns = header.getElementsByClassName("svg-background");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
};
hover();

















///////////////////////////////////////////////////


//Right Button for changin car image view angle
let changeCarViewRightIterator = 0;
function changeCarViewRight() {
  
  let images = [];

  if (carTitleDisplay.innerHTML == 'Camry') {
    images[0] = camry.front;
    images[1] = camry.back;
    images[2] = camry.side;
    images[3] = camry.sideFront;
  } else if (carTitleDisplay.innerHTML == 'Corolla') {
    images[0] = corolla.front;
    images[1] = corolla.back;
    images[2] = corolla.side;
    images[3] = corolla.sideFront;
  }
  


  carImgDisplay.src = images[changeCarViewRightIterator];
  if (changeCarViewRightIterator < images.length -1) {
    changeCarViewRightIterator++
  } else {
    changeCarViewRightIterator = 0;
  }

  changeCarAngleStorage();
}

//Save car Angel to session storage
function changeCarAngleStorage() {

  let carAngle = sessionStorage.getItem('car angle');

  if (carTitleDisplay.innerHTML === 'Camry'){
    if (camry.sideFront === carAngle) {
      sessionStorage.setItem('car angle', camry.front);
    } else if (camry.front === carAngle) {
      sessionStorage.setItem('car angle', camry.back);
    } else if (camry.back === carAngle) {
      sessionStorage.setItem('car angle', camry.side);
    } else if (camry.side === carAngle) {
      sessionStorage.setItem('car angle', camry.sideFront);
    }
  } else if (carTitleDisplay.innerHTML == 'Corolla') {
    if (corolla.sideFront === carAngle) {
      sessionStorage.setItem('car angle', corolla.front);
    } else if (corolla.front === carAngle) {
      sessionStorage.setItem('car angle', corolla.back);
    } else if (corolla.back === carAngle) {
      sessionStorage.setItem('car angle', corolla.side);
    } else if (corolla.side === carAngle) {
      sessionStorage.setItem('car angle', corolla.sideFront);
    }
  }
}

////////////////////////////////////////////////////////////////////////////






////////////////////////////////////////////////////////////////////////////
//CHANGE COLORS
function changeWhite(){
  sessionStorage.setItem('car alt', 'white');

  if (carTitleDisplay.innerHTML === 'Camry') {
    camry.sideFront = camry.sideFront.replace(/black|gray|smoke|blue|red/i, 'white');
    camry.front = camry.front.replace(/black|gray|smoke|blue|red/i, 'white');
    camry.back = camry.back.replace(/black|gray|smoke|blue|red/i, 'white');
    camry.side = camry.side.replace(/black|gray|smoke|blue|red/i, 'white');
  } else if (carTitleDisplay.innerHTML == 'Corolla') {
    corolla.sideFront = corolla.sideFront.replace(/black|gray|smoke|blue|red/i, 'white');
    corolla.front = corolla.front.replace(/black|gray|smoke|blue|red/i, 'white');
    corolla.back = corolla.back.replace(/black|gray|smoke|blue|red/i, 'white');
    corolla.side = corolla.side.replace(/black|gray|smoke|blue|red/i, 'white');
  }


  //replace car angle color & change image & storage
  let carAngle = sessionStorage.getItem('car angle');
  carAngle = carAngle.replace(/black|gray|smoke|blue|red/i, 'white');
  carImgDisplay.src = carAngle;
  sessionStorage.setItem('car angle', carAngle);
}

function changeBlack(){
  sessionStorage.setItem('car alt', 'black');

  if (carTitleDisplay.innerHTML === 'Camry') {
    camry.sideFront = camry.sideFront.replace(/white|gray|smoke|blue|red/i, 'black');
    camry.front = camry.front.replace(/white|gray|smoke|blue|red/i, 'black');
    camry.back = camry.back.replace(/white|gray|smoke|blue|red/i, 'black');
    camry.side = camry.side.replace(/white|gray|smoke|blue|red/i, 'black');
  }
  //replace car angle color & change image & storage
  let carAngle = sessionStorage.getItem('car angle');
  carAngle = carAngle.replace(/white|gray|smoke|blue|red/i, 'black');
  carImgDisplay.src = carAngle;
  sessionStorage.setItem('car angle', carAngle);
}

function changeGray(){
  sessionStorage.setItem('car alt', 'gray');

  if (carTitleDisplay.innerHTML === 'Camry') {
    camry.sideFront = camry.sideFront.replace(/white|black|smoke|blue|red/i, 'gray');
    camry.front = camry.front.replace(/white|black|smoke|blue|red/i, 'gray');
    camry.back = camry.back.replace(/white|black|smoke|blue|red/i, 'gray');
    camry.side = camry.side.replace(/white|black|smoke|blue|red/i, 'gray');
  }
  //replace car angle color & change image & storage
  let carAngle = sessionStorage.getItem('car angle');
  carAngle = carAngle.replace(/white|black|smoke|blue|red/i, 'gray');
  carImgDisplay.src = carAngle;
  sessionStorage.setItem('car angle', carAngle);
}

function changeSmoke(){
  sessionStorage.setItem('car alt', 'smoke');

  if (carTitleDisplay.innerHTML === 'Camry') {
    camry.sideFront = camry.sideFront.replace(/white|black|gray|blue|red/i, 'smoke');
    camry.front = camry.front.replace(/white|black|gray|blue|red/i, 'smoke');
    camry.back = camry.back.replace(/white|black|gray|blue|red/i, 'smoke');
    camry.side = camry.side.replace(/white|black|gray|blue|red/i, 'smoke');
  }
  //replace car angle color & change image & storage
  let carAngle = sessionStorage.getItem('car angle');
  carAngle = carAngle.replace(/white|black|gray|blue|red/i, 'smoke');
  carImgDisplay.src = carAngle;
  sessionStorage.setItem('car angle', carAngle);
}

function changeBlue(){
  sessionStorage.setItem('car alt', 'blue');

  if (carTitleDisplay.innerHTML === 'Camry') {
    camry.sideFront = camry.sideFront.replace(/white|black|gray|smoke|red/i, 'blue');
    camry.front = camry.front.replace(/white|black|gray|smoke|red/i, 'blue');
    camry.back = camry.back.replace(/white|black|gray|smoke|red/i, 'blue');
    camry.side = camry.side.replace(/white|black|gray|smoke|red/i, 'blue');
  }
  //replace car angle color & change image & storage
  let carAngle = sessionStorage.getItem('car angle');
  carAngle = carAngle.replace(/white|black|gray|smoke|red/i, 'blue');
  carImgDisplay.src = carAngle;
  sessionStorage.setItem('car angle', carAngle);
}

function changeRed(){
  sessionStorage.setItem('car alt', 'red');

  if (carTitleDisplay.innerHTML === 'Camry') {
    camry.sideFront = camry.sideFront.replace(/white|black|gray|smoke|blue/i, 'red');
    camry.front = camry.front.replace(/white|black|gray|smoke|blue/i, 'red');
    camry.back = camry.back.replace(/white|black|gray|smoke|blue/i, 'red');
    camry.side = camry.side.replace(/white|black|gray|smoke|blue/i, 'red');
  }
  //replace car angle color & change image & storage
  let carAngle = sessionStorage.getItem('car angle');
  carAngle = carAngle.replace(/white|black|gray|smoke|blue/i, 'red');
  carImgDisplay.src = carAngle;
  sessionStorage.setItem('car angle', carAngle);
}




////////////////////////////////////////////////////////





////////////////////////////////////////////////////////

document.getElementById('get-car-total').addEventListener('click', function(e) {
  let carPrice = parseInt(sessionStorage.getItem('car price'));
  let engine = parseInt(sessionStorage.getItem('engine'));



  let loanAmount = document.getElementById('amount').value = carPriceDisplay.innerHTML;


  e.preventDefault();
});



