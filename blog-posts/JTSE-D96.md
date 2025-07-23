---
title: "Day 96: React Email, Deeper"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "July 17, 2025"
description: "Delving deeper into using React Email practically."
---

Hello friends,

<br>

Today I experimented more with React Email, adding some stylings, props, and planning for it's use with my other functions.

<br>

## The Email

<br>

Since I've been in the React zone for a few months now, something like React Email is very intuitive. It's easy to write custom emails; by just adding a few props I can include the users name, specific plants, and any other user specific information I need. It's great. Additionally, now that I can just use Tailwind, I can style it super quickly. There are a few things to get used to, for example most hover: active: focused: pseudo-selectors don't work reliably in emails. So I need to test these explicitly in the email previews or in testing.

<br>

My current template will map the plants inputted, and while technically I shouldn't create and send an email in the first place if there are no plants, I wanted some email to be sent in that situation. But for testing and previewing purposes, I had to create a fake user and plants to insert into the React Email function so I could see how they are displayed.

<br>

I'm fast approaching the final stretch which are CRON jobs and debugging, I also have the more fun part of adding in some styling and sprites to make things more fun lookin'. Part of me is also pretty excited to get back to THIS page and working on my isometric images. But all things in due time. Thank you for reading today's blog, seek to find what to trees and plants is the sun, friend.