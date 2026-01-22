---
title: "Day 241: Fix Fix Fix"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "January 21, 2026"
description: "Now that the website is up I can properly test for errors."
---

Hello friends,

<br>

So it's now been a full day that the website is up and I'm saddened to report the absolute tragedy that it wasn't a completely 100% bug free launch.

<br>

_Nah I completely expected this_

<br>

Yeah I expected there to be some things I missed. I've been in such a trance the past few months working on this site it's only normal that some errors slip through. So I spent the day fixing some of those errors.

<br>

## The Mistakes

<br>

The first blaring error was that FireFox rendered the image border wrong. On the home page is an image of me with a ::before::after border on the top and bottom. Something in the way that FireFox renders pseudo elements led to them being placed slightly off. The solution was simple thankfully and I just had to change a few lines of code:

<br>

```css
/* Image container has explicit height + width */

.image-container {
  height: 25rem;
  width: 25rem;
  padding: 1.2rem 0;
}

/* Image shouldn't copy the sizes but just fill the container */
/* Also move the margin on the image to be padding on the container */
.image {
  /*
    height: 25rem;
    width: 25rem;
    margin: 1.2rem 0; 
*/
  height: 100%;
  width: 100%;
}
```

<br>

Boom problem solved. The next issue was that some browsers that don't support the custom scrollbar and put their own cringe one in. Which sure, slay, but I didn't realize that the default one sometimes clips the anchors on the navbar. Simple solution, add a max width for the content and some more padding.

<br>

Other than moving files around the other thing I had to fix was just a small styling annoyance. I didn't like that when I zoomed out of a page, even if there wasn't enough content, you'd still be able to scroll a bit. This happens because of this line:

<br>

```tsx
<html lang="en" suppressHydrationWarning>
  <body>
    <Navbar />
    {/* min-h-screen */}
    <div className="bg-inherit min-h-screen">{children}</div>
    <Footer />
  </body>
</html>
```

<br>

This line is kind of a failsafe that ensures the page will always fill ATLEAST the full view height. You might be able to spot it but the footer here is causing that small zooming problem. Because since I'm setting the height to already be the screen size, that extra few rems from the footer will extend it ALWAYS a bit beyond that. The solution, either make the footer absolute, orrrr.

<br>

```tsx
<div className="bg-inherit min-h-[97vh]">{children}</div>
```

<br>

Just make the default height a little less. Simple, elegant, good for now...