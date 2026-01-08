---
title: "Day 230: Vector Considerations"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "January 07, 2026"
description: "A helpful side effect of Ascii art."
---

Hello friends,

<br>

I had the idea to try and add some pixel art to the page. I went down quite the rabbit hole. I found a well know painting *Creation Of Adam* and ran it through a few different image to pixel converters. I limited the colors to two and was left with a large pixelated image. But once I got it on my page I couldn't help but notice how shit it looked. That's when I realized that raster pixel art sucks. I was spoiled to have implemented mainly SVG art thus far. So looking at this blurry pixel image, it just looked awful.

<br>

I browsed the internet for a few solutions and [Scalable Pixels](https://www.scalablepixels.com), a website that would convert your image to an SVG. It would do so by first converting the entire image to an array of pixels and then wrap it all together in one SVG element. I thought hell ya and ran my image through.

<br>

I should've known. 

<br>

A full HD image divided into thousands of vector pixels was actually too much... It ran suuuper slow, copying this chunk of an SVG slowed my laptop to a halt. It was just, not the solution I needed.

<br>

## The Solution

<br>

After giving it some thought I agreed that maybe it was fine if I just used Ascii art again. And actually, text characters are vectors. Or at least they seem to render very smoothly. Thus making it the perfect switch. Yet another reason why Ascii art rocks. Try it sometime.