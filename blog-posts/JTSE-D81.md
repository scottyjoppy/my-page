---
title: "Day 81: Notifications"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "June 26, 2025"
description: "Delving into the world of automated SMS and E-mails"
---

Hello friends,

<br>

I'm really struggling with this whole notification thing to be completely honest. I don't know if it's a matter of motivation to continually research how to best go about all of this but my main issue is finding something free. It's important to me to spend little to nothing money wise on my side-projects like this. That means money spent on domain names, AI tokens, and messaging platforms. Simply put, I'm not confident in safeguarding my projects well enough, that I couldn't fall prey to spam. It would break my heart to shell out twenty bucks on a messaging service like Twilio, only to have someone take advantage of my poor programming to use up all my funds. I want people online to give me feedback, I want to know if there are issues with my web apps, but I don't want to be hurt financially because of it. I have a ton to learn in regards to security and until I have that down, I'm gonna keep costs super low. Regardless, here are my reflections.

<br>

## Phone Or E-mail

<br>

So what today's research really told me is that there are no free options when it comes to sending texts to users. Twilio has a great service. I followed their sandbox tutorial and found it worked very well, the only issue is that despite them offering a certain amount as "free trial credit" without making an additional purchase, you can't properly use the service. I was about to pay until I thought: _I would love to use SMS as my main notification system, but is it necessary?_.

<br>

That's when I started considering E-mail as another candidate for sending users notifications. I haven't fully had the chance to delve into this route, but I began looking at the **_[SendGrid](https://sendgrid.com/en-us)_** service also by Twilio. It seems so far that sending e-mails has many more free options (while still limited in some ways) than SMS. I think for a project like Water Me, I just want to get notifications up and running, and it's less important if it's e-mail or text. The more important thing is the background functions I'll have to develop to notify users of which plants need watering.

<br>

That's the bulk of my insights from today's research. I have briefly looked into what my path will look like after having a notifying service set up, and it seems like I'll have to put further research into CRON jobs and other API routes that can process what data the user needs. A step is a step no matter how small and I'm glad to have began this journey into notifications. I'll continue along this path and hopefully get this project wrapped up soon. Thank you for joining me today on the long road up to to paradise, we'll all make it, friend.
