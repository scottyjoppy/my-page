---
title: "Day 205: Mapping Markdown"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "December 04, 2025"
description: "My current method for mapping json blocks to markdown."
---

Hello friends,

<br>

Currently I have something like this:

<br>

1. I pull in the json blocks into the recursive function.
2. I check whether or not it has children.
3. If it does call the function on it once again.
4. If it doesn't, check the type.

<br>

From here currently I have two options. Either it's type span, meaning I'll be wrapping some text in styling marks like _italic_ or **bold**. Or it's something else, like a header.

<br>

If it's type span, I do something like this:

<br>

```ts
if (block.type === "span") {
  const marks = block.marks || [];

  const markMap = {
    bold: "**",
    italic: "*",
  };

  for (const mark of marks) {
    const token = markMap[mark];
    if (token) output.push(token);
  }

  if (block.text) output.push(block.text);

  for (const mark of marks.slice().reverse()) {
    const token = markMap[mark];
    if (token) output.push(token);
  }
}
```

<br>

What I'm trying to do here is first create an object that will hold my mapping values. Then I wrap the text in two loops. The first pushes the mapped string in order of the marks array. The second creates a temporary shallow copy of the array and reverses it before pushing it to the output.

<br>

I'm still in the process of identifying all the edge cases and I think I could benefit from drawing this all out since at the moment I feel like I'm going into this whole thing blind. I need to properly visualize how this function will traverse a tree of JSON blocks then I can freely create the function with a better overview.

<br>

But either way thanks for reading today's blog, until next time friend. Things are looking up.