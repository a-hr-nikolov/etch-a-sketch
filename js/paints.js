// This file holds all paint mode functions.
// Since the functions are simple, I preferred to keep them all in one place.
// Their names are descriptive enough to figure out what does what.

import useTouch from './use-touch.js';

function paintRainbow(event) {
  const rainbowColors = [
    'rgb(220, 255, 46)',
    'rgb(255, 0, 0)',
    'rgb(255, 154, 0)',
    'rgb(208, 222, 33)',
    'rgb(79, 220, 74)',
    'rgb(63, 218, 216)',
    'rgb(47, 201, 226)',
    'rgb(28, 127, 238)',
    'rgb(95, 21, 242)',
    'rgb(186, 12, 248)',
    'rgb(251, 7, 217)',
    'rgb(255, 0, 0)',
  ];
  const color = rainbowColors[Math.floor(Math.random() * rainbowColors.length)];

  // Handle mouse input
  if (event.buttons === 1) {
    event.target.style.background = color;
  }

  // Handle touch input
  if (event.type == 'touchmove') useTouch(event, color);
}

function paintGrayscale(event) {
  const grayscaleValue = Math.floor(Math.random() * 128 + 64);
  const color = `rgb(${grayscaleValue}, ${grayscaleValue}, ${grayscaleValue})`;

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
  paintGrayscale,
  paintSingleColor,
  erasePaintFromCell,
  useTouch,
};
