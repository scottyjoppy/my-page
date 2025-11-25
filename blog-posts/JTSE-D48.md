---
title: "Day 48: React Hooks"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "May 24, 2025"
description: "Finally adding in hooks to add functionality to the page."
---

Hello,

<br>

Today I finally did it, I added the React hooks. Honestly speaking, I've been kinda dreading doing this for like a week now but I'm glad I could face it today. You know, it's one thing to read up on something and maybe watch a few tutorials, but actually doing it is so different. Going through the motions and problem solving on your own forces you to develop an actual understanding that can't be achieved through tutorials. For example:

<br>

## UseState()

<br>

I'm already somewhat familiar in how to do things in vanilla JS. It's not much, but I have at the very least done some stuff on FreeCodeCamp and on my very first project. So I first wanted to code something like a variable - one that represents which island is selected if any. In a regular JS project I would just create a variable with const or let and that's that. In React however, you usually use the useState() hook to define stateful variables. Sick.

<br>

## UseEffect()

<br>

Another vanilla JS concept I had to translate was eventListeners. React can use addEventListener(), but it should be inside of useEffect() or useLayoutEffect(). UseEffects return value is a cleanup function - for example removing event listeners. Dependency arrays are a sort of watchlist that useEffect monitors. For example given the dependency of island, useEffect will trigger every time that variable changes.

<br>

## UseRef

<br>

Although I'm no professional with this hook, the way I used it was simply to have some way of specifying a reference. For example I had to refer to the SVG in order to add an attribute. So I set its ref attribute to my useRef hook variable. Simple as that. But I'm aware that you can also use it to store variables that you'd like to mutate without triggering renders, but I have yet to explore that.

<br>

Glad I could cram so much hook knowledge in today and now that I got the ball rolling I can continue to learn and improve my work. Big step today in terms of the logic behind the image. Excited for what's to come. Thank you for reading today's progress, see ya on the next one.
