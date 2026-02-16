---
title: "Day 253: The Car"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "Feb 14, 2026"
description: ""
---

Hello friends,

<br>

Today I got the car up and running!

<video class="-rotate-90">
  <source src="/images/blog-images/day253-car-demo.mp4" type="video/mp4">
</video>

## How It Works

<br>

It's really fun watching this guy driving around, bumping into things and slowly reacting to it's environment. The way this was built was by following the guide on the [SunFounder](https://docs.sunfounder.com/projects/3in1-kit-r4/en/latest/car_project/car_project.html) page. It's a detailed guide that goes over using every component individually to first understand it's significance before applying it to the car as a whole.

<br>

In Alex terms, there's two motors underneath used to power the wheels. These feed into the driver module to control the spin of the wheels. Which then feeds into the Arduino. There are two front corner sensors to detect proximity to an obstacle based on light, and a front ultrasonic module that detects based on sound. These all feed as well directly into the Arduino. 

<br>

Other than that there is a line following module underneath that I never got to work, and an IR receiver used to control the car by remote control.

<br>

I think overall it was a great project to just dive headfirst into making a robot. And while the tutorial was super helpful and provided lots of explanation and code for me to use. I think now it's time for me to try and just do things on my own.

<br>

![car](/images/blog-images/day253-car.JPG)