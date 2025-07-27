---
title: "Day 105: Project Fixes & Ideas"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "July 26, 2025"
description: "Making the watering component faster and thinking of future projects"
---

Hello friends,

<br>

Today I went to solving a small problem I had in the web app and came to an embarrassing solution.

<br>

## The Problem

<br>

The problem was that when I clicked water to water my plants, I had to wait a super long time before the component actually changed. I thought it might be an issue with slow fetching but after thinking for a second and actually testing it, I realized the component just needs to be refreshed after pressing the button.

<br>

So simple enough I thought, just use the refresh() function and I'm done. Well it wasn't working at first. I continued debugging, adding console logs, isolating files, components, everything. I was chatting with Claude trying my absolute best to understand why this simple problem was not getting solved - when I came to the embarrassing realization that I was testing on the deployed app, not the local test deployment. So yeah I solved it then moved on. Goes to show, sometimes if the solution should be simple, maybe you just made a simple mistake.

<br>

## Ideas

<br>

Now that I'm done this project I'm thinking, what next. While I've had numerous ideas, I think one avenue worth exploring is making a game. Hear me out. While I am a gamer at heart, the more I think about it, there's a lot of learning available to me down this avenue. For starters, web dev is great and all, but I'm fully limited to the internet, and through it, will never really understand the logic behind making apps or games separate from the internet. I think there's a lot of value in trying to make a game from scratch and I'm sure I could come up with something hopefully fun. Of course I still want to work on this page for a bit, as well as put a bow on the Water Me project, but I think my next project will be separate from the web.

<br>

That's all for today folks, thanks for reading the blog, sometimes the answer to all your problems is something dumb.