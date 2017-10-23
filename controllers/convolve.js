export default function convolve(data) {
  data.forEach((e, i) => {
    let d = e.input;
    d = grayscale(d);
    d = contrastImage(d, 10);
    d = simplify(d);
    e.input = d;
  });
  return data;
}

function grayscale(data) {
  for (var i = 0; i < data.length; i += 4) {
    var brightness = 0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2];
    data[i] = brightness;
    data[i + 1] = brightness;
    data[i + 2] = brightness;
  }
  return data;
}

function grayscale(data) {
  for (var i = 0; i < data.length; i += 4) {
    var brightness = 0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2];
    data[i] = brightness;
    data[i + 1] = brightness;
    data[i + 2] = brightness;
  }
  return data;
}

function contrastImage(data, contrast) {
  var factor = (259 * (contrast + 255)) / (255 * (259 - contrast));

  for (var i = 0; i < data.length; i += 4) {
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
      let index = (x * sideSize + y) * 4;
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
  let partSize = matrix[0].length/2;
  for(let x=0; x<partSize; x++){
    
  }
}
