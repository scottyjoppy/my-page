---
title: "Day 181: New Drawing Function"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "October 18, 2025"
description: "Redoing .Draw to draw things in the right order."
---

Hello friends,

<br>

Up until now when it came to drawing everything I would draw the entire map, then the player on top of everything. Now I want to fix that.

<br>

## Sort then Draw

<br>

Thinking about this from basics, I would need to gather all the "Drawables", save them in an array. Then sort that array from far to back so I draw the objects closer to the camera first. So I did just that.

<br>

```cpp
// Currently just takes in the player, and all the tiles
void DrawIso::DrawAll(std::vector<CubeTile*>& tiles, Player& p, sf::RenderWindow& window)
{
    std::vector<Drawable> drawList;
    // Increase the array by one to account for the player 
    drawList.reserve(tiles.size() + 1);

    for (auto* t : tiles)
    {
        // Skip drawing empy tiles
        if (!t->m_tileId)
            continue;

        // Initialize new tile then set it's depth
        Drawable tEntry;
        tEntry.sprite = &t->m_sprite;
        tEntry.depth = sf::Vector3f
            (
             t->m_gridCoords.x - 1,
             t->m_gridCoords.y + 1,
             t->m_gridCoords.z
            );
        drawList.push_back(tEntry);
    }

    Drawable pEntry;
    pEntry.sprite = &p.m_sprite;
    pEntry.depth = sf::Vector3f
        (
         p.m_gridPos.x,
         p.m_gridPos.y,
         p.m_gridPos.z
        );
    drawList.push_back(pEntry);

    // Sort based on depth
    std::sort(drawList.begin(), drawList.end(),
            [](const Drawable& a, const Drawable& b)
            {
            float depthA = a.depth.x + a.depth.z - a.depth.y;
            float depthB = b.depth.x + b.depth.z - b.depth.y;
            return depthA < depthB;
            });

    // Draw everything
    for (auto& d : drawList)
    {
        window.draw(*d.sprite);
    }
}

```

<br>

I still have a bug in which sometimes the player flashes through a cube but otherwise, things seem to work much better than expected. I'm pretty happy with how things are looking and I'm starting to see the light at the end of this project. It's been quite the learning experience and I'm super glad to have undergone it. Thanks for reading today's blog, until tomorrow.