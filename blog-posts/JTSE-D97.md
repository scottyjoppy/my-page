---
title: "Day 97: API Route Variables"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "July 18, 2025"
description: "Passing variables into API routes."
---

Hello friends,

<br>

Today I focused more so on the API and practical usage of the plant checking function.

<br>

## API Route

<br>

I understand how you pass variables into a function that makes sense. What I didn't understand is how you would go about calling an API route, with either a GET or POST method, and include a prop into that. What I learned today is the following. There are a few ways of doing this but I'll focus on two. The first suits best the situation in which you need only pass a simple string as the variable, let's say it's the user ID. When building the route, you can create a dynamic route by surrounding it's name in brackets. That way you can do something like call a route with that variable.

<br>

```ts
// Say I'm fetching the API with the userId "Alex123"

const userId = "Alex123";

await fetch(`/api/users/${userId}`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ data }),
});
```

<br>

Then you'd access it like this.

<br>

```ts
// /api/users/[id] but [id] is Alex123
export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  const userId = params.id;
}
```

<br>

Simple enough, and then as for passing more data it would look like this.

<br>

```ts
// Passing a name, and plants array

await fetch("/api/users/AlexId", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Alexander",
    plants: [{ id: 1, plant_name: "Tim" }],
  }),
});
```

<br>

Then in the API route.

<br>

```ts
export async function POST(req: Request) {
  const { name, plants }: { name: string, plants, Plant[] } = await req.json();
}
```

<br>

And there you have to, passing variables into API routes. I know there are a few ways to do this dynamic slug things in NextJS, and I have a lot still to learn with it. While I didn't get a ton done today, I figured out an essential part of web development, and learn something quite valuable. So that's it for today, thank you for reading, let's find answers, and have fun, friends.