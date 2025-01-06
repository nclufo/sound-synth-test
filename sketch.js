let wave;
let button;
let freqSlider;
let ampSlider;
let mousePos;
let playing = false;

function setup() {
  createCanvas(400, 40);

  wave = new p5.Oscillator();
  freqSlider = createSlider(100, 1200, 440); // use slider to change freq
  ampSlider = createSlider(0, 1, 0.5, 0.1); // use slider to change amp

  wave.setType('sine');
  wave.start();
  wave.freq(440);

 //mousePos = map(mouseX(), 0, 400, 100, 1200)  // use mouse position as freq slider
  button = createButton('play/pause');
  button.mousePressed(toggle);
  
}

function draw() {
  background(20);
  wave.freq(freqSlider.value());
  wave.amp(ampSlider.value());
}

//// toggle sound with button
function toggle(){
  if (!playing) {
    wave.start();
    wave.freq(440);
    wave.amp(0.5, 1);
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

