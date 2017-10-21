const imageSize = 200,
      parts = 100,
      partSize = imageSize/parts;
      tImage = {
        x: 10, y: 100
      },
      pImage = {
        x: 260, y:100
      },
      bImage = {
        x: 510, y:150
      },
      fImage = {
        x: 510, y: 100
      };

let ready = 0;

let neuralNetworkKnowledgebase,
    trainingData = [];

const analyzer = new Analyzer;
const neural = new NeuralNetwork;
const painter = new Painter;
