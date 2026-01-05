---
title: "Day 225: Buckets!"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "January 02, 2026"
description: "Playing around with Supabase buckets."
---

Hello friends,

<br>

Gone are the days of keeping blog photos in my ever increasingly disorganized and confusing images folder. I've resisted learning about Supabase buckets do firstly to a lack of understanding as to what they are, and two an apprehensiveness to learn something that might be complicated. Well, it's not that complicated.

<br>

## Buckets

<br>

Storing data in a table is pretty straight forward, you can store integers, text, JSON, but what happens when things get more complicated? Files, images, videos, anything that can't be defined as a simple column... Buckets are the solution. They serve as a storage space for more complex data, and are pulled very similarly to the tables. In the case of images, Supabase provides a URL with which you can view the image. Simply pass that URL as your HREF and bam! A freakin image.

<br>

I spent some time testing out various API calls, giving time to see think of exactly how I should integrate this into my project. I can see potential in the future to automatically create buckets for blogs that have images. For the time being I'm just using it to delete files from my repo, and instead store the digitally stored image in Supabase.

<br>

Buckets opens a whole new avenue for how I will integrate flexible data in my personal page. I'm excited to learn more about their potential.