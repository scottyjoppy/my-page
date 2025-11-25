---
title: "Day 177: Player Direction"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "October 14, 2025"
description: "Changing the sprite direction."
---

Hello friends,

<br>

One thing that has been on the back burner since the start of this project is the player sprite. In it's current state, it switches from idle to moving based on whether or not I'm pressing any keys. The bad part is that I'm just looping through the entire sprite sheet, regardless of which direction I'm actually going in. Today that changes.

<br>

## How To Change Direction

<br>

My sprite sheet is separated into four directions, right, left, up, down. Currently every sprite is saved in a vector and represented through id numbers. The id will automatically map through the sheet from 1 to infinity, without needing a double vector. I then use a modulo to loop through the sheet like this:

<br>

```cpp
textureTimer += deltaTime;
if (textureTimer > moveRate)
{
    m_sprite.setTextureRect(sheet.frames[sheetIdx % sheet.frames.size()].rect);
    textureTimer = 0;
    sheetIdx++;
}
```

<br>

But currently it will just loop through the entire sheet instead of by line. The solution came by first splitting my sheet into four for each side the player can face. Then I added an offset so that I could start the loop from whichever side I want to be using. I then exported everything to it's own function, added some safety so that I didn't start loops haphazardly, and added checks to detect when there's a change in direction:

<br>

```cpp
void Player::UpdateSheet(bool isMoving, float deltaTime)
{
    SheetLoader& sheet = SheetManager::Get(activeSheetID);
    int framesPerRow = sheet.frames.size() / 4;

    int newOffset = 0;
    if (m_lastClicked == 0) newOffset = 0;
    else if (m_lastClicked == 1) newOffset = framesPerRow;
    else if (m_lastClicked == 3) newOffset = framesPerRow * 2;
    else if (m_lastClicked == 2) newOffset = framesPerRow * 3;

    if (newOffset != m_sheetOffset || isMoving != m_wasMoving)
    {
        m_sheetOffset = newOffset;
        sheetIdx = 0;
        textureTimer = 0;
        m_sprite.setTextureRect(sheet.frames[m_sheetOffset].rect);
    }

    textureTimer += deltaTime;
    if (textureTimer > sheetRate)
    {
        textureTimer = 0;
        sheetIdx = (sheetIdx + 1) % framesPerRow;
        m_sprite.setTextureRect(sheet.frames[m_sheetOffset + sheetIdx].rect);
    }

    m_wasMoving = isMoving;
}
```

<br>

And there you have it, player now changes direction. A small win after fighting with collision for the past few weeks.

<br>

Thank you for reading today's blog, until tomorrow.

<br>

![playerMoving](/images/blog-images/day177-playerdirection.gif)