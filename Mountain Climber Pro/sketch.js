//Mountain Climber PRO
//Callan F.
//Initiated Oct. 26, 2018

let touchingGround = true;
let touchingWallL = false;
let touchingWallR = false;

let heroX = 300;
let heroY = 300;
let dx = 0;
let dy = 0;

let maxFall;

let doubleJumpUsed = false;

let imgHero;

let difficulty = "normal";

let grid;

let rows;
let cols;

let cellSize;

function preload() {
  imgHero = loadImage("assets/Stk.png");
}

function setup() {
  createCanvas(600, 600);
  imageMode(CENTER);
  if (difficulty === "easy") {
    rows = 75;
    cols = 75;
  }
  else if (difficulty === "normal") {
    rows = 50;
    cols = 50;
  }
  else if (difficulty === "hard"){
    rows = 25;
    cols = 25;
  }
  cellSize = windowWidth / rows;

  maxFall = 5;
}

function draw() {
  background(128);
  // displayGrid();
  displayStick();
  detectWalls();
  move();
  fall();
  jump();
}

function displayStick() {
  //Other options: 9.5 by 31.5 (50%), 14.25 by 47.25 (75%), or 19 by 63 (100%)
  let hero = image(imgHero, heroX, heroY, 14.25, 47.25);
  heroX = heroX + dx;
  heroY = heroY + dy;
}

function jump() {
  if (keyIsPressed && key === "w") {
    if (touchingGround === true) {
      dy = -5;
      touchingGround = false;
    }
    else if (doubleJumpUsed === false) {
      dy = -5;
      doubleJumpUsed = true;
    }
  }
}

function fall() {
  if (touchingGround === false) {
    if (dy < maxFall) {
      if (keyIsPressed === true && key === "s") {
        dy += 0.4;
        maxFall = 8;
      }
      else {
        dy += 0.1;
        maxFall = 5;
      }
    }
    if (dy > maxFall) {
      dy -= 0.2;
    }
  }
}

function detectWalls() {
  if (heroX + 1 >= 600) {
    touchingWallL = true;
  }
  else {
    touchingWallL = false;
  }
  if (heroX - 1 <= -600) {
    touchingWallR = true;
  }
  else {
    touchingWallR = false;
  }
}

function move() {
  if (keyIsPressed) {
    if (key === "a" && touchingWallL === false) {
      dx = -5;
    }
    if (key === "d" && touchingWallR === false) {
      dx = 5;
    }
  }
  else if (!keyIsPressed) {
    dx = 0;
  }
}

function displayGrid() {
  grid = generateGrid();
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === 0) {
        fill(255);
        rect(x * cellSize, y * cellSize, cellSize, cellSize);
      }
      if (grid[y][x] === 1) {
        fill(0);
        rect(x * cellSize, y * cellSize, cellSize, cellSize);
      }
    }
  }
  return grid;
}

function generateGrid() {
  let randomGrid = [];
  for (let y = 0; y < rows; y++) {
    randomGrid[y].push([]);
    for (let x = 0; x < cols; x++) {
      if (random(100) >= 25) {
        if (!grid[x] === 0) {
          if (grid[y-1][x] === 1) {
            randomGrid[y][x].push(1);
          }
          else {
            randomGrid[y][x].push(0);
          }
        }
        else {
          randomGrid[y][x].push(0);
        }
      }
      else {
        randomGrid[y][x].push(0);
      }
    }
  }
  return randomGrid;
}
