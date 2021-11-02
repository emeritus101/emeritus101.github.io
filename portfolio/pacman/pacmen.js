let pos = 0;
const pacArray = [
  ['./images/PacMan1.png', './images/PacMan2.png'],
  ['./images/PacMan3.png', './images/PacMan4.png'],
];
let direction = 0;
const pacMen = []; //Array for all Pac-Men

let imgCounter = 0;

// This function returns an object with random values
function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}

// Create the Pac-Man with random coordinates and velocity
function makePac() {
  let velocity = setToRandom(40); 
  let position = setToRandom(200);
  
  // Add image to div with id game
  let game = document.getElementById('pacscreen');
  let newimg = document.createElement('img');
  newimg.style.position = 'absolute';
  newimg.src = './images/PacMan1.png';
  newimg.width = 80;
  newimg.id = imgCounter;
  
  // set position
        newimg.style.left = position.x;
        newimg.style.top = position.y;
  // add new image to the screen

        game.appendChild(newimg);

  // return details in an object
  return {
    position,
    velocity,
    newimg,
  };
}

function update() {
  // loop over the existing Pac-Men to move them
  pacMen.forEach((item) => {
    checkCollisions(item);
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;

    item.newimg.style.left = item.position.x;
    item.newimg.style.top = item.position.y;
  });
  //setTimeout(update, 50);
  let timer = setTimeout(update, 60);
  if(imgCounter == 0){
    clearTimeout(timer);
  };
}

function checkCollisions(item) {
  // detect collision with walls and make pac-men bounce
          if (item.position.x + item.velocity.x + item.newimg.width > window.innerWidth ||
            item.position.x + item.velocity.x < 0) item.velocity.x = -item.velocity.x;
        if (item.position.y + item.velocity.y + item.newimg.height > window.innerHeight ||
            item.position.y + item.velocity.y < 0) item.velocity.y = -item.velocity.y;
}

function makeOne() {
  pacMen.push(makePac()); // add a new Pac-Man
  imgCounter = imgCounter + 1;
}

//Resets the imgCounter and deletes all Pac-Man from the DOM.
function reset() {
  for(let i= 0; i < imgCounter; i++){
    let elem = document.getElementById(i);
    elem.remove();
    
  }
  imgCounter = 0;
 
};