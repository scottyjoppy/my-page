---
title: "Day 58: Development on Water Me"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "June 3, 2025"
description: "An update on progress on the water me project."
---

Hello,

<br>

Today I continued to build up the Water Me web application. I’ll go over some new practices I’ve learned and some reflections of AI’s involvement on this project.

<br>

## Hooks and Stuff

<br>

Context is great. For example I wanted creating plants to not just be accessible from the home page but directly from the navbar. I also wanted the fetching function to be easily accessible anywhere on the app. So I used React’s createContext and useContext to send and call variables declared outside the current page. In the past I’ve used "Prop Drilling" as it's known, which is a bloated way of passing data through multiple layers of components through props. Context is a much more simple, and efficient solution.

<br>

Next I had to deal with dates. I spent quite some time with Supabase trying to get my desired output from the date field. Mainly because, within the plant cards, I want to display the “Last watered day”, and then run some math to determine when it should be watered next. I believe heavy reliance on AI here was my downfall and I’m in desperate need of human refactoring to go back in and simplify some of the bloat.

<br>

## AI Tools

<br>

On the topic of coding with AI, let’s dive into that. Yes, I used a fair bit of vibe coding thus far on this project. It’s kind of baffling actually, these tools are so useful, atleast for these simple non-critical tasks. With the little coding I know, I could use tools like ChatGPT to quickly refactor code, create databases, and give insights on popular ways of solving problems. I had to learn a lot of new concepts quickly, and while practice and deeper dives into these concepts will strengthen them over time, I was still able to get things up and running while gaining a good understanding of what's going on under the hood. What I especially liked, was the LLM's error handling, as well as forethought to, for example, disable a button while a function is running. I believe I will use this tool quite a bit to get this project up and running, then do a pass through later to improve and refactor it's code.

<br>

I'm having a great time with this project and learning a lot more than I thought I would. It's nice to face so many new challenges; when I have downtime, I'm excited to have so much I could be researching for this project. I don't want to stray too far away from the portfolio, but I think I can allow myself to work on this for a bit. Thank you for joining me today, I'll see ya tomorrow.
