---
title: "Day 198: Strapi"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "November 17-21, 2025"
description: "Updates on the new website."
---

Hello friends,

<br>

So it's been a few days, again. Sorry for keeping up with the daily blog but here's what I've been working on.

<br>

## Strapi

<br>

The last time I made some changes to the website I started implementing this thing called Sanity. A headless CMS that I wanted to use to easily create the blogs. Unfortunately that never came fully to fruition because of a few reasons but really I just didn't know what I was doing like at all. Now I feel muuuuch more confident in getting this to work and actually understand one why I'm using the headless CMS and how.

<br>

The past few days I've been looking more and more into it and doing some testing to see how it works. But before getting into that I'll just explain why I'm using Strapi and what it is.

<br>

## What Is It?

<br>

Strapi is a headless CMS that makes it incredibly easy to store and modify content on your webpage. The basic version sets up a SQLite database and provides a very noobie friendly GUI to modify the data. There's a couple data types that you can store and modify but when it comes to the body of the blogs I had the choice of markdown and blocks. Given my current process of making blogs which is all in markdown I found it may be simpler to just go with that. However, I did spend the time to understand blocks as when I was using Sanity I didn't understand it at all.

<br>

When it comes down to it, what you're selecting is how the object from Sanity will look like. If you select blocks you'll get, well blocks, and there are well-made libraries that will convert that to actual elements. It's a bit more straightforward than markdown as the blocks directly correlate to an element. Markdown on the other hand, just spits out markdown, and once again there is a well-built library that converts markdown to React code. I actually am currently using said library to make this blog but upon better understanding what it's actually doing I've spent much more time in the docs understanding what's going on. This is one of those situations where yes, I could make my own code that could do the same thing, and I'm sure given enough time I could do that. But there's already this great solution, and that will free my limited time to do other things, like make the actual freakin website.

<br>

What Strapi is gonna allow me to do is write and save all my blogs within it, and then I can very simply fetch the content and display it on my website. I'm spending a bit more time modifying the output from the "react-markdown" library to make it look and behave how I want to. And it's cool that I can do so by just reading the docs and forums instead of AI. That's a small win for me. 

<br>

That's what I've been up to for the past few days. I've been really fighting the burn out after this calendar assignment but I've also been super anxious waiting for a response from the company. Hopefully I can get some news soon. But in the meantime thanks for reading today's blog. Until next time, friend.