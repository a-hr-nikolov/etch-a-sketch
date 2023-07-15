// This function handles touch input by preventing the default
// behavior and using flags to stop the event from triggering
// multiple times on a single cell.

// If there is a better solution I have not found it yet.

export default function useTouch(event, color) {
  event.preventDefault();
  const touch = event.touches[0];
  const target = document.elementFromPoint(touch.clientX, touch.clientY);
  if (
    target &&
    target.classList.contains('grid-item') &&
    target.getAttribute('data-flag') === '0'
  ) {
    document
      .querySelectorAll('.grid-item')
      .forEach(item => item.setAttribute('data-flag', '0'));
    target.setAttribute('data-flag', '1');
    target.style.background = color;
  }
}
