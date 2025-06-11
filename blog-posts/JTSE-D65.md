---
title: "Day 65: Auth"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "June 10, 2025"
description: "Starting to implement authentication."
---

Hello,

<br>

The big bad wolf of authentication has been looming over me for a few days now. Every attempt to understand stipled by doubt and confusion. I don’t know how auth works. Or did is probably better. Today I decided I had consumed enough content surrounding the topic and even though I have lots of questions and confusion, I should just start, then see where I land.

<br>

## Start

<br>

One main issue I had was just picking which Auth provider I should commit to. Firebase Auth, Auth.js, Auth0, all seemed like great contenders and I’m sure the tech behind each is not _too_ different. I ultimately went with Supabase Auth, continuing my commitment to this new database I’m learning on this project. It’s pretty simple to modify your form requirements directly through Supabase, as well as which quick sign-in options you’d like. I think for this project Google would be all I need, so I had to go through the process of creating a client ID and linking the Auth service.

<br>

At this point it felt like the many docs and tutorials were coming together, I had a clearer idea of what I was doing and what steps I should make next.

<br>

I’ve used route grouping in the past when working with Sanity.io, but never really understood what it did. I just knew that when using the Next.js App Router, you can do wacky stuff when making folder names. For example writing a regular name will just result in the title being shown on the URL route. Wrapping your title with \[\] allows you to define custom titles with code, like \[slug\]. But what I saw in many of the Auth tutorials, as well as when I learned Sanity, was regular parentheses. These didn’t show up in the URL, and weren't available paths to go to. What I learned today, is that these are called Route Groupings. They’re a way to group paths without changing your URL link. They’re useful to link specific styles or logic to one group or the other, and in my case, to give context.

<br>

## Context

<br>

I haven’t gotten this far today, unfortunately, but I know my next tasks will have something to do with context providers. Here are my noob assumptions on what I’ll have to do. My understanding is that login should provide the user some type of encryted token. One that will allow them to access parts of the website. You then keep renewing that token until they log or time out. I hope I'm at least 20% right on that but I’ll tackle the whole token and session thing tomorrow.

<br>

Picked myself back up today and was able to get a fair bit done. As time moves on I have to fight my urge to just switch to something fresh and new. I want to see this through to the end, and maybe even further. Thanks for reading today’s blog, I’ll see you tomorrow.
