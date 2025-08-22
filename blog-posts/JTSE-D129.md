---
title: "Day 129: File Organization"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "August 20, 2025"
description: "Organizing file a bit."
---

Hello friends,

<br>

Every so I look back at my project and just am at awe at how ugly things are looking. Today, while I didn't spend too much time coding, I spent a bit of time moving my folders around. The first thing I wanted to do was move all my production files in a src folder. Once again I had to adjust my makefile but I discovered something cool.

<br>

Previously I would add every cpp file manually to my makefile, but today I found out you could just write this:

<br>

```cpp
SOURCES = $(wildcard src/*.cpp)
```

<br>

This way I go into the src folder and automatically take any .cpp file in there.

<br>

The second organization headache was renaming all my files to be lowercase. I was just following the tutorial and he was writing everything uppercased but now I realized that's dumb and I should make everything lowercase. Not only did I have to change every file and folder but also inside the files any time I manually wrote the location.

<br>

Took some time but I'm glad it's all over with and I have a nice organized project. Thank you for reading today's blog, may we march forward to a future bright, together, friend.