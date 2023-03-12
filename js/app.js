const container = document.querySelector('.grid-container');
const getGridButton = document.querySelector('#getgrid');
const gridItem = [];

function changeBoxColor(event) {
  event.target.style.background = 'black';
}

function createGrid(gridSize = 16) {
  let gridItemSize = parseFloat(container.style.width) / gridSize;
  console.log(gridItemSize);
  for (let i = 0; i < gridSize ** 2; i++) {
    gridItem[i] = document.createElement('div');
    gridItem[i].classList.add('grid-item');
    gridItem[i].style.width = `${gridItemSize}px`;
    gridItem[i].style.height = `${gridItemSize}px`;
    container.appendChild(gridItem[i]);
    gridItem[i].addEventListener('mouseenter', changeBoxColor);
  }
}

function clearGrid() {
  container.innerHTML = '';
}

function setGrid() {
  let newGridSize = parseInt(document.querySelector('#gridsize').value);
  if (!newGridSize) return;
  if (newGridSize > 100) newGridSize = 100;
  clearGrid();
  createGrid(newGridSize);
}

createGrid(16);
getGridButton.addEventListener('click', setGrid);
