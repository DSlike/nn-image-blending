import * as conf from './config';
import Analyzer from './analyzer';
import NeuralNetwork from './neural-network';

const neural = new NeuralNetwork();
const analyzer = new Analyzer();

export default class Painter {
  constructor() {
    this.Canvas = document.getElementById('mainCanvas');
    const ctx = this.Canvas.getContext('2d');

    let templateImage = new Image,
      paint = new Image;

    templateImage.src = 'view/imgs/poly.jpg',
      paint.src = 'view/imgs/medium.png';

    templateImage.onload = function() {
      ctx.drawImage(templateImage, conf.tImage.x, conf.tImage.y, 400, 400);
    };

    paint.onload = function() {
      ctx.drawImage(paint, 510, 100, 200, 200);
    };

    setTimeout(() => {
      analyzer.process();
      this.draw(analyzer.processImage());
    }, 1000);
  }
  draw(data) {
    // neural.trainNetwork();
    const ctx = this.Canvas.getContext('2d');

    const imagePartSize = 200 / conf.parts;
    const templatePartSize = 400 / conf.parts;

    data.forEach((e, i) => {
      var cordinates = analyzer.getCordinates(e.input);

      cordinates[0] = cordinates[0] * 400;
      cordinates[1] = cordinates[1] * 400;

      const tx = cordinates[0]*imagePartSize+conf.tImage.x,
            ty = cordinates[1]*imagePartSize+conf.tImage.y;
      const ix = e.output[0]*imagePartSize+conf.fImage.x,
            iy = e.output[1]*imagePartSize+conf.fImage.y;

      const pixels = ctx.getImageData(tx, ty, imagePartSize, imagePartSize);
      ctx.putImageData(pixels, ix, iy);

      // ctx.rect(ix, iy, imagePartSize, imagePartSize);
      // ctx.strokeStyle = "1px";
      // ctx.stroke();
      // if(i == data.length-1){
        // const f = this.draw(analyzer.processImage());
        // requestAnimationFrame(f);
      // }
    });
  }
}
