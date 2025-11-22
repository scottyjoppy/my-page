---
title: "Day 194: Back to React"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "November 13, 2025"
description: "After weeks of Vue, how does it hold up."
---

Hello friends,

<br>

I'll say this now, Vue is just better. At least I like it better in terms of simplicity and output. I'm not skilled enough to learn the intricate differences between the two but in terms of just writing code I'm already missing Vue.

<br>

## Specifics

<br>

So the first thing I noticed is styling sucks so much more in React. To be fair this whole website written on the back of Tailwind so I already had quite the task ahead of me to translate everything to stylesheets. But I've developed this desire to separate specific stylings into their own sheets but that is just way more complicated in React. Because of the templating in a Vue script, adding a specific stylesheet is as simple as writing the foo.css then connecting:

<br>

```html
<style scoped src="/foo.css"></style>
```

<br>

While in react you're forced to create this ugly foo.module.css, then connect it with all of this:

<br>

```html
import styles from "./foo.module.css" const Page = () => { return (
<div className="{styles.container}"></div>
) }
```

<br>

And I use container here because this whole styles thing doesn't allow you to edit elements like h1 directly, you need EVERYTHING to be in a class, and my gosh if it's a class name with a hyphen then it turns to this:

<br>

```html
<div className={styles.container}></div>>

<!-- Into -->

<div className={styles["container-foo"]}></div>>
```

<br>

I hate it so much and it's so verbose UGH!

<br>

And yeah while there are some things I prefer in React like routing in so much simpler, the fact that the inner HTML is so modified to match it's templating, and that styling is a headache, and all these hooks are annoying in and of themselves, is enough for me to REALLY debate switching this whole website to Vue. I think it's best to just stick it out in the long run and at the very least learn how to use React. But I'm definitely going Vue for the next website.

<br>

That's my little rant for today, I'm unearthing some really bad previous me code so this will be quite the journey to rework this website. But hopefully once I get things running proper, I can delete a ton of things! Until next time, friend.