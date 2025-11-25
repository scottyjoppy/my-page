---
title: "Day 3: My Page & Data Engineering"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "April 9, 2025"
description: "Building scalable components and attending the 18th Vienna Data Engineering meetup."
---

Hello,

<br>

today I saved 5 minutes by spending an hour building something else. I believe this is a common situation in software engineering but it makes sense (in some cases). What I did today was first hardcode 3 icons with links, simple enough. But I thought to myself: "What if I want 4? 5, 6... what then?". This is when the DRY method (Don't Repeat Yourself) comes into play. Building 3 identical bulky components should be just 1, repeated however many times I need.

<br>

## Some Coding

<br>

```tsx
<a href="https://github.com/scottyjoppy" target="_blank">
    {
    <FaLinkedin
    style={{fontSize: "2rem"}}
        className="transition-all hover:fill-primary/90"
    />
    }
```

<br>

While short you can imagine the repetitiveness when trying to create multiple links or change the size. So a DRY approved component would be one where you would import the changing values, like href, label, icon, from a seperate object file. In which you can scale as you please. Then the component would then map the objects into it's respective elements.

<br>

```tsx
const SocialIcons = ({ size = 2 }: SocialProps) => {
  return (
    <>
      {SocialIconList.map((link, index) => (
        <Link href={link.href} key={index} target="_blank">
          {
            <link.icon
              style={{ fontSize: `${size}rem` }}
              className="transition-all hover:fill-primary/90"
            />
          }
        </Link>
      ))}
    </>
  );
};
```

<br>

Much more elegant here this component does it all. All it requires is the SocialIconList import which can be updated as needed. It also has an added size prop so the number can be changed in one place. I love finding solution like this, makes the brain happy.

<br>

## Data Engineering Meetup

<br>

Besides the code today I attended the _**[18th Data Engineering Meetup](https://www.meetup.com/vienna-data-engineering-meetup/events/306930427/)**_ in Vienna hosted and organized by _**[Rigerta Demiri](https://www.linkedin.com/in/rigerta/)**_ and _**[Davor Martinovic](https://www.linkedin.com/in/davormartinovic/)**_. It was lovely, big room lots of people and plenty of food and drink.  
We had two talks the first by _**[Aleksandar Milicevic](https://www.linkedin.com/in/milicevica23/)**_ and _**[Georg Heiler](https://www.linkedin.com/in/geoheil/)**_. They focused on how Magenta Telekom builds and maintains large-scale data pipelines systems that move and clean data across different tools. They use a tool called Dagster an open-source framework for managing data workflows.

<br>

The second talk was by _**[Thorsten Steuer](https://www.linkedin.com/in/thorsten-steuer-2b2589164/)**_ and _**[Philipp Roth](https://www.linkedin.com/in/philipp-roth-13b55a11a/)**_. They talk about how ORF explored which cloud platform would best suit their data needs. They wanted to know which option handled their workloads best and Databricks came out on top for working with large datasets and fast analytics. Databricks is designed for teams working with huge amounts of data, and it makes things like machine learning or large-scale reporting much faster and easier.

<br>

Overall they were both good and I got some further insights into data engineering which is a whole world I have yet to delve into. But I look forward to tomorrow. When I begin my next project and dive into the world of Figma and Headless CMS'.

<br>

Thanks again for your valuable time. And may the next day be filled with new adventures and opportunities.
