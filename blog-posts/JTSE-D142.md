---
title: "Day 142: Game States & Particle Simulation"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "September 02, 2025"
description: "Adding in game states and playing with particle simulation."
---

Hello friends,

<br>

Today I did quite a bit for the game, additionally, I messed around with simulating particles around a gravity source.

<br>

## Game States

<br>

I'm not sure what the best way to handle this is but the way I created different states was as follows:

<br>

```cpp
enum class GameState
{
    Menu,
    Playing,
    GameOver,
    GameWin
};
```

<br>

Then in my update section, I'd check which state I'm in and change things as needed:

<br>

```cpp
if (gameState == GameState::Menu)
{
    if (event.type == sf::Event::KeyPressed && event.key.code == sf::Keyboard::Enter)
    {
        gameState = GameState::Playing;
    }
}

```

<br>

Here if I'm in the menu and I press "Enter", it'll start the game.

<br>

In addition to this I added collision detection to the player and the enemy, win conditions, when you complete one, and I'll be honest, things have devolved into spaghetti code. I'm not proud of it but I think things will always improve as I continue making projects and know in advance how and what I'm making.

<br>

## Particle Simulation

<br>

There's two things I want to learn when it comes to off web dev, one is game development, and the other is algorithm and physic simulations.

<br>

Today I followed this video by **_[Zipped](https://www.youtube.com/watch?v=oTWnV5su3m0)_** that went over how to simulate particles around a gravity source. It was really interesting and my own coding knowledge allowed me to push things a bit further. It looked super cool and I'm super excited to try and simulate other things.

<br>

I would like to tackle realistic collision next but I think that will take me some time to figure out.

<br>

Either way that's all for today, on the final stretch now for the SpaceInvaders project, hope to talk about more cool developments tomorrow.
