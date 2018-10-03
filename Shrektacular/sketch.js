// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state;
let middleX;
let middleY;
let imgShrek;
let imgDonkey;
let imgFiona;
let imgFarquaad;
let imgCitizen;
let imgSwamp;
let imgFarquaadCastle;
let imgDragonCastle;
let imgWoods;
let scalar;

function preload() {
  imgShrek = loadImage("assets/Shrek Is Not Drek.png");
  imgSwamp = loadImage("assets/Swumpy.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  middleX = windowWidth/2;
  middleY = windowHeight/2;
  scalar = 0.25;
  state = 0;
}

function draw() {
  locationShrek();
  Shrookles();
}

function Shrookles() {
  image(imgShrek, mouseX - 481.5 * scalar, mouseY - 426 * scalar, imgShrek.width * scalar, imgShrek.height * scalar);
}

function locationShrek() {
  if (state === 0) {
    image(imgSwamp, 0, 0, windowWidth, windowHeight);
  }
  else if (state === 1) {
    image(imgSwamp, 0, 0, windowWidth, windowHeight);
  }
  else if (state === 2) {
    image(imgSwamp, 0, 0, windowWidth, windowHeight);
  }
  else if (state === 3) {
    image(imgSwamp, 0, 0, windowWidth, windowHeight);
  }
}
