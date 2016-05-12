var jpeg = require('jpeg-js');
var fs = require('fs');
var width = 320, height = 180;
var frameData = new Buffer(width * height * 4);
var i = 0;

var setColor = function(x, y, r, g, b, a) {

  var p = 4 * x + 4 * width * y;

  frameData[p++] = r;
  frameData[p++] = g;
  frameData[p++] = b;
  frameData[p++] = a;
}

console.log(0xFF)

for (var i = 0; i < width; i++) {
  for (var j = 0; j < height; j++) {
    setColor(i, j, 255 * i / width, 255 * j / height, 100, 0)
    // if (i == width / 2) {
    //   setColor(i, j, 255, 255, 255, 0)
    // } else {
    //   setColor(i, j, 0, 0, 0, 0)
    // }

  }
}
// while (i < frameData.length) {
//   frameData[i++] = 0xFF; // red
//   frameData[i++] = 0xFF; // green
//   frameData[i++] = 0x00; // blue
//   frameData[i++] = 0xFF; // alpha - ignored in JPEGs
// }
var rawImageData = {
  data: frameData,
  width: width,
  height: height
};
var jpegImageData = jpeg.encode(rawImageData, 50);
fs.writeFileSync('a.jpg', jpegImageData.data)
console.log(jpegImageData)
