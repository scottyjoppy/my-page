---
title: "Day 71: Styling Forms & Navbar"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "June 16, 2025"
description: "Adding mobile friendly styles in the plant forms and navbar."
---

Hello,

<br>

Today was the return to CSS. It’s nice moving to some of the finer details of the project because it’s equivalent to checking off many small problems quickly. Must be something about the steady stream of dopamine compared to one big problem. Either way, today I wanted to optimize my forms for mobile, and add a basic mobile navbar.

<br>

## Sizing The Forms

<br>

I've struggled getting used to the clamp function but today I got more comfy. I’ve learned that max and min sizes are great to have. I try to consider how things will look on various screens, namely extremely wide or narrow windows. That’s why using any sort of full or vw/vh value, should be considered carefully. There should always be limits on those values and clamp is a nice and easy way to do that.

<br>

```CSS
height: clamp(100px, 100%, 300px);
```

<br>

So clamp here keeps my height at 100% height relative to its parent, while maintaining a min height of 100px, and a max of 300px. My project has a few 100vh tags, I changed these to 100dvh tags. Why? Dvh or Dynamic Viewport Height accounts for changes in the users viewport, for example, the address bar when you browse the web on the safari app. Simply put, dvh accounts for the dynamic viewport changes while vh is just set to the initial viewport.

<br>

## Navbar

<br>

It’s really nice seeing improvement. When I first made this blog site with React I didn’t have a clue what anything was. I bootstrapped all my components from ShadCN and just let things work. Now, with a deeper understanding of how these things work, I can build those components myself. I’ll be it they aren’t as robust and upgradeable, but they’re mine all mine.

<br>

Before making the mobile navbar I had to take my main navbar and split it into three components. One all including navbar with props to throw into the layout file, one desktop navbar which is basically what I have now, and then the mobile navbar. I make use of tailwinds nifty "sm:" utility to toggle the hidden attribute, and any other flex-ing I need to get my desired layout.

<br>

I’m still due to do a full Motion library overhaul on the website. For the navbar, changing some hover and click animations to tap to include mobile, and other small things I have here and there. But overall today was great. Nice to do some styling and not have to consult a doc for every other line of code. But thank you for keeping up with today’s blog. Until morning, my friend.
