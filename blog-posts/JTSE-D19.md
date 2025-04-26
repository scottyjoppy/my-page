---
title: "Day 19: React Hooks & ES6"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "April 25, 2025"
description: "Hitting the docs to deepen my knowledge on React and JavaScript."
---

Hello,

<br>

Didn't have the chance to code today but still had the opportunity to learn something new. Since I started using React I've been intrigued by these mystical hooks. I knew they'd be important so I took today to finally try to understand them (on paper at least).

<br>

## React Hooks

<br>

Before anything, hooks are built-in React features that allow devs to use state, pass context, declare refs, improve performance, and many more. They're super powerful and help a ton to clean up the code.

<br>

### useState()

<br>

```javascript
const [running, setRunning] = useState(false);
```

<br>

The code uses array destructuring to access both the running state and its setRunning function, the initial value being false. The hook lets a component "remember" information, like user input.

<br>

### useContext()

<br>

useContext allows you to pass data to children without the need for props. It's like creating a global variable for everything within the component tree. It's useful to pass data like whether or not a website is in dark or light mode.

<br>

### useRef(null)

<br>

```javascript
const runningRef = useRef(running);
runningRef.current = running;
```

<br>

useRef handles data that isn't used for rendering. It does not trigger a re-render so it's often for non-React systems. It's like a box you can put a value in without React noticing.

<br>

## ES6

<br>

I also spent some time learning the forEach() method. Before its creation, we were limited to using a for loop and manually handling the index. Similar to Python, forEach allows us to loop through an array much more easily.

<br>

```javascript
const print = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};
```

<br>

VS

<br>

```javascript
const print = (arr) => {
  arr.forEach((e) => console.log(e));
};
```

<br>

I strive to always learn and improve my programming skills. That's what this journey I'm blogging about is for. Of course I learn much more by actually coding, but it's about small but consistent efforts; that's what will pay off in the end. Thanks for reading today's recap; until tomorrow.
