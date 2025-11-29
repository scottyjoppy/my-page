---
title: "Day 202: Progression"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "November 28, 2025"
description: "Some quick updates on current coding endeavors."
---

Hello friends,

<br>

If it wasn't clear by the recent abundance of late blogs and multiple day blogs, I'm hitting a bit of a slump. After the whole coding assignment I've been on quite the low. It doesn't really help that my hope with getting into this academy is dwindling day by day. But putting aside the doom and gloom, here's what I've been working on.

<br>

## Markdown To Json To HTML

<br>

My current challenge is finding a way to simply edit blogs through the main page, without having to create them manually every time. I had a quick diversion today where I was trying to see how the Notion API could interact with my database but I think I just need to keep things simple and get this done. Here's what I'm dealing with:

<br>


- I have a database capable of storing JSON objects
- I have a library that can translate markdown into HTML
- I want to be able to edit both the HTML preview and markdown by typing onto a page
    - I would need to dynamically parse the text, send it to Supabase as a JSON, and convert that to Markdown, which will then become HTML

<br>

It's all complicated in my head but I think if I try hard enough I can get it to work. I was looking through notions page in dev mode to get some ideas and found out there's a element tag named "content editable" which literally allows you to just modify elements on the page. You can even use italic and bolding shortcuts. Crazy. So I know now I just need a way of autosaving the changes and storing them in Supabase.

<br>

Parsing things is uncharted territory for me but I hope I can figure it out in the next few days.

<br>

But that's all on my end for how things have been going. Wish all you readers the best, until next time, friend.