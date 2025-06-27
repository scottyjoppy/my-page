---
title: "Day 80: Quick Updates - Water Me"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "June 25, 2025"
description: "Some short updates of today's work on Water Me"
---

Hello friends,

<br>

The blog will be relatively short today as I unfortunately haven't made a ton of progress on the project. Today, I continued work on the navbar, specifically adding a little dropdown to access profile specific pages and functions.

<br>

## Profile Navbar

<br>

Simply put I wanted to change the element on my navbar that currently just logs out or in the user. Most websites have this profile icon and then when you click some dropdown appears that you can select to access your profile. I went to Figma and quickly designed a little plant icon to use, then imported it as an SVG. I then took my logout function and placed it in the new component. Then it was just a matter of creating a visibility state and toggling it on or off to either show or hide the profile navigation.

<br>

One thing I'll have to do still is add some form of click detection like I have with my forms, to ensure that if the user clicks outside the profile box, changes pages, or clicks the escape key, the nav component disappears.

<br>

That's really all I got done today and I'm a bit nervous for tomorrow. Tomorrow I'll be looking into this whole notifications thing and finding out how I should be approaching this issue. Researching **_[Twilio](https://www.twilio.com/en-us?utm_source=google&utm_medium=cpc&utm_term=twilio&utm_campaign=G_S_EMEA_Brand_T1&cq_plac=&cq_net=g&cq_pos=&cq_med=&cq_plt=gp&gad_source=1&gad_campaignid=11855872468&gclid=Cj0KCQjwgvnCBhCqARIsADBLZoIlmmRE1c0m0hK0DfwyYo3U3-2eIzqNWZ-xyZFN3YEztvev0iV6VQQaApiPEALw_wcB)_** and potentially other options to give my users notifications. Thank you for reading today's blog friends, may we find peace in a future bright.
