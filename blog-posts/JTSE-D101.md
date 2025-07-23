---
title: "Day 101: Cron Jobs"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "July 22, 2025"
description: "Delving into the world of cron jobs."
---

Hello friends,

<br>

Spoiler alert, the cron jobs I setup last night, didn't work.

<br>

## The issues

<br>

I'll list out a few reasons why it didn't work, and to my surprise it wasn't anything too complicated.

<br>

1. First and foremost, I need absolute paths. While exporting some functions to an api route is safe with client-side functions, when it comes to serverless functions it isn't great. It slows things down drastically and adds this layer of complication that often leads to failure. The first step was to remove my api routes, and instead transfer that code to my check-all-plants function.

2. Small issue but still important, the vercel\.json file. While I made it correctly, I left out one crucial detail, my path value was written:

<br>

```json
{ "path": "api/cron" }
```

<br>

Instead of:

<br>

```json
{ "path": "/api/cron" }
```

<br>

That slash led to an error but was an easy fix.

3. Vercel doesn't allow for scheduled cron jobs (free plan). I'm not sure if this is entirely true, but from my testing I wasn't able to get Vercel to trigger a cron job on it's own. I believe I'll have to connect a third-party-service that will trigger it instead but I'll also have a deeper look to see why Vercel isn't working.

<br>

All in all cron wasn't as scary as I thought it would be. I'm glad I could solve these problems and was able to relish the joy of having emails be sent out correctly. This whole project is finally coming together and I'm so excited. Thank you for reading today's blog. Happiness is always around the corner, but it's also where you are right now, friend.