---
title: "Day 117: Sprites & GitHub"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "August 07, 2025"
description: "Adding sprites to the screen and using GitHub in Vim."
---

Hello friends,

<br>

Today I added in some sprites and tried using GitHub with Vim.

<br>

## Sprites

<br>

The SFML library makes it really easy to add and move sprites with the Sprite Object. First I had to download some sprite sheets from **_[opengameart](https://opengameart.org)_**. Then I had to calculate the size of one sprite.

<br>

```cpp
// The image is 128 x 48
// It contains 8 sprites per line and has 3 lines
// 128 / 8 = 16 : Width of 1 Sprite
// 48 / 3 = 16 : Height of 1 Sprite
size = sf::Vector2i(16, 16);

if (texture.loadFromFile("Assets/Player/Textures/Hero.png"))
{
    std::cout << "Player Images Loaded!" << std::endl;
    sprite.setTexture(texture);
    sprite.setPosition(0, 400);

    // Pick the first sprite on the first line
    int XIndex = 0;
    int YIndex = 0;

    sprite.setTextureRect(sf::IntRect(XIndex * size.x, YIndex * size.y, size.x, size.y));
    // Magic number for scale
    sprite.scale(sf::Vector2f(3, 3));
    sprite.setPosition(sf::Vector2f(0, 0));
}
else
{
    std::cout <<"Player image failed to load!" << std::endl;
}


```

<br>

There you have it, a sprite on a screen. I played with some if statements in the update loop to allow me to move the sprite around, as well as added an enemy sprite. 

<br>

## GitHub

<br>

I unsure how to use GitHub in Vim but was quickly reassured that it's fairly similar to how I'm using it in VS Code. Once I created my repo I was able to add my current files, commit and push it all to production. I think I still have a lot to learn especially in best practices when using GitHub. For example I hear it's usually best to commit everything to a separate branch and then later on merge with the main one. But seeing as I'm the only person working on this I don't think it's such a big deal.

<br>

That's all I got for today. Thank you for reading up on today's update, I'm really enjoying game development and am super excited to continue down this road. I'll see you on the other side, friend.