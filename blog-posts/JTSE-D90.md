---
title: "Day 90: Notifications"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "July 05, 2025"
description: "Adding toggleable notifications to the app."
---

Hello friends,

<br>

Today I decided to take a step away from the Admin Client stuff and add in the notifications table.

<br>

## Notifications, How?

<br>

First things first I went to supabase and created a table to store in JSON format, the users preferences. I added just one option, notifications, a Boolean. The next step was to pull that table into the project. For that I created a new API route and wrote a very similar file as the one that pulls the plants out. From here is where I struggled.

<br>

## The Struggle

<br>

Trouble came when I was trying to pull something from the profiles table like such: profile.settings.notifications. I would expect to get the Boolean but was just met with disappointment. After a generous amount of time console log debugging, I could not determine what the issue was. I think this particular problem will require some rest before coming back to.

<br>

That's today! Slow and steady progress. It's tough completing this part of the project as I am really in the dark most times. Not sure why things are working the way they do, and not sure in the most part what I'm unsure about. It's a challenging place to be, but I'm confident I can get past this and thrive. Thank you for being reading today's blog. I hope to one day become smart, and perhaps provide help for the next generation. See you next time, friend.