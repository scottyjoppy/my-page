---
title: "Day 84: Breaking Things Down"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "June 29, 2025"
description: "Making a big problem small."
---

Hello friends,

<br>

I think today was a pivotal point in understanding what I have to do next to finish up this project. This whole concept of sending notifications through email is much more clear. My realizations mainly came through extensive discussions with an LLM just throwing whatever questions I could conjure, to fill most of the gaps in my knowledge. So with the understanding I have today, I'll outline everything I need to do to go from no notifications, to some.

<br>

## The Setup

<br>

There are a few steps to take in terms of setting things up. The first is to actually figure out what you want kind of notifications you want to send. In my case I want to inform the user when their plant needs or needed to be watered. To add this option, I created a new table in Supabase, that links the user ID, and a JSON column where I can store binary notification values. Then in my project, create a profile form to toggle this option. Next up, the email.

<br>

## Email

<br>

I'll be using the **_[Resend](https://resend.com)_** API to send my emails. The main reason being cost, but additionally, it's easy to use and is closely linked with React Email. Integrating Resend is as simple as creating an API route in your Next.js App, then creating a util function to use the Resend API. I'm still not at this stage yet but then you can also integrate the React Email library to form your emails as you'd like.

<br>

## Functions

<br>

Now the logic. It's time to create the functions you'd like to have run. In my case, I'd like to fetch the users plants, then check their "last watered date". If it's today or in the past, add it to the email. Once I've checked all the plants, call the Resend API.

<br>

## Cron Jobs

<br>

Cron jobs just seems like a way to schedule functions in your web app. In the case of Water Me, I'd like to execute this check plants function at the start of every day. I could extend this further by allowing the user to set when they would like to receive this notification, but I think I'll just keep things simple for now. Cron uses this interesting star pattern to determine the frequency.

<br>

For example: \* \* \* \* \* means every minute, of every day

<br>

And this: 0 8 \* \* \* would be every day, at 8.

<br>

So want I'll do now is connect the two, so that 8AM every day, I'll trigger the function and construct an email that notifies the user of plants that need watering.

<br>

There you have it, notifications. Funny how a task that seemed so overwhelming just a week ago now seems so simple. I'm glad I could figure this out and now it's just a matter of actually implementing it into my project. I haven't quite put the time in to do any meaningful coding these past few days so I hope this coming week I can finally put an end to this notification nonsense. Either way I'd like to thank you for joining me in this short outline of how I'm making notifications. I appreciate your time and hope to one day help any one interested in this amazing world of tech. See you in the future, friend.