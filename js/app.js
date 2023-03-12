const container = document.querySelector('.grid-container');
const gridBox = [];

for (let i = 0; i < 256; i++) {
  gridBox[i] = document.createElement('div');
  gridBox[i].classList.add('gridbox');
  // gridBox[i].style.cssText =
  //   'width: 50px; height: 50px; background: pink; margin: 0; padding: 0; border: 1px solid black; box-sizing: border-box;';
  container.appendChild(gridBox[i]);
  // gridBox[i].addEventListener('mouseenter');
}
