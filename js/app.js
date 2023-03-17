const container = document.querySelector('.grid-container');
const clearButton = document.querySelector('#cleargrid');
const slider = document.querySelector('#gridsize');
const blackAndWhiteButton = document.querySelector('#bnw');
const rgbButton = document.querySelector('#rgb');
const gridItem = [];
let modeSelector = 'rgb';

function changeBoxColor(event) {
  if (event.buttons > 0) {
    event.target.style.background = `rgb(${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )})`;
  }
}

function changeBoxColorClick(event) {
  event.target.style.background = `rgb(${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

function changeToBlack(event) {
  if (event.buttons > 0) {
    event.target.style.background = 'black';
  }
}

function changeToBlackClick(event) {
  event.target.style.background = 'black';
}

function setMode(event) {
  modeSelector = event.target.getAttribute('id');
}

function modeRouter(event) {
  switch (modeSelector) {
    case 'rgb':
      changeBoxColor(event);
      break;
    case 'bnw':
      changeToBlack(event);
      break;
  }
}

function modeRouterClick(event) {
  switch (modeSelector) {
    case 'rgb':
      changeBoxColorClick(event);
      break;
    case 'bnw':
      changeToBlackClick(event);
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
    gridItem[i].addEventListener('mousedown', modeRouterClick);
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

// TODO
// Event Listener on click. Color picker for single color.
// Rainbow color picker.
// https://bscottnz.github.io/esketch/
