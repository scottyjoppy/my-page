---
title: "Day 75: Delving Into The Docs"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "June 20, 2025"
description: "Taking the step back and looking at the larger picture"
---

Hello friends,

<br>

Today I didn't have any time to write code but I still spent some time researching where I went wrong last night. Last night the main issue I had was isolating functions to only affect one users data. That and knowing when to use which method to call Supabase, either through an API route, a utility function, with my middleware...

<br>

## RLS (Row Level Security)

<br>

Row level security is a way to filter out data depending on what you allow specific users to see. For an example give an admin the ability to query the database in full, while a user can just get their own data. In my case, this could be extremely useful, to simplify the process of normalizing the sort number on the plants.

<br>

Currently an issue I'm facing is I'm trying to filter the data in the code instead of using something like RLS. This complicates things since I need to change all my API calls to take the user-id and only retrieve those, or worse yet, fetch everything and then only modify or display data linked to the user id. RLS would skip all that nonsense and I would keep my queries as they are. Meaning I would query all, but only get back what the filter returns.

<br>

Supabase has shown me a ton of alerts to implement RLS since I started. I avoided it because when I first tried it, I didn't define the filter and it by default would block any request. Which I didn't understand. But now that I know that was the issue I believe it would be good to go back and try to implement this. I still have some questions like if it's best for me to do these sorting functions from code or from Supabase directly, or if it's safer to use Nex.js API routes, or utils, or which is safer? I'll have to conduct some further research on this, but I'm glad today I could learn a bit about RLS and hopefully solve this sorting shenanigan in a day or two. Thank you for keeping up with today's blog. Till' the sun rises again, I'll be here, friend.