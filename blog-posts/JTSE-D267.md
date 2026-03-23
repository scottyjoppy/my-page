---
title: "Day 267: Autodesk Fusion, Full Adders & Research Papers"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "Mar 23, 2026"
description: "Dipping my toes into a proper 3D modeling program and playing around with the IC's."
---

Hello friends,

<br>

So first things first hello once more, it's been a while. In all honesty I've been in a bit of a slump but more than ever I'm just struggling to write down all that I'm doing. While most of the time I feel like I'm doing nothing I'll try to push that all aside here and talk about the things I have been doing the past 10 days between now and the last blog. Here we go!

<br>

## Autodesk Fusion

<br>

I was going on a bit of a 3D printing kick for a few days where I always had it running on something. Whether it was some random file I picked off [Printables](https://www.printables.com), or something I designed on [TinkerCAD](https://www.tinkercad.com), something was printing. I got to the point where I was feeling severely limited by TinkerCAD's 3D designing capabilities. 

<br>


Not to say it wasn't an amazing tool to just get started with designing, I just felt as if now I was ready for something more. So after a bit of searching, I decided to pick up Autodesk Fusion.

<br>

The main motivation was that it was free, but additionally it just seemed like many people recommended it. I did a quick YouTube tutorial to figure out how to orbit the camera, then set off on my first project.

<br>

Our shower has this little wedge piece that keeps falling off. I took it upon myself to take the next few days to measure, model, and print a replacement, with a small extra lip to add stability. 

<br>

***I feel like a God***. It feels like I now have this ability to just make anything I please (as long as it is possible to 3D print). It's fantastic. And after only a few headaches fumbling my way through the program, I ended up with this:

<br>

![wedge1](/images/blog-images/day267-wedge1.jpg)

<br>

![wedge2](/images/blog-images/day267-wedge2.jpg)

<br>

*Please disregard how gross the original looks...*

<br>

## Full Adder

<br>

Last time I messed with breadboards I made some logic gates with transistors, and then made a more complicated circuit which had a latch to detect button presses. After making that I made a larger order on AliExpress to get more toys to play with on the breadboard. I haven't had the chance to use anything, until this week.

<br>

This video by the Global Science Network [Full Adder Tutorial](https://www.youtube.com/watch?v=mZ_2406nCrE) guided me on the various designs to make a full adder. I wanted to level up the logic by adding logic gates into this design. I used three IC's a 7486, 7408, and 7432. Each IC has 4 logic gates inside and a VCC and GND input to power the chip itself. The three needed were XOR, AND, and OR. I then modified the design from the video a bit since I didn't have switches and ended up with this circuit:

<br>

![full adder](/images/blog-images/day267/fulladder.jpeg)

<br>

The building process was quite relaxing actually, for the first time I used these stiffer cables so I could finally ditch the long wires I was using before. This made everything a lot more legible and clean.

<br>

The one issue I did face for a while was that half the breadboard wasn't powered. I went around with a multimeter for a while, checking all the wires and IC's. I even took some components to a separate board and made sure they work there. After hours of looking for the error I realized that it was just the second half of the breadboard that didn't have power. That's when my attention was brought to the lines on the top and bottom rail of the board. 

<br>

What I learned is that some breadboard rails don't go the whole length. You can see that the line is actually split in the middle, indicating that this board is split in half. A neat feature if you want it but man did this through me in a loop. I connected the rails and finally everything worked as expected. The next step is to actually get some switches and resistors and make this add more than just a few numbers.

<br>

## Downtime Reading

<br>

Besides all this tinkering I've taken it upon myself to start reading up on construction robotics. This is a topic that greatly interests me and I have many aspirations of working in this field in the future. So I've been trying to spend some of my free time reading up on any research paper I could find on the topic.

<br>

Namely on the current state of micro construction robotics such as with [TERMES](https://www.roboticsproceedings.org/rss07/p35.pdf), [aerial AM robotics](https://discovery.ucl.ac.uk/id/eprint/10208790/1/Aerial%20AM%20Review%20Paper%20accepted%20version.pdf), and larger [In Situ Fabricators](https://arxiv.org/pdf/1701.03573).

<br>

It's a fascinating field, and really making me think about the future of construction robotics. The level to which smaller bots can work with larger bots. As well as the possibility of construction being handled by aerial machines. An exciting future ahead for sure.