class Analyzer{
  process(){
    if(!neuralNetworkKnowledgebase){
      this.prepareTemplate();
    }
  }
  prepareTemplate(){
    for(let x=0; x<parts; x++){
      for(let y=0; y<parts; y++){
        const pixels = ctx.getImageData(x*partSize+tImage.x, y*partSize+tImage.y, partSize, partSize);
        var data = [];
        for(let i=0; i<pixels.data.length-4; i+=4){
          var a = (pixels.data[i]+pixels.data[i+1]+pixels.data[i+2])/3
          data.push(a);
        }
        trainingData.push({
          input: data,
          output: [x/imageSize, y/imageSize]
        });
      }
    }
    neural.train();
  }
  getImagePart(x, y){
    return ctx.getImageData(x*partSize+pImage.x, y*partSize+pImage.y, partSize, partSize);
  }
  getTemplatePart(x, y){
    return ctx.getImageData(x*partSize+tImage.x, y*partSize+tImage.y, partSize, partSize);
  }
}
