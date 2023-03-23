# etch-a-sketch

A fun little project that doesn't have a lot of complexity, but is useful to practice certain DOM-manipulation concepts.

The most challenging aspect is figuring out the logic around making an RGB etch-a-sketch, which also doesn't change the hue and saturation, but only the luminosity of the color on second pass. Though I have figured this logic out (can be seen on another branch), I decided that it is not actually a desired feature. That's why I branched it off. I may refactor it one day, if I ever get back to it.

There a few other challenging aspects, which are not part of the main assignment, but I still want to tackle them progressively. You can see them in the TO-DO below.

### ~~Update on touch input~~

~~For some reason touch input just doesn't work well with Etch-A-Sketch. I've been looking for solutions and currently, I've only managed to make the rainbow paint option work somewhat. Sadly, it is not how I want it to work, but I don't see a way to work around it, currently. I will look for a solution, but this isn't a priority.~~

### Touch input works

The whole situation just bothered me, so I decided to make touch work. I finally figured out how to do it, although I couldn't find anything about it online. I am not sure if my solution is "clean", but it works, and can't see anyone with a similar app who's made it work. So... a win! :D

### Grid-size edge cases

I have some idea on how to do this, but it isn't pretty.

The first way is to simply limit the number of possible inputs. For example, I can set the grid to something that works well with multiples of 8. However, that limits my options when it comes to responsive design (which is another can of worms, but I won't be opening it now).

The second way is to have the entire container resize to fit the number of grid items as well. For example, on each call of the createGrid function, I can set the container to 800x800px, create the cells, set their size, check (size x cells-per-row) and if it isn't 800px, then I set the size of the container to the that. This is the best for responsive design and will allow me to have a more flexible grid size, but it will limit the design options. That being said, I think I will take that route.

When I think about it, perhaps I can use PostCSS to make it work better, but that would be at a later point.

## To Do:

1. ~~Add a single color mode.~~
2. ~~Add an eraser.~~
3. Stylize the project.
4. ~~Add a color picker as well.~~
5. ~~Fix the borders to be displayed correctly~~
6. Find a solution for grid size edge cases (sometimes they don't divide evenly and a 1-2px white space appears on-screen).
7. Stylize the color picker input field somehow.
8. ~~Add comments to the JS file.~~
9. Refactor CSS wherever possible.
10. ~~Refactor JS - separate functions in other files to not clutter the main file.~~
11. ~~Make touch input work~~
12. Figure out how to make the design responsive
