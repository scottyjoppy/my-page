---
title: "Day 95: React Email"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "July 16, 2025"
description: "Intro to React Email."
---

Hello friends,

<br>

Today I wanted to look into **_[React Email](https://react.email)_**. While I vaguely understand that emails use a kind of HTML format with less bells and whistles, I think it's good to maintain consistency in my project with something like React Email.

<br>

## Styling

<br>

Right away I wasn't thrilled to have to go back to regular ol' CSS. Using inline styling, and a separate CSS file. But I realized I wasn't the only person with this peeve. React Email has built in support for Tailwind, you just have to install and import it. There are a few stylings that aren't available in email, and somethings need to be written a bit more explicitly, but otherwise it's a great help to have support for Tailwind and made the styling much easier.

<br>

## Components

<br>

In order to support TSX, React Email has a few pre-built components that are then rendered to HTML. I'll demonstrate this here.

<br>

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Welcome</title>
    <style>
      body {
        font-family: Arial, sans-serif;
      }
      section {
        padding: 20px;
      }
    </style>
  </head>
  <body>
    <section>
      <h1>Welcome to Our Service</h1>
      <p>We’re glad you’re here. Let’s get started!</p>
    </section>
  </body>
</html>
```

<br>

Would look like this:

<br>

```tsx
import {
  Html,
  Head,
  Body,
  Tailwind,
  Section,
  Heading,
  Text,
} from "@react-email/components";

const WelcomeEmail = () => (
  <Tailwind>
    <Html lang="en">
      <Head />
      <Body className="font-sans bg-white">
        <Section className="p-6">
          <Heading className="text-2xl font-bold text-black">
            Welcome to Our Service
          </Heading>
          <Text className="text-base text-gray-700 mt-2">
            We’re glad you’re here. Let’s get started!
          </Text>
        </Section>
      </Body>
    </Html>
  </Tailwind>
);

export default WelcomeEmail;
```

<br>

## Thoughts

<br>

Today I mainly spent time inserting the templates and deducing how everything works. I created a very very rough email and sent a few to myself to see how they match up. React Email has a nifty previewing command where you can view all your emails in the browser. Very similar to how you'd preview your project as a whole with "npm run dev". Overall I'm very happy with it and I'm glad to have settled on Resend and React Email for this project. It took a while to come to those two but it was well worth it. That is all for today, thank you for reading today's blog. On the road through time, forget not to make stops and breathe, friend.