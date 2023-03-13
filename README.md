# etch-a-sketch

A fun little project that doesn't have a lot of complexity, but is useful to practice certain DOM-manipulation concepts.

The most challenging aspect is figuring out the logic around making an RGB etch-a-sketch, which also doesn't change the hue and saturation, but only the luminosity of the color on second pass. Though I have figured this logic out (can be seen on another branch), I decided that it is not actually a desired feature. That's why I branched it off. I may refactor it one day, if I ever get back to it.

## To Do:

1. Add a black&white vs rgb mode switcher.
2. Add a single color mode.
3. Add an eraser.
4. Add clear button.
5. Stylize the project.

## Challenges I've faced

1. I cannot seem to make a grid item change color only when the mouse is down and over the grid item. I know that my logic works in pseudo code, it should work in the browser to, and sometimes it does. But it's 50-50, sometimes the browser does the exact opposite. I checked if my logic is correct with some other people, and they agree everything should be working. But it isn't.
