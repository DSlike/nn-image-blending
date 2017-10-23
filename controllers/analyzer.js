import * as conf from './config';
import convolve from './convolve';
import NeuralNetwork from './neural-network';

const neural = new NeuralNetwork();

export default class Analyzer {
  constructor() {
    this.Canvas = document.getElementById('mainCanvas');
    this.ctx = this.Canvas.getContext('2d');
  }
  process() {
    // if(!conf.neuralNetworkKnowledgebase){
    this.prepareTemplate();
    // }
  }
  prepareTemplate() {
    for (let x = 0; x < conf.parts; x++) {
      for (let y = 0; y < conf.parts; y++) {
        let ix = x * (400 / conf.parts) + conf.tImage.x;
        let iy = y * (400 / conf.parts) + conf.tImage.y;
        let partSize = 400 / conf.parts;
        const pixels = this.ctx.getImageData(ix, iy, partSize, partSize);
        let data = [];
        // for(let i=0; i<pixels.data.length-4; i+=4){
        //   let a = (pixels.data[i]+pixels.data[i+1]+pixels.data[i+2])/3;
        //   data.push(a);
        // }
        conf.trainingData.push({
          input: pixels.data,
          output: [x, y]
        });
      }
    }
    conf.trainingData = convolve(conf.trainingData);
    // neural.train();
  }
  // getImagePart(x, y){
  //   // return ctx.getImageData(x*partSize+pImage.x, y*partSize+pImage.y, partSize, partSize);
  // }
  // getTemplatePart(x, y){
  //   // return ctx.getImageData(x*partSize+tImage.x, y*partSize+tImage.y, partSize, partSize);
  // }
  // softmax(output) {
  //   let maximum = output.reduce(function(p,c) { return p>c ? p : c; });
  //   let nominators = output.map(function(e) { return Math.exp(e - maximum); });
  //   let denominator = nominators.reduce(function (p, c) { return p + c; });
  //   let softmax = nominators.map(function(e) { return e / denominator; });
  //
  //   let maxIndex = 0;
  //   softmax.reduce(function(p,c,i){if(p<c) {maxIndex=i; return c;} else return p;});
  //   let result = [];
  //   for (let i=0; i<output.length; i++)
  //   {
  //       if (i==maxIndex)
  //           result.push(1);
  //       else
  //           result.push(0);
  //   }
  //   return result;
  // }
}
