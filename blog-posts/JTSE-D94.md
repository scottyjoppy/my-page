---
title: "Day 94: The Struggle"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "July 9-15, 2025"
description: "A full week overview with some progress updates."
---

Hello friends,

<br>

So as you might be able to see from the headers above, but it has been a while, a week in fact. I'm sorry to say that I have been truly struggling in terms of consistency and coding. I won't make up excuses, but I acknowledge my shortcomings and have decided it be best to group the last weeks blogs into one. Mainly because in an effort to have time to code today, I think it's best to spend less time writing a few lackluster blogs, and instead write one and then start fresh tomorrow. So here's what has been accomplished in the last week.

<br>

## Next Water Date

<br>

One of the first things I've done is recreate the function I had to find the next watering date. While it already existed I realize it was mainly done by AI. I wanted to do it myself to really understand it and see if there was any room for improvement. This was a great idea and I definitely have a better understanding of how it works. That's my workflow, write it with AI first, do it with light assistance next, then do it completely alone the next. It's worked this far and I do believe it's a good way to learn these things.

<br>

## What To Return

<br>

So I'm writing a function that will find all the plants that need watering. At first I would just loop through the entire table and get all the plants. Thinking ahead, I know I'm gonna have to separate the plants according to their user. So I thought it best to create an object, linking every new user in the table with an array of plants that need to be watered.

<br>

Once I had it all done and dusted I did a few tests to confirm everything works. Like filtering out plants that start with the letter A, or what-have-you. By the end of it I had a robust function that would loop through the plants table and produce an object of users and their plants.

<br>

## Date Considerations

<br>

One thing I was doing previously was saving something like this:

<br>

```ts
const today = new Date().setHours(12, 0, 0, 0);
```

<br>

While the variable was exactly what I wanted, it also limited me in a big way. If I wanted to use any other methods related to Date() I no longer could. It's better practice to keep the object in a variable, and create a new variable with the changes.

<br>

## Up Next

<br>

The next step is to call the user and confirm first if they want notifications or not. Then create an email with React Email with my desired message. Then afterwards I can hook up the CRON jobs which I'm optimistic isn't too complicated. Then we're done!

<br>

It's a modest amount of work done in the last week but I'll be getting back on track here and back to more consistent coding and growth. Again I apologize for the lack of consistency in the last week, I just hope to be real and honest about this journey. I'll you all in the next week, friends. 