import { paintRainbow, paintBlack, paintSingleColor } from './paints.js';

// Declarations of DOM elements
const container = document.querySelector('.grid-container');
const slider = document.querySelector('#gridsize');
const colorPicker = document.querySelector('#color-input');
const rainbowButton = document.querySelector('#rainbow');
const blackButton = document.querySelector('#black');
const clearButton = document.querySelector('#cleargrid');

// Event Listeners
slider.addEventListener('input', setGrid);
colorPicker.addEventListener('click', setMode);
rainbowButton.addEventListener('click', setMode);
blackButton.addEventListener('click', setMode);
clearButton.addEventListener('click', setGrid);

// Declaration and initialization of variables for functions
const gridItem = [];
let modeSelector = 'rainbow';

function createGrid(gridSize = 16) {
  let gridItemSize =
    parseFloat(window.getComputedStyle(container).getPropertyValue('width')) /
    gridSize;
  for (let i = 0; i < gridSize ** 2; i++) {
    gridItem[i] = document.createElement('div');
    gridItem[i].classList.add('grid-item');
    gridItem[i].style.width = `${gridItemSize}px`;
    gridItem[i].style.height = `${gridItemSize}px`;
    container.appendChild(gridItem[i]);
    gridItem[i].addEventListener('pointerdown', paintSelectedMode);
    gridItem[i].addEventListener('pointerover', paintSelectedMode);
    gridItem[i].addEventListener('touchmove', paintSelectedMode);
  }
}
createGrid(16);

function setMode(event) {
  modeSelector = event.target.getAttribute('id');
}

function paintSelectedMode(event) {
  switch (modeSelector) {
    case 'rainbow':
      paintRainbow(event);
      break;
    case 'black':
      paintBlack(event);
      break;
    case 'color-input':
      paintSingleColor(event);
      break;
  }
}

function setGrid() {
  let newGridSize = parseInt(slider.value);
  container.innerHTML = '';
  document.querySelector(
    '#grid-size-text'
  ).innerText = `${newGridSize}x${newGridSize}`;
  createGrid(newGridSize);
}

// TODO
// https://bscottnz.github.io/esketch/
