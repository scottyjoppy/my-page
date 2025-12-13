---
title: "Day 209: Update Process"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "December 12, 2025"
description: "How I'm updating pages."
---

Hello friends,

<br>

Today I just wanted to go over how I'm going about updating the pages. So let's dive right in.

<br>

## Step 1

<br>

Well really I only have four main pages all with different types of requirements. But essentially this how I start each one. I want to keep each page inside a component. I've started a new file structure in which I'm saving pages and their page specific styles. And then in my app directory I can basically delete everything in the page tsx file and just write in the component. I just prefer this clean approach. I'm also in this step identifying any of the bootstrap components I'll have to delete and redo myself.

<br>

## Step 2

<br>

Next step is to identify what I'll need from the database. I'll create any new functions I would need as well as the respective tables within Supabase. I'm trying to find a good balance between not overcomplicating the tables and foreign keys as well as keeping things clean, organized and not repetitive. Once I can fetch things and display them I just do a bit of console log debugging to make sure everythings coming correctly.

<br>

## Step 3

<br>

From here it's all style. I'll use that page specific stylesheet to organize and style as I want, as well as consider any styles that should be added to the global sheet. For example I wanted to change the look of the outlines on my items cause I think the default black and white outline looks ugl-yyy. So I changed the look on anchor tags on the global sheet and when I wanted something more specific like on the navbar I just added it with the !important marker to override the global style.

<br>

That's basically how I'm updating the pages. Out with the old, in with the new. My main goal overall is to void my project of any bootstrap components. I truly believe my abilities should be sufficient to make this portfolio website without the need for bootstrap. The only thing that I do like them for is for responsive design but I know I can get that done myself with just a bit of thinking. Either way, thank you for reading today's blog, until next time.