---
title: "Day 196: Before After"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "November 15, 2025"
description: "Trying to be better at the CSS ::before ::after."
---

Hello friends,

<br>

I've long been bewildered by how these selectors work and after completing the calendar I think it's time I try to understand how it works.

<br>

## The Use Case

<br>

So simply put if I have a div, before will create something before it and after after... Not much more to it but that's basically how it works. How do I want to use it now? Well at the moment my website has this "icon" in which it says ALX on the left of the navbar. I want it to look like AL_X and when you hover it turns to ALEX. I also want the transition to be as seamless as possible. 

<br>

So step 1 is actually get a font that won't push things around so much, here comes my favorite brand of font, MONOSPACE!! Monospace makes everything so simple my lord I love these types of fonts. So once I found something fitting I was able to make this work. Now there's two ways of doing this, either with multiple divs stacked and responding to something like a hover, orrrr before after. I decided with the latter and did the following:

<br>

```html
<div class="icon">ALEX</div>
```

<br>

So first thing is just to create the main div. In this I put the text "ALEX" mainly as a placeholder. I want the following to happen: the original div will not display anything, I'll use before to display "AL_X" and then after to display "ALEX". So now I can wrap this text in a span that will just have opacity 0. Then I'll set the OG values of before and after. Note you can use the "content" attribute to set the actual text in these selectors.

<br>

```html
<div class="icon"><span class="icon-text">ALEX</span></div>
```

<br>

```css
.icon-text {
    opacity: 0;
}

.icon::before {
    content: "AL_X";
    opacity: 1;
}

.icon::after {
    content: "ALEX";
    opacity: 0;
}
```

<br>

The reason I opted for manipulating opacity instead of display was one to maintain the space of the content as well, opacity allows me if I so please to add some fading animation between the two. From here it's a simple matter of adding the :hover values to switch the opacity.

<br>

```css
.icon:hover::before {
    opacity: 0;
}

.icon:hover::after {
    opacity: 1;
}
```

<br>

I'm just showing the barebones idea of the animation but in reality there's also some position and display stylings that help center everything since normally before and after are (as the name suggests) before and after the div. 

<br>

It's a simple use case and in all honesty I probably didn't need to use these selectors but I wanted the challenge so here we are. I like this aspect of CSS where when you build up your knowledge of the different options you have available you can consider the overall structure and solution that best fits it. I found now it's much easier for me to trace back why something is not working as intended and there's no better joy than to just write a bunch of styles and then look at the live server and see things actually behaving like you wanted.

<br>

That's all for today, just wanted to share a short snippet of before:after that I worked on. Things are coming together, slowly, and it's been really fun just deleting a bunch of my old crap code. A joy many developers get to share. But thank you all for reading today's blog, until tomorrow friend.