import * as conf from './config';
import Analyzer from './analyzer';

const analyzer = new Analyzer();

export default class Painter {
  constructor() {
    this.Canvas = document.getElementById('mainCanvas');
    const ctx = this.Canvas.getContext('2d');

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
      this.draw(analyzer.processImage());
    }, 1000);
  }
  draw(data) {
    const ctx = this.Canvas.getContext('2d');

    const imagePartSize = 200 / conf.parts;
    const templatePartSize = 400 / conf.parts;

    data.forEach((e, i) => {
      var cordinates = analyzer.getCordinates(e.input);

      cordinates[0] = cordinates[0] * 400;
      cordinates[1] = cordinates[1] * 400;

      const tx = cordinates[0]*templatePartSize+conf.tImage.x,
            ty = cordinates[1]*templatePartSize+conf.tImage.y;
      const ix = e.output[0]*templatePartSize+conf.fImage.x,
            iy = e.output[1]*templatePartSize+conf.fImage.y;

      const pixels = ctx.getImageData(tx, ty, templatePartSize, templatePartSize);
      ctx.putImageData(pixels, ix, iy);

      ctx.rect(ix, iy, templatePartSize, templatePartSize);
      ctx.strokeStyle = "1px";
      ctx.stroke();

    });
  }
}
