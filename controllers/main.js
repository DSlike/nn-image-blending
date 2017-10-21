//Initialize canvases
const Canvas = document.getElementById('mainCanvas');
const ctx = Canvas.getContext('2d');

var templateImage = new Image;
var paint = new Image;
var brain = new Image;

templateImage.src = 'view/imgs/starry-nigth.jpg';
paint.src = 'view/imgs/medium.png';
brain.src = 'view/imgs/brain.png';

templateImage.onload = function() {
  ctx.drawImage(templateImage, tImage.x, tImage.y, imageSize, imageSize);
  start();
};

paint.onload = function() {
  ctx.drawImage(paint, pImage.x+50, pImage.y+50, 100, 100);
  start();
};

brain.onload = function() {
  ctx.drawImage(brain, bImage.x, bImage.y, 100, 100);
  start();
};
