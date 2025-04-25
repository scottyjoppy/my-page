---
title: "Day 18: Slow Progress"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "April 24, 2025"
description: "Working on the draft and learning about Immer."
---

Hello,

<br>

Today I continued to learn about the code from _[Ben Awad](https://www.youtube.com/watch?v=DvVt11mPuM0)_ on Conway's Game of Life. Once again, especially on my main page I don’t like to have code I don’t understand fully, with time I’ll expand that to include the frameworks and API’s I use as well but for now, I’ll start here.

<br>

## Immer

<br>

_Immer (German for: always) is a tiny package that allows you to work with immutable state in a more convenient way._  
-[Immer](https://immerjs.github.io/immer/)\*\*

<br>

I haven’t been coding enough to understand the impact of Immer and how easy it makes things. But after watching **[Mehul Mohan's](https://youtu.be/4EXFBNRqS6U?si=LuWWZoPOQY95IYTG)** crash course on Immer.js, I think I have a basic understanding of what it does.  
Its use is mainly to simplify the process of mutating immutable data structures. It makes use of a temporary draft with which you can mutate freely without affecting the base state. It's super useful when making deep updates that would regularly require many spread operators.

<br>

## AI Uses

<br>

I use AI a lot when learning code while at work, I hope eventually the talking feature is upgraded and I could just have conversations with AI about code. For now, my constant flow of questions will have to do.  
I thought I'd share some learning techniques I am using:

- Create Quiz:
  First I'll send it something to base the quiz off of. In this case I just sent the full file over. I specify the prompt to indicate the difficulty of questions; what kind of questions, multiple choice, short/long answer, fill in the blanks... Then also specify that I'd like it to review and comment on each of my answers.  
  I think what's also useful is asking where it sees my knowledge lacking, and for it to refer exactly where in the docs I should revise.
- Breakdown with lots of comments:
  Like the title says, just send a file or block of code and ask it to add a bunch of comments. I used this when I looked into Rust, making it define every symbol used and what exactly it does. You can always dive deeper on any specific interest.
- Spot the bug:
  Get it to generate a block of code in whatever you're trying to learn, but ask it to include one or a few bugs. Then work together to find out what is wrong.  
  \*Funny story, beware because ChatGPT has a sense of humour, and once sent me code with no errors to see what I would do. I thought it was hilarious.

<br>

All in all, AI is a great tool and very useful to me as I lack a tutor at this point. It's true you can't always trust what it says, for example when writing React code, often ChatGPT followed outdated syntax which caused errors. Of course that is on me to specify what version I'm on but it also begs the question, how many other things it might be doing wrong that I'm not aware of. Always stay vigilant. Be overly skeptical of everything it says and whenever in doubt, get it to send references, so you can see for yourself.

<br>

Final note, if you're ever unsure about your prompt, use your LLM to make the best prompt for it possible. Just clearly outline the important parts of your query, and get it to generate a complete, clear prompt, then save it for further use.

<br>

Thanks for joining me today. Every day I strive for improvement. Whether it's a lot or a little, as long as it's more than the day before, I'm happy. It's a long journey ahead, and I'm not going anywhere. See you next time.
