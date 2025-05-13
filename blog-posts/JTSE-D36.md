---
title: "Day 36: Isometric Component"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "May 12, 2025"
description: "Some insight on making a customizable isometric component."
---

Hello,

<br>

Today I continued to face the issue of creating scalable isometric components. I also started to plot out how I could create an isometric navbar.

<br>

## Customizable Cubes

<br>

There were two main things I wanted out of my shapes:

- Customizable sizes: dynamically define width, height, and depth.
- Supports Text: despite the rotations and skewed surfaces, still support text. Additionally, can specify the side on which to type.

<br>

## Size Props

<br>

I’m not sure on the best practices when it comes to mutually excluding props, but from my quick googling I came up with the following:

<br>

```tsx
interface ShapePropsSize {
  children?: React.ReactNode;
  className?: string;
  size: number | string;
  height?: never;
  lWidth?: never;
  rWidth?: never;
  face?: "left" | "right" | "top";
}

interface ShapePropsWH {
  children?: React.ReactNode;
  className?: string;
  lWidth: number | string;
  rWidth: number | string;
  height: number | string;
  size?: never;
  face?: "left" | "right" | "top";
}
```

<br>

It’s either size or lW/rW/H. Type **_never_** makes sure it’s one or the other. I wanted to have these options in case I’m making a cube and just want the same number for all three sides. I also pass some base values in the component and default to size instead of W/H.

<br>

## Text Support

<br>

The face prop above refers to which face I want text to go on. I have yet to figure out how to allow for different text on different faces, but I’m also not entirely sure at this point how vital that is. Best not to overcomplicate things yet.

<br>

All in all, progress is slow but steady once again. Still however, on the lookout for a better solution to creating isometric objects. That will have to be a tomorrow kind of consideration. Thanks for reading up on today’s blog, until tomorrow.
