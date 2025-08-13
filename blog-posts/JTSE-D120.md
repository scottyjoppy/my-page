---
title: "Day 120: Collision Detection"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "August 10, 2025"
description: "Adding collision detection to my sprites."
---

Hello friends,

<br>

```cpp
bool Math::DidRectCollide(sf::FloatRect rect1, sf::FloatRect rect2)
{
	if (
			rect1.left + rect1.width > rect2.left &&
			rect2.left + rect2.width > rect1.left &&
			rect2.top + rect2.height > rect1.top &&
			rect1.top + rect1.height > rect2.top
	   )
		return true;
	return false;
}
```

<br>

I thought I'd just focus on explaining collision detection through this function.

<br>

## Collision

<br>

So what's collision? Simply put, it's when one bounding box intersects with another bounding box. What's a bounding box? It's a rectangle you draw around an object, player, wall... And an integral part of collision detection.

<br>

Let's take things one line at a time:

<br>

```cpp
rect1.left + rect1.width > rect2.left
```

<br>

So imagine the following, take the x axis. If the center is 0, going left would be in the -1 direction, and towards the right is the +1 or 1 direction. What we want to do here is check if the first rectangle's right edge is further than the second rectangle's left edge. If it's false, that means the first rectangle is fully left of the second.

<br>

But wait, what do I mean the right edge, the function doesn't say right anywhere. Well unfortunately we need to calculate the right edge manually as sf::FloatRect only provides .left, .top, .width, and .height.

<br>

But if you think about it, to get the right edge, you would just have to take the left edge, and add the width. For example, say the left edge is at 2 or (2, 0). if the width is 3, the right edge would be at (5, 0), or 2 + width.

<br>

Next we check the other case for the x axis, that rect2 might be fully to the left of rect1:

<br>

```cpp
rect2.left + rect2.width > rect1.left
```

<br>

The reason we want all these cases to be true for a collision can be imagined if you think of two rectangles that are exactly on top of each other.

<br>

If they are perfectly intersecting, then rect1's right side would be greater than rect2's left. As well, rect2's right side would be greater than rect1's left side.

<br>

Any false result would mean that one rectangle is either fully left or right of the other.

<br>

The exact same logic is applied across the y axis, with top + height equalling the bottom edge as y moves positively downward (that threw me for a loop for a bit).

<br>

I hope I wasn't too all over the place explaining this today. I believe I understand how it works and I'm assuming precision comes either from other collision detecting methods, or an increase in bounding boxes. Thank you for reading today's blog, the best way to learn is to try and explain it to someone else, a good challenge, friend.