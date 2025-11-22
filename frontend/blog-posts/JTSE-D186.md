---
title: "Day 186: Shadows"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "October 23, 2025"
description: "Making the shadows disappear on empty tiles."
---

Hello friends,

<br>

Today I tackled a visual issue, shadows, they shouldn't show if there isn't a tile to project on, let's fix that.

<br>

## What I'm Not Doing

<br>

Let me be clear. I'm creating my shadows as a simple circle shape that follows the connected object. It's not an accurate representation of the shape of the object, and it is not connected or created to a light source. I don't think this simple game should be more in depth than that. So that being said, the shadow will have two states, showing the full circle, or not.

<br>

## What I Am Doing

<br>

There's three main cases I want to account for.

<br>

1. Showing the shadow when the player is above a tile.
2. Not showing it when the underneath tile is empty.
3. Not showing it when the player is under the tiles.

<br>

I started by creating a function that tracks the state of the tiles at any given X, Z position. Be warned I did vibe code this part a bit.

<br>

```cpp
bool Collision::TileUnder(const sf::Vector3f& obj, const std::vector<CubeTile*>& tiles)
{
    // Set a bit of leeway when calculating the distance to a tile
    const float tolerance = 0.5f;

    // Case 3: obj under ground level
    if (obj.y < 0)
        return false;

    for (auto* t : tiles)
    {
        // Skip empty tiles
        if (!t->m_tileId)
            continue;

        // Calc dist to grid position
        float dx = obj.x - t->m_gridCoords.x;
        float dz = obj.z - t->m_gridCoords.z;

        // Is obj above a tile?
        bool horizontallyAbove = (std::abs(dx) < tolerance && std::abs(dz) < tolerance);

        if (horizontallyAbove)
            return true;
    }

    return false;
}
```

<br>

Great, now I can detect the obj in relation to the tiles. I did a couple other things like add this bool check in player and item's Draw function:

<br>

```cpp
if (showShadow)
    window.draw(player);
```

<br>

Then in my main file I just use the collision function which controls this showShadow variable. That's it, now the shadow doesn't show up weirdly. I mean kinda. There's a few bugs related to how depth is being calculated, this is also affecting how player gets drawn but at this point it's not ruining my immersion enough to fix it. 

<br>

Thanks for reading today's blog. I just had a look and I've been working on this game for 36 days now. Damn, that's too long. It's been a good learning experience but I think I could benefit from getting these out quicker. But on the other hand, I don't wanna rush things. Either way, it is what it is, I won't be slow forever, hopefully aha. Until next time dear readers.