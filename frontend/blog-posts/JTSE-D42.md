---
title: "Day 42: Isometric Animations"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "May 18, 2025"
description: "Learning about CSS animations on an isometric image."
---

Hello,

<br>

Although I've used the **_[Motion](https://motion.dev)_** library, as well as shorthand Tailwind animations, I must admit I haven't spent much time doing any pure CSS animating. So today in an effort to learn something new coding related I challenged myself with the simple task of making my little isometric boat move diagonally in the water.

<br>

## Animation & Animation-Fill-Mode

<br>

I'll start with the latter, animation-fill-mode. I'll explain this with the following animation:

<br>

```css
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
```

<br>

Consider a 1s delay before the animation begins. Each animation-fill-mode affects how the animation looks before and after it runs - Whether it applies the default style or the first/last keyframe.

1. None: Maintains the element's default style during the delay, then reverts back to the default once the animation is finished.
2. Forwards: Starts with the default styles as well, but holds the 100% keyframe style after the animation.
3. Backwards: During the delay, it applies the 0% keyframe styling, then reverts back to the default at the end of the animation.
4. Both: Both is the best of both, beginning with keyframe 0% styling and holding the end keyframe 100% after the animation ends.

<br>

However, these become less important when looping animations indefinitely, but they are good to know nonetheless.

<br>

```css
@keyframes boatAnimation {
  0% {
    transform: translate(-250px, calc(250px * 0.57735026919));
  }
  40% {
    transform: translate(880px, calc(-1 * 880px * 0.57735026919));
  }
  60% {
    transform: translate(880px, calc(-1 * 880px * 0.57735026919));
  }
  100% {
    transform: translate(-250px, calc(250px * 0.57735026919));
  }
}

#Boat {
  animation: boatAnimation 60s ease-in-out infinite;
  animation-fill-mode: forwards;
}
```

<br>

This is how I'm creating a slow sailing animation along the isometric grid. The crazy float 0.577... is the result of tan(30). At 0%, we translate on the x-axis -250px; to find the equivalent distance on the y-axis, we run the calculation value x times tan(30). The reason for varying x and y as positive or negative relates to the direction we're traveling. -x is left, x is right, -y is up, and y is down.

<br>

It was nice to delve more into CSS animations and dissect the different parameters for both animation and animation-fill-mode. I have high hopes to create various small animations on this image so it will be a good chance to practice my animations. Thank you for reading today's blog; I'll see ya tomorrow.
