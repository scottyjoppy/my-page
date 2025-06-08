---
title: "Day 61: Organization & Watering Components"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "June 6, 2025"
description: "Cleaning up the files and creating past and future watering components."
---

Hello,

<br>

Today didn't leave too much time to work on the progress but I made due. For starters I knew at work that I had to change the Plant type, specifically the frequency, so I was able to commit that from my phone. I also knew I wanted to organize, not just the file structure, but also break down some of my larger components into smaller ones. So here's how I did that. 

<br>

## File organization

<br>

While I'm not entirely sure how pathing works in React, I know that ../../../ looks much worse than @/. From my little knowledge I understand that in TypeScript based React projects, you have a tsconfig.json file that allows you to define the @/ path. Mine is currently set to reflect the ./src folder so simply importing using @ will direct to the src folder. When I was moving my folders around I tried to clean up some imports to use this type of pathing.

<br>

However, moving files around does tend to mess with it's path dependencies which was another problem to deal with. It's a bit meticulous to have to go file by file and fix these errors, but I also found a new tool that rocks. All my React projects have had a ESLint installed which up until now has just been a pain for me to have to deal with. I figured out today that I don't have to wait until I'm deploying on Vercel to realize that there is a Linting issue. I can instead, run "npm run lint" and immediately find and fix any linting issues. Awesome! Wish I knew that earlier.

<br> 

## Watering Components

<br>

I added two new components: One that reflects the last watered date shown in the database, and one that calculates the next watering date based on frequency. The two take some info, run some calculations, and through a few if statements generate a message that is plugged into a p tag. There are many nuances with both, but especially with next watered, to take into consideration. I didn't have the time today to consider and test these all but I'm aware of them and will make sure to polish things up before this project is done.

<br>

Overall with the little time I had I'm pretty happy with what I accomplished. It wouldn't be possible if I hadn't been planning earlier in the day what I wanted to do and how. Which goes to show good planning and preparation beat lack of time. Thanks for making time to read today's blog, I'll see you tomorrow.