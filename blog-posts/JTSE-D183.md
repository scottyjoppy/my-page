---
title: "Day 183: Moving Decay Logic"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "October 20, 2025"
description: "Moving the decay logic to it's own class."
---

Hello friends,

<br>

Today I wanted to take some things out of my main file namely the cube decaying logic I had going. At the moment every certain amount of time all the decaying tiles will change color. I want to separate the cube decay logic and how often the tiles begin decaying. So let's do that.

<br>

## How

<br>

Currently I just have a loop in the main update function which increase an accumulator variable until a specified time, then it will execute a decay. I started things off by clearing most of that loop and leaving logic that does one thing: Change the Boolean "decay" of a random tile. Making sure to only select existing and unmodified tiles.

<br>

Next I went into the Cube class and added a new function. One that will look at the tiles ID and switch it accordingly. Then I could set the rate at which I call that function, like so:

<br>

```cpp
void CubeTile::Update(float deltaTime)
{
    decayTimer += deltaTime;

    if (m_decay && decayTimer >= decayRate)
    {
        Decay();
        decayTimer = 0;
    }

    // Set tile just visually updates the tile
    if (m_tileId)
    {
        SetTile(m_tileId);
    }
}

void CubeTile::Decay()
{
    if (m_tileId == 4)
    {
        m_tileId = 0;
        m_decay = false;
    }
    else if (m_tileId == 3)
        m_tileId = 4;
    else if (m_tileId == 2)
        m_tileId = 3;
    else if (m_tileId == 1)
        m_tileId = 2;
}
```

<br>

It's all a bit crude but it works! Now I can control separately the tile decay and how often tiles are chosen. I do want to add some sort of algorithm that will decay tiles the player is near, but first I think I'll add a way to reset the map. I want some sort of randomly spawning object that the player will have to get to to continue playing. But that's for tomorrow. Thank you for reading today's blog, until tomorrow.