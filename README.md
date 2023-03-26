# Etch-a-Sketch

## 👉 [Try it out here](https://a-hr-nikolov.github.io/etch-a-sketch/)

A fun little project that turned out to have a lot more complexity, if one went a bit beyond the basics.

I considered whether or not I should refactor it as time progressed, but I think that it is better to have it as something that shows where I was in the past.

## The steps along the way

Here I will explain what I've been through when working on this project. I consider this my reflection on the progress I've made as I gained understanding of the requirements and the added complexity.

- ### The initial logic

I didn't find the initial requirement hard. I had to fill up a wrapping flexbox with items so that it simulates a grid. The challenge was supposed to be figuring out how to size them dynamically, but to me it was rather obvious. My solution, although not pretty, is functional and can be seen in the code.

The second challenge was to manipulate the grid items to change their color on mouseover. I did it without problems. The most challenging aspect was figuring out the logic around making an RGB etch-a-sketch, which also doesn't change the color on second pass, but only darkens it. Though I have figured this logic out (can be seen on another branch), I decided that it is not actually a desired feature. That's why I branched it off.

Finally, there was the challenge to give the user the option to choose the gridsize, with a max of a 100x100 grid. I did that, but 100x100 became too laggy and looked bad on small screens, so I capped it at 64 at first, then at 32. Even that is a bit much though.

- ### Adding complexity

The above took care of everything the project required. Everything below is of my own design, because I wanted to challenge myself.

This is the extra functionality that I've included:

1. Option to pick from different modes: rainbow (random vibrant colors), grayscale, custom color (through a color picker) and an eraser.
2. A slider input for better UX.
3. Working touch input
4. Responsive design

The touch input was by far the most challenging aspect, because I had to go through a lot of trial and error, before I figure out how to make it work properly. Even now it's more of a hack, but I left it like that, because I'm honestly proud of the solution, given the constraints I had. I have not yet seen anyone with this project make their touch input work, so... a win! :D
