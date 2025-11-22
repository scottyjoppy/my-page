---
title: "Day 17: Rust and textured backgrounds"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "April 23, 2025"
description: "Looking into Rust and facing the grainy background problem."
---

Hello,

<br>

I always hear so much about Rust and thought today I’d see what it’s all about.

<br>

## Rust

<br>

At first glance I was pretty confused. My first step to understanding is to get ChatGPT to generate a line of code in Rust, then the same line in languages I know better, like Python, JavaScript, and C. That usually helps me get a rough understanding of the syntax. Then I just had a read over a bit of the docs, mainly the **[Rust By Example](https://doc.rust-lang.org/rust-by-example/)** page. Overall, seems very interesting and will definitely focus more on it eventually.

<br>

## Textured Background

<br>

The feature: A grainy background similar to the **_[Motion](https://motion.dev)_** website.

The hurdles: I’m dumb.

Okay not that (entirely) but the main issue is that I can’t just set a blend mode multiply on the background color, because the way I created my sections on this website underlays an opposite-color background. What I mean is that to get this rounded inner and outer corner effect in the grid sections like on the homepage, about, and projects, I first make the whole section black. Then I created another box inside and round its corners. Since the whole section is already filled, the space that would normally be left after rounding is filled.

<br>

## Sick Pick

<br>

Stolen from **_[Syntax](https://syntax.fm)_**, but I’d like to share a fantastic learning repo called **_[Build your own X](https://github.com/codecrafters-io/build-your-own-x)_**. A compilation of amazingly written step-by-step guides on how to build basic programs from scratch. Whenever I have any itch and want to start learning about how a program is made, this is my go-to. They boast a wide variety of technologies in multiple programming languages, it's truly a one-stop shop for learning just about anything.  
Recently I've been trying to understand web browsers, and have had a blast reading Matt Brubeck's **_[Let's build a browser engine!](https://limpet.net/mbrubeck/2014/08/08/toy-layout-engine-1.html)_**. Can't recommend the repo enough.

<br>

Either way, I just want to say thanks again for your time and for reading; I'll see you in the next one.
