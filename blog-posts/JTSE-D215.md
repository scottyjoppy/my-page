---
title: "Day 215: Blog Page"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "December 18, 2025"
description: "Getting back into rendering the blog page."
---

Hello friends,

<br>

Today I decided to open up the pandoras box which is the blog page. Here's how it went.

<br>

## useBlogs()

<br>

I've already done a bit of testing with this page. Like creating a rudimentary JSON block to markdown converter. And while I had some way of pulling the info from Supabase I needed something more on theme and robust. So I started by moving all my logic to a dedicated useBlogs file by modifying some existing similar files, and I also sprung in an update function so I could actually update the content. I'll need to add a few other database interactions in the future but for now this fits my needs.

<br>

The next step was the actual blog editing page. I did rely quite heavily on AI to prototype some ideas I had. My original idea was to have everything inside one large div. I would make it content editable and then save as I type. I realized that this might not be the best solution for a few reasons. The first problem was just that it was very tough on the API to have so many updates. However, the main issue was that it would reset the text I was typing on every key press. This meant that my cursor would get reset to the start every time I typed anything. Not useable. So I settled on sending an update to the database during two instances, when I press the new save button, and when I close/refresh the page.

<br>

Another problem that came up is that I wanted to be able to edit the text both in preview mode, and in basic markdown. The problem with that however was that while I could create some generic way of converting markdown to blocks since I know exactly how I'm converting blocks to markdown, I couldn't do the same for markdown to plain text. The reason is that my block to markdown file is made by me, but I'm relying on a library to *prettify* everything from markdown to plain text. I don't think it's a super necessary step for me to figure all that out so I'll just swallow the bullet and make just the markdown editable. 

<br>

At the moment I'm just dealing with a bunch of small bugs from the vibe coding that I'll have to go back in and fix but it's lookin pretty good. I'm hoping that I'll be able to really personally tailor the whole blog creation process to my exact needs as well as make it simpler to edit and update them when needed.

<br>

Thank you for reading today's update on the coding, until tomorrow, friend.