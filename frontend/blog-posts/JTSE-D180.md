---
title: "Day 180: Adding Music"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "October 17, 2025"
description: "Using SFML's audio and music classes for the first time."
---

Hello friends,

<br>

Simply put, today went way better than I could ever have expected. I was reading over the docs to try and understand how to add a song into my project. While it seemed straight forward I noticed that my import was not the same:

<br>

```cpp
// Instead of the usual:

#include <SFML/Graphics.hpp>

// I had:

#include <SFML/Audio.hpp>
```

<br>

After getting an immediate flashback to the multiple days it took me to link and run SFML and C++ I was ready for a battle to get this to work. Surprisingly, it was no problem and I figured it out immediately.

<br>

It was pretty much as simple as adding a line in my makefile to add the audio linker, and then copy the dll file into my project. I'm thrilled that it worked and I do think I understand the HOW of it all a bit better. Like for example instead of manually bringing those SFML files into these projects I COULD just add them to my environment variables on windows. I still need some time to try that out but maybe before the next endeavour I'll try to do that.

<br>

Either way that's all I got working today. Thank you for reading today's blog, until the morrow friends.