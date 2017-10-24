import * as conf from './config';
import * as convolve from './convolve';
import NeuralNetwork from './neural-network';

const neural = new NeuralNetwork();

export default class Analyzer {
  constructor() {
    this.Canvas = document.getElementById('mainCanvas');
    this.ctx = this.Canvas.getContext('2d');
  }
  process() {
    this.prepareTemplate();
  }
  prepareTemplate() {
    for (let x = 0; x < conf.parts; x++) {
      for (let y = 0; y < conf.parts; y++) {
        let ix = x * (400 / conf.parts) + conf.tImage.x;
        let iy = y * (400 / conf.parts) + conf.tImage.y;
        let partSize = 400 / conf.parts;
        const pixels = this.ctx.getImageData(ix, iy, partSize, partSize);

        // this.ctx.rect(ix, iy, partSize, partSize);
        // this.ctx.strokeStyle = "1px";
        // this.ctx.stroke();

        conf.trainingData.push({
          input: pixels.data,
          output: [x / 400, y / 400]
        });
      }
    }
    conf.trainingData = convolve.convolveTemplate(conf.trainingData);
    neural.trainNetwork();
  }
  processImage() {
    let imageData = [];
    for (let x = 0; x < conf.parts; x++) {
      for (let y = 0; y < conf.parts; y++) {
        let ix = x * (200 / conf.parts) + conf.pImage.x;
        let iy = y * (200 / conf.parts) + conf.pImage.y;
        let partSize = 200 / conf.parts;
        const pixels = this.ctx.getImageData(ix, iy, partSize, partSize);

        this.ctx.rect(ix, iy, partSize, partSize);
        this.ctx.strokeStyle = "1px";
        this.ctx.stroke();

        imageData.push({
          input: pixels.data,
          output: [x, y]
        });
      }
    }
    imageData = convolve.convolveImage(imageData);
    return imageData;
  }
  getCordinates(data) {
    var result = neural.getOutput(data);
    return result;
  }
}
