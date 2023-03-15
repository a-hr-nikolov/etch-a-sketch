const container = document.querySelector('.grid-container');
const getClearButton = document.querySelector('#cleargrid');
const slider = document.querySelector('#gridsize');
const gridItem = [];
let actionToggle = false;

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

function toggleAction() {
  actionToggle = !actionToggle;
}

function createGrid(gridSize = 16) {
  let gridItemSize = parseFloat(container.style.width) / gridSize;
  for (let i = 0; i < gridSize ** 2; i++) {
    gridItem[i] = document.createElement('div');
    gridItem[i].classList.add('grid-item');
    gridItem[i].style.width = `${gridItemSize}px`;
    gridItem[i].style.height = `${gridItemSize}px`;
    container.appendChild(gridItem[i]);
    gridItem[i].addEventListener('mousedown', changeBoxColorClick);
    gridItem[i].addEventListener('mouseenter', changeBoxColor);
  }
}

window.addEventListener('mousedown', toggleAction);
window.addEventListener('mouseup', toggleAction);

function setGrid() {
  let newGridSize = parseInt(slider.value);
  container.innerHTML = '';
  document.querySelector(
    '#grid-size-text'
  ).innerText = `${newGridSize}x${newGridSize}`;
  createGrid(newGridSize);
}

createGrid(16);
getClearButton.addEventListener('click', setGrid);
slider.addEventListener('input', setGrid);

// TODO
// Event Listener on click. Color picker for single color.
// Rainbow color picker.
// https://bscottnz.github.io/esketch/
