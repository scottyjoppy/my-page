---
title: "Day 222: Struggling To Auth"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "December 29, 2025"
description: "Doing my best to try and connect proxy files."
---

Hello friends,

<br>

To my understanding NextJS will run files like middleware without me having to explicitly call it during a session. At least that's how it used to be. So long as the file name is correct and it's in the right directory. Turns out that might be wrong.

<br>

## Switch To Proxy

<br>

I've been really going back and forth between talking to ChatGPT, reading the NextJS docs, Supabase docs, and looking through my old project in which by some stroke of luck I managed to implement auth. All seem to contradict one another in some way or another. For example all the documentation gives examples with files named proxy.ts while I'm used to middleware.ts. My old project makes use of api routes with callbacks and various http requests. And all the while ChatGPT is rejecting the code found in the documentation. I went about all these contradictions by telling myself, out of all these sources, the docs should be the most up to date and correct information. So I dug deeper.

<br>

I managed to learn that while yes, middleware used to be the standard, now, it's called proxy. There's even a blog stating this change [Migration To Proxy](https://nextjs.org/docs/app/api-reference/file-conventions/proxy#migration-to-proxy). And only faced with this blog did the AI flip around and accept this naming convention.

<br>

It gave a real sense of accomplishment that I was able to figure this out myself and had the foresight to consider that the information from AI could outdated and wrong. I'll admit, a key constant reminder of this comes from VS Code's warning of depreciated functions. That red squiggly line warning me has saved me more than a few times from going down the wrong road.

<br>

And now while I still don't have auth working as desired, I'm one big step closer, until next time, friend.
