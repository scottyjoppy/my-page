---
title: "Day 213: Data Label"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "December 16, 2025"
description: "Transferring data to my stylesheet."
---

Hello friends,

<br>

Today I just did some regular updates on the website but I came across a new method of transferring data which I thought was pretty cool.

<br>

## attr()

<br>

In the old projects page I have this effect that when you hover over one of the tools used for a project, a small text will appear showing what the tool is called. I wanted to create something similar in this page update but was hard pressed to figure out how to achieve the same effect. That's when I discovered the data-label attribute. It's just an HTML attribute but it allows me to use that information directly in the stylesheet. 

<br>

```tsx
<a
    dangerouslySetInnerHTML={{
    __html: tool.icons?.svg || "",
    }}
    key={id}
    className={styles["project-tool"]}
    data-label={tool.icons?.title || ""}
/>
```

<br>

So here I'm using the dangerouslySetInnerHTML to bring in saved SVG strings from the database. I then give it a unique key, call the project-tool class from the page stylesheet. But most importantly here I'm setting the data-label to the title, which allows me to call it here:

<br>

```css
.project-tool::after {
  content: attr(data-label);
  text-transform: capitalize;
  position: relative;
  opacity: 0;
}
```

<br>

Here I'm setting the content to equal that data-label and then boom, it's just there. Of course while this method of bringing in data is simple and fun it is important to note the care that should be taken when bringing in information like this. There aren't many built-in protective features, same with how I'm bringing in the SVG, those protective measures will have to be dealt with yourself.

<br>

But that's all I got for today, until the next one, friend.