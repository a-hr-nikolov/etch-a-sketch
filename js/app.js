import paintRainbow from './paintRainbow.js';

const container = document.querySelector('.grid-container');
const clearButton = document.querySelector('#cleargrid');
const slider = document.querySelector('#gridsize');
const blackAndWhiteButton = document.querySelector('#bnw');
const rgbButton = document.querySelector('#rgb');
const colorPicker = document.querySelector('#color-input');
const gridItem = [];
let modeSelector = 'rgb';

function paintBlack(event) {
  if (event.buttons > 0) {
    event.target.style.background = 'black';
  }
}

function paintPickedColor(event) {
  if (event.buttons > 0) {
    event.target.style.background = `${colorPicker.value}`;
  }
}

function setMode(event) {
  modeSelector = event.target.getAttribute('id');
}

function modeRouter(event) {
  switch (modeSelector) {
    case 'rgb':
      paintRainbow(event);
      break;
    case 'bnw':
      paintBlack(event);
      break;
    case 'color-input':
      paintPickedColor(event);
      break;
  }
}

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
    gridItem[i].addEventListener('mousedown', modeRouter);
    gridItem[i].addEventListener('mouseenter', modeRouter);
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

createGrid(16);
clearButton.addEventListener('click', setGrid);
slider.addEventListener('input', setGrid);
blackAndWhiteButton.addEventListener('click', setMode);
rgbButton.addEventListener('click', setMode);
colorPicker.addEventListener('click', setMode);

// TODO
// https://bscottnz.github.io/esketch/
