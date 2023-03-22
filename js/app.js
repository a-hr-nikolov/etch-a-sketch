import {
  paintRainbow,
  paintBlack,
  paintSingleColor,
  erasePaintFromCell,
  useTouch,
} from './paints.js';

// Declarations of DOM element selectors
const container = document.querySelector('.grid-container');
const gridSizeSlider = document.querySelector('#gridsize');
const clearButton = document.querySelector('#cleargrid');
const colorPicker = document.querySelector('#color-input');
const rainbowModeButton = document.querySelector('#rainbow');
const blackModeButton = document.querySelector('#black');
const eraserButton = document.querySelector('#eraser');

// Initial paint mode
let selectedMode = 'rainbow';

// Event listeners for grid (re)setting
gridSizeSlider.addEventListener('input', setGridSize);
clearButton.addEventListener('click', setGridSize);

//Event listeners for mode selection
colorPicker.addEventListener('click', setMode);
rainbowModeButton.addEventListener('click', setMode);
blackModeButton.addEventListener('click', setMode);
eraserButton.addEventListener('click', setMode);

// Functions

function createGrid(gridSize = 16) {
  const gridCell = [];
  let gridCellSize =
    parseFloat(window.getComputedStyle(container).getPropertyValue('width')) /
    gridSize;
  for (let i = 0; i < gridSize ** 2; i++) {
    // Grid cell initialization
    gridCell[i] = document.createElement('div');
    gridCell[i].classList.add('grid-item');
    gridCell[i].style.width = `${gridCellSize}px`;
    gridCell[i].style.height = `${gridCellSize}px`;

    gridCell[i].addEventListener('pointerdown', paintSelectedMode);
    gridCell[i].addEventListener('pointerover', paintSelectedMode);
    gridCell[i].addEventListener('touchmove', paintSelectedMode);

    // Necessary for touch input to work
    gridCell[i].setAttribute('data-flag', '0');

    container.appendChild(gridCell[i]);
  }
}
createGrid(); // For setting the grid immediately.

function setMode(event) {
  document
    .querySelectorAll('.grid-item')
    .forEach(item => item.setAttribute('data-flag', '0'));
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
    case 'eraser':
      erasePaintFromCell(event);
      break;
  }
}

function setGridSize() {
  let newGridSize = parseInt(gridSizeSlider.value);
  container.innerHTML = '';
  document.querySelector(
    '#grid-size-text'
  ).innerText = `${newGridSize}x${newGridSize}`;
  createGrid(newGridSize);
}

// Reference. Don't use code from it, only use it for inspiration.
// https://bscottnz.github.io/esketch/
