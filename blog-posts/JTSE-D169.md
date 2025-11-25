---
title: "Day 169: Polygon Line"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "October 03, 2025"
description: "Detecting when the player hits a polygon's edge."
---

Hello friends,

<br>

Today I added detection for when the player hits a tiles top polygon. While the involved math will take me some time to fully understand I will go over generally how I've achieved this.

<br>

## How It's Done

<br>

I started things off by identifying how I could do this. Since the end goal is to allow the player to stand on platforms, I decided I would only need to keep track of the players feet and the top polygon in any given tile. Then when the player feetLine would intersect with the polygon, return true.

<br>

The thing I have trouble understanding is the actual math formulas that make it work. I understand from previous physics simulations that I first need to define the lines. Lines are basically the original point (p1) + the direction to p2 scaled by a given scalar. Something like line = p1 + t\*r. Then from here I still have to learn but it's something like projecting that line onto the polygon. Then you could determine if the line is going through or is parallel to the polygon's vertices.

<br>

I will be honest I used AI quite a bit here but I know I still have to learn and understand this stuff. But on the bright side it works, kind of. The only caveat now is that while I can detect when the lines intersect, I don't detect when the line is within the polygon. But that will be a problem for tomorrow. For today I'm happy with this progress. Thank you for reading today's blog, until tomorrow.
