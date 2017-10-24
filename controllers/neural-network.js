import * as conf from './config';

export default class NeuralNetwork{
  constructor(){
    const Architect = synaptic.Architect;
    const Trainer = synaptic.Trainer;

    const input = 16,
          pool = 40,
          output = 2,
          connections = 20,
          gates = 15;

    this.netWork = new Architect.Liquid(input, pool, output, connections, gates);
    this.trainer = new Trainer(this.netWork);
  }
  trainNetwork() {
    let d = conf.trainingData;
    this.trainer.train(d, {
      rate: 0.05,
      log: 10,
      iterations: 500,
      error: 0.000016
    });
  }
  getOutput(data){
    return this.netWork.activate(data);
  }
}
