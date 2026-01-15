---
title: "Day 233: Finer Details"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "January 13, 2026"
description: "Testing on various devices."
---

Hello friends,

<br>

I've known since starting that Ascii will be a pain to make responsive for all devices. Especially when I get into the realm of consistent image borders, background patterns, and page dividers. I have the luck that I have quick access to view my website on a phone, iPad, and two laptops one running windows and one with macOS. This blessing allows me to really see the behaviour of my stylings across devices. When I first pulled the site up on the macOS laptop, it was so out of order it was unbelievable. So I knew I needed to make a change.

<br>

## Rem Vs Px

<br>

The main issue came from inconsistencies between these two sizing's. I need to stick to one or the other, rem being the better option. Why? Because rem, or root element's font size, will change consistently across your page. For example, I have a divider that is 100px long. Above is an image that is also set to be 100px long. While it may work on my screen and font, once the font size changes it no longer works. That's because things like font-size small and px are fixed sizes. But in my Ascii page, I want everything to also be relative to the font-size. That's where rem comes in.

<br>

In addition to the unit, I also need to avoid janky absolute transforming. Such as placing an image border, then adding stuff like *translateX(-10px)*. The better option is to use *::after & ::before*, as these will always follow the thing I'm trying to border.

<br>

It's also important to note that *overflow: hidden & min/max-height/width* will be your friend. I'm making sure to containerize things well so that I can always control when the text should just flow out of the page or be hidden.

<br>

It's not easy to make Ascii work consistently but I'm learning more and more everyday, and it looks dope.