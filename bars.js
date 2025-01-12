function Bar(id) {
    // bar constructor
  
    this.display = function () {
      // function for displaying the bars
      noStroke();
      fill(colour[id]);
      rect(xBar[id], 350, 400/numBars, 50);
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
  