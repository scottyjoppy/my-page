---
title: "Day 150: Isometric Shapes"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "September 14, 2025"
description: "My first crack at making isometric shapes."
---

Hello friends,

<br>

Today I tried making an isometric shape, I didn't do to well haha.

<br>

## Understanding the Problem

<br>

So I've made Isometric shapes before, I've written about it in the past on the still in development update to my personal site. But it was in a completely different battle arena. I made some isometric shapes using HTML and CSS and that sorta worked. The problem was that it was hard to scale and not accurate, if you really zoomed in, things broke apart. So I settled on using SVG images made in Figma which were much easier to make but ultimately avoided having to do it in CSS and HTML. Now, I'm working in C++ with SFML. 

<br>

I've read up a bit on OpenGL and decided it's probably best to just keep going with what I sorta know instead of learning this whole new thing. It's not always the tool that's the problem you know.

<br>

So making the shapes I had to first thing of the how. Specifically what shape to use. SFML has many options such as RectangleShape, Lines, VertexArray... but what I ultimately decided on was ConvexShape. Which allows you to define your polygon down to how many points, and where you want them. Besides that it behaves just as any other shape with the same position, size, scaling functions. 

<br>

## Where I'm Lost

<br>

I spent a lot of today just browsing different blogs, videos, tutorials, and LLM conversatin' just trying to figure out how isometric shapes work. I understand to some extent that any isometric shape requires some level of rotation and skewing but the math alludes me. I ended up just creating a sort of diamond with the ConvexShape then squishing it down to be isometric. I'll have to spend some more time cracking this but for today I have a shape and it looks isometric, a win in my book. 

<br>

Thank you for reading today's blog, one step at a time we'll get there, friend.