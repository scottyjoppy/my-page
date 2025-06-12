---
title: "Day 66: More Auth"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "June 11, 2025"
description: "Continuing down the path of implementing Supabase Auth."
---

Hello,

<br>

Today was all about cookies and locking paths. One of the first things I did was review everything from yesterday. I went over the commits and watched a few more videos about JWT. I also went through the Next.js and Supabase docs, to seek some guidance when it comes to the use of tokens.

<br>

## Step 1: Redirect

<br>

The world of tokens, authentication, client vs server, is quite a lot. So to kick things off small, I just wanted to make it so every time you visit a path in the URL like localhost:3000/home, you’re redirected to /login. I believed that I would need something in the real of context. I'd pass the user through context and if it came back false, I would redirect. The problem was that you would go on a page, it would refresh, then you'd be on the login page. I didn't like the feel of having the page refresh so I seeked another solution. That's when I stumbled across middleware.

<br>

## Step 2: Middleware

<br>

In Next.js, middleware is executed whenever the user requests any route. It can then determine if the request should be modified. Because this happens upon user request, you can skip that odd page refresh, and directly redirect the user. Perfect. So I removed all the context, and then added the user check logic to my middleware and three utils. There I read, write, and create tokens which my middleware can check to see if the user should be redirected or not. I don't fully understand but it's workin-ish.

<br>

I wasn't able to get far enough to properly test the routing and could only get it to redirect me but not allow me to visit other pages. That is a problem for tomorrow. Thank you for reading today's blog, I'll see you tomorrow.
