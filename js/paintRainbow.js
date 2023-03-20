export default function paintRainbow(event) {
  if (event.buttons > 0) {
    event.target.style.background = `rgb(${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )})`;
  }
}
