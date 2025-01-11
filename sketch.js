let wave;
let button;
let freqSlider;
// let freqNoise;
let ampSlider;
let panSlider;
let playing = false;
let env;

function setup() {
  createCanvas(400, 40);


  env = new p5.Envelope();
  env.setADSR(0.5, 0.25, 0.5, 0.2);
  env.setRange(0.8,0);

  wave = new p5.Oscillator();
freqSlider = createSlider(80, 150, 100); // use slider to change freq

  ampSlider = createSlider(0, 0.8, 0.4, 0.1); // use slider to change amp
  panSlider = createSlider(-1, 1, 0, 0.1); // use slider to pan L and R

  wave.setType('sine');

  button = createButton('play/pause');
  button.mousePressed(toggle);
  
}

function draw() {
  background(20);
  let t = frameCount * 0.005;
  
  noStroke();
 
  for (let i = 0; i < width; i += 3) {
    for (let j = 0; j < height; j += 3) {

      var n = noise(i * 0.005, j * 0.005 - t, t);
      fill(n * 255);
      rect(i, j, 3);
    }
  }

  wave.freq(freqSlider.value());
  wave.amp(ampSlider.value());
  wave.pan(panSlider.value());
}

//// toggle sound with button
function toggle(){
  if (!playing) {
    wave.start();
    wave.freq(440);
    wave.amp(0.5, 2);
    playing = true;
  } else {
    wave.stop();
    playing = false;
  }
}

// toggle sound when mouse pressed
// function mousePressed(){
//   if (!playing) {
//     wave.start();
//     wave.freq(slider.value());
//     wave.amp(0.5, 1);
//     playing = true;
//   } else {
//     wave.stop();
//     wave.amp(0, 1);
//     playing = false;
//   }
// }

