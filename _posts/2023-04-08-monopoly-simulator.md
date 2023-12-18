---
layout: post
custom_excerpt: Adventures in object-oriented money-making
excerpt_image: /assets/blog-images/2023-04-08/ChanceOfLandingByColor.png
---
<figure>
    <img class="hero" src="{{ site.baseurl }}/assets/blog-images/2023-04-08/monopoly.webp"/>
</figure>

# Virtual Monopoly Simulator
[Project Github Link](https://github.com/Harjun751/JavaMonopoly)

My bunkmates and I have been on a Monopoly binge recently. Why do we play such a game that is purely luck-based? Do we, humans, enjoy stepping on the weak or misfortuned? Is there a statiscally-proven way to increase your chance of winning? These were the thoughts that entered my mind when I rolled just the correct number to land on the dark-blue Sentosa Cove with a god-forsaken hotel on it.

I want to win this damn game. I want to be rich. Gaslight, Gatekeep, Girlboss. CEO mindset. I couldn't find (or didn't bother to find) any statistics regarding the best properties to buy, so I decided to create a simulation of the game. I was learning Java around the time this idea came to my mind, so that's the language I used.

I present to you a Java implementation of the hyper-realistic popular capitalistic boardgame-cum-bankruptcy-simulator, Monopoly.

## Class diagram
<figure>
    <img class="blog-img" src="{{ site.baseurl }}/assets/blog-images/2023-04-08/ClassDiagram.png"/>
    <figcaption>class diagram</figcaption>
</figure>
I started out by creating a class diagram using Visual Paradigm. The concepts and objects of Monopoly map quite logically into an object-oriented scenario.

The observer design pattern is implemented to get some data. In the diagram, there is a Statistics Logger which logs how much rent is collected where and how many times a place is landed on. There is also an event logger which logs all the events that occur, e.g. a player 1 pays rent of 200 to player 2.

## coding
With the class diagram mapped out, coding the actual game itself was delightfully easy.

I utilized Jupiter's testing framework to create unit tests and check that the functionality was correct.

# Data & Conclusions
## Methodology
Simulations were run for 1000 turns for 100 separate games. The data was collated from every game.

## Graphs
<figure>
    <img class="blog-img" style="width:100%" src="{{ site.baseurl }}/assets/blog-images/2023-04-08/ChanceOfLandingBySpace.png"/>
    <figcaption>chance of landing on a tile</figcaption>
</figure>

Players land more frequently in the middle area of the board

<figure>
    <img class="blog-img" style="width:100%" src="{{ site.baseurl }}/assets/blog-images/2023-04-08/ChanceOfLandingBySpaceSorted.png"/>
    <figcaption>chance of landing on a tile, sorted</figcaption>
</figure>

GO is the board space most landed on, followed by 2 orange spaces, bayshore & east coast. Bayshore was landed on 2.88% of the time, in the 100,000 turns ran.

<figure>
    <img class="blog-img" style="width:100%" src="{{ site.baseurl }}/assets/blog-images/2023-04-08/ChanceOfLandingByColor.png"/>
    <figcaption>chance of landing on a tile, grouped by colour</figcaption>
</figure>

For the color sets, the most frequently landed on set was the railroads. This is followed by orange, red, and yellow. Brown was the least-landed on property.

## [Monopolyland](https://www.monopolyland.com/the-best-monopoly-properties-to-buy/)  was right?
Orange does seem to be a good property to buy due to the relatively high landings and price. Dark blue also nets a lot of rent, specifically sentosa cove. This is due to the high base rent of sentosa cove.

Railroads are landed on quite frequently, and it may be a good strategy to psyop your friends into believing railroads are trash, and then buying the railroads from them.


## TL;DR
Buy orange, red, yellow, railroads too I guess?

# part 2: Creating a web app
[Project Github Link](https://github.com/Harjun751/MonopolyWebApp)

On top of creating the sim, I thought that making a website would be fun for this.

## Backend (😳) frameworks
Coming into this from a learning perspective, I wanted to see how Java could be used for backends as well. The most popular backend framework for Java seemed to be Spring, so I decided to just go ahead with that.

This was a mistake.

### Spring.
So there's spring, which is the java framework for creating backends. But spring also does a million other things. Then there's also spring <i>boot</i> which is described as:
> Spring Boot Extension is Spring's convention-over-configuration solution intended to aid in creating production-grade Spring applications with minimal amounts of configuration.

It's an opinionated configuration of spring, which is the recommended way to start.
Making the backend application to me was like hacking together a tangled mess and praying that it did what I needed to do. I don't remember much else other than the feeling. A fugue. Eventually, it did what I needed it to do.

But I digress, the popularity of the framework must mean that it's good. I probably needed more time to dig into the fundamentals and really learn in-depth the whys and the hows.

## Backend Implementation
The backend exposes an endpoint that runs 1 game simulation and returns the JSON information of the whole game that just occured. There are also endpoints that allow downloading of a generated .csv file from the server, and an endpoint to configure the initial board.

## Frontend
<figure>
    <img class="blog-img" src="{{ site.baseurl }}/assets/blog-images/2023-04-08/preview.webp"/>
    <figcaption>the site</figcaption>
</figure>
I used Vue as I was comfortable with it and liked it. 
I went with a retro-game style with a bunch of animations, and made a cascading money background which sums the game up pretty nicely I think. Implementing the game board in HTML was an interesting venture.

## Conclusion
It was a solid project for me to dip my feet into Java, though I don't think I will be touching spring any time soon yet.

The man who believes that the secrets of the world are forever hidden lives in mystery and fear. Superstition will drag him down. The rain will erode the deeds of his life. But that man who sets himself the task of singling out the thread of order from the tapestry will by the decision alone have taken charge of the world and it is only by such taking charge that he will effect a way to dictate the terms of his own fate. Monopoly will be won.