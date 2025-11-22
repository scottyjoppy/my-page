---
title: "Day 76: RLS - The Solution"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "June 21, 2025"
description: "Using RLS to fix my sorting issues."
---

Hello friends,

<br>

So two days ago I was pretty stumped trying to figure out how to implement a functional sorting system for my plants. As well, as how to normalize their sort number on delete, and give the user the ability to move things up and down.

<br>

## Quick Git Struggle

<br>

There's so much in regards to using GitHub that I'm so far from understanding. There's so many things you can do with Git, and I believe I'll only really need to know most things when I'm working as part of a team. Unfortunately, that means I am left to my own devices when I have to do anything harder than git add, commit, and push. I'm in dire need of some guidance and practice when it comes to Git because when I have to merge branches, or revert my project, I'm so lost and afraid I'll lose everything. I bring this all up to just be clear on my relationship with Git at this point in time, and express that I do see the value of understanding it further and have aspirations to do so. Today, began with me reverting all the crap work I did in my one evening of failure, to the most recent commit.

<br>

## RLS

<br>

Supabase's AI agent was super helpful in spinning up a few policies for my RLS. If I chose not to use AI, there's also a few common templates to pick from. All-in-all it worked like a charm. Once the policies were set I didn't have to change much of my code at all. If anything I was deleting more the code I had to select only user-specific data from the database. Instead just keeping a consistent select all. Then all that logic of separating data was handled by the row level security. I'm thrilled I could find such a simple solution to this seemingly complicated problem.

<br>

It's a good reminder what taking a step back and reading the docs can do. I have this awful tendency to just keep throwing my head at the wall till it sticks. It takes me looking back at the mess, clearly identifying the problem, researching, and then solving it fully. I'm sure I could find some hack and isolate the user in code and whatever, but I fear these solutions are just hacked jobs, strung together with string so tight it could snap. I must always seek the best, most robust solution. I'll hold myself accountable to that. But that is all I got for today, thank you for your time. May the starts guide us towards the light, friend.
