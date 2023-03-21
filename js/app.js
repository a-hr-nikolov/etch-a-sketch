import { paintRainbow, paintBlack, paintSingleColor } from './paints.js';

// Declarations of DOM elements
const container = document.querySelector('.grid-container');
const slider = document.querySelector('#gridsize');
const colorPicker = document.querySelector('#color-input');
const rainbowButton = document.querySelector('#rainbow');
const blackButton = document.querySelector('#black');
const clearButton = document.querySelector('#cleargrid');

// Event listeners for grid (re)setting
slider.addEventListener('input', setGrid);
clearButton.addEventListener('click', setGrid);

//Event listeners for mode selection
colorPicker.addEventListener('click', setMode);
rainbowButton.addEventListener('click', setMode);
blackButton.addEventListener('click', setMode);

// Declaration and initialization of variables for functions
let selectedMode = 'rainbow';

function createGrid(gridSize = 16) {
  const gridCell = [];
  let gridCellSize =
    parseFloat(window.getComputedStyle(container).getPropertyValue('width')) /
    gridSize;
  for (let i = 0; i < gridSize ** 2; i++) {
    gridCell[i] = document.createElement('div');
    gridCell[i].classList.add('grid-item');
    gridCell[i].style.width = `${gridCellSize}px`;
    gridCell[i].style.height = `${gridCellSize}px`;
    container.appendChild(gridCell[i]);
    gridCell[i].addEventListener('pointerdown', paintSelectedMode);
    gridCell[i].addEventListener('pointerover', paintSelectedMode);
    gridCell[i].addEventListener('touchmove', paintSelectedMode);
  }
}
createGrid(); // For setting the grid immediately.

function setMode(event) {
  selectedMode = event.target.getAttribute('id');
}

function paintSelectedMode(event) {
  switch (selectedMode) {
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
