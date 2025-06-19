---
title: "Day 73: Python Automation"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "June 18, 2025"
description: "Creating a python script to simplify creating the blog"
---

Hello friends,

<br>

Today I solved a problem I’ve been putting off for so long: simplifying the process for me to create a new blog. I put this off in the hopes that I could convert everything to Sanity.io sooner, but unfortunately I think I’m a ways away from doing that still.

<br>

## Current State of Things

<br>

Entering this field of programming where automation is everything, the fact that I’m manually creating the blog every day is a really annoying. Currently this is how I go about making a new post.

<br>

1. Open VSCode.
2. Paste my "copy paste blogpost" terminal command, while changing the dates.
3. Edit the headers and delete yesterday's text.
4. Write the blog.
5. Git add, commit, and push.

<br>

I hate doing this every day and know there's a better way. Today was finally the day to automate some of this process.

<br>

## The Solution

<br>

The solution is a simple python application that lives on my desktop. When I run the app, some code will execute to do a few things:

<br>

1. Open the folder with the blogs.
2. Find the largest number for the most recent blogpost.
3. Copy & paste it while changing the name to add one day.
4. Loop through the new file to modify the headers and clear the previous day's blog.
5. Open up the project for me to write the blog.

<br>

I decided to make this in python as I believe it's the quickest way to build it.

<br>

Step 1 & 2: Use a for loop and regex to find the largest number.

<br>

```py
pattern = re.compile(r"JTSE-D(\d+)\.md")

for file in os.listdir(source_folder):
    match = pattern.match(file)
    if match:
        num = int(match.group(1))
        if num > max_num:
            max_num = num
            latest_file = file
```

<br>

Step 3: Create the file paths to the old and new files, and copy it.

<br>

```py
new_filename = f"JTSE-D{new_num}.md"

source_file = os.path.join(source_folder, latest_file)
dest_file = os.path.join(source_folder, new_filename)

shutil.copy(source_file, dest_file)
```

<br>

Step 4: Using a while loop, open the file and search for headers. Then modify the values.

<br>

```py
with open(dest_file, 'r+', encoding="utf-8") as f:
    lines = f.readlines()
    for i, line in enumerate(lines):
        # Clear the description line
        if line.strip().startswith("description:"):
            key = line.split(":")[0]
            lines[i] = f'{key}: ""\n'
```

<br>

Step 5: Open VSCode.

<br>

```py
# Simulate the CLI command "code"
subprocess.Popen(["code", vscode_project_path, dest_file])
```

<br>

While there are many improvements I could add to even further simplify the blog creation process, the most impactful being switching to Sanity.io, this simple file of code is a great start. Thank you for tuning in for today's blog. A sincere good day to you, friend.