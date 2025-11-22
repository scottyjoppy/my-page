---
title: "Day 102: Water Me - Alpha"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "July 23, 2025"
description: "A working version of Water Me."
---

Hello friends,

<br>

At long last, we have a working version of Water Me. Day 57 was when this all started, I naively saw this as a quick two week project, but here I am, 45 days later with a working prototype.

<br>

## Today's final touches

<br>

Last blog I began looking into cron jobs but had some issues getting things working with Vercel. I was unfortunately unable to make things work, I believe I just hit a wall with the free plan. Luckily however, **_[cron-job.org]{https://cron-job.org/}_** serves my needs exactly. They allow you to simply and easily schedule your cron jobs, as well as to pass any values needed for authentication.

<br>

## Auth

<br>

Since testing the routes I thought security would be important. Because without it, anyone could just ping the URL over and over spamming my cron job. I was able to accomplish this with Vercel by providing this line in my cron route:

<br>

```ts
const authHeader = req.headers.get("authorization");
if (authHeader !== `Bearer ${process.env.SECRET}`) {
  return new Response("Unauthorized", {
    status: 401,
  });
}
```

<br>

Which is just a way of adding a token to your API call.

<br>

## Next Steps

<br>

So what now? Testing, styling, and more testing. I'm gonna set a hard deadline for this portion of the project since without one, I could infinitely improve this project forever. I want it to function first of all, then anything more than that is just a bonus. Once again, I started this project to learn, not to be my magnum opus. While I'm happy with it now, I will make a few more improvements, then move on to what I intended from the start, but to post more about my projects on X.

<br>

I'm excited for what's to come, and to return to improving the portfolio again for a bit. I thank you for sticking with me for this ride of a project, the journey of learning is a never ending one, strap in, and have fun, friend.