---
title: "Day 229: Expanding Ascii"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "January 06, 2026"
description: "Creating dynamically growing text art."
---

Hello friends,

<br>

After experimenting with Ascii for a day I arrived at one issue, what happens when the user zooms in or out. See the problem with using this kind of element is that you can't grow and shrink the content normally. Sure you can adjust the text size but an Ascii image is a fixed *x* letters wide *x* letters high image. But it doesn't always have to be like that.

<br>

## So, Columns

<br>

I added in two Ascii columns on the home page and had the hope that since it's such a repetitive design, I could dynamically control how tall it would be. And frankly, vibe coding worked perfectly here. I knew a few things, firstly, I need to break up this column into three pieces, the cap, expandable middle section, and the base. I would use the sections height to determine how big the middle section needs to be. To actually get the middle section I would pass a ref of the wrapper section down to the Ascii component. So let's go through that here:

<br>

```tsx
// First define what one row should look like
const PIPE_ROW = "     ||||||||||||";

// Hold magic numbers for easy adjusting
const LINE_HEIGHT = 16;
const FIXED_LINES = 7;
// Let it get small
const MIN_ROWS = 6;
// Let it get really big
const MAX_ROWS = 480;

// The actual component
const RomanCol = ({ className, parentRef }: Props) => {
  const [rows, setRows] = useState(12);

  useEffect(() => {
    if (!parentRef?.current) return;

    const computeRows = () => {
      // Use parent sections height
      const height = parentRef.current!.offsetHeight;
      const available = height - FIXED_LINES * LINE_HEIGHT;

      const next = Math.floor(available / LINE_HEIGHT);
      setRows(Math.max(MIN_ROWS, Math.min(next, MAX_ROWS)));
    };

    computeRows();

    const observer = new ResizeObserver(computeRows);
    observer.observe(parentRef.current);

    return () => observer.disconnect();
  }, [parentRef]);

  // Create the actual column, including the variable number of rows
  const asciiArt = `    ______________
   (_,..........,_)
${Array.from({ length: rows })
  .map(() => PIPE_ROW)
  .join("\n")}
    <____________>
      )        (
    _/__________\\_
  _/______________\\_
 |__________________|`;

```

<br>

Then I just need to apply my stylings to get it into position but that's about it. Columns that grow and shrink. I will try to limit the use of dynamically changing Ascii since it is a little complicated to add every time. Especially considering that something like an image would just need *display: flex*. But once in a while, it's a nice touch.