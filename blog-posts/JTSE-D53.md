---
title: "Day 53: Breaking Down Problems"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "May 29, 2025"
description: "How I break down tasks like this art project."
---

Hello,

<br>

Structure structure structure. Man do I struggle sometimes to do things in steps. This is a crucial part of programming that I’m working on improving. What I mean is that, solving a problem with code, is literally the art of taking a big problem, and separating it into many small problems. My issue, is that I break up a large problem into too big a chunk to tackle on it's own. I’m practicing this vital skill and I’ll go over how I’m doing that now with this art project.

<br>

## The Art Of Breaking Things Down

<br>

Take my current situation, I want a map of isometrically built islands representing the different proffessional parts of my life. I want animations and dynamic components that I can move and change within my React project. Knowing all of this, I’ll quickly divide this into phases.

<br>

Phase 1: Art and Design
Phase 2: Code

<br>

## Phase 1

<br>

Let’s clearly outline the educational steps to achieve this project.

<br>

1. Get comfy with Figma.
2. Learn how to make something isometric.
3. Learn how to export SVG elements.

<br>

Number 1 is simple enough. Watch a ton of tutorials and just play around in general. I’ll also spend time understanding how others have created isometric images before. Finally I’ll run some tests with my actual project to see how to best export an SVG.

<br>

Moving on from the educational part, let’s tackle making the image. In my opinion building a mini world like this should start from the ground up. So after some mental planning, let’s make some art!

<br>

1. Decide light direction.
2. Create the islands.
3. Create the water.
4. Place in the roads.
5. Make a few basic buildings.
6. Make more.
7. Place the buildings.
8. Place foliage.
9. Place clouds/planes/dragons?
10. Small fixes.
11. Behold.

<br>

The order is set to ease into complexity, as well as to consider the 3D aspect of an isometric image, meaning which layers should be on top of which.

<br>

Other phase 1 considerations are as follows:

<br>

- Consistent styling: Corners, stroke weight, color, font…
- Unique names: In order to more easily find components in phase 2.
- Alignment: So that animating objects is easier.

<br>

## Phase 2

<br>

Phase 2 is everything code. The goal here is to insert the SVG, style it to fit in the page, animate it, add dynamic functionality, and make it user friendly. The educational steps are as follows:

<br>

1. What is an SVG?
2. Best way to dynamically size them, and how should it look on desktop, mobile.
3. How to animate SVG. (GSAP)
4. How do React components and TSX work in an SVG element.
5. What makes good UX?

<br>

Now actually tackling the coding phase:

<br>

1. Paste and play with the SVG, run tests and see how everything works.
2. Use CSS to fit it in the page.
3. Add hooks to apply zooming logic.
4. Still work on hooks and code.
5. Isolate ID of elements I want to animate.
6. Animate them.
7. More hooks and logic to create functionality in the map.
8. Fix fix fix.
9. Behold.

<br>

I'll be honest, things have not gone this way. What I've outlined here is probably the more optimal way of me going about this project, and what I'm trying to align with. What I struggle with is that when I start a project like this, I start doing everything at once. I made a bit of art, then did some logic, then more art, then hooks... In reality things are not as streamlined as I would hope them to be. That's okay though. At the very least I am taking time to test things out. I spent a few days making isometric shapes in CSS. I then learned SVG is better. I did some basic animation with CSS, GSAP, and Motion, to see which was easiest. I dove regularly into the SVG docs to understand what I'm working with. I've learned a lot, and now that the initial dust has settled, I can re-align with the outlined path to completing the project. It's just a matter of putting in the work and making something cool. As well as, having an honest view of the time a well made project will take. It'll take time but it's worth it.

<br>

So thanks for joining me as I breakdown my current project. I'll see ya again tomorrow!
