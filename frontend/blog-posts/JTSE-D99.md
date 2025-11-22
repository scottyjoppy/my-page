---
title: "Day 99: Bugs and Vars"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "July 20, 2025"
description: "Challenging debugging process and passing vars in API routes."
---

Hello friends,

<br>

Today I had an interesting experience debugging. While most times when I face an unusual bug I just send it over to ChatGPT and see what could potentially be wrong. Here was my issue, it was a typing issue with a GET function wherein I was passing a prop of an ID as a string through the route name.

<br>

"/api/admin/users/\[id\]/route\.ts"

<br>

The route basically looked like this:

<br>

```ts
export async function GET(req: Request, { params }: { id: string }) {
  const userId = params.id;
}
```

<br>

Simple enough. And pretty similar to how every other API route function. The problem is I kept getting this stupid build error about a non existent promise. I took it to ChatGPT and it kept producing lackluster responses that either didn't make sense, or didn't work. I knew that the code shouldn't change drastically since I have other routes that work no problem with similar code. Once the generations started spinning in circles I took it to Gemini. 
<br>

Gemini had this new implementation where it would ask me to provide a few other files to better understand things. I obliged and while it seemed to have a good solution, it didn't do a thing. I responded with the error again and it began drafting up a bug report for me. So I had tried one last LLM, Claude.

<br>

I personally haven't used Claude to code despite hearing so many great things about it. To my extreme delight and surprise, Claude the issue immediately. Recognizing common errors in newer versions of NextJS and suggesting a fix which actually worked immediately. 

<br>

I can say that I'm rethinking Claude a lot now. After today's experience, I'm now gonna try Claude for a some time. See how it goes and if it turns out bad, we'll go elsewhere. 

<br>

That's all for today, a real tail-chaser of a debugging process but the persistence was there. I'm glad I figured it out and in return got a better understanding of LLM's and API routes. The routes being something I was unaware and avoidant of entirely before this project. Thank you for reading the blog, the journey of discovery is an unbridled path through mountainous fears, be aware, be excited, friend.