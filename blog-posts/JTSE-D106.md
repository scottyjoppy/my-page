---
title: "Day 106: Notifications & Forms"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "July 27, 2025"
description: "Bringing my placeholders to life."
---

Hello friends,

<br>

Today I decided to revisit notifications and rework the form slightly.

<br>

## Notifications

<br>

I'm starting to notice how annoying the emails can be, and while it would be nice to be able to specify a frequency like getting them every other day or other other day, I just wanted to make it possible to turn them on, or off. I already have the notification table up, and the form to toggle it false or true. I just needed to make it actually do something. To do so, I had to add some lines to my checkPlants function:

<br>

```ts
if (user.settings?.notifications === false) {
  console.log(`Email notifications disabled for user ${user.email}`);
  return;
}
```

<br>

I'll omit the fetching, typing, and variable creating code. Simple really, if the user selected no for emails, don't send one, dummy.

<br>

While I was in the form I came across something, I allow the user to change three things, their username, email, and notifications. When it comes to emails, I think I need something much much more robust. As it stands it seems like there are just not enough checks when it comes to changing someone's email, for example, as it is, you can put any ones email at all. This could be used for spam and since I'm only sticking to small fixes to wrap up this project, I'm just gonna comment out that part of the form.

<br>

Once again, it's a balance between fixing things, and over fixing things. I don't want to be stuck on this project longer than is needed, I have other things to make you know. But I also want it to be functional and good. So as I continue along polishing it up, I'll keep that in mind. That's all I got for today, thank you for joining me through my journey, I hope we all make it someday, friends.
