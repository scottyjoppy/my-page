---
title: "Day 199: Breaking Everything"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "November 22, 2025"
description: "Day one of the two day adventure of deploying Strapi."
---

Hello friends,

<br>

So today I had the lovely experience of completely messing my whole page up.

<br>

## How?

<br>

Basically what happened is that I wanted to deploy Strapi for a few reasons. I wanted to start using env variables, and not have all my code dependent on localhost. After some research I realized I needed to deploy Strapi somewhere. I immediately saw the convenience of Strapi cloud but upon starting that I was prompted for a repo. I honestly thought it would be kinda "cringe" to deploy a whole new repo just for this admin CMS server so I looked for other options. Seems like yeah while a bit shitty, I need to have it in github if I want to deploy it. What I did find out is that I could split this current page into two folders, front end and backend. And then use each individually to deploy different websites. I did a version of this with Sanity but this time they would be properly separated. So I thought, what the hell, let's just move everything and pray for the best. Well that was a mistake.

<br>

## I Don't Get GitHub sometimes

<br>

It's true, most times, I just don't have a dang clue why things work the way they do. Currently I have two branches, this main one and one for new_styles. As soon as I moved everything in the main branch it seems to have just messed everything up. Files where in random places, the two branches seemed to have somewhat merged, and every movement I made seemed to ruin things more.

<br>

## First Stage Fixing

<br>

After stepping over everything I had to take a moment and just observe what the hell was going on. So I took note of which files were in which branch, I went back and forth with older commits to get the missing files from each, and manually reconstructed them both. It was tedious and annoying as hell, but somehow I managed to fix things. And now I got my two folders, frontend, and backend. Yay...

<br>

The conclusion is I need to understand branches better. I think I could benefit from experimenting with them more since yeah I just don't understand what I'm doing half the time with it. But this was all just the first part of this adventure, I still have to do what I set out for in the first place. Deploying Strapi. But that will have to come tomorrow. Thank you for reading today's blog, until tomorrow.