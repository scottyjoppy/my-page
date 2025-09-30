---
title: "Day 166: The Promised Day"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "September 30, 2025"
description: "Oh my lord I actually got the thing working."
---

Hello friends,

<br>

As any diligent Alex blog reader would maybe have noticed, the past 6 blogs are a bit delayed. Mainly because of this stupid grid problem I've been hassling with. But today is finally the day, it works.

<br>

## What Works

<br>

![collision working!](/images/blog-images/day166-collision.gif)

<br>

Doesn't that look sick. The underlying collision detection is actually really simple, just calc the distance of all the tiles relative to the player, and if it's within the range of "nearby" make it red.

<br>

```cpp
std::vector<CubeTile*> allTiles = map.GetAllTiles();
for (auto& t : allTiles)
{
    float dist = Math::GetDist(p1.m_gridPos, sf::Vector3f
            (
                static_cast<float>(t->m_gridCoords.x),
                static_cast<float>(t->m_gridCoords.y),
                static_cast<float>(t->m_gridCoords.z)
            ));
    if (dist <= 2)
        t->m_bounds.m_debugColorsEnabled = false;
    else if (!t->m_bounds.m_debugColorsEnabled)
        t->m_bounds.m_debugColorsEnabled = true;
    t->Update(deltaTime);
}
```

<br>

I've also had to add an update function to the Cube Tiles in order for it to re-render the cubes once I change the color. But all in all I'm thrilled that this is finally working. The player not being having grid coordinates really messed everything up for a few days but now that it's good I'm ready to move onto actually making the player collide with the world around it. 

<br>

Thank you for reading the blog today, it's been a struggle getting it to where it is now but here it is in all it's glory. Never give up, keep pushing and one day that wall will fall, friend.
