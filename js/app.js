import { paintRainbow, paintBlack, paintSingleColor } from './paints.js';

const container = document.querySelector('.grid-container');
const gridItem = [];

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
    gridItem[i].addEventListener('pointerdown', modeRouter);
    gridItem[i].addEventListener('pointerover', modeRouter);
    gridItem[i].addEventListener('touchmove', modeRouter);
  }
}
createGrid(16);

const slider = document.querySelector('#gridsize');
slider.addEventListener('input', setGrid);

const colorPicker = document.querySelector('#color-input');
colorPicker.addEventListener('click', setMode);

const rainbowButton = document.querySelector('#rainbow');
rainbowButton.addEventListener('click', setMode);

const blackButton = document.querySelector('#black');
blackButton.addEventListener('click', setMode);

const clearButton = document.querySelector('#cleargrid');
clearButton.addEventListener('click', setGrid);

let modeSelector = 'rainbow';
function setMode(event) {
  modeSelector = event.target.getAttribute('id');
}

function modeRouter(event) {
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
