export default function convolve(data) {
  data.forEach((e, i) => {
    let d = e.input;
    d = grayscale(d);
    d = contrastImage(d, 10);
    d = simplify(d);
    console.log(d);
    e.input = d;
  });
  return data;
}

function grayscale(data) {
  for (let i = 0; i < data.length; i += 4) {
    let brightness = 0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2];
    data[i] = brightness;
    data[i + 1] = brightness;
    data[i + 2] = brightness;
  }
  return data;
}

function grayscale(data) {
  for (let i = 0; i < data.length; i += 4) {
    let brightness = 0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2];
    data[i] = brightness;
    data[i + 1] = brightness;
    data[i + 2] = brightness;
  }
  return data;
}

function contrastImage(data, contrast) {
  let factor = (259 * (contrast + 255)) / (255 * (259 - contrast));

  for (let i = 0; i < data.length; i += 4) {
    data[i] = factor * (data[i] - 128) + 128;
    data[i + 1] = factor * (data[i + 1] - 128) + 128;
    data[i + 2] = factor * (data[i + 2] - 128) + 128;
  }
  return data;
}

function simplify(data) {
  let matrixData = [];
  let sideSize = Math.sqrt(data.length / 4);
  for (let x = 0; x < sideSize; x++) {
    matrixData[x] = [];
    for (let y = 0; y < sideSize; y++) {
      let index = (x * sideSize + y) * 8;
      let pixel = (data[index] + data[index + 1] + data[index + 2]) / 3;
      if (pixel > 100)
        matrixData[x][y] = 0;
      if (pixel <= 100)
        matrixData[x][y] = 1;
    }
  }
  return convolveData(matrixData);
}

function convolveData(matrix){
  let partSize = matrix[0].length/4;
  let convolveMatrix = [];
  // console.log(Math.pow(matrix[0].length,2)/2);
  for(let px=0; px<4; px++){
    convolveMatrix[px]=[];
    for(let py=0; py<4; py++){
      let sum=0;
      for(let x=0; x<partSize; x++){
        for(let y=0; y<partSize; y++){
          sum+=matrix[x][y];
        }
      }
      if(sum > 10)
        convolveMatrix[px][py]=1;
      else
        convolveMatrix[px][py]=0;
    }
  }
  return convolveMatrix;
}
