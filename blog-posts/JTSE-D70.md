---
title: "Day 70: Repeating Cookie Checks"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "June 15, 2025"
description: "Ensuring users who clear their cookies don't still have access to authorized content."
---

Hello,

<br>

Today I didn’t make a lot of progress on the Water Me project, but I experienced a noticeable ease in stress when dealing with authorization problems.

<br>

## The Main Goal

<br>

The main thing I wanted to do today, is deal with the edge case that someone clears their cookies, but still has access to what’s on their page. Because so long as the user doesn’t refresh the tab, my current auth setup won’t detect that the user has cleared their cookies. This is not a huge problem but for my minds sake I’d like something in protection of this.

<br>

This is a common issue. It happens because on mount, my current project uses javascript to pull the data in the users cookei jar, and then saves them to use in components. Once things are mounted, there are no further checks to re-validate tokens. So while there are a couple solutions, the one I went with is a simple context component. In a useEffect hook I check if there is an auth-token in my cookie jar. Simple as that, if there is, do nothing, if not, logout and redirect the user.

<br>

It was nice setting up this quick cookie checker and I think it's a good step towards building up a good understanding of how authentication works. Thank you for joining today's rather short blog, and I will be back tomorrow.