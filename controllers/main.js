//Initialize canvases
// const Canvas = document.getElementById('mainCanvas');
// const ctx = Canvas.getContext('2d');
//
// var templateImage = new Image;
// var paint = new Image;
// // var brain = new Image;
//
// templateImage.src = 'view/imgs/stars.jpg';
// paint.src = 'view/imgs/twitter.png';
// // brain.src = 'view/imgs/brain.png';
//
// import * as conf from './config';
//
// templateImage.onload = function() {
//   ctx.drawImage(templateImage, conf.tImage.x, conf.tImage.y, conf.imageSize, conf.imageSize);
//   startWork();
// };
//
// paint.onload = function() {
//   ctx.drawImage(paint, conf.pImage.x, conf.pImage.y, conf.imageSize, conf.imageSize);
//   startWork();
// };

import Painter from './painter';

const painter = new Painter();

// const Anlzr = require('./analyzer');
// console.log(Anlzr);
// const analyzer = Anlzr.Analyzer;
// console.log(analyzer);
// con
// const anlzr = new Analyzer();

// brain.onload = function() {
//   ctx.drawImage(brain, bImage.x, bImage.y, 100, 100);
// };

// function startWork(){
//   setTimeout(() => {
//     analyzer.process();
//   }, 500);
//   return;
// }
