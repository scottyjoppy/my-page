---
title: "Day 122: Bullets Change"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "August 12, 2025"
description: "Making some improvements to the bullets."
---

Hello friends,

<br>

Today I started doing some work with the bullets, namely actually clearing them once they hit the target.

<br>

## Bullets

<br>

At this point in the project, while I'm sure there's a lot more to learn, it feels as if I'm just putting pieces together. For example the way I'm currently creating bullets is by creating an array of bullet objects all going towards the target. The first step is controlling speed.

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

In the above example I've added these two new variables: FireRateTimer, and MaxFireRate. The idea here is that each update, I'll be adding deltaTime, or the time passed between frames, to fireRateTimer. I've set my maxFireRate to 150ms, meaning every time fireRateTimer reaches that, I shoot. This way, I can now variably control the frequency at which I shoot my bullets.

<br>

I'm currently also working on some code that will delete the last object in the bullets array once it collides with a target. But besides that that is all I got for today, thank you for taking the time to read today's update, I'm excited for where this path may lead.