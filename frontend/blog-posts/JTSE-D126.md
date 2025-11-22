---
title: "Day 126: Pointers and Maps"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "August 17, 2025"
description: "Small steps towards map creation, understanding pointers."
---

Hello friends,

<br>

One thing that I remember being quite different in C was creating arrays. You can't just declare an array and then add values to it, things are a bit more complicated.

<br>

## The Difference

<br>

While I still am trying to understand the difference, I will do my best to explain it crudely here. The problem today is that we want to create an array to store all the tiles from the tileSheet. Variables need to be defined in the header file and arrays need to be written with a specific size in C++.

<br>

```cpp
int arr[5];
```

<br>

Like above. But because I'm not certain how big the array will be at runtime I can't give the array a defined size. The solution given in the video was as follows.

<br>

```cpp
//---Arr Class---
struct Arr
{
    int id = -1;
}
//---Header---
Arr* array; 

//---Proj---
tiles = new Tile[totalTilse]
```

<br>

This way I'm creating a pointer to tiles, which I'll then initialize later using the new keyword and the calculated value "totalTiles". But digging a bit deeper I found an even simpler solution.

<br>

What I'm still working on understanding is this difference between using memory in the Heap vs the Stack. What I know now is that creating the array using the new keyword creates it in the heap. But doing so also requires that I then free that memory once the program has run. Another solution is as follows;

<br>

```cpp
//---Header---
std::vector<Tile> tiles;
//---Prod---
tiles..resize(totalTiles);
```

<br>

This way is just a bit more modern and handles the memory for me.

<br>

Pointers are a bit complicated and I'm trying my best to understand them and hopefully by the end of this project I'll be comfortable enough to try and actually explain it all. But that's all I have for today, thank you for reading, I'll see ya tomorrow.