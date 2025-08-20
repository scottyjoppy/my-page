---
title: "Day 127: Scale Function"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "August 18, 2025"
description: "Creating a quick scaling function."
---

Hello friends,

<br>

Today I was in planes all day and while I didn't have the opportunity to continue watching the videos, I took it as a chance to implement a function myself.

<br>

## Math::CalcScale

<br>

One annoying thing I've had to do in this project so far is make all of these spritesheets look the same size. I want every tile in every sheet to be the same size regardless of the pixel size of each relative sheet. I needed a way of keeping the desired size per tile consistent everywhere. For example if I want one tile to be 16x16 pixels, and the tile sheets tile is 8x8, I would have to scale both x and y * 2. Introducing CalcScale:

<br>

```cpp
sf::Vector2f Math::CalcScale(sf::Vector2i tileSize)
{
	// Set 48 pixels per tile as standard
	float defaultSize = 48;

	sf::Vector2f size;

    // Normalize to the largest edge
	if (tileSize.x > tileSize.y)
	{
		size.x = defaultSize / tileSize.x;
		size.y = defaultSize / tileSize.x;
	}
	else
	{
		size.x = defaultSize / tileSize.y;
		size.y = defaultSize / tileSize.y;
	}

	return size;
 }

```

<br>

I then incorporated this function in all my files allowing me the ability to control the size of my tiles from that one variable defaultSize.

<br>

I definitely felt a bit lost when first thinking about creating this function, but it was good to take a second, think, and add something of my own not from the tutorial. I'm happy I could create find a simple fix to this little problem. But that's all I got for today. Thank you for taking the time to read today's blog, I wish you all the best, friend.