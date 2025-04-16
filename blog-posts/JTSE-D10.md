---
title: "Day 10: in-Sanity and Git"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "April 16, 2025"
description: "Working with Sanity and practicing command prompts."
---

Hello,

<br>

I had the opportunity today to spend some time refactoring this page. Since I started using Sanity for my draft project I knew I had to implement it on this site. I also knew it wouldn't be simple but today was the day. I'm no stranger to vibe coding, and I think it's great when I need to do something very complicated quickly. But the issue is that I'm doing a lot and learning very little. It becomes more a game of how good can I prompt instead of code. Which is wrong I know. Which is why I try my best to avoid that when I can. This site for example is a testament to my coding knowledge. I try hard with anything I write in here to understand it fully. Well enough that when any bug or problem arises I know exactly how to pinpoint it and solve it. While I believe this is great, it does slow me down a ton. But I think that's a good thing. Taking a step back, failing, debugging, reading and re-reading the docs is very beneficial in the end. So for as little progress as I made today, the knowledge I gained is tremendous, and will only make it easier next time.

<br>

## Content is hard

<br>

The main problem I dealt with today is that I want to convert my markdown files to content managed on Sanity. I believe it will help me to not have to manually breakup lines, format headers, links, decorate text. Pressing ctrl + b is much quicker than having to select the text and wrap it in apostrophes every time. And it just looks cleaner too. However, this process has been an arduous one indeed. First I had to install Sanity which honestly wasn't too hard. Just had to npm install a few modules, create my schemas, utils, config file. Reroute my app to separate the sanity studio from the site, making the admin page directly accessible from the website. Then create a few queries with **_[groq](https://groq.com)_** to pull data from Sanity. Then finally add my types so TypeScript doesn't scream at me. But the hard part was finding out how to implement these markdown files into the content area. Sanity provides these portable text blocks in which you can put text and it allows for some stylings, links, images. But it took some time to find out how to add code blocks, header options, and then rewrite the page.tsx to display that content with all the css I had written previous. On top of that and if not the most important, finding out how to implement syntax highlighting so I can display code in my favorite Monokai theme.  

<br>

Needless to say I couldn't complete it all today, but it did give me the opportunity to learn something new about git - branching.

<br>

## Git & The terminal

<br>

I haven't really had a need thus far to use anything but the main branch but I now know the use of different branches. I'm testing out something new, but I also need to post tonight, so while my main branch is using this caveman-like no content manager like system, I can upgrade it and work on the new features seperately. This is great! And I can totally see how large teams make good use of this, especially with the added pull requests that allow you to view and comment on the branched changes before committing them to the main branch. Neat.  
I also have the dream of being better with command prompts. One command at a time I'm trying to improve my speed and knowledge there because I know it will be important in the future. Plus I've been using my laptops trackpad for a year it's kind of nicer to just use the keyboard for everything. When I started this project I became acquainted with git add, commit, pull, and push. Today I learned checkout, branch, and status, as well as how to copy rename and paste a file, like I did with this file here. One day I'll ditch the chains of a GUI.

<br>

Learned a ton today, and looking forward to learning more tomorrow. Thank you for joining, and hopefully one day I can help others find a career in tech. But first I gotta pave the path. Until next time.

<br>
<br>

**_[My Page Repo](https://github.com/scottyjoppy/my-page)_**
