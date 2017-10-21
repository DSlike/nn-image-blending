const imageSize = 200,
      tImage = {
        x: 0, y: 100
      },
      pImage = {
        x: 250, y:100
      },
      bImage = {
        x: 500, y:150
      };

let ready = 0;

let neuralNetworkKnowledgebase,
    trainingData = [];

const analyzer = new Analyzer;
const neural = new NeuralNetwork;
