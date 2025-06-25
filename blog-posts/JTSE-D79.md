---
title: "Day 79: Profile Page Shenanigans"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "June 24, 2025"
description: "Further building the profile page."
---

Hello friends,

<br>

Today I continued development on the profile page. At the time of writing this I’m realizing that this small, just for fun, quick project has now been a 3 going on 4 week project. Not at all what I intended, but I’m willing to go through with it if it means the next app will be half that time.

<br>

## Profile Page

<br>

Started simple enough, layout and style. Since I already worked out dynamic sizing in the other pages I could copy some of those styles in right away. Then I just settled on the profile values the user can modify. One LLM autocomplete trick I like to do is when I have multiple semi-repetitive tags with similar styling. I’ll just make one of the groups, then autocomplete the rest. Additionally, I got it to create two layouts, one within a form tag with inputs and one without. Then I created some buttons to save, cancel and edit. Boom layout complete.

<br>

The problem began when I went to update the auth.users table. I currently have a function like the following to fetch user data.

<br>

```ts
export const getUser = async () => {
const { data, error } = await supabase.auth.getUsers();

return data.user;
```

<br>

What confused me was supabase kept showing a warning that said:

<br>

_Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and many not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server._

<br>

I went through changing everything everywhere trying to stop this warning from popping up. Part of me now just believes it showed for no reason or was bugged for some reason. Either way I couldn’t solve it and I’ll have to revisit it tomorrow, but it’s super annoying to deal with problems like this when it's not at all clear where it originates from. 

<br>

That's all for today's blog. I'm looking forward to being done this project and beginning to post more online about the work I'm up to. I'm proud I could keep this blog up for almost 80 days now, I'm super excited to see how it develops over the next few years. Thank you for walking this journey with me, and hopefully the path feels less lonely on your end as well. Until tomorrow, friend.