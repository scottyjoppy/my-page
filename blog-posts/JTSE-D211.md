---
title: "Day 211: Fetching Projects"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "December 14, 2025"
description: "Learning some new ways to select from Supabase."
---

Hello friends,

<br>

Today I wanted to connect my new _Projects_ table to the website. It wasn't as simple as I'm used to.

<br>

## Why The Struggle?

<br>

Often times I'm just bringing in everything using something like this:

<br>

```ts
const { data } = await supabase
.from("table")
.select(*)
```

<br>

That way I just select everything from the table. And with Typescript I can also import all the direct types from Supabase and use those. Simple enough. The problem is that today I also had some foreign keys, and in addition to that I also had a second table I had to join. So I had to learn some new syntax. The first step is to define everything I'm bringing in:

<br>

```ts
const { data } = await supabase.from("table").select(`
name,
description,
icon    
`);
```

<br>

But say icon is the foreign key, currently when I bring it all in I'm just gonna get the id, but I want all the icon data, so to do that we have to select all the data from icon, like so.

<br>

```ts
const { data } = await supabase.from("table").select(`
name,
description,
table:icon(*)    
`);
```

<br>

Now I'm selecting all, and I also gave the icon column an alias, which you do with the semi-colon. But now the problem is adding a join table, here's how I did that today.

<br>

```ts
const { data } = await supabase.from("table").select(`
name,
description,
table:icon(*)
tools:tools(
    icon(*)
)    
`);
```

<br>

In this stage I'm filling the alias tools with the relational database called tools. Which is fetching the icons. This syntax also implicitly allows Supabase to detect the relation of these two and returns them.

<br>

And there we have it. I'm fetching the projects with the foreign keys handled. When I last did this during the calendar I had some helper functions that would do this but I'm glad to have learned this syntax, makes things cleaner. Thanks for reading today's blog, until next time.