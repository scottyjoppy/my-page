---
title: "Day 93: Solving Notifications"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "July 08, 2025"
description: "Solving the problem I had pulling data from the notifications table."
---

Hello friends,

<br>

So a few days ago I wrote about creating a new profile table to store user settings such as notifications. To refresh your memory, I had one main issue, I couldn't pull the data from the table. I couldn't figure out what was going wrong but today, I think I figured it out.

<br>

```ts
export async function GET() {
  const supabase = await createClient();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Once I've setup the user client, I fetch the profiles table, specifically the settings column.

  const { data: profile, error } = await supabase
    .from("profiles")
    .select("settings")
    .eq("user_id", user.id)
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Return out the profile table.

  return NextResponse.json(profile);
}
```

<br>

While there was technically no problem with the API route, I did have a problem when using it's fetched data.

<br>

```ts
const res = await fetch("/api/profile", { method: "GET" });
if (!res.ok) {
  setNotifications(null);
  return;
}
const data = await res.json();
const notifications = data?.settings?.notifications ?? false;
```

<br>

The problem here was very slight and took some time to come to.

<br>

```ts
const notifications = data?.settings?.notifications ?? false;
```

<br>

This is the problem line, technically, my API route return an object like the following.

<br>

```ts
data = {
  profile = {
    settings = {
      notifications = {},
    },
  },
};
```

<br>

In this case, I'm off-by-one. I would need to change my code to either:

<br>

```ts
const notifications = data?.profile?.settings?.notifications ?? false;
```

<br>

Or

<br>

```ts
return NextResponse.json(profile.settings);
```

<br>

Both solutions take me that one level deeper to actually get to the data. My confusion came when I assumed that returning something like profile allowed me to immediately extend it further and access it's columns. However, the returned object is still wrapped within an object, so I still need to query it to access it.

<br>

Either way I'm glad I could figure this out and continue on. I added the handleSubmit function with a new PUT function in the API route so as to save the notification setting once I change it. And that was that. Thank you for reading today's blog, knock down problems one at a time, and from time to time, look back at all the conquered lands, friend.