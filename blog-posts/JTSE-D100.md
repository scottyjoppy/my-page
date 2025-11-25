---
title: "Day 100: Cron & Domains"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "July 21, 2025"
description: "Buying a domain name."
---

Hello friends,

<br>

Today I setup some bought a domain name for the first time.

<br>

## Why?

<br>

While I've been adamant about keeping costs low throughout this project, today I hit a roadblock. While I previously thought the Resend API was capable of sending emails to anyone with the free tier, I was wrong. When on the free plan, you are limited to sending email only to the email used to create the account. Since I was so deep into using Resend, I decided to bite the bullet and buy a domain name.

<br>

## Where?

<br>

***[GoDaddy](https://www.godaddy.com/)*** is a great website to find and purchase domain names. They're also surprisingly cheap. While I could've gotten a \.com website, I decided to just get the \.eu domain because it was cheaper. With a few clicks, I had it, my new custom domain name.

<br>

## How?

<br>

Implementing it took a bit of work. In the future I would probably recommend starting your project with a domain name, or at least keep track of where you'd need to change it. I had to backtrack through every part of this project to find anything that referenced the old domain name. This took some time and was definitely a good teaching moment for me. In the most part however, it was a simple matter of setting up the DNS records to the correct providers.

<br>

## What?

<br>

What did I accomplish? Now I can send emails to any email. Additionally, I can customise my "to:" email a bit to make it look better. Now that I'm able to send emails, the next step is to create the cron jobs. I quickly set them up tonight and will check in tomorrow to see if it worked out. But until then, thank you for your time, and for joining me on this journey. Until next time, friend.