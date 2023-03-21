function paintRainbow(event) {
  if (event.buttons === 1) {
    event.preventDefault();
    event.target.style.background = `rgb(${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )})`;
  }
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

export { paintRainbow, paintBlack, paintSingleColor };
