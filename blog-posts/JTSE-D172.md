---
title: "Day 172: Player Falls"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "October 06, 2025"
description: "Player can now fall of tiles as well as allowed for nothing tiles."
---

Hello friends,

<br>

The player can now fall off tiles, yay.

<br>

## How

<br>

```cpp
void Collision::Resolve(Player& p, const std::vector<CubeTile*>& tiles)
{
    for (auto* t : tiles)
    {
        if (t->m_tileId)
        {
            float topY = t->m_gridCoords.y + t->m_logicalHeight;

            if (p.m_gridPos.y < topY && p.m_vel.y < 0.f)
            {
                p.m_gridPos.y = topY;
                p.m_vel.y = 0.f;
                p.isJumping = false;

                break;
            }
        }
    }
}
```

<br>

It actually ended up being simpler than I thought so I'll try to explain what's going on. The whole thing loops through the tiles which in my current architecture is a vector of colliding tiles. I've defined tile id 0 to be empty space so I'll skip doing anything with those tiles. Then I need two things from each tile, it's grid coordinate, and it's logical height, which is basically how tall the tile is meant to be.

<br>

I'll then check whether or not the player is lower than said tile and that velocity is negative, hence falling. Then it's the actual resolution, set their position to the top tile, set velocity to 0, and reverse the isJumping variable.

<br>

There's a lot of room for improvement, for example I don't want to be constantly moving the player and colliding them with the ground I would like some sort of "Is On Ground" value that would stop the colliding with the floor or at least reduce some compute. But otherwise I'm pretty happy with how things are looking. Still a few bugs to deal with before I can move onto the other axes of collision but things are going well. Definitely taking longer doing this all one step at a time but I'm happier with it, I understand everything better so when I need to make a small change it's not the end of the world. Thanks for reading today's blog, I'll leave you now with a small taste of how it's looking so far.

<br>

![falling](/images/blog-images/day172-falling.gif)