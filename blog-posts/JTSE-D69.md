---
title: "Day 69: We Got There"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "June 14, 2025"
description: "A big leap in understanding, properly getting Auth up and running."
---

Hello,

<br>

Finally, I setup authentication for my page, and I actually semi-get it. Today started with just getting things to work at a basic level, then compounding improvements until it was where I wanted it to be.

<br>

## Docs

<br>

By far the hardest thing I had to overcome was the docs. Out of date information is tough to work through, and I couldn't allow myself to allow depreciated imports in my project, out of principle. But many visits to Supabase Auth, Google Auth Provider, and Next.js docs, allowed me to get a full picture of what I had to do to get things working.

<br>

The main thing I wanted to see work was when I'd login, I would receive tokens in my cookies; then allow access to new routes. I also wanted that when I clear my cookies manually, I lose access to logged in content.

<br>

## Custom Hook

<br>

To make conditional components, based on auth, easier to create, I created the useAuthSession hook. This hook basically just fetches the Supabase session on mount, and returns the boolean. It's set as an event listener on storage so if tokens are created, badabing badaboom. It also looks out for auth state changes like a login or logout.

<br>

I then used this hook in the navbar, for example, to only show specific routes if the user is authenticated. I also changed the users plant page to only fetch plants that match their own user id.

<br>

It feels great having authentication working. There are still some tweaks here and there to improve upon things but the large hurdle is now behind me. Thank you for reading today's update, see ya tomorrow.