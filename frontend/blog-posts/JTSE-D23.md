---
title: "Day 23: Back to my-page"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "April 29, 2025"
description: "Picking things back up on the switch-to-sanity branch."
---

Hello,

<br>

Today I finally git checkout-ed back into my switch-to-sanity branch for this page. My last commit was about two weeks ago so I had to read up on some Sanity docs earlier in the day to get back up to speed. Once again gotta shoutout the tutorials from **_[Kapehe](https://www.kapehe.io)_**. Incredibly detailed and helpful tutorials on setting up Sanity's schemas, data fetching, and routing.

<br>

## Problem Solving

<br>

I had one issue when I first opened up the branch and it was that despite the schema defining dates as DD-MM-YYYY, they were showing up as YYYY-MM-DD on the webpage. I was able to determine that the schema defines how the date is inputted in Sanity but does not affect how the GROQ fetch works. In fact, I found out GROQ lacks built-in date formatting functions. This led to me starting to roll down the hill of endlessly searching for some workaround. I looked at multiple videos, docs, posts, but eventually had to take a step back and ask myself, "Is this worth it?". Is it worth me wasting so much time just to invert the date? No. So I decided, let's just fix it _temporarily_. Who actually knows how long my temporary code will stick but I think it's way better than wasting more time on something so mundane. 

<br>

```javascript
const formatDate = (date: string) => {
  return date.split("-").reverse().join("-");
};
```

<br>

Simple, and gets the job done. I think this is a mindset that I need to adopt if I want any chance at completing my projects with so little time left.

<br>

## End

<br>

Not much else to show for today. Tomorrow I'll be attending a meetup as well as pondering how I'm gonna tackle this parsing problem to get my markdown files to Sanity. But hope you enjoyed this short one. Thanks for reading, I'll see you in the next one.
