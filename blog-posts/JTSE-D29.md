---
title: "Day 29: Sanity Portable Text"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "May 5, 2025"
description: "Another day of learning about Sanity's Portable Text."
---

Hello,

<br>

Today I continued to develop my understanding of Sanity's Portable Text. It's a two-pronged issue:

- On the one hand, I don't know enough about the breakdown of Sanity objects. How to manipulate them and achieve desired results. How my keystrokes and font decor affect them.
- On the other hand, I'm struggling to get consistent results with AI, but that was a given from the start.

<br>

## The Sanity Problem

<br>

There are some things I wish were just simpler to do in Sanity. For one, the newline issue. This is my current understanding:

<br>

If you want to create a clean line break it's no simple task. I have the desired result of being able to look at my text area, spamming ENTER a few times, then having the rendered result have as many spaces as I spammed. But that is not the case. When you press ENTER, you do not create a newline necessarily, you create a new empty block. Sanity renders multiple empty blocks from "\n\n\n” to just one "\n". In an effort to preserve uniformity and consistent styling. But in my case, it’s annoying to have things look one way in Sanity and different in my Blog. There’s several solutions to this, none that are really pleasing.

<br>

1. HardBreaks: HardBreaks are a built-in way to force a newline. Done simply by pressing SHIFT+ENTER. Sure it gets the job done, but the problem is there’s no indication in Sanity you’ve just used a HardBreak. Besides of course pulling up the raw JSON and painstakingly searching for your multiple newlines. But it’s easy to forget or miss, so I’m not a fan.
2. Styles: There’s always the option of creating a separate predetermined style much like h1, h2, blockquote… But something about the non-user-friendly experience of having to select this new stule every time I want to leave a line of space is not appealing.
3. CSS Gap: I thought of this solution on the way to work. But visualizing the blocks as just a bunch of vertically stacked elements, I should be able to flex-col the whole thing, then add a gap the size of lineHeight.

<br>

In practice, the CSS solution seems the best and easiest to implement at the moment. It's frustrating to have to use such a hack to get this desired result but at least I learned the value of research. Since I had to look so deeply into Portable Text, run test, debug, and just generally talk it over with an LLM, I could see that the CSS thing would be a solution. I wish things were simpler but I guess for now it works.

<br>

## The AI Problem

<br>

This one is a lot more straightforward. LLMs are not yet at a point where you can get consistently repeatable results. I'm not sure if they ever will considering it would be unreasonable to expect so much from a human. But in this particular use case, I hope to just be able to give it a markdown file, then receive an object I can put into Sanity. The trouble is I really need to dive deep into the structure of Portable Text to best prompt the AI, which makes me wonder if it would just be simpler to code this myself. Considering I would only be using that code for a finite amount of blogs, I think it's best to outsource this to AI. But the prompting issue persists. Maybe tomorrow I'll get closer.

<br>

I think it's good to stick with a technology despite me not having a great time. Who knows, maybe there's a light at the end of the tunnel after all. Nonetheless, I'm overdue to stop jumping from tech to tech, I need to just stick with one, understand it as deeply as I can, then and only then should I consider learning another. So for now, it's all Sanity for me!

<br>

Thanks for reading until here, wish you all the best, until the morrow.
