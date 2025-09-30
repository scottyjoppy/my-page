---
title: "Day 161: Plan Of Attack"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "September 25, 2025"
description: "New plan for how to do collision, first steps in implementation."
---

Hello friends,

<br>

After dicking about with vibe coding for a day I've decided on a new plan of attack for my collision journey.

<br>

## The Plan

<br>

I want to build things up from baby steps. The first being, hey, I don't want to detect every single tile compared to the player. That will destroy my laptop. I need a way of filtering out potential colliders with more and more accurate checks. The first check I want to do is a simple distance check, is the cube near the player, if it is, add it to the vector. Next AABB, even though I'm dealing with polygons I don't need to be crazy accurate with this one. I just need to generally check within those cubes, does AABB confirm they are colliding with the player? If not, remove it from the vector.

<br>

So today I started on that first point, creating a function will just check for nearby cubes.

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
    if (dist <= 3)
        std::cout << t->m_gridCoords.x << std::endl;
}
```

<br>

While it looks a little verbose I had to do some quick fixes to make it work. My map already had a function that returns all the tiles in a vector so I first stored that in a variable. Then I would loop through all the tiles, using my patent pending GetDist function which I'll show next. The function however, requires two float vector3's so I had to convert the gridCoords to floats. GetDist uses some common length finding math that was basically what I already had in my physics simulations.

<br>

```cpp
float Math::GetDist(sf::Vector3f obj1, sf::Vector3f obj2)
{
    float dx = obj1.x - obj2.x;
    float dy = obj1.y - obj2.y;
    float dz = obj1.z - obj2.z;
    return std::sqrt(dx * dx + dy * dy + dz * dz);
}
```

<br>

I just had to make modifications to it so it works in 3D space.

<br>

But there you have it a simple distance check to see if the cubes are near the player. Thanks for reading today's blog, I'll see you on the next one.
