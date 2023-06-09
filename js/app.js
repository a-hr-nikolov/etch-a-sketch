import {
  paintRainbow,
  paintGrayscale,
  paintSingleColor,
  erasePaintFromCell,
} from './paints.js';

// Declarations of DOM element selectors
const container = document.querySelector('.grid-container');
const gridSizeSlider = document.querySelector('#gridsize');
const clearButton = document.querySelector('#cleargrid');
const colorPicker = document.querySelector('#color-input');
const rainbowModeButton = document.querySelector('#rainbow');
const grayscaleModeButton = document.querySelector('#grayscale');
const eraserButton = document.querySelector('#eraser');

// Initial paint mode
let selectedMode = 'rainbow';

// Event listeners for grid (re)setting
gridSizeSlider.addEventListener('input', setGridSize);
clearButton.addEventListener('click', setGridSize);

//Event listeners for mode selection
colorPicker.addEventListener('click', setMode);
rainbowModeButton.addEventListener('click', setMode);
grayscaleModeButton.addEventListener('click', setMode);
eraserButton.addEventListener('click', setMode);

// Functions

function createGrid(gridSize = 16) {
  // Resetting container
  container.style.cssText = '';

  // Get CSS values dynamically, instead of hard-coding them
  const containerSize = parseFloat(
    window.getComputedStyle(container).getPropertyValue('width')
  );
  const gapSize = parseFloat(
    window.getComputedStyle(container).getPropertyValue('gap')
  );

  // Initializing grid and cell size, based on the container size.
  // The size is rounded down to the first digit after the decimal point.
  const gridCell = [];
  let gridCellSize =
    Math.floor(((containerSize - gridSize * gapSize) / gridSize) * 10) / 10;

  // Resizing the container to cover edge cases and responsive design
  container.style.cssText = `width: ${
    gridCellSize * gridSize + gridSize * gapSize
  }px; height: ${gridCellSize * gridSize + gridSize * gapSize}px`;

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
  selectedMode = event.target.getAttribute('id');

  // Turning off the other buttons
  document
    .querySelectorAll('.toggle')
    .forEach(item => item.classList.add('off'));

  // Turning on the clicked button
  event.target.classList.remove('off');
  if (selectedMode === 'color-input')
    document.querySelector('#color-label').classList.remove('off');

  // Edge case handler: Enables touch input on the last painted item
  document
    .querySelectorAll('.grid-item')
    .forEach(item => item.setAttribute('data-flag', '0'));
}

function paintSelectedMode(event) {
  switch (selectedMode) {
    case 'rainbow':
      paintRainbow(event);
      break;
    case 'grayscale':
      paintGrayscale(event);
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
  const gridSize = parseInt(gridSizeSlider.value);
  const gridSizeDisplay = document.querySelector('#grid-size-text');
  gridSizeDisplay.innerText = `${gridSize}x${gridSize}`;
  container.innerHTML = '';
  createGrid(gridSize);
}
