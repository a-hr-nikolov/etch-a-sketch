const container = document.querySelector('.grid-container');
//const getGridButton = document.querySelector('#cleargrid');
const slider = document.querySelector('#gridsize');
const gridItem = [];

function changeBoxColor(event) {
  event.target.style.background = `rgb(${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

function createGrid(gridSize = 16) {
  let gridItemSize = parseFloat(container.style.width) / gridSize;
  for (let i = 0; i < gridSize ** 2; i++) {
    gridItem[i] = document.createElement('div');
    gridItem[i].classList.add('grid-item');
    gridItem[i].style.width = `${gridItemSize}px`;
    gridItem[i].style.height = `${gridItemSize}px`;
    container.appendChild(gridItem[i]);
    gridItem[i].addEventListener('mouseenter', changeBoxColor);
  }
}

function setGrid() {
  let newGridSize = parseInt(slider.value);
  container.innerHTML = '';
  createGrid(newGridSize);
}

createGrid(16);
//getGridButton.addEventListener('click', setGrid);
slider.addEventListener('change', setGrid);

// TODO
// Event Listener on click. Color picker for single color.
// Rainbow color picker.
// https://bscottnz.github.io/esketch/
