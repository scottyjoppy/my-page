---
title: "Day 87: The First Hiccup"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "July 02, 2025"
description: "Finally starting to write the admin client and Cron function."
---

Hello friends,

<br>

So I just started. After a week of putting this off I sat down and started. Only to be stopped immediately by an unforeseen error.

<br>

## Admin

<br>

One thing I didn't consider is that if I want to loop through all the plants on the site, I would need to first, gain access to all the information in the database. In it's current state I didn't have a way of doing so and I had no idea how to do it. So I thought for a bit. Currently, if a user retrieves info from the database, my RLS policies limits their vision to only their own content. So if I want to access everything I need something that is either greenlit by the RLS, or can bypass that altogether. After a bit of digging, I found of Supabase gives you not only the anon user API key, but an additional service_role key. This key bypasses these limitations and allow me to access everything.

<br>

## Implementing

<br>

So once again I knew what I sorta needed to do, but not how. I first revisited my current setup, I create two clients, a user client with the anon key, and a server client for backend stuff. I learned that I should create an admin client that I could use for example in creating this checkAllPlants function. Super! 

<br>

I didn't have enough time today to actually execute this second part here, but I'm glad I could bust out of this roadblock right away. Thank you for reading the day's blog, I will be back to tackle this stage of production, see you next time, friend.