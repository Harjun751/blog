---
layout: post
custom_excerpt: Truly groundbreaking.
excerpt_image: /assets/blog-images/2024-03-16/main-cropped.png
---
<figure>
    <img class="hero" src="{{ site.baseurl }}/assets/blog-images/2024-03-16/main-sized.png" width="50%"/>
</figure>

# my rss reader
<b>MY</b> RSS reader does things that other RSS readers don't do. <b>MY</b> RSS reader is <em>special</em>. <b>MY</b> RSS reader provides you things. To read. This is <b>MY</b> RSS reader. There are many like it, but this one is <em>MINE</em>.

## ok but why
The RSS reader that I'm using right now in this post-Google-Reader world is [feedly](https://feedly.com/). It's really cool and has many cool features. I will now list the cool features.
- Read later
- Annotation
- Read count for articles
- A cool little green description on articles that are trending
- Feedly AI summaries for certain mentions
- Bookmarks
- and more, probably.

I mean, wow. Those are really cool. But I don't use any of these features. Don't get me wrong, I'm not complaining that these features are in feedly, but I have one major gripe with it. I've followed a myriad of different publishers, and all their articles are showing up on one little happy place (that is to say, feedly). I can view and read all of these articles in my happy place. I never have to leave my happy place! Oh wait, what's this?
<figure>
    <img class="blog-img" src="{{ site.baseurl }}/assets/blog-images/2024-03-16/damn.jpg" style="max-width:50%"/>
