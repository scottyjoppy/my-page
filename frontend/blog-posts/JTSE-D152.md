---
title: "Day 152: Bugs & Textures"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "September 16, 2025"
description: "Fixing some problems and adding some actual sprites."
---

Hello friends,

<br>

Today I finally got a little guy in the project:

<br>

![lil guy](/images/day152/idlesprite.gif)

<br>

At the moment I just have him on a loop going through the sprite sheet. It was quite a learning experience but I did a lot to get that guy schmoovin'

<br>

## Managers

<br>

Before making a manager file I had a general texture loading file that handled getting sheets in and assigning id's to each cell. This way I wouldn't have to write this process more than once, for sheets at least. Next was the SheetManager. It looks something like this:

<br>

```cpp
#include "SheetManager.h"

std::map<SheetID, SheetLoader> SheetManager::sheets;

void SheetManager::Load()
{
    sheets.emplace(SheetID::PlayerIdle, SheetLoader("assets/textures/player/idle.png", {80, 80}, {16, 16}));
    sheets.emplace(SheetID::PlayerWalk, SheetLoader("assets/textures/player/walk.png", {80, 80}, {16, 16}));

    for (auto& [id, sheet] : sheets) sheet.Load();
}

SheetLoader& SheetManager::Get(SheetID id)
{
    return sheets.at(id);
}
```

<br>

In the Load function I can add the new sheets, set their file directory and sizes. Because of the files I'm using now I made it so you would define the size of the individual squares because sometimes sprites are not covering it fully but instead have some padding of sorts. Then you can define the actual size of the space with the sprite. Then when it comes to calling this object you would just select by the SheetID like so:

<br>

```cpp
SheetLoader& sheet = SheetManager::Get(activeSheetID);
```

<br>

Passing sheet as a reference to the actual loaded sheet. Dope.

<br>

Something I need to look more into is this whole "Get" and "at" words I used. They remind me sort of how python you can search within dictionaries using the actual name of the parameter, but in a more C++ way. Either way this all works, finally, and I'm happy. Thank you for reading today's blog, slowly but surely I'm getting something playable.