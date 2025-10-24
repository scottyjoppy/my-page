---
title: "Day 187: Item Creation & Use"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "October 24, 2025"
description: "Changing how I'm initializing items and giving it an actual use."
---

Hello friends,

<br>

So currently I'm just hard coding the item in at a specific location. I would like to be able to randomize it's spawning location more as well as make things a bit more dynamic. I therefore learned a bit about C++'s cool unique_ptr and make_unique.

<br>

## First Of All, Why?

<br>

From doing a bit of C in the past I at the very least understand that I can't just create and delete data willy nilly. I originally thought I could just create a vector and add and delete from it since the std::vector handles the memory for me. But what I learned today is an even better option, std::unique_ptr and std::make_unique. The first is a type of smart pointer that takes care of deletion for me. The second handles the creation and resetting of the garbage values on the heap. Together it looks something like this:

<br>

```cpp
std::unique_ptr<Item> item;

if (sf::Keyboard::isKeyPressed(sf::Keyboard::I))
{
int randX = std::rand() % 10;
int randZ = std::rand() % 10;

item = std::make_unique<Item>(cellSize, sf::Vector3i(randX, 1, randZ), SheetID::Item, gridOffset, 1);
}
```

<br>

Now I'm creating a smart pointer to be linked to an "Item". Then upon pressing I, I both clear the garbage values, and insert a fine and dandy item. This however does require that I refactor most of my code. Changing some item.m_gridPos becomes item->m_gridPos. Any call of item should first check if item is not nullptr. And then the draw function itself will need to change, not much though.

<br>

## Now The Use

<br>

Now I'll go over why I want to be able to create and delete items as I please. The whole point of this and yesterday's collision function, was so I could "Pick Up" the item, or at least do SoMEThIng.

<br>

I added a Reset() function to my map, which essentially just sets all the tile id's to 1, and then made it so that when the player collides with the item, it disappears. After a bit of testing I thought about a player.Rescue() function. This is to counteract the case in which the player might make a life or death jump to get the item but end up underneath the map. It will simply check the player's y position and if it's negative, teleport them up a bit. All in all it's working great and I'll leave a little snippet down here to oggle at.

<br>

The game is nearing completion, just two (couple more than two) major things to do. Screens/UI, and tile decay algorithm that's based on the player's position, so that I'm not just decaying tiles at random but give the players gameplay some sort of meaning. I am excited to move on from this sooonnnishh... But as for today, that's all I got, thanks for reading y'all until tomorrow.

<br>

![Gameplay](/images/blog-images/day187-gameplay.gif)