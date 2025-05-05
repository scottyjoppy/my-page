---
title: "Day 28: Working with AI & Sanity.io"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "May 4, 2025"
description: "My experience integrating an LLM into my workflow and what I learned about Sanity's portable text."
---

Hello,

<br>

I'll separate today's blog into two parts: working with AI, and working with Sanity's portable text. I'll start with portable text.

<br>

## Sanity Portable Text

<br>

So here's the gist of portable text. Basically, it consists of an array of block objects. Each block object can represent elements like paragraphs, headings, blockquotes... Within these, the content is further broken down into spans. This structure allows for a rich variety of inline formatting like font decorations, links, code, and images.

<br>

Here's an example:

<br>

```md
## The Header!

The **rich** block of *text* and ***words***
```

<br>

- The Header: \<h2>
- The rich block of text and words: \<p>
- Rich: \<strong>
- Text: \<em>
- Words: \<strong> & \<em>

<br>

Would look like:

<br>

```typescript
content: [
  {
    _type: "block",
    _key: "1",
    style: "h2",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "2",
        text: "The Header!",
        marks: [],
      },
    ],
  },
  {
    _type: "block",
    _key: "3",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "4",
        text: "The ",
        marks: [],
      },
      {
        _type: "span",
        _key: "5",
        text: "rich",
        marks: ["strong"],
      },
      {
        _type: "span",
        _key: "6",
        text: " block of ",
        marks: [],
      },
      {
        _type: "span",
        _key: "7",
        text: "text",
        marks: ["em"],
      },
      {
        _type: "span",
        _key: "8",
        text: " and ",
        marks: [],
      },
      {
        _type: "span",
        _key: "9",
        text: "words",
        marks: ["strong", "em"],
      },
    ],
  },
];
```

<br>

Which when you really break it down, is not too complicated. As I said before it's an array with blocks of different styles which you can customize. They can also contain marks to define font-styles. 

<br>

When I learned about this, I immediately thought of ways I could automate this process. It's just logic at the end of the day to take a markdown file and convert it to this type of object. Then I could use Sanity's handy actions to generate the post with every new object.

<br>

## Working With AI

<br>

I thought of a few options, RegEx-ing the whole thing, creating some kind of function to detect the various styles in my markdown and convert them to this format, rewriting the whole thing by hand, or the seemingly simplest option: AI. The main caveat being, it's dang hard to get an LLM to reproduce the exact function every time. That's why I started with creating a rock-solid prompt.

<br>

There's no better tool to work with in creating an AI prompt than AI itself. That's what I thought at least. I would send over the schema, examples, edits on previously generated prompts, but after a while I was losing it. ChatGPT continuously forgot steps it previously made and made one small error at a time. I felt as if I was fitting a balloon in a box, and every time I pushed one way it would come flying out the other. And after an hour of tinkering, I hit ChatGPT's limit on data analysis. This ended up being a good thing. For one, I was sick of ChatGPT and needed a change of pace. So I fell into the arms of Gemini.

<br>

Gemini was a complete game changer. Yes, I was still struggling to get my desired consistent results. But I found Gemini just so much nicer to work with. Here's why:
- Less fluff: ChatGPT gives too much preamble every time I talk to it; I just want my response not all this unrelated talk.
- Speed: The speed was unmatched. I wish I had known this sooner but dang could Gemini spit out a response quick, which makes it so much nicer to work with.
- Memory: I worked for a while with both LLMs to create the "perfect" prompt. While ChatGPT continuously forgot previous specifications, Gemini was much better at remembering and not refactoring the entire thing with the smallest request.

<br>

Suffice it to say, I think Gemini will be my go-to for a bit.

<br>

## Closing Thoughts

<br>

I didn't have the chance to write everything about I learned about Sanity, but once I increase my knowledge further, I'll be sure to write something more in-depth. I'm happy with my progress today and mainly for my improved ability to read documentation and problem solve. Especially on this portable text issue, on which I have a really hard time finding tutorials.

<br>

Today was good, I really hope I can switch to Sanity soon but in the meantime the ol' markdown to html will do just fine. Thanks for reading today. All the best.