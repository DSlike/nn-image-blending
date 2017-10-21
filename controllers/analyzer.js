class Analyzer{
  process(){
    if(!neuralNetworkKnowledgebase){
      this.prepareTemplate();
    }
  }
  prepareTemplate(){
    for(let x=0; x<40; x++){
      for(let y=0; y<40; y++){
        const pixels = ctx.getImageData(x*5+tImage.x, y*5+tImage.y, 5, 5);
        trainingData.push({
          input: pixels,
          output: [x, y]
        });
      }
    }
    neural.train(trainingData);
  }
}
