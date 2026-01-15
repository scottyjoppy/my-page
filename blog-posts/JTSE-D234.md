---
title: "Day 234: Styles Per Page"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "January 14, 2026"
description: "Adding handling for different styles on different pages."
---

Hello friends,

<br>

I did this a bit ago, when I first made the projects page I added this check in my nav and footer which basically did the following:

<br>

*Is page projects page? -> update switch color value -> add class to element*

<br>

While that works great for a simple component I was a bit confused on how to do this for the body element. Since I've been doing most my stylings in contained and scoped module.css files I could change specific classes within the component, but selecting something like body, a, p, generally throughout the app is through the top-level main.css file. But how to change that?

<br>

I first tried to add the same hook to the main layout.tsx page. But the way I've getting the pathname is through NextJS's usePathname hook, which is a client side hook. This conflicts with layout.tsx which needs to be a server component. So the solution was to move this logic to it's own wrapper component:

<br>

```tsx
const pathname = usePathname()
const switchColor = pathname !== "/projects"

useEffect(() => {
const body = document.body

body.classList.remove("switch")

if (!switchColor) {
    body.classList.add("switch")
}
}, [switchColor])
```

<br>

Great! Now I just need to edit my main.css a bit to reflect the right change.

<br>

```css
body.switch {
  background-color: var(--off-black) !important;
}
```

<br>

Simple as that, learned something new today.