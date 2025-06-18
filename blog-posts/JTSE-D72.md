---
title: "Day 72: Navbar & Job Search"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "June 17, 2025"
description: "Styling the navbar for mobile and talking about job search"
---

Hello,

<br>

Today I did more styling on the Water Me project, and while I will speak to that I also need to vent some job search frustrations.

<br>

## CSS

<br>

As I’m refactoring most of my stylings, I’m also trying to just generally clean things up. Custom classes to group frequently used styles is the main thing. While I do know the CSS equivalent of Tailwind’s classes, one trick to add your styles onto a style sheet is to create a custom class, then use the @apply query before adding your tailwind classes. That way you can just copy your styles directly from the tag to CSS. Alternatively, I’ll also sometimes use an LLM to translate everything for CSS, or do it myself if I’m feeling frisky.

<br>

The bulk of todays styling efforts went into centering my pages relative to the navbar. My pages have a thick border to give that screen in a screen kinda look. This way I’m never really “scrolling” down as the pages should just be the same size as the window. That is why I decided to use position fixed instead of sticky. One con of using fixed however, is that it positions the tag outside the normal flow of the document. Meaning that if I center another tag on the page, it becomes uneven due to the navbar’s height not being accounted for in the calculations. The solution, subtract the height of the parent with the height of the navbar. 

<br>

```html
 <div className="h-[calc(100dvh-40px)]">
 ```

<br>

In an effort to keep things consistent I moved this logic and some other stylings to the main layout page.

<br>

## Jobs

<br>

Moving to Vienna has definitely had a huge impact on my work life. When I was back home, I had contacts in the film industry, a full time job, and a lot of freedom to work where I wanted. I had options, and the confidence that I could find work when I needed. Here, I no longer have that confidence safety net. Language, I believe, is my biggest barrier. It's drastically lowered the amount of jobs I can do, and made it very challenging to convey my competence in an interview. Add on top of that, a complete change in carrier path. Going from study and experience in film, to programming. So with no tangible evidence to provide a company, I'm left to pour everything into creating projects and buffing up my portfolio. It's a long and rough road ahead, but I'm aware of it, and the light at the end motivates me everyday. Knowing this road will take a while is why I even started this blog in the first place. So I can look back and remember what it took to get there. Yes the job search is challenging. This past year has been life-changing change one after the other. It'll take some time to find my footing, but once I do, I'll bounce back. Just a matter of putting in the work until I'm there.

<br>

So with that, I thank you for reading today's blog, and despite my little rant about job search, find some motivational message to keep pushing forward. I'll see you with the sunrise, friend.