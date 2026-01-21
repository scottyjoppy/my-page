---
title: "Day 45: Animation Experimentation"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "May 21, 2025"
description: "My process in testing out some animations."
---

Hello,

<br>

I played around today, with some potential ways I can implement the isometric image. I really just dove in and started designing hoping the idea would come to me and I believe it has. I have this vision of zooming into an island and then using that to navigate through the portfolio. So today I did some tests to see how to first of all style SVG elements.

<br>

## ID Names

<br>

I found a plugin on Figma that allows me to customize the SVG export to toggle numerous attributes. Among those options is one for using layer names as ID’s. This helped big time in allowing me to reduce the work needed to copy and paste an SVG into my project. Unfortunately, before fully utilising this I didn’t think to make all the names without spaces so I couldn’t query them properly. I quickly changed all the names and sorted out my groupings, then all was well.

<br>

## Adding Classes

<br>

At first I wanted to try to make something like a building a clickable link. I imagined I could just surround the element in an anchor tag then specify the href. That worked surprisingly well even bounding the clickable area exactly to the size of the building. I wondered however, if I could do without the anchor tag. So I started applying my classes directly to the groups and path elements which also worked perfectly. It was also helpful to look at the docs here and just try to wrap my head around what SVG elements are out there: **_[Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element)_**.

<br>

## Animating

<br>

I didn’t have enough time to get into state and function today but I just added some simple hover animations to make it look more alive. I tried to visualize how it could look by scaling the image up 700% and translating it into view. Thank God for vectors as this effect is only possible due to the dynamic scaling of SVG’s.

<br>

I’m glad I could test out some of these animations today and really start to bring to life this image. I still have a long ways to go in terms of designing and filling the landscape but I’m glad to have a better overview of how to proceed. Thanks for reading up on today’s blog; see ya tomorrow.
