---
title: "Day 135: Placing Tiles Two"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "August 26, 2025"
description: "Continuing to try and add tile placing functionality."
---

Hello friends,

<br>

Today I completed some of the logic to allow me to place tiles on the map.

<br>

## How It Works

<br>

```cpp
// MouseTile.cpp
bool MouseTile::IsMouseClickedOnTile
(
     sf::Vector2f& tilePosition, 
     sf::Vector2i& gridPosition, 
     const sf::Vector2f& mousePosition
) const 
{
    if (sf::Mouse::isButtonPressed(sf::Mouse::Left))
    {
        tilePosition = m_tilePosition; 
        gridPosition = m_tileGridPosition;
        return true;
    }
    return false;
}

// Map.cpp
void Map::Update(double deltaTime, const sf::Vector2f& mousePosition)
{
    sf::Vector2f tilePosition;
    sf::Vector2i gridPosition;

    if (m_mouseTile.IsMouseClickedOnTile(tilePosition, gridPosition, mousePosition))
    {
        int i = gridPosition.x + gridPosition.y * m_grid.GetTotalCells().x;
        m_mapSprites[i] = m_mouseTile.GetSprite();
    }
}
```

<br>

So let's break this down a bit. The first block of code is the MouseTile file. In addition to the boilerplate Initialize, Load, Update, and Draw functions, I've added a third: IsMouseClickedOnTile. Which essentially waits until the tile is clicked, before sending a few variables to the Map file. 

<br>

Next the Map file will wait for the function to be true before placing the clicked tile on the cell. Easy as that.

<br>

The main point of confusion and headache is how variables are being passed around in this tutorial. As much as I enjoy it the speaker can at times be all over the place and I'm not sure what's right and what's wrong. One thing I assume is good is to pass most variables around by reference. Thus saving space as we're not creating copies of everything. I'll show an example of that here:

<br>

```cpp
int amount = 5;

int timesTwo(int number)
{
    return number * 2;
}
```

<br>

In this situation if I wanted to use the function I would have to save it in a variable:

<br>

```cpp
amount = timesTwo(amount);
```

<br>

Which is a bit annoying since I'd like to just call the function and have the amount variable change. If that's my desired outcome I can do it this way.

<br>

```cpp
int amount = 5;

void timesTwo(int& number)
{
    number *= 2;
}

timesTwo(amount);
```

<br>

This gives me the same outcome, but I'm not passing in "amount" as a reference. So when timesTwo executes, it literally takes "amount" at it's address, and modifies it. This is used very often throughout the project in order to better improve speed and space efficiency.

<br>

Thank you for reading today's blog, until tomorrow.
