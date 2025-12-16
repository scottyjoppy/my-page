---
title: "Day 212: Styling Projects"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "December 15, 2025"
description: "Dealing with weird SVGs and styling the projects page."
---

Hello friends,

<br>

Today I made good use of the useProjects hook I made and started remodelling the projects page. I didn't get much time to spend on it but in essence I was able to pull in the data and start to separate things out into divs. I start my pages by wrapping everything in the main section element. Then from there I just have to decide how I want to lay things out. Wether I'd like to use CSS grid or Flexbox is the main decision. In this case I'm using Flexbox for most of the rows and containers. But within the row I'll use grid to position things as I'd like. The main reason for this decision is just greater control. If I want a row to be say split in 3, grid allows me to do so regardless of if there are things filling all three. You can almost set a kind of placeholder grid space. With Flexbox I'm limited to the amount of actual objects I'm placing. The CSS style justify-items can only really use space-evenly and space-between, both of which work dependant on how many items I'm justifying. But with grid. I can just say this div, regardless of size, will take up 2fr of the space. So that's basically why I went grid over Flexbox here.

<br>

But besides all of that I'm still working on making this page pop. Managing the SVG sizes has been a bit of a pain but I think I'm slowly making progress getting everything in place. Hopefully I'll get a publishable version out soon! Until next time, friend.