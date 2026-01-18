---
title: "Day 237: Single Blog Page"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "January 17, 2026"
description: "Finishing up the single blog page."
---

Hello friends,

<br>

Been on a roll finishing up these pages and today was no exception. Once I got the params working I got straight to work on renewing the individual blog pages. While the process was very similar to every other page, there was at least one interesting thing about this page.

<br>

## React Markdown

<br>

Last time I used the ReactMarkdown library I didn't really understand what I was writing. Looking back at it now I realize that you can actually control how certain elements will look. For example I had the idea to have all my header2's show an anchor that could be clicked and realign the page. I did some testing beforehand and realized I just had to have an anchor within an h2 element, style in some ::after, and map out an id for both elements. So I edited the components parameter:

<br>

```tsx
components=
{{
    h2: ({ children }) => {
    const text = Children.toArray(children).join("");
    const id = slugify(text);

    return (
        <h2 id={id}>
        <a href={`#${id}`} className={styles["blog-anchor"]}>
            {children}
        </a>
        </h2>
    );
    },
}}
```

<br>

Trying to keep unique keys AI decided to just make the text into the ID which I guess will work, using this slugify function:

<br>

```tsx
const slugify = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
```

<br>

And once that's all done the .blog-anchor class does it's work:

<br>

```css
.blog-anchor::after {
  content: "#";
  opacity: 0;
  padding: 0;
  transition: all 100ms;
}

.blog-anchor:hover::after {
  opacity: 100%;
  padding: 0.5rem;
}
```

<br>

Simple as that! Now I don't have to style every single blog individually but ReactMarkdown will just map these styles when converting the markdown over. Lovely.