import * as conf from './config';

const Architect = synaptic.Architect;
const Trainer = synaptic.Trainer;

const input = 1,
      pool = 40,
      output = 2,
      connections = 20,
      gates = 15;

const netWork = new Architect.Liquid(input, pool, output, connections, gates);
const trainer = new Trainer(netWork);

export default class NeuralNetwork{
  train() {
    console.log("1");
    var d = conf.trainingData;
    trainer.train(d, {
      rate: 0.1,
      log: 10,
      iterations: 1000,
      error: 0.005
    });
  }
  getOutput(data){
    return netWork.activate(data);
  }
}
