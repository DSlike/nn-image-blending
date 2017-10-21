const Architect = synaptic.Architect;
const Trainer = synaptic.Trainer;

const input = 1,
      pool = 40,
      output = 2,
      connections = 20,
      gates = 15;

const netWork = new Architect.Liquid(input, pool, output, connections, gates);
const trainer = new Trainer(netWork);

class NeuralNetwork{
  train() {
    var d = trainingData;
    trainer.train(d, {
      rate: 0.1,
      log: 1,
      iterations: 10,
      error: 0.005
    });
    painter.start();
  }
  getOutput(data){
    return netWork.activate(data);
  }
}
