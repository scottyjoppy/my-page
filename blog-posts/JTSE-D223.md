---
title: "Day 223: Success! Authorized"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "December 30, 2025"
description: "Figuring out how to protect and implement Supabase's auth."
---

Hello friends,

<br>

I finally got it working, and not only that, but can sorta tell what's going on.

<br>

## What's Going On

<br>

Let's start with the first file:

```ts
//src/proxy.ts

import { updateSession } from "@/lib/supabase/proxy";
import { type NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
```

<br>

NextJS will run this file every time the user makes a request from the webpage. Supabase then gets a chance to read and check the JWT's of that user. It checks for valid tokens, expired ones, and in my current use case will look for a specific user. But that's handled in this next file:

<br>

```ts
//src/lib/supabase/proxy.ts

import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const { data } = await supabase.auth.getClaims();

  const user = data?.claims;

  if (!user && request.nextUrl.pathname.startsWith("/test")) {
    // no user at all → redirect to login
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // user exists, now check if it's the MAIN_USER
  if (user && request.nextUrl.pathname.startsWith("/test")) {
    if (user.sub !== process.env.MAIN_USER) {
      // logged in, but not allowed → redirect to login
      const url = request.nextUrl.clone();
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }
  }
  return supabaseResponse;
}
```

<br>

Most of this is not my code but instead some code pulled directly from the docs. I don't get it all but my general understanding is that it starts by creating the server client. Then the next section syncs cookies between NextJS and Supbase. But the if statements are custom made to first redirect non users away from the test page. In the case a user is present, confirm it's the correct one. It's very primitive but it gets the job I need done and I'm good with it.

<br>

And with this it's all done. The test page is protected unless I'm signed into the main user account. I also setup a quick login page and tested everything with a few accounts. It all worked smoothly and I'm glad to say it was a much less painful process to implement this time around. Things get better with time, and so will I.