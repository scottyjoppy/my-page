---
title: "Day 148: Scalar Projection"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "September 12, 2025"
description: "Finally getting an understanding of Scalar Projection."
---

Hello friends,

<br>

So today I will try to explain how to detect collision on a line.

<br>

## The How

<br>

I'm used to having fixed positions like with circles and rectangles where I know the exact position or vector to work with. With circles you just look at their centers and radius. With rectangles you compare the position of their edges. But with lines, I was lost. That's when I came across Scalar Projection, which is a way of sort of casting a shadow of an object onto a line, and using that to determine the nearest point on the line. So let's start with some terms.

<br>

```cpp
// Draw a line between points A and B
sf::Vector2f A = {0, 0};
sf::Vector2f B = {5, 0};

// Define the circle center and radius
sf::Vector2f C = {3, 2};
float radius = 1.f;

// AB is the distance from A to B
sf::Vector2f AB = B - A;

// AC is the distance from A to C
sf::Vector2f AC = C - A;

// Get the squared length of AB
float ABlen = AB.x * AB.x + AB.y * AB.y; 

// Do Scalar Projection
float t = (AB.x * AC.x + AB.y * AC.y) / ABlen;
```

<br>

Now we have the scalar. Note t is just a scalar that we can use to find the nearest point to the circle along the line. It's good to clamp t between 0 and 1 because if you think of t as a sort of percentage, then you would want the minimum percentage along the line to be A and the max B.

<br>

```cpp
// Now let's get the closest position on the line
// We essentially take A, then use t to scale the distance to B
sf::Vector2f posClose = A + t * AB;

// Using the above numbers we should end up with {3, 0}
```

<br>

There we have it, Scalar Projection. So now that you have the nearest point, you can calculate the distance to the circle center, and check if it's larger than the radius.

<br>

It took some brain power to figure it out but I'm glad I could make some sense of this all today. I finished off the day by separating some of my code, for example making a dedicated collision class file to handle all collision. I'll leave below a gif of the result. I did notice some performance issues and slowdowns but I think I'll leave this project where it is and maybe just make some small fixes before moving on to something game related.

<br>

Thank you for reading today's blog, been 148 days of this now and although I'm pretty confident no one has read these up until now I'm happy to be able to look at the growth over the year. It's about a year ago that I first touched programming. Beforehand never having touched any code. I'm glad to say that the love for it hasn't faded one bit in the past year. Here's to another exciting year of learning.

![cloth gif](/images/day148/clothFinished.gif)