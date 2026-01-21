---
title: "Day 146: Sticks & Points"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "September 10, 2025"
description: "Road to making a realistic cloth."
---

Hello friends,

<br>

**_[Coding Math](https://www.youtube.com/@codingmath)_** amazing YouTube channel. Coding Math has been a huge help in me understanding and creating these physics simulations. Today I followed his three part series on creating Points & Sticks.

<br>

![points & sticks](/images/blog-images/day146/stickspoints.gif)

<br>

## How

<br>

So you wanna create some points and sticks, I know crazy. Every point has a position, previous position, and radius. Every stick, should reference two points. Points behave similar to the balls in yesterday's blogPost, they move based on the Verlet formula. In this iteration I added gravity which just pushes them down a bit, and friction which will slowly slow down the point as it moves. I think it's cool how you can add initial velocity because normally you would write something like:

<br>

```cpp
sf::Vector2f velocity(10.f, 0.f);
```

<br>

To send an object to the right side of the screen. But because Verlet calculates movement based on previous movements I just have to lie when creating a new point and say that it's previous position was to it's left like so.

<br>

```cpp
point.position = {100, 100};
point.prevPosition = {90, 100};
```

<br>

This will result in the point flinging to the right on initialization. Cool!

<br>

Sticks are a bit more complicated and I'm not entirely sure how they work as of yet but I do know this. You create a stick, you give it two points, then every frame you check the sticks length vs the distance between those two points. You can then determine if the stick is stretched or compressed, then rectify. It looks like this:

<br>

```cpp
// Get distance between the points on the ends of the stick
float dx = m_p1.m_pos.x - m_p0.m_pos.x;
float dy = m_p1.m_pos.y - m_p0.m_pos.y;
float dist = Math::Length({dx, dy});

// Get the difference between the stick length and the distance
float diff = m_length - dist;

// Calculate the percentage by which the points need to move
// Divide by two because we have two points
float percent = diff / dist / 2;

// Calculate offset
float offsetX = dx * percent;
float offsetY = dy * percent;

// Move the points in towards the middle (stick)
m_p0.m_pos.x -= offsetX;
m_p0.m_pos.y -= offsetY;
m_p1.m_pos.x += offsetX;
m_p1.m_pos.y += offsetY;
```

<br>

There you have it, that's how I made a box. I'm excited to continue learning this and see what I can do with it. At a certain point I can understand using a library or tool to do some of this boilerplate math for me but it's nice to do it myself for a bit and really understand how everything works. Thank you for reading today's blog, until tomorrow friend.