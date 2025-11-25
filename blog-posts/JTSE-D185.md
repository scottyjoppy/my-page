---
title: "Day 185: Drawing The Item"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "October 22, 2025"
description: "Adding Item to the drawing file and creating a shadow."
---

Hello friends,

<br>

Today I wanted to add the newly created item to the drawing function I whipped up the other day- it was surprisingly easy.

<br>

## Adding Item&

<br>

I think because I already dealt with the majority of the big challenges with this function, adding in Item was a piece of cake. I knew exactly what I had to do to get it in and was able to get it working in a few seconds. Working is used a bit loosely here, yes it has it's bugs and I'll go over them just down below:

<br>

```cpp
// First I'll show this, a vital component of the drawing function. 
// The simple option was to just take the m_sprite variable from these files and draw them all here.
// The problem with that is that I can't draw anything else, like debugging lines, or shadows.
// The solution, create this entity* that will then be inserted depending on the chosen type.
enum class DrawableType { Player, CubeTile, Item };

struct Drawable
{
    DrawableType type;
    void* entity;
    sf::Vector3f depth;

    void Draw(sf::RenderWindow& window) const {
        switch (type) {
            case DrawableType::Player:
                static_cast<Player*>(entity)->Draw(window);
                break;
            case DrawableType::CubeTile:
                static_cast<CubeTile*>(entity)->Draw(window);
                break;
            case DrawableType::Item:
                static_cast<Item*>(entity)->Draw(window);
                break;
        }
    }
};
```

<br>

Now I can specify what my drawable is directly in the function, like so:

<br>

```cpp
void DrawIso::DrawAll(std::vector<CubeTile*>& tiles, Player& p, Item& i, sf::RenderWindow& window)
{
    // Make the vector of all the drawables
    std::vector<Drawable> drawList;

    // Save an extra spot for player, and item (using a magic number)
    drawList.reserve(tiles.size() + 2);

    for (auto* t : tiles)
    {
        if (!t->m_tileId) continue;

        // Save the tiles as drawables
        Drawable tEntry;
        tEntry.type = DrawableType::CubeTile;
        tEntry.entity = t;
        tEntry.depth = sf::Vector3f
            (
             t->m_gridCoords.x - 1,
             t->m_gridCoords.y + 1,
             t->m_gridCoords.z
            );
        drawList.push_back(tEntry);
    }

    // Save the player as a drawable
    Drawable pEntry;
    pEntry.type = DrawableType::Player;
    pEntry.entity = &p;
    pEntry.depth = sf::Vector3f
        (
         p.m_gridPos.x,
         p.m_gridPos.y - 0.5f,
         p.m_gridPos.z
        );
    drawList.push_back(pEntry);

    // Save the item as a drawable
    Drawable iEntry;
    iEntry.type = DrawableType::Item;
    iEntry.entity = &i;
    // Mess with the depth values to get it in the right position (visually and logically)
    iEntry.depth = sf::Vector3f
        (
         i.m_gridPos.x - 1.f,
         i.m_gridPos.y - 1.f,
         i.m_gridPos.z
        );
    drawList.push_back(iEntry);

    // Sort that bihh
    std::sort(drawList.begin(), drawList.end(),
            [](const Drawable& a, const Drawable& b)
            {
            float depthA = a.depth.x + a.depth.z - (a.depth.y);
            float depthB = b.depth.x + b.depth.z - (b.depth.y);
            return depthA < depthB;
            });

    // Drawwwww!
    for (auto& d : drawList)
    {
        d.Draw(window);
    }
}
```

<br>

There it is, now I'm drawing everything. I still have some tweaking to do to make it all work smoothly but I also know I'm not gonna sink weeks into getting it perfect. It's working well and I'm glad. Thank you for reading today's coding blog, I wish you all the best in your personal journeys, stay strong out there, friends.