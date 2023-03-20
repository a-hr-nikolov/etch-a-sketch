function paintRainbow(event) {
  if (event.buttons > 0) {
    event.target.style.background = `rgb(${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )})`;
  }
}

function paintBlack(event) {
  if (event.buttons > 0) {
    event.target.style.background = 'black';
  }
}

function paintSingleColor(event) {
  if (event.buttons > 0) {
    event.target.style.background = `${
      document.querySelector('#color-input').value
    }`;
  }
}

export { paintRainbow, paintBlack, paintSingleColor };
