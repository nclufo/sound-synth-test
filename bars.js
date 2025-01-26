function Bar(id) {

  this.display = function () {
    noStroke();
    fill(clr[id]);
    rect(xBar[id], 0, 400/numBars, 400);
  };

  this.played = function () {
    if (
      mouseY > 50 &&
      mouseX > xBar[id] &&
      mouseX < xBar[id] + 400 / numBars
    ) {
      polySynth.play(notes[id], 0.5, 0, 0.2);
    }
  };
}
