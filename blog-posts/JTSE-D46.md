---
title: "Day 46: SVG Text"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "May 22, 2025"
description: "Integrating text in an SVG element."
---

Hello,

<br>

Today's design progress was all about testing the billboards. What are the billboards? Well, currently my homepage shows the latest blog post. I would like a similar component displayed on the billboard. I’m just struggling to figure out how to do so.

<br>

## Embed In The SVG

<br>

I was hoping I could do something like add a text element in the path and call it a day. There’s unfortunately more nuance to the situation. The main being, text is not a valid child for path. I was stuck on this for a bit since despite it not being valid, no errors are shown. The path just renders ignoring the text element. Sad.

<br>

That’s when I was introduced to textPath. I haven’t had the chance to experiment with it much, but it involves creating a path, then refering to it’s ID in a textPath element. I’m hoping I can rotate and skew the path in Figma so the text will follow suit. Then it’s a matter of adding in the logic to control what it’s actually displaying.

<br>

## Fallback

<br>

The alternative is to implement the solution I had before, wherein I use basic HTML + CSS to make a shape that sits on top of the SVG element. I’d be more free this way to display not just text but anything I’d like, but it’s a few more hoops of complication in my way.

<br>

Just a quick side-shout-out before wrapping up the blog, in preparation to control some animations with React hooks, I came across this great video explaining all of them: **_[All React Hooks Explained in 12 Minutes](https://youtu.be/LOH1l-MP_9k?si=1ozwwOMdpzkcAYe0)_**. Great overview and description of many of the hooks.

<br>

It’s a grind getting stuck on such small concepts like rendering text in an SVG, but I’m determined to push through, stay driven, and learn something along the way. In an odd way I like these problems where there aren’t many explicit videos, blogs, or AI knowledge on. It forces me to actually debug and read docs to solve them. Glass half full I guess. Thanks for reading up on today’s blog. See ya tomorrow.
