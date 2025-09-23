---
title: "Day 155: TileMap"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "September 19, 2025"
description: "Planning for creating maps."
---

Hello friends,

<br>

Today I laid some ground work for when I want to create maps. I wasn't much but I wanted to see if I could just have some kind of vector and define the W * H to draw out a bunch of tiles.

<br>

## Iso Transform

<br>

To make tiles along my three axes I just had a vector like this:

```cpp
std::vector<std::vector<std::vector<Tiles>>>;
```

<br>
Three vectors inside each other that I would loop through after defining the dimensions. Iso Transform is the key to having everything in the right place.

<br>

Essentially what it does is take a look at the grid coordinates, let's say (2, 1, 2), and displace it accordingly:

<br>

```cpp
sf::Vector2f Math::IsoTransform(int x, int y, int z, sf::Vector2f tileSize)
{
    float isoX = (x - y) * (tileSize.x / 2.f);
    float isoY = (x + y) * (tileSize.y / 2.f) - z * tileSize.y;

    return {isoX, isoY};
}
```

<br>

Notice how the function returns two floats not three. It's because we are returning the outright screen position, not in 3D space, and the z position is integrated into either way.

<br>

Tomorrow I'll want to bring this into it's own class since it's cluttering my main file quite a bit as it is. But I'm glad to have begun creating maps, thank you for reading today's blog update, I'll see ya tomorrow.