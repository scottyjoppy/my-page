---
title: "Day 78:"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "June 23, 2025"
description: ""
---

Hello friends,

<br>

Back on track-ish. Today I spent a bit of time testing out how it looks to pull information from Supabase’s auth.users table. I spent the rest of the evening preparing for a hopefully fruitful round of job applications.

<br>

## Auth.Users

<br>

Earlier today I began thinking of what my next step should be with the project. While text notifications are important, I know I need a full day of focus to get that up and running. A less intensive, but necessary page to develop is the profile page. A page where you can change your profile info, like password, notifications, and email, or outright delete your account. 

<br>

Through a back and forth conversation with ChatGPT, I went through a few stages of planning. The original plan was to create a new table, and populate the columns with those values, email, username, password, etc. Then I would make some form to update the info in the database. I was made aware that Supabase saves most of that information already. It’s accessible through auth.users. The caveat is you can’t extend it, so if I wanted to add something like a notifications column, I would need to create a separate table and link connect the two through something like the user id. 

<br>

I was then wondering how the process for updating information looks like. The first option was to use an admin key and save it in something like an AdminClient. Immediately I was worried that giving users this key just to change a username seemed unsafe and over complicated. I was once again informed of the built in updateUser function in the Supabase auth library. Which is a secure built-in way of updating the users information. 

<br>

What I lack in a mentor I try to emulate with an LLM. It’s not nearly the same (or as accurate at times) but it’s a digital entity that can endlessly answer any matter of random questions I have. A great tool to conversate with until you understand a topic well enough to know what you need to research. 

<br>

## Job Hunt

<br>

Ever since I've started this blog series I've been keeping track of how many replies I've been getting in regards to job applications. The sad truth is that out of roughly 60 replies, 1 resulted in an interview, while the rest were a cookie cutter reply saying no. This has been pretty tough but I'm still optimistic something will come around eventually. 

<br>

I'm a bit more hopeful that my next approach could improve on the current 1.7% interview rate I'm experiencing. The approach is simple, make my CV and cover letter German. I do believe language is the biggest barrier between me and any potential job. So I have hopes that this simple change could yield better results. I'm extremely blessed to have an intelligent wife with actual experience recruiting, who's also a native German speaker. She's done me the huge favor of translating my files and motivating me everyday to continue searching. I owe it to her to give it my best, and I'm eternally grateful to her whether or not something comes up.

<br>

That's all for today, I'm sure tomorrow I'll continue work on the profile page and integrate some of the fruits of my conversation with Jippity. Thank you for reading today's blog, may you find peace in your day and calm in your heart, it's a long and beautiful journey ahead.