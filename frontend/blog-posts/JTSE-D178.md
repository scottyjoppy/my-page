---
title: "Day 178: Background"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "October 15, 2025"
description: "Adding a background to the game."
---

Hello friends,

<br>

Today I decided to make the game actually look a bit better.

<br>

## How To Background

<br>

Plan is simple, let's add a background that has some sort of small animation. I haven't done this before but I'm sure once I break it down to first principles we should be able to figure it out.

<br>

So say I do something like what the player class looks like and load the animated background from a sheet. I'll split the image horizontally, Aseprite makes this pretty easy. Then I'll load the file into an SFML texture variable:

<br>

```cpp
if (!m_texture.loadFromFile(filename))
    return false;
```

<br>

I'll then set the texture rect to be the size of one frame, I'll also save it in a vector for reusability:

<br>

```cpp
for (int i = 0; i < frames; i++)
{
    sf::IntRect rect(i * frameSize.x, 0, frameSize.x, frameSize.y);
    m_frames.push_back(rect);
}
```

<br>

Next I'll write an update function in background, and change the frame by looping through the vector I just made. I'll make use of a timer and rate variable to control how quickly I'm iterating through the background frames. As well I'm making use of modulo to continuously cycle through the vector:

<br>

```cpp
void Background::Update(float deltaTime)
{
    m_timer += deltaTime;
    if (m_timer >= m_frameRate)
    {
        m_timer = 0.f;
        m_currentFrame = (m_currentFrame + 1) % m_frames.size();
        m_sprite.setTextureRect(m_frames[m_currentFrame]);
    }
}

```

<br>

Then I draw and boom! Here we have it. Thank you for reading today's blog, nothing crazy but it's nice to see things looking nicer. Until tomorrow, friend.

<br>

![background](/public/images/blog-images/day178-background.gif)