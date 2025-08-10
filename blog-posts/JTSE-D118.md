---
title: "Day 118: Bullets"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "August 08, 2025"
description: "Shootable projectiles & Math."
---

Hello friends,

<br>

Today I added bullets as well as learned about normalization functions.

<br>

## Bullets

<br>

There are two main ways to create a bullet (that I saw in the video). Either you create a line and change it's thickness, or a rectangle and change it's w x h. I went with the rectangle and then dove into how bullets go towards an enemy.

<br>

The following will be my best attempt at explaining how this all works:

<br>

Step 1 is to calculate the direction, AKA how the bullet gets from the player to the enemy. To do that you have to do the following:

<br>

```
sf::Vector2f bulletDirection = enemy.getPosition() - bullet.getPosition();
```

<br>

So if the enemy is at (6, 8) and the bullet starts from (3, 4) it would need to move 3 to the right and 4 up. If you imagine a triangle with one side being 3 points and the other 4, then the bullet trajectory, would be along the length, in this case, 5. If we consider shooting bullets to many different targets all in different places FROM different places, that length will be different every time. Which would result in the bullet moving in different speeds every time. To solve this, we use normalization, which is the process of making that length 1, which allows us to control speed separately. The function looks like this:

<br>

```cpp
sf::Vector2f Math::NormalizeVector(sf::Vector2f vector)
{
    // Get the current length
	float m = std::sqrt(vector.x * vector.x + vector.y * vector.y);

	sf::Vector2f normalizedVector;

    // Divide the current x and y values by the length to return the normalized vector values
	normalizedVector.x = vector.x / m;
	normalizedVector.y = vector.y / m;

	return normalizedVector;
}
```

<br>

Now length is 1, amazing.

<br>

I've been kinda skimming through this tutorial and only really stopping when I truly don't understand something. **_[Mustafa](https://www.youtube.com/@MustafaSibaiDev)_** has done an amazing job really going into detail in every step. Sometimes I just think I learn best by not overflooding my mind with knowledge and just coming back when I need it. Like this normalization thing. I wrote the code it worked, but I didn't understand why even have it in the first place, even less how it worked. I thought about it a lot, questioned Claude for an hour until I got it enough to try and explain it myself. I know there's a lot of cool math things like this ahead of me in game development and I'm super excited to learn it all. Thank you for reading today's blog, hopefully my explanation made a grain of sense. Knowledge truly is power, friend.