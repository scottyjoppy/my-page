---
title: "Day 184: Creating An Item"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "October 21, 2025"
description: "Adding an item to the game."
---

Hello friends,

<br>

Today I finally added an item to the game yay!

<br>

## The What

<br>

So here's my thought. The ground will slowly disappear. The player will have to move and jump around to avoid falling. But after just a few seconds, the entire board is gone, so we need a way to fix that. That's where the item comes in. I want something that will come somewhat at random, and allow the player to reset the game board. This item will be the hammer.

<br>

## The How

<br>

I made things easy on myself by copying most of the logic from player and cubeTiles. I basically copied the whole cubeTile file over, deleted and renamed half of it. Then used the player file to fill in the logical gaps. So far I just got some random sheet loading but tomorrow I'll actually get a proper sprite in there.

<br>

I think I've mentioned this before but since I've moved on from collision I'm rediscovering the joy in this project. I feel like I'm actually making progress and the game is really coming together more and more everyday. I also don't need to commit long hours of just constant painstaking debugging to get some stupid collision thing working. Things are good, and I'm glad. Thank you for reading today's blog. Everyone's got their mountains, the important thing is to keep climbing, friend.