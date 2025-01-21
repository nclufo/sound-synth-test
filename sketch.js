let wave;
let wave2;
let wave3;
let button;
// let buttonA;
// let buttonB;
let freqSlider;
// let freqNoise;
let ampSlider;
let panSlider;
let playing = false;
let env;
let numBars;
let bars = [];
let xBar = [];
let colour = ['#333637', '#394145', '#606C71', '#798F98', '#809AA6'];
let polySynth;

function setup() {
  createCanvas(500, 600);
  background(10);

  wave = new p5.Oscillator();
  freqSlider = createSlider(80, 150, 100); // use slider to change freq
  freqSlider.position(50, 20);
  freqSlider.style('transform', 'rotate(270deg)');
  freqSlider.style('height', '225px');
  ampSlider = createSlider(0, 0.8, 0.4, 0.1); // use slider to change amp
  ampSlider.position(-15, 20);
  ampSlider.style('transform', 'rotate(270deg)');
  ampSlider.style('height', '225px');
  panSlider = createSlider(-1, 1, 0, 0.1); // use slider to pan L and R
  panSlider.position(175, 20);
  panSlider.style('width', '300px');
  

  wave.setType('sine');

  button = createButton('play / pause');
  button.position(30, 20);
  button.style('width', '120px');
  button.mousePressed(togglePlay);

  // env = new p5.Env();
  // env.setADSR(0.05, 0.1, 0.5, 1);
  // env.setRange(1.2, 0);

  // wave2 = new p5.Oscillator();
  // wave2.setType('sine');

  // buttonA = createButton('a');
  // buttonA.position(30, 80);
  // buttonA.mousePressed(toggleNoteA);

  // wave3 = new p5.Oscillator();
  // wave3.setType('sine');

  // buttonB = createButton('b');
  // buttonB.position(85, 80);
  // buttonB.mousePressed(toggleNoteB);

  for (let i = 0; i < numBars; i++) {
    let widthBars = 500 / numBars;
    let x = widthBars * i;
    xBar.push(x);
  }

  for (let i = 0; i < numBars; i++) {
    bars.push(new Bar(i)); // create a new bar and push to array of bars
    bars[i].display(); // call .display() function for that bar
  }

  polySynth = new p5.PolySynth();
  polySynth.setADSR(0.1, 0.4, 0.5, 0.05);
}





function draw() {
  let t = frameCount * 0.002;
  noStroke();
  for (let i = 0; i < 500; i += 5) {
    for (let j = 0; j < 500; j += 5) {
      var n = noise(i * 0.005, j * 0.005 - t, t);
      fill(n*230, n*240, n * 250);
      rect(i, j, 5);
    }


  fill(255);
  text("vol",43, 220);
  text("L", 175, 50);
  text("R", 475, 50);
  text('freq', 107, 220);

  wave.freq(freqSlider.value());

  // freqNoise = noise();
  // wave.freq(freqNoise);
  // console.log(freqNoise);

  wave.amp(ampSlider.value());
  wave.pan(panSlider.value());

}}


function touchStarted() {
  userStartAudio();
  for (let i = 0; i < numBars; i++) {
    bars[i].played();
  }
}

//// toggle sound with button
function togglePlay(){
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

// function toggleNoteA() {

//   if (!playing) {
//     wave2.start();
//     wave2.freq(440);
//     wave2.amp(env);
//     env.play();
//     playing = true;
//   } else {
//     wave2.stop();
//     playing = false;
//   }
// }


// function toggleNoteB() {
//   if (!playing) {
//     wave3.start();
//     wave3.freq(440);
//     wave3.amp(env);
//     env.play();
//     playing = true;
//   } else {
//     wave3.stop();
//     playing = false;
//   }
// }

