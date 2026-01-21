---
title: "Day 12: Parallax and CSS"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "April 18, 2025"
description: "Learning about CSS positions and animating with Motion."
---

Hello,

<br>

Today I thought I'd try to solidify my understanding of the CSS property: Position. In my current project I'm trying to add certain fun design features namely scroll based animation. But I also need to do a lot of parallaxing. I've long struggled to understand the positions, static, relative, fixed, absolute, sticky - but I think today I've grown my understanding. I'll give my best attempt at describing each.

<br>

## Static

<br>

This is the default position. Not much to say about it. Elements within a static positioned element are by default constrained to the parent. They are not affected by top, bottom, left, and right properties, and they are positioned according to the default flow of the page.

<br>


## Sticky

<br>

This is probably the position I understand the least, and as I research it I'm starting to realize I should try to use it more and it's probably super useful. But a sticky element behaves relative by default, but you can set a threshold when it becomes sticky, at which point it turns into a fixed element, but only within it's scrollable container.

<br>

## Fixed

<br>

Viewport is an important term, basically meaning the screen, or view. Fixed items don't move, and are positioned relative to the viewport. They are moved using the top, bottom, right, and left properties. A common example of fixed elements are Navigation panels, and sometimes footers.

<br>

## Relative

<br>

Relative position is very similar to static. With the added feature of gaining access to the top, bottom... properties. But understanding relative positioning was the key to creating the overlap and parallax effects I needed. Well, that and absolute positioning.

<br>

## Absolute

<br>

Absolute is similar to fixed, but instead of being relative to the viewport, it is positioned relative to its relative parent, or grand-parent. In the case that there is no relative parent, an absolute element will go up the DOM until it has something to relate to.

<br>

But parallaxing, absolute and fixed positioning have this property that allows them to overlap with other elements. But absolute has the added benefit of constraining elements to a relative parent.

<br>

![Momence](/images/blog-images/day12-momence-ex.png)

<br>

In this example from ***[Momence](https://momence.com)*** there is a section with 3 overlapping images. They individually have applied animations yet overlap seamlessly. Before understanding the different positionings, I felt like I was in a word document all over again. Trying to do the impossible task of moving an image without messing everything up. But needless to say, I'm much more confident now in my understanding of positions, and have one less hurdle when styling my pages.

<br>

Thank you for reading my attempt at explaining the different CSS positions. I hope there was something to take away here, until tomorrow.

<br>
<br>

**_[Eversport Draft Repo](https://github.com/scottyjoppy/eversports-draft)_**
