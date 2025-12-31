---
title: "Day 221: Back Into Auth"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "December 28, 2025"
description: "Falling back down this auth rabbit hole."
---

Hello friends,

<br>

With the knowledge now that I'm supposed to be using Nextjs routing in combination with Supabase's auth functions, today I dove into the docs to try and figure this stuff out. Recently I've been a lot more weary of code written by AI and find myself more capable of looking through the docs myself to verify what it generates. I've using it mainly to clarify any misunderstandings with the wording as well as breaking down some harder to understand concepts. For example I need to differentiate clearly what tasks will be handled by Supabase and which by NextJS. I'm also trying to generally understand how authorization will work in general. My current understanding is that first you login to a page. You receive a JWT that is saved in your cookies. Periodically you will read the users cookies to see if they have a valid JWT. If so, then you can allow them to view protected content of your choosing. It's also my understanding that you within that JWT you can see which specific user is logged in, and therefore provide specific behaviours based on the user. 

<br>

All great that I understand things better, but the real challenge now will be implementing this all, wish me luck!