---
title: "Day 143: Collision"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "September 03, 2025"
description: "Looking into collision."
---

Hello friends,

<br>

As I'm starting to experiment with creating simulations, I find it necessary to grow my understanding of physics and math. I know roughly how to detect collision, and I'll explain it here, but I would like to now take it a step further and create realistic impact and bounce when objects collide.

<br>

## Collision

<br>

When it comes to rectangular shapes, I've been using AABB collision detection. Which basically checks relative positions between two objects edges. If objA's right side is at x = 3 and objB's left side is closer than that, say x = 2, there might be a collision along the x axis. To be sure you'd also check along the Y axis. The checks we make are to ensure that objB is either completely to the left, right, above or below objA. If any of these cases are false, there's a collision.

<br>

Circles would be detected using their radius. Since we can't perform the same checks shown above on circles we instead utilize the size of their radius. If the distance between two circle's center is less than the sum of their radii.

<br>

The troubling part is what to do once they collide.

<br>

## What Next?

<br>

There's a few simple solutions. For one you could just move the object back so that they are no longer colliding. If the object was moving, you could just reverse it's direction. But neither of these are good computationally or realistic. While I haven't had the time to learn the involved math and physics regarding, I'm aware that I need to consider a few things. Acceleration, velocity, and gravity. I'm straying a bit from the code aspect of this and focusing more on understanding how the math works. I think this will be vital information for me to understand. 

<br>

I'm excited to continue and learn about these concepts to better improve the realism of these programs. Especially since I hope to at some point build real life machines that will be limited to the same laws of physics we are. But that's still down the road. Thank you for reading today's blog. Moving up in the world, slowly, but surely.