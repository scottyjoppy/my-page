---
title: "Day 33: Isometry 101"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "May 9, 2025"
description: "The theme, isometric shapes, and plans on how to implement."
---

Hello,

<br>

![isometry background](/images/isometry-image.png)

<br>

I saw this the other day and immediately knew how I wanted to style my website. It's a bit bold and I'm really not sure if it will pan out, but at the very least it should be unique. That is of course if I can execute it well.

<br>

## The Plan

<br>

A background of isometric shapes like in the photo, but less cluttered. Content integrated into the background that can be interacted with.

<br>

I think to do this well I need to find a good middle ground between how much should be isometric and how much should just be normal. In my mind everything can just be isometric but I think in execution I'll have to compromise a bit. Regardless, I wanted to focus today's blog on the struggles I've been facing when making this unique shape.

<br>

## Isometry 101...ish

<br>

This is by no means a lesson on isometry but here are my insights on this awesome geometric concept. For starters, it's a neat way to simulate depth in a 2D space. It's often used in video games like the famed **_[Roller Coaster Tycoon](https://atari.com/pages/rollercoaster-tycoon?srsltid=AfmBOornh-GToqIeVkY0FwRx08O29HLDxpFQpQAcnbFHXbOGYCGNhu8v)_**. It simulates a kind-of top-down perspective, like looking at a cube from the top corner.
I won't pretend to understand the math behind creating an isometric shape but I'll illustrate how to create a basic cube in CSS.

<br>

You start by creating the cube element with three children:

<br>

```html
<div class="cube">
  <div class="face top"></div>
  <div class="face left"></div>
  <div class="face right"></div>
</div>
```

<br>

First, style the wrapper cube (I'll omit the centering CSS):

<br>

```css
.cube {
  position: absolute;
  width: 300px;
  height: 300px;
}
```

<br>

Transform-origin is used to make sure all the faces have a common starting point:

<br>

```css
.face {
  position: absolute;
  width: 100px;
  height: 100px;
  transform-origin: 0 0;
}
```

<br>

Now, the actual skewing and rotating:

<br>

```css
.right {
  background: red;
  transform: rotate(-30deg) skewX(-30deg) scaleY(0.864);
  /*
    Rotate: 30 degrees counter-clockwise turn around it's center
    SkewX: Slant element horizontally
    ScaleY: Vertical squish of 0.864 which aproximates cos(30deg) to get the approximate height for an isometric view
  */
}
```

<br>

The left side is the same; just swap the rotate(-30deg) for rotate(90deg). The top, however, is a bit more unique.

<br>

```css
.top {
  background: green;
  transform: rotate(210deg) skew(-30deg) scaleY(0.864);
}
```

<br>

All together:

<br>

```css
.face {
  position: absolute;
  width: 100px;
  height: 100px;
  transform-origin: 0 0;
}

.right {
  background: red;
  transform: rotate(-30deg) skewX(-30deg) scaleY(0.864);
}

.left {
  background: blue;
  transform: rotate(90deg) skewX(-30deg) scaleY(0.864);
}

.top {
  background: green;
  transform: rotate(210deg) skew(-30deg) scaleY(0.864);
}
```

<br>

At the end of the day, you're creating three parallelograms and just using the transform style to change the point from which skewing and rotating happens. At the moment, this is how I'm achieving this look but I'm certain there are better ways of doing this.

<br>

My next challenge will be figuring out how to turn this into a repeating pattern to cover the background of my page. At the very least, I will end my day with a cool-lookin cube. With that, I thank you for reading today's blog. See ya tomorrow.
