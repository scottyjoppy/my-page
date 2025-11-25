---
title: "Day 50: GSAP viewBox Animation"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "May 26, 2025"
description: "Using GSAP to easily animate viewBox."
---

Hello,

<br>

Yeah so you can animate the viewbox with GSAP. What I did yesterday, splitting and rendering frame by frame using my own calculations to slowly go from viewbox a to b, was just too much code. It wasn’t easily scalable and it was hard to read. Today, I turned it to this.

<br>

```tsx
gsap.to(svg, {
  duration: duration,
  ease: "power3.inOut",
  attr: {
    viewBox: zoomViewBox,
  },
  overwrite: true,
});
```

<br>

So simple. Ahh. A few things here: the svg variable is just a reference to the actual svg. Then I’m accessing the viewBox attr and changing it to the new zoomViewBox var. GSAP offers a variety of different ease options but I just went with a common ease-in-out. This solution doesn’t hold a candle to the code from yesterday. I hear this a lot surrounding code, _“don’t reinvent the wheel”_. In my case I find unless I have a clear idea of how to do something better, I should just stick to the established, tested solution. It’s good to have an understanding of what happens under the hood, but it’s not necessary to have to re-fix an already solved issue.

<br>

## FreeCodeCamp Happenings

<br>

I’m still doing FCC coursework in my downtime. It’s fun honestly. Compared to regular coding it feels like I’m just disconnecting and living in a log cabin in the woods. I can just hang, take my time, learn, and follow the instructions. One main thing I enjoy is getting a sense for how I should be structuring and writing code. Like creating safety checks, console log debugging, writing verbose code and then simplifying it to just a line or two. It’s an extremely well made course and it’s very well maintained. I remember I started and arrow functions were still fairly new, the course work therefore had a mix of arrow and regular function declarations. But now, it’s all arrow functions. Well done FCC team.

<br>

I’m mainly doing the work to have some proof of my skills. I think in the recruiting world, a degree or certification is definitely worth something. Because even if I have a nice portfolio, which I’m working on aswell, I need the recruiter to atleast be interested enough to click on it. That’s where I think having a few certifications related to programming will help. Additionally, my degree is in filmmaking, so I have no real proof of education in the field of computer science, besides of course an almost completed Harvard CS50 course; which unfortunately I don’t think is worth much until it’s actually complete. Nevertheless, other than the degree, FreeCodeCamp's coursework is vast and infinitely valuable for me to learn programming.

<br>

Im happy to have implemented GSAP to do the animation. I have to thank the following article for enlightening me about this fix: **_[Basic viewBox SVG Animation](https://www.motiontricks.com/basic-svg-viewbox-animation/)_**. I think I should focus more on design at this point now that the logic is mostly there. I’ll still have to revisit the isometric text situation but that’s a later problem. Good progress today, it’s a long journey and I’m glad to be able to put it out there and share with anyone who reads. See you next time.
