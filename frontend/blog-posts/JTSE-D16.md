---
title: "Day 16: Conway's Game of life"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "April 22, 2025"
description: "Copying online components and visualizing cellular automata."
---

Hello,

<br>

Learned a lot today, mainly what I need to learn going forward.

<br>

## Online Components

<br>

On the internet there exists a large ecosystem of React components. Today I had a look at some animation components that use Motion specifically. There’s no shortage of well made components, that provide the source code to easily implement into your own website. But what I learned today is that embedding a component into a website is a skill—a skill that becomes easier the more you already know what you’re looking at. I don’t think I’m at that point yet; it’s the same with AI generated code. It takes some finessing to get it to work, but I think it’s best not to copy code I can’t understand.

<br>

## Cellular Automata

<br>

_A cellular automaton consists of a regular grid of cells, each in one of a finite number of states, such as on and off._  
-Wikipedia

Since I learned about it, I've been very interested in **_[Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)_**. It's a cellular automaton that follows four basic rules.

1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.
2. Any live cell with two or three live neighbours lives on to the next generation.
3. Any live cell with more than three live neighbours dies, as if by overpopulation.
4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

This simple set of rules creates such fascinating patterns and shapes, and it's just so fun to marvel at. There's a few other of these kinds of algorithms that produce cool visuals I'd like to create in the future like **_[Boids Flocking algorithm](https://en.wikipedia.org/wiki/Boids)_**, **_[L-System Fractals](https://en.wikipedia.org/wiki/L-system)_**, and **_[Langtons Ant](https://en.wikipedia.org/wiki/Langton%27s_ant)_**. Today I followed **_[Ben Awad's](https://www.youtube.com/watch?v=DvVt11mPuM0)_** amazing tutorial on creating the Game of Life. I'll be honest: I had to learn—and still have to learn—what he wrote but I'm confident I can take the code apart and practice making it myself. Hopefully I can make my own tutorial someday.

<br>

My future plan with these algorithms is to join them with my other passion, music. Whether it be patterns based on specific frequencies, tones, tempo, or even feel. I'd love to find a way to connect the two. As well as rediscover my love for math.

<br>

But today was a great day; I'm glad I got to work on something kinda new just for fun. It's good to take that time every now and again. Thank you for reading this far, hope you have a great day.

<br>
<br>

_[Eversport Draft Repo](https://github.com/scottyjoppy/eversports-draft)_
