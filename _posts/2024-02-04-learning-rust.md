---
layout: post
custom_excerpt: I'm a rustacean now.
excerpt_image: /assets/blog-images/2024-02-04/ferrisangry.png
---
<figure>
    <img class="hero" src="{{ site.baseurl }}/assets/blog-images/2024-02-04/crusty.png"/>
</figure>

# Rust
There's a project that I'd like to do. I want to do it in a new language as a learning exercise too. There's a couple of languages that I had my eye on, but I decided to go with Rust.

## Rust's incredible credentials
<figure>
    <img class="blog-img" src="{{ site.baseurl }}/assets/blog-images/2024-02-04/dev_survey.png"/>
    <figcaption>extracted from the stack overflow 2023 developer survey</figcaption>
</figure>
So, why did I go with Rust? Rust has a very clean track record. For **8 YEARS IN A ROW** Rust has kept its title of the [most admired language by developers](https://github.blog/2023-08-30-why-rust-is-the-most-admired-language-among-developers/), according to Stack Overflow developer surveys. You can see [2023's results here](https://survey.stackoverflow.co/2023/#section-admired-and-desired-programming-scripting-and-markup-languages). Sure, it's not the most sought after by employers - learning Rust won't secure your place in a fancy-pantsy job at a FAANG. Oh wait. What's that? 

## MICROSOFT COMES IN WITH THE STEEL CHAIR!
Microsoft was recently (Apr 2023) looking for Rust developers to re-write [core Windows code in Rust!](https://www.theregister.com/2023/04/27/microsoft_windows_rust/). Now if that isn't a vote of confidence, I don't know what is. Microsoft loves Rust. [Google loves Rust](https://security.googleblog.com/2021/04/rust-in-android-platform.html). Developers love Rust. I must know why.

## My process
<figure>
    <img class="blog-img" src="{{ site.baseurl }}/assets/blog-images/2024-02-04/code.png"/>
    <figcaption>2000+ lines of code!</figcaption>
</figure>
I began my journey of learning Rust through the free online [Rust book](https://doc.rust-lang.org/book/title-page.html), that is recommended by the Rust official website. It contains 20 chapters, providing nitty-gritty explanations of every feature of Rust there is. The book is interspersed with code blocks exemplifying the concepts. My personal process of learning was keeping the book open next to vscode. I'd read along, and once I encounter those code blocks I would code-along. The book is great at making you understand the concepts of Rust, but it doesn't do much to help you internalize it. The book does not contain any quizzes, questions, or assignments (it *is* a book). At the end of the book, I compiled over 2000 lines of code!

## Filling in the gaps
So, to help me truly understand everything and make it 'fit', I made a tiny program. I made a basic scientific calculator in rust, taking in a statement (e.g. 10 * (5 + 2)) and spewing out the answer. In the deeper chapters, I'd read what the authors intended to do next, and code it out without looking at the book. I definitely feel that I still have some gaps to cover, but I will be doing a project in Rust that I believe will iron them out.

## The gaps
<figure>
    <img class="blog-img" src="{{ site.baseurl }}/assets/blog-images/2024-02-04/bruh.png"/>
    <figcaption>this does not compile.</figcaption>
</figure>
Rust to me is quite different from the other languages that I've learnt so far. It has a set of concepts that I've never seen in any other languages, such as ownership. Sure, something *like* this exists in other languages. I'm still grappling with these concepts. When to use a reference, when to give ownership, when I need to borrow, etc. Some error messages to me read as arcane, but the book has given me the tools to know what part of it is wrong at least.

## My impressions
I can see why people love Rust. It gives you confidence that you've built rock-solid code, with such a strict compiler. It's also really powerful! I love that `if` statements are expressions, and because of that variables can be assigned to the values returned from the if statements. I like that testing feels very baked-into the language! No `imports` or `use` statements required, no external library. No junit. I'm sure I'll get a better grasp on it once I finish that project I've been meaning to do!