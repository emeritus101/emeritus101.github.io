// pos is the position of Pacman
var pos = 0;
//pageWidth is the width of the webpage
let pageWidth = window.innerWidth;
//pacArray is an array containing all images used in the Pacman simulation
const pacArray = [
  ['./images/PacMan1.png', './images/PacMan2.png'],
  ['./images/PacMan3.png', './images/PacMan4.png'],
];

// direction is used for changing the direction of Pacman (0 is moving to right, 1 is reverse)
var direction = 0;

// focus determines the type of images to load (open/closed mouth)
var focus = 0;

// when clicking the mouse, the Run function is called and Pacman is moving in the webpage
function Run() {
  let img = document.getElementById('PacMan');
  let imgWidth = img.width;
  focus = (focus + 1) % 2;
  direction = checkPageBounds(direction, imgWidth, pos, pageWidth);
  img.src = pacArray[direction][focus];
  if (direction) {
    pos -= 20;
    img.style.left = pos + 'px';
  } else {
    pos += 20;
    img.style.left = pos + 'px';
  }
}

setInterval(Run,200);

// Determine screen edges and move Pacman around
function checkPageBounds(direction, imgWidth, pos, pageWidth) {
  if(direction == 0 && pos + imgWidth > pageWidth-20) {
      direction = 1;
    }
  if(direction == 1 && pos < 20) {
      direction = 0;
    }
  return direction;
}

module.exports = checkPageBounds;
