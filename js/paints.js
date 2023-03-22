// This file holds all paint mode functions.
// Since the functions are simple, I preferred to keep them all in one place.
// Their names are descriptive enough to figure out what does what.

function paintRainbow(event) {
  if (event.buttons === 1) {
    event.preventDefault();
    event.target.style.background = `rgb(${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )})`;
  }

  // Attempt at making touch input work
  // I have not implemented the code with the other functions,
  // because I do not like how it works.
  if (event.type == 'touchmove') {
    event.preventDefault();
    const touch = event.touches[0];
    const target = document.elementFromPoint(touch.clientX, touch.clientY);
    if (target && target.classList.contains('grid-item')) {
      target.style.background = `rgb(${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )})`;
    }
  }
}

function paintBlack(event) {
  if (event.buttons === 1) {
    event.target.style.background = 'black';
  }
}

function paintSingleColor(event) {
  if (event.buttons === 1) {
    event.target.style.background = `${
      document.querySelector('#color-input').value
    }`;
  }
}

function erasePaint(event) {
  if (event.buttons === 1) {
    event.target.style.background = 'transparent';
  }
}

export { paintRainbow, paintBlack, paintSingleColor };
