// This file holds all paint mode functions.
// Since the functions are simple, I preferred to keep them all in one place.
// Their names are descriptive enough to figure out what does what.

function useTouch(event, color) {
  event.preventDefault();
  const touch = event.touches[0];
  const target = document.elementFromPoint(touch.clientX, touch.clientY);
  if (
    target &&
    target.classList.contains('grid-item') &&
    target.getAttribute('data-flag') === '0'
  ) {
    document
      .querySelectorAll('.grid-item')
      .forEach(item => item.setAttribute('data-flag', '0'));
    target.setAttribute('data-flag', '1');
    target.style.background = color;
  }
}

function paintRainbow(event) {
  const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;

  // Handle mouse input
  if (event.buttons === 1) {
    event.target.style.background = randomColor;
  }

  // Handle touch input
  if (event.type == 'touchmove') useTouch(event, randomColor);
}

function paintBlack(event) {
  if (event.buttons === 1) {
    event.target.style.background = 'black';
  }

  if (event.type == 'touchmove') {
    event.preventDefault();
    const touch = event.touches[0];
    const target = document.elementFromPoint(touch.clientX, touch.clientY);
    if (
      target &&
      target.classList.contains('grid-item') &&
      target.getAttribute('data-flag') === '0'
    ) {
      document
        .querySelectorAll('.grid-item')
        .forEach(item => item.setAttribute('data-flag', '0'));
      target.setAttribute('data-flag', '1');
      target.style.background = 'black';
    }
  }
}

function paintSingleColor(event) {
  if (event.buttons === 1) {
    event.target.style.background = `${
      document.querySelector('#color-input').value
    }`;
  }

  if (event.type == 'touchmove') {
    event.preventDefault();
    const touch = event.touches[0];
    const target = document.elementFromPoint(touch.clientX, touch.clientY);
    if (
      target &&
      target.classList.contains('grid-item') &&
      target.getAttribute('data-flag') === '0'
    ) {
      document
        .querySelectorAll('.grid-item')
        .forEach(item => item.setAttribute('data-flag', '0'));
      target.setAttribute('data-flag', '1');
      target.style.background = `${
        document.querySelector('#color-input').value
      }`;
    }
  }
}

function erasePaintFromCell(event) {
  if (event.buttons === 1) {
    event.target.style.background = 'transparent';
  }
}

export { paintRainbow, paintBlack, paintSingleColor, erasePaintFromCell };
