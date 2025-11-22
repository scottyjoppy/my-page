---
title: "Day 153: Rethinking Isometry"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "September 17, 2025"
description: "Some re-evaluation of my code as I think about collision."
---

Hello friends,

<br>

So I have a lot of vibe coded garbage in my project at the moment. Today I deleted most of it and used my brain to make something functional.

<br>

## Vibe Coding Sucks, sometimes

<br>

Using an LLM to code can be a very useful tool, it reduces time to create boilerplate, can give good suggestions on formatting and naming, and overall is just nice to have someone else check the code and give their thoughts. But the issue is you need to be a good enough programmer to understand what they tell you, and point out the BS. In a fit of confusion and rage I added a lot of garbage to my project and now I'm standing on a house of cards and every new addition breaks the entire structure. I needed to take a step back and think about how I want to do this.

<br>

## The Fix

<br>

The main problem is despite working in an isometric world I've been clinging on to this idea of working in a 2D space. I had yet to add a definitive 3D vector, because I just wasn't sure if I was ready or needed it. I need it, bad. And things got way easier when I did implement it. Once I made that leap and started to think in 3D things became much simpler. So I started by going back into my player class, organizing my code, maintaining some format throughout, and adapting everything to work in a 3D space.

<br>

## Collision

<br>

The main struggle I had when trying to conceive all of this was that my brain kept leaping forward to all the collision issues I'm gonna have to deal with. For example how to collide two polygons, how to do floor detection in a 3D space, normalizing movement across every axis. These considerations, mainly the collision one, is what stopped me from making progress. I had my head stuck in a hole surrounded by screaming problems I have yet to even encounter. So it wasn't until I could agree with myself that, "Hey, let's deal with some of that later, let's do what I can now.", that I could actually move forward.

<br>

It's important to not bog yourself down by dealing with everything at once. Take the problems one at a time, and break down big ones to small ones. Small incremental steps forwards is what it's all about. Thank you for reading today's blog. Until tomorrow.
