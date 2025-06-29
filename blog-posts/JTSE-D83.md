---
title: "Day 83: Resend"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "June 28, 2025"
description: "Learning about Resend & comin' out of the hole."
---

Hello friends,

<br>

So to catch up any readers, I'm trying to figure out how email notifications work on a web app. Also, I am coming out of now two pretty tough days, and trying to make the best of it.

<br>

## Resend

<br>

I'm hopeful that my long search of an inexpensive API to send emails ends here, with **_[Resend](https://resend.com)_**. Going through some of the Resend tutorials I found on YouTube, is the first time I actually feel like I'm understanding what it means to send an email with code. Resend coupled with something called **_[React Email](https://react.email)_** seems like the way I should be going in this project. Basically the quick start version which I tried today involved creating a util function like this:

<br>

```ts
export const sendEmail = async () => {
  try {
    const res = await fetch("/api/email", { method: "POST" });
    const data = await res.json();
    console.log("Response:", data);
  } catch (err) {
    console.error("Error sending email:", err);
  }
};
```

<br>

Which basically just calls my /api/email function with the method POST. Then in /api/email:

<br>

```ts
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "testemail.com",
      subject: "Hello World",
      html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}
```

<br>

Here I create a new instance of the Resend object to quickly send an email saying congrats...

<br>

I love how simple it is to set this up and I could get an email sent to my account with a simple click of a button. But learning more about how emails are written with code, I'm seeing how something like React Email could be useful in helping me create better looking and functional emails, simpler. 

<br>

## The hole

<br>

Today was not an easy day I'll admit. It took a lot out of me to just search how to do this and try it and I'm not proud of how tough it was. Nonetheless I'm glad I did it and hopeful that tomorrow I can achieve more. It's all about slow and steady steps in the right direction.

<br>

Thank you for reading today's blog. If anything I hope you can relate in some way to the human struggles that plague us. And together we can fight our way out and live the lives we desire. Thank you for your continued reading, may we meet again, and bathe in the sunlight, friend.