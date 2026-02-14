---
title: "Day 250: Button Project"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "Feb 02, 2026"
description: "Finishing the first major learning task on the breadboard."
---

Hello friends,

<br>

Since I first got this little kit I've been working towards solving this main challenge. The challenge? Given two buttons, design a circuit that allows only the fastest pressed button to light it's respective LED. And upon one button being pressed, disable any further button presses. And I think I solved just that.

<br>

## How?

<br>

![circuit diagram](/images/blog-images/day250-diagram.JPG)

<br>

I drew up this diagram to try and illustrate exactly what's generally going on. Now I'll try to explain things to the best of my understanding. 

<br>

The circuit makes use of latches, SR latches specifically. Meaning that once there is a pulse the latch will turn on and stay on. So once the button is pressed the current flows through the transistor and into the SR latch locking it on. Additionally, it will send a line to the other button activating another transistor. Now when the button is pressed the current takes the path of least resistance and doesn't go towards the latch but goes straight to ground.

<br>

The SR latch was made thanks to this video [SR Latch](https://www.youtube.com/watch?v=NBihtSRjaZA) by the Global Science Network, at channel that has been extremely helpful for me to learn and understand some of these concepts.

<br>

![demo](/images/blog-images/day250-button-demo.gif)

<br>

![profile 1](/images/blog-images/day250-profile1.JPG)

<br>

![profile 2](/images/blog-images/day250-profile2.JPG)

<br>

![profile 3](/images/blog-images/day250-profile3.JPG)