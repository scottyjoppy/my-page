---
title: "Day 228: Adding Ascii"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "January 05, 2026"
description: "Some common styling patterns to deal with Ascii styles."
---

Hello friends,

<br>

Now I'm moving into actually putting Ascii art on my page. You can't just plop it in the same way you would an image, text has specific formats, width's, sizing, and all must be considered when adding Ascii.

<br>

## Common Patterns

<br>

I started playing around with bringing in the text and seeing how it looks on screen. Immediately the wrapping, odd characters, and sizing was out of whack and made my beautiful art piece look like someone slammed down on the keyboard. The first important step is to use a *pre* element. This allows you to view the text *before* any type of formatting, basically exactly as it's written in code.

<br>

Immediately however, I was faced with the issue that some characters were rendering wrong, like the backslash, commonly used as an escape character. So the second step was to append the string with *String.raw*, which bypasses the backslashes.

<br>

## Get Used To Absolute

<br>

Position will be a headache. So it's a good time to get used to using absolute positioning. It's helpful to use relatively positioned wrappers to control it further and recall all the ways of centering a div. For an absolute element it's typical to use the following:

<br>

```css
.ascii {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}
```

<br>

I found that this gives the most consistent results. That is because without proper control, Ascii art will not have a clear width and height. Lovely.

<br>

But all in all it's not too complicated. You just need to be more aware of how text behaves overall. A good thing to learn in general.