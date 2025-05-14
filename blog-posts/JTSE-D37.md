---
title: "Day 37: SVG Solution"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "May 13, 2025"
description: "SVG might be the way to go in creating isometric art."
---

Hello,

<br>

I’ve taken a step towards SVG today. In the search for the best way to create isometric images for my page, I’ve landed on SVG and Figma.

<br>

## Using Figma

<br>

There’s a bit of a curve when learning Figma in the sense that I know Illustrator, and I’m just looking for tools I had on Illustrator. I chose to learn Figma mainly because I’m looking to replace my adobe products in the hopes of making the switch to Linux in the near future. Nonetheless, Figma boasts a large library of user created plugins to increase workflow. For example, I used a user generated template to give me a 30degree isometric grid. Additionally, when I needed to skew and rotate a 2D shape, I used an isometric plugin that would do that for me. Since Figma works in the browser I could quickly test and update SVGs and was able to easily recreate the isometric cube that was so challenging in pure CSS.

<br>

## Pros & Cons

<br>

While SVG solves the issue of consistently creating the isometric shapes, there’s an additional problem: text and animation. Animation is more a problem of lack of knowledge in my case. I saw a couple tutorials by **_[SpeedCodeProjects](https://youtube.com/@speedcodeprojects6217?si=bf_3oHn6o4qto-HS)_** that gave some guidance on animating isometric shapes. The main part being any movement vertically or horizontally should consider tan(30). This ensures movement is aligned with my isometric shapes.

<br>

Text on the other hand is a whole other issue. SVG bounding boxes aren’t bound to the subject but instead are just a rectangle around it. This presents an issue when I need text that appears written on the shape. The solution I came up with is as follows:

<br>

Use the custom CSS isometric shape and match its size to whatever SVG I’m importing. I’ll abstract this in a class. Then I can set the background color to none and boom, I’m seemingly typing on the SVG. It’s a bit unfortunate that I have to do it this way but I think this solution will work for now.

<br>

I’m glad to be over this hump of learning how to make isometric shapes and now I can better focus on just drawing up designs to add to the site, but it’s been great to learn how to do all of this. Thanks for reading until here, see ya tomorrow.
