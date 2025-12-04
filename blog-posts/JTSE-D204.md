---
title: "Day 204: Json to MD"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "December 03, 2025"
description: "Working on the parsing component of the new blog page."
---

Hello friends,

<br>

Currently I've been working on developping a new way to write the blogs. I want a way to store JSON blocks in supabase, but then also translate them into markdown when displayed. It's been process wrapping my head around all of this but I'll try to explain where I'm at with all of it now.

<br>

## The How?

<br>

I'm taking inspiration from Sanity's blocks but essentially I want to be able to breakdown a Markdown file into these reusable blocks. The basic outline of a block is like this:

<br>

```ts
export type JsonBlock =
  | {
      type: string;
      style?: string;
      text: string;
      marks?: string[];
    }
  | {
      type: string;
      style?: string;
      children: JsonBlock[];
    };
```

<br>

Basically what we're looking at here are the two options I currently have. Either it's a branch block with children (leaves), or a leaf. Then in my searching function I'm going down each branch until I find a leaf:

<br>

```ts
const parseJson = (json: Json) => {
  let output: string[] = [];

  if (typeof json !== "object" || json === null) return output;

  const recurseJson = (block: JsonBlock) => {
    if ("children" in block && Array.isArray(block.children)) {
      block.children.forEach(recurseJson);
    } else if ("text" in block && typeof block.text === "string") {
      output.push(block.text);
    }
  };

  recurseJson(json as JsonBlock);
  return output;
};
```

<br>

Now I'm simply adding all the texts from the leaves into this main output string. The next step will be to push to the string based on the type. For example if I see it's a header2 then I should push "## _text_" and so on.

<br>

I still really struggle in knowing the next step for this parsing stuff but slowly but surely I'm figuring it out. Unfortunately it does seem now that this short update to the website will be grossly extended.

<br>

But thank you for bearing with me in my inconsistent return to regular programming. Until next time, friend.
