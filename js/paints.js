// This file holds all paint mode functions.
// Since the functions are simple, I preferred to keep them all in one place.
// Their names are descriptive enough to figure out what does what.

import useTouch from './useTouch.js';

function paintRainbow(event) {
  const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;

  // Handle mouse input
  if (event.buttons === 1) {
    event.target.style.background = color;
  }

  // Handle touch input
  if (event.type == 'touchmove') useTouch(event, color);
}

function paintBlack(event) {
  const color = `black`;

  if (event.buttons === 1) {
    event.target.style.background = color;
  }
  if (event.type == 'touchmove') useTouch(event, color);
}

function paintSingleColor(event) {
  const color = `${document.querySelector('#color-input').value}`;

  if (event.buttons === 1) {
    event.target.style.background = color;
  }
  if (event.type == 'touchmove') useTouch(event, color);
}

function erasePaintFromCell(event) {
  const color = `white`;

  if (event.buttons === 1) {
    event.target.style.background = color;
  }
  if (event.type == 'touchmove') useTouch(event, color);
}

export {
  paintRainbow,
  paintBlack,
  paintSingleColor,
  erasePaintFromCell,
  useTouch,
};
