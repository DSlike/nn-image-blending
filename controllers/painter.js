import * as conf from './config';
import Analyzer from './analyzer';

const analyzer = new Analyzer();

export default class Painter {
  constructor() {
    this.Canvas = document.getElementById('mainCanvas');
    let ctx = this.Canvas.getContext('2d');

    let templateImage = new Image,
      paint = new Image;

    templateImage.src = 'view/imgs/polyg.jpg',
      paint.src = 'view/imgs/twitter.png';

    templateImage.onload = function() {
      ctx.drawImage(templateImage, conf.tImage.x, conf.tImage.y, 400, 400);
    };

    paint.onload = function() {
      ctx.drawImage(paint, 510, 100, 200, 200);
    };

    setTimeout(() => {
      analyzer.process();
    }, 1000);
  }
  // start(){
  //   // let restart = neural.train();
  //   for(let x=0; x<parts; x++){
  //     for(let y=0; y<parts; y++){
  //       let p = analyzer.getImagePart(x,y);
  //       let data = [];
  //       for(let i=0; i<p.data.length-4; i+=4){
  //         let a = (p.data[i]+p.data[i+1]+p.data[i+2])/3
  //         data.push(a);
  //       }
  //       let cordinates = neural.getOutput(data);
  //       this.draw(x, y, cordinates);
  //     }
  //   }
  //   setTimeout(() => {
  //     requestAnimationFrame(neural.train);
  //   }, 1000);
  // }
  // draw(x, y, cordinates){
  //   let cx = Math.abs(cordinates[0]*imageSize),
  //       cy = Math.abs(cordinates[1]*imageSize);
  //   const p = analyzer.getTemplatePart(cx, cy);
  //   let result = analyzer.getImagePart(cx, cy);
  //   for(let i=0; i<result.data.length; i++){
  //     result.data[i]=(p.data[i]+result.data[i])/2;
  //   }
  //   ctx.putImageData(result, x*partSize+fImage.x, y*partSize+fImage.y);
  // }
}
