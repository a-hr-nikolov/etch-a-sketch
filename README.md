# etch-a-sketch

A fun little project that doesn't have a lot of complexity, but is useful to practice certain DOM-manipulation concepts.

The most challenging aspect is figuring out the logic around making an RGB etch-a-sketch, which also doesn't change the hue and saturation, but only the luminosity of the color on second pass. Though I have figured this logic out (can be seen on another branch), I decided that it is not actually a desired feature. That's why I branched it off. I may refactor it one day, if I ever get back to it.

There a few other challenging aspects, which are not part of the main assignment, but I still want to tackle them progressively. You can see them in the TO-DO below.

## Update on touch input

For some reason touch input just doesn't work well with Etch-A-Sketch. I've been looking for solutions and currently, I've only managed to make the rainbow paint option work somewhat. Sadly, it is not how I want it to work, but I don't see a way to work around it, currently. I will look for a solution, but this isn't a priority.

## About refactoring

I am looking at my app.js file and cringe. It isn't pretty. I don't know how to refactor it to make it look good. I think I need to figure out some better coding practices.

## To Do:

1. ~~Add a single color mode.~~
2. Add an eraser.
3. Stylize the project.
4. ~~Add a color picker as well.~~
5. ~~Fix the borders to be displayed correctly~~
6. Find a solution for grid size edge cases (sometimes they don't divide evenly and a 1-2px white space appears on-screen).
7. Stylize the color picker input field somehow.
8. Add comments to the JS file.
9. Refactor CSS wherever possible.
10. Refactor JS - separate functions in other files to not clutter the main file.
