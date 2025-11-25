---
title: "Day 119: Organization"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "August 09, 2025"
description: "Organizing the files."
---

Hello friends,

<br>

Finally, some peace of mind. Since starting this tutorial I've been looking forward to the episode on organization. I really didn't like having all this code in one disorganized file and I'm glad I could separate it all out.

<br>

## File Structure

<br>

So the goal is to have one main.cpp file in which I just import code and run it there. The main file will still have the same sections:

<br>

- Initialize
- Game Loop
- Update
- Draw

<br>

But instead of creating everything in this file, I will import objects from my header files. For example the player object will have a few built in functions:

<br>

- Load()
- Initialize()
- Update()
- Draw()

<br>

I'll also have a Math file in which I will store functions like my normalization function.

<br>

I took the liberty of doing a bit of spring cleaning in my folder, adding a .gitignore, as well as modifying my _vimrc to store temp files in their respective folder. Finally I added the new .cpp files to my Makefile and then boom, everything was tidy.

<br>

The piece of mind I felt after this was amazing, I'm really happy to see a relatively clean project folder. There's still more I'd like to do to further organize, but for today that should be enough. Thank you for reading today's blog, a clean home, is a clean mind, friend.