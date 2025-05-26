---
title: "Day 49: Animating the SVG"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "May 24, 2025"
description: "My process in animating the SVG image."
---

Hello,

<br>

Today continued along the hooks and animation path, with the goal of creating a consistent way to zoom in and interact with the SVG.

<br>

## The Classes Way

<br>

The classes way requires adding animations to the outer div wrapping the Isometric Image. Which led to the situation where I need to pass a value from a child component to its parent. The way I learned to do that is as follows:

- Add an onVariable prop to the child. This would be a function which just holds a value and returns none.
- Call that function when you want to pass that variable, for example on every change.
- In the parent element, create a handler function and a variable with useState.
- The handler function should just set the variable to whatever value is put in.
- Using the on function as a component attribute on the child, pass in the handler function.
  There you go, value, passed. There’s some other ways to do this but this seemed alright so I’m rolling with it for now.

<br>

From there I just created a switch function wrapped in a useEffect to change the classes in the parent div. And boom, dynamic zooming based on the value passed from the child.

<br>

## The Problem

<br>

Using CSS I had to hack together some translates to move the image into frame. This unfortunately immediately failed once the screen changed. So I needed a solution to zoom into the image without using CSS scale, or translate. At least, in this case where having consistent transform origins was impossible. That’s when I remembered the SVG Viewbox.

<br>

## SVG Viewbox

<br>

Viewbox was everything I needed. It’s divided in four values: minX, minY, width, height. This way, I could use the first two values to move across the image, and w/h to scale it as I want. Animating viewbox however, is tough. You can’t use CSS styling in the same sense and I had to think of other solutions. What I settled on for today is a bit verbose but should do. I basically separate the current string representing the view box, then iterate over the values individually until it reaches the desired view box. The rate at which the values increase is determined by the fps and duration variables. I also make use of some calculations with cos and sin to create an ease-in-out effect. I’m not fully sold on this solution, and will look into some others; potentially looking into what GSAP has to offer.

<br>

On the plus side, I was able to do some fun things like connect the arrow keys to move you around the map. There are some latency issues that I haven’t quite worked out but I’ll be sure to look at that tomorrow.

<br>

Lots of logic work done today, and I’m learning a ton actually implementing some of the scripting work into the website. Soon I’ll probably have to switch back into design mode and continue drawing up the rest of the map. But I’m happy with the progress I’ve been making so far. Thanks for reading today’s blog, until tomorrow!
