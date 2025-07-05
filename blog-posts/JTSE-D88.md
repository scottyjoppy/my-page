---
title: "Day 88: Testing"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "July 03, 2025"
description: "Using the new Admin client to test out the checkPlants function"
---

Hello friends,

<br>

Today I wanted to write up this Admin client function as well as test out what I can do with it.

<br>

## Testing Things Out

<br>

I'm a big fan of the suggestions feature in VSCode, I'm not exactly sure if it's coming from an extension or just the IDE, but it's been incredibly useful in testing out the code. That, and "console.log". I didn't do much today after creating the client, but I definitely learned a lot. 

<br>

So first things first I grab the data using the Admin client in the API route, I believe this is the secure way of doing things. Then in the actual function, I create a quick fetchPlants function to call that API route and get my plants. As I'm testing, I'm wrapping my calls in a try catch just in case of things failing. I did a lot of trial error when it came to parsing the data. I'm getting a big object holding the name of the table, and then an array of it's contents. I'm trying to keep things simple but also take out the data in the best way I can work with it.

<br>

I was having a blast seeing this all come together one small step at a time. I started thinking a bit about how I'll want to calculate whether or not the plant needs water. Mainly analyzing the function I already have doing just that. I think there's some room for improvement and I really want to make a less vibe codey version of it. But that was all for today, tomorrow I'll look more into checking dates but it's good I could get some info out in a useable form. Thank you for your time, it's value is precious and I'm grateful you spent it here. See you next time, friend.