</figure>
It's only showing an excerpt of the full article! Now, if I want to read the full article, I have to leave my little happy place and go to the scary website. I completely understand why publishers do this - high-quality journalism (such as what you're reading now) is not free. Journalists need to get paid. These sites want their ad revenue, analytics data, and subscriptions (in the case of paywalls). <b>BUT</b> I am but a student. University is hella expensive. I don't have a salary right now as I'm doing my full-time National Service (it's <em>ALLOWANCE</em>). I'm saving what I can to support my Uni, and I have other expenses too. I can't afford subscriptions to publishers right now - I promise you WIRED, I like your stuff and one day I will subscribe to you. One day. 

So this major gripe leads to here. I want an RSS reader that will allow me to read full articles without ever having to leave.

## FIGma time
<figure>
    <img class="blog-img" src="{{ site.baseurl }}/assets/blog-images/2024-03-16/prototype.png"/>
    <figcaption>my figma board</figcaption>
</figure>
As always, my first step is to prototype on Figma. For this stage, I wasn't really interested in a pretty UI, and was more focused on the backend - mainly I wanted to make sure full text extraction could work.

## Planning time
My next step was planning how I'd go about building the system. I made some diagrams to help me visualize how it'd all pan out.
<figure>
    <img class="blog-img" src="{{ site.baseurl }}/assets/blog-images/2024-03-16/erd-blank.png"/>
    <figcaption>Entity Relationship Diagram</figcaption>
</figure>
Firstly, I did an Entity Relationship Diagram. This helps me greatly for the database setup, and for the classes to be used in the actual program later. As I was doing this diagram, I had a little conundrum regarding log-ins and passwords. I had to weigh whether or not I wanted user accounts, and if I did, whether or not I wanted passwords (which brought on added complexity). I decided against user accounts, as right now this is a purely personal project. Also, I was thinking about where to put user configuration. Databse or Cookies? Ultimately, I decided to go with cookies, as the configuration stored would not be that important. Additionally, adding cookies is trivial.

<figure>
    <img class="blog-img" src="{{ site.baseurl }}/assets/blog-images/2024-03-16/seq-blank.png"/>
    <figcaption>Sequence Diagram</figcaption>
</figure>
Then, I did some sequence diagrams depicting a few flows of the program. The figure above shows a sequence where a user wants to get an article with full text extraction.

Lastly, I had to decide which frameworks to use to build this project. My first requirement was to use Rust, as I recently learnt about it and wanted to solidify my knowledge. Surverying the backend frameworks, I chose [Axum](https://github.com/tokio-rs/axum). I looked at other frameworks such as [Rocket](https://rocket.rs/), but I chose Axum because of it's simplicity. Axum doesn't rely on macros, so writing an Axum program <em>looks</em> like Rust. I'm trying to convey that it's more low-level as compared to other frameworks. Another very popular point that many sages & high-level wizards on Reddit make is that Axum is backed by the [Tokio Organisation](https://tokio.rs/), so there's a lower chance of it being dropped completely and becoming useless in the future. This is a possibility for other frameworks - Rocket [development was on hiatus](https://github.com/rwf2/Rocket/discussions/1672#discussioncomment-1225139) due to its author having an extremely difficult month.

For the frontend framework, I chose [Dioxus](https://dioxuslabs.com/). I chose it because it was React-like, and I was familiar with JavaScript frameworks like that. It looked simple, and provided many targets to deploy to: Web, Desktop, Mobile, and even Terminal UI? It looked alright to use, and it's ranking was pretty high when I searched for "rust frontend frameworks". That's <em>gotta</em> mean something.

## Writing time
<figure>
    <img class="blog-img" src="{{ site.baseurl }}/assets/blog-images/2024-03-16/fax.jpg"/>
    <figcaption>app.rs after 48 hours of hard work</figcaption>
</figure>
Writing the backend with Axum was delightfully easy. I was applying many of the concepts I had learnt from the Rust book, and solidifying my knowledge on some of the more quirky parts of Rust, like lifelines. I was truly writing <em>Rusty</em> code. Maybe some of the rustiest I've written. I was particularly proud of solving this problem below:
<figure>
    <img class="blog-img" src="{{ site.baseurl }}/assets/blog-images/2024-03-16/snippet-backend.png"/>
</figure>
The error I was getting was that this function wasn't satisfying a bound to be an Axum handler. This was because the future could not be Sent safely, as <b>`Box<dyn Error>`</b> did not implement Send. Due to the nature of it being a dynamic error, I could not make it implement Send. So, the way I fixed it was this:
<figure>
    <img class="blog-img" src="{{ site.baseurl }}/assets/blog-images/2024-03-16/snippet-fixed.png"/>
</figure>
I moved the asynchronous call and match statement into its own scope (see the curly braces). This meant that at the end of the block, the `res` variable (the dyn Error) would go out of scope and hence be freed. This meant that the future could then be sent around.

As I said, I was pretty proud of this. I didn't google it or anything, it was satisfying because I was applying the concepts I learnt (of lifelines and scopes) to a non-obvious solution (am I even conveying this properly??), and it worked in a way I was expecting it to on the first try. I didn't have to do anything like this in other programming languges, so it was new to me. TLDR; brain get dopamine.

But the happy times must end. As they always do.

## Sad time
I really enjoyed writing Axum, but when switching gears to Dioxus I suffered a pretty good deal. Dioxus is in <b>0.5</b> right now - when I started it was at <b>0.4</b>. It's a rapidly-developing framework, and it's not mature yet. Because of this, it has "Developer-experience" issues.

<p style="color:#9D9B9B;">
(One of the issues I had while developing the frontend was really quite embarrasing. I risk my credibility as a programmer if I delve into it here. This issue got me on a little hiatus from developing the app, that's how bad it was. Anyway let's just chalk it up to uhhh unfamiliarity in a new environment. Yea. Let's call it that.)
</p>

I did have legitimate problems with Dioxus, though. One of them was regarding an onclick handler. 
<figure>
    <img class="blog-img" src="{{ site.baseurl }}/assets/blog-images/2024-03-16/snippet-fe.png"/>
</figure>
I already implemented the onclick handler fine, and it was able to run my asynchronous function when the item was clicked on. However, when I introduced the `subs.restart()` call into the on_click closure, the line on the right would error. The error was perplexing: `borrowed data escapes outside of function `cx` escapes the function body`. I had no idea why the error would be on that line, or why the data escaped the function. The error was also pointing to a lifeline that was defined in a #[component] macro, code that I couldn't see or touch. After fumbling arround, trying to find out why, I found an [issue on github](https://github.com/DioxusLabs/dioxus/issues/1562) that was exactly what I had. The issue was closed, with a merged PR, so apparently this was fixed in the latest version of Dioxus. But, when I tried to update my dependencies, I was still getting the issue! So I asked on the thread, and one of the maintainers told me that the code would work out of the box.

I was confused. This wasn't working for me though!? So I copied the code over to my app, and made the minimum amount of changes so that it would compile properly. And. It. Worked. I felt defeated. I decided to use that code, and make step-by-step changes until it matched my code exactly. That way, I could see at which part the error is introduced. I got it down to this:
<figure>
    <img class="blog-img" src="{{ site.baseurl }}/assets/blog-images/2024-03-16/cursed.png"/>
    <figcaption>it's cursed.</figcaption>
</figure>
I changed that line to a dummy function returning another Result<> and it worked. Ahh, I got it! It's cursed. The function is cursed. Good job everyone. Pack it up, go home, wrap it up! We're done here - the line is cursed. Call an exorcist.

So the exorcist arrives, and they notice something - there actually is a small difference between the dummy function and actual function. The return type of the dummy function is a Result<Subscription, <b>String</b>>, while the return type of the actual function is a Result<Subscription, <b>reqwest::Error</b>>. The exorcist suggests to me that maybe this is happening because your return types don't implement Copy: specifically reqwest::Error. I nod solemnly and checked the module docs - it doesn't implement Copy. I make a change in the library function, and lo and behold it compiles.

To sum it up, I was getting this issue on an unrelated line that borrowed data (didn't tell me which data!) was escaping the function, and because the return type of my Error Result did not implement Copy, it was borrowed into the closure. By implementing Copy, it would have had its own scope in the closure, so it could live as long as it needed to. It would have been nice if the error was more specific OR in the correct place.

## Cookie time
I was also trying to set up cookies for some time to no avail. I was having trouble setting the withCredentials flag for reqwests, the library I used in the project. I [even opened a github issue on it](https://github.com/DioxusLabs/dioxus/issues/2099), but it seems that it isn't supported. Sad. And because I was very annoyed with the whole process, I created a blog post so that I would remember how to do it in the future.

## Result time
<figure>
    <img class="blog-img" src="{{ site.baseurl }}/assets/blog-images/2024-03-16/cool.gif" style="max-width:40%"/>
    <figcaption>say it's cool SAY IT'S COOL</figcaption>
</figure>
I was able to get full text extraction working! I would like to work on this project even more, but I've reached my time limit. I'm flying off to Germany for <b>[REDACTED]</b>, so I won't be able to work on it. On top of that, a friend wants to work on something with me, so I'm putting it this on hold. I will definitely come back to this project, though.
