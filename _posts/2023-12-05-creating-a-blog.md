---
layout: post
custom_excerpt: My ravings on creating the blog site you are seeing right now.
excerpt_image: /assets/blog-images/2023-05-12/yuck.png
---
<figure>
    <img class="hero" src="{{ site.baseurl }}/assets/blog-images/2023-05-12/inception.png"/>
</figure>
# CREATING A BLOG
So I wanted somewhere to write about the projects or random stuff I was doing, so I decided to create a blog (in 2023... 🤮). I like designing my own stuff from ground up and then making it from scratch, so I wasn't going to use wix or any other website builder.

## DESIGNING WITH FIGMA
<figure>
    <img class="blog-img" src="{{ site.baseurl }}/assets/blog-images/2023-05-12/figma.png"/>
    <figcaption>my figma board</figcaption>
</figure>
My first step for something like this was to get on Figma ([please don't get acquired](https://www.theverge.com/2022/11/8/23445821/figma-adobe-acquisition-design-vr-ai-meta)) and just start designing.
<figure>
    <img class="blog-img" src="{{ site.baseurl }}/assets/blog-images/2023-05-12/yuck.png"/>
    <figcaption>the first design. disgusting. inferior. yuck.</figcaption>
</figure>
Of course, not every design is perfect. I usually begin by picking colors ([coolors](https://coolors.co/) is nice), then going for typography (google fonts). Rinse repeat until I get a design that I like.

## building it like the forefathers intended
I initially aimed on building the site entirely on HTML & CSS and serving it on a simple http server to make it as lightweight as possible. I also wanted to serve the static pages without a backend. So I did, creating the main list page and the actual blog post page. It didn't take too long as the design wasn't too crazy.

## i ❤️ borders
<figure>
    <img class="blog-img" src="{{ site.baseurl }}/assets/blog-images/2023-05-12/border.png"/>
    <figcaption>who doesn't love a good, handsome border?</figcaption>
</figure>
I <i>did</i> have a little hiccup creating the site though. And that was in creating the borders that you see in the figure above. I had no idea how I would solely get the corner of the borders to show. I had a rough idea of blocking out the non-corner areas of the border using a white element, but my background is not uniformly white so that would not work. Luckily, there are no original ideas in this world and everything that you think of has already been thought of. I found [this smart CSS implementation by Temani Afif](https://css-tip.com/corner-only-border-image/) online. I read it through and used it to get the borders I desire so very much.


After finishing up the design, I realized why people use site generators; it would be a huge PITA whenever I had to add a new blog post. I would have to make a copy of the blog post page, edit it for the new post, link it in the main page, add the excerpt and thumbnail in the main page, etc. etc.

## static site generators?!
I haven't used a static site generator (or, SSG because it sounds cooler) before, so I did some research. At first i stumbled across [Hexo](https://hexo.io/) which is a node based SSG. It seemed pretty suited towards what I was making, so I took a look at making a project based around it.

However, Hexo seems to be ancient (1.0 was released 10 years ago.. which is 170 in web-framework years), and there isn't much of a community around it in this day and age. Furthermore, creating my own theme, which is why I even decided to build a website from ground up, was seemingly difficult and confusing. So, I decided to scrap it and look for others. 

I came across [Gatsby.js](https://hexo.io/), which was a framework I've considered using before. However, I'd have to dip my feet back into
React again, which would take me a while to acclimatize to. So, I searched for more.

Then, I found [Jekyll](https://jekyllrb.com/). Jekyll seemed to be perfect - no wonky javascript frameworks, big community (github pages uses jekyll!), good documentation, and as an added bonus, easy deployment to github pages! It even used a template engine that I had experience with, LiquidJS. Bringing over my web pages and stylings over to jekyll was extremely easy and pain-free. Creating blog posts using markdown is also a pretty smooth experience.

## deploying
<figure>
    <img class="blog-img" src="{{ site.baseurl }}/assets/blog-images/2023-05-12/beauty.png"/>
    <figcaption>bold and brash</figcaption>
</figure>
Deploying the jekyll project to github pages was frictionless. <i>Or so I thought</i>. A tale as old as time itself: The assets weren't loading. As per the jekyll step-by-step guide, I was diligently using the url `/assets/images/...` for my assets (and stylesheet). Because I was deploying to a subdirectory `Harjun751.github.io/blog/`, it needed a proper baseurl to be set, so that all asset links could be prepended with that base url. [This beautiful website](https://mademistakes.com/mastering-jekyll/site-url-baseurl/) by a Michael Rose set me on the right path to right my wrongs. This particular problem should be mentioned on the jekyll guide, methinks. It's a common enough use case.
Eventually, I deployed it. I mean, you're looking at it, aren't you?

## conclusion
This was a pretty fun project for me. I'm pretty proud of how the blog looks, and it was a good use of 2 days of my free time in NS. Jekyll is pretty cool. Thank you Temani Afif for the borders, and thank you Michael Rose for the enlightenment.