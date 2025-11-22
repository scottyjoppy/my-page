---
title: "Day 121: Delta Time"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "August 11, 2025"
description: "Implementing Delta Time in the loop."
---

Hello friends,

<br>

Today I learned what Delta Time is. And once again in an effort to solidify my understanding of the concept, I will explain it here.

<br>

## Delta Time

<br>

So Delta Time is used here to make sure that things move at a consistent speed independent of FPS. The best way I could think of this is when I think of when I used to play Minecraft.

<br>

Let's say I put a bunch of TNT down and then light it. Since my laptop wasn't super quick when I was young, the explosion would slow down the game drastically. It would result in a weird laggy movement, like for example if I was running in a straight line, I would seemingly jump forward a few blocks instead of the smooth motion before the explosion. What's happening here is that my FPS are dropping say from 60 to 30, meaning if I were to travel 10 blocks at a speed of 1 blockPS at 60FPS, I would need to move at 2 blockPS at 30FPS. That way I will move the 10 blocks forward, in the same amount of time, regardless of FPS.

<br>

Here's how I'm using Delta Time:

<br>

```cpp
fireRateTimer += deltaTime;

if (sf::Mouse::isButtonPressed(sf::Mouse::Button::Left) && fireRateTimer >= maxFireRate)
{
    bullets.push_back(sf::RectangleShape(sf::Vector2f(50, 25)));
    bullets[bullets.size() - 1].setPosition(sprite.getPosition());
        
    fireRateTimer = 0;
}
```

<br>

Say maxFireRate is 150ms, fireRateTimer accumulates time passed every time the update function is called (every loop) and only once it reaches over 150ms does it fire, then it resets to 0.

<br>

I hope that was understandable, and sorry if it wasn't, I just learned this today haha. Well thank you all for reading today's blog, I hope it was somewhat informational. I wish you all the best, until tomorrow, friend.