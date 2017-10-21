//Initialize canvases
const Canvas = document.getElementById('mainCanvas');
const ctx = Canvas.getContext('2d');

var templateImage = new Image;
var paint = new Image;
// var brain = new Image;

templateImage.src = 'view/imgs/stars.jpg';
paint.src = 'view/imgs/scream.jpg';
// brain.src = 'view/imgs/brain.png';

templateImage.onload = function() {
  ctx.drawImage(templateImage, tImage.x, tImage.y, imageSize, imageSize);
  ready++;
  startWork();
};

paint.onload = function() {
  ctx.drawImage(paint, pImage.x, pImage.y, imageSize, imageSize);
  ready++;
  startWork();
};

// brain.onload = function() {
//   ctx.drawImage(brain, bImage.x, bImage.y, 100, 100);
// };

function startWork(){
  setTimeout(() => {
    analyzer.process();
  }, 500);
  return;
}
