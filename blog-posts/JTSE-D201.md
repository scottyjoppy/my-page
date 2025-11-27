---
title: "Day 201: Journey To Storing Data"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "November 24-27, 2025"
description: "My experience trying to figure all this out."
---

Hello friends,

<br>

So it's been a few days, once again. Motivation is at an all time low, simply due to things just being so complicated.

<br>

## Where It All Started

<br>

Everything started with the simple goal of using a headless CMS and simplifying making blogs. I went through the journey of figuring out how to use the API, then eventually trying to deploy it. I first tried Strapi Cloud, then Render.com, then I moved to Digital Ocean, and then I decided this is all stupid. I think I'm just not at a level yet where I'm able to figure this stuff out on my own. I couldn't find many cheap and simple solutions and I'm not about to figure all of AMS out just to make stupid blogs. So I decided that the solution I'm gonna go with, is using Supabase, something I'm already familiar with.

<br>

## Moving Forward

<br>

The main thing I wanted out of a headless CMS is the ability to store data, such as blogs, series, navbar stuff, icons... I don't want to have so much cluttering my project file, like the blog-posts folder with 201 markdown files. While most of the problems will just require me to store data in regular tables, the blog will be a little more complicated. After seeing strapi's two content storage methods I'm thinking of importing and exporting the blogs as a type of JSON file. This way it could be read by something like the React Markdown Library and translated to HTML elements. I'm sure this solution will be much more time intensive than the others but honestly the constant frustration I was facing with these deploying websites was enough to drive me off the edge. The plan moving forward then will be to add an extra page with some kind of simple authorization, which would allow me to select and modify markdown files which will then be saved as JSON objects. I need to do a bit more research into what the library requires so I know how to format everything but I think I can figure this out. Hopefully.