const container = document.querySelector('.grid-container');
const getGridButton = document.querySelector('#getgrid');
const gridItem = [];

function changeBoxColor(event) {
  if (!event.target.style.background) {
    event.target.setAttribute(
      'data-hsl',
      `${Math.floor(Math.random() * 360)}, ${Math.floor(
        Math.random() * 101
      )}%, ${Math.floor(Math.random() * 101)}%`
    );
    let itemColor = event.target
      .getAttribute('data-hsl')
      .match(/\d+/g)
      .map(item => +item);
    event.target.style.background = `hsl(${itemColor[0]}, ${itemColor[1]}%, ${itemColor[2]}%)`;
  } else {
    let itemColor = event.target
      .getAttribute('data-hsl')
      .match(/\d+/g)
      .map(item => +item);
    if (itemColor[2] > 10) itemColor[2] = itemColor[2] - 10;
    else itemColor[2] = 0;
    event.target.style.background = `hsl(${itemColor[0]}, ${itemColor[1]}%, ${itemColor[2]}%)`;
    event.target.setAttribute(
      'data-hsl',
      `${itemColor[0]}, ${itemColor[1]}%, ${itemColor[2]}%`
    );
  }
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
