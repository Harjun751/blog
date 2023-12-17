# Advent of code 2023

day 7 was.... hard

Day 8 I learned something new! For the code to run and not take exceedingly long I realized that I needed to calculate the lowest common multiple of a set of large numbers. Then, I realized that I had not done that before nor had I had any idea on how.

## Day 10
Day 10 was interesting. I learned a lot. But I also suffered a lot. But existence is suffering and yet we continue on.
Anyway, Day 10 part 2 was the first problem I encountered in which I had absolutely no idea on how to proceed. The problem included a graph with tiles, where a letter represents a piece of pipe that connects north, south, east, and west. You are supposed to find a full loop in the tangle of pipes provided.

The first part was not too shabby, the part that consumed my time was creating the classes to represent the networking problem. I created a class Pipe which had the pipes it connects to in an array list. Parsing the text input and validating it so that the pipe was valid had a few twists and turns (e.g. a pipe connecting east to north cannot possibly connect to a pipe on its west). Once I was able to parse the input, finding the loop was easy - I used a depth first search.

The second part was where I was truly humbled. It involved finding out which tiles are enclosed within the loop found earlier. 

I had no idea how to proceed, and after a few duds I called it quits. Eventually, I searched up what methods people used to get the answers (I didn't look at their code okay!!) and found out that this problem was related to a couple of computer graphics algorithms, namely the [flood fill algorithm](https://en.wikipedia.org/wiki/Flood_fill). I also found out of the [even-odd rule](https://en.wikipedia.org/wiki/Even%E2%80%93odd_rule), which was what I used for my solution. I eventually reached the correct answer using this. This was a really interesting challenge.

## Day 12
For Day 12, I realized that I needed to get the permutations of a certain list of indexes for the answer. I searched online for an algorithm to do just that, and found [Heap's Algorithm](https://en.wikipedia.org/wiki/Heap%27s_algorithm). So I implemented that, magic'd up some regex to search for patterns for my answer, and then ran it. And then I found out that it was taking AGES to run for the given input.

To understand my mindset here, you have to know about the problem at hand. To distill it down, I needed to put a # symbol in a certain index of a string. I can only place them down in a particular set of indexes, and I needed to place them in every possible combination (keyword) so that I could check which arrangements produced the pattern I wanted. So, I ran and got the permutations (keyword) of the possible indexes that I needed to swap, then I swapped (keyword) them. So, back to track. I found out that my implementation of heap's to swap the indexes were producing many copies when I swapped characters at the indexes. I was stubborn, so I decided to dig my grave deeper and try to optimize it.

My optimizations attempted at early termination - if the swap resulted in the same string in the end (eg. a # swaps with a #), it is ignored and that branch is terminated. But this was really bad - a good portions of my program's timing involved checking if the string was a duplicate. I attempted a couple more, pulling my hair out figuring out why this was taking so. damn. long. I was being really stubborn, until I decided to drop it and take a step back.

Why was my permuatations (keyword) producing many, many, duplicates? Well. In permutations, ORDER MATTERS!! So, let's say I have a total list of indexes where I can insert a string - [1, 2, 3, 4]. I have a maximum of 2 strings I can insert. For a permutation, [1,4] is different from [4,1]. But when I am inserting a string (#) in the indexes in these permutations, they PRODUCE THE SAME STRING!!! 4P2 produces 12 different permutations. 12P4 produces 11880 different permutations. What I needed was combinations - where the [1,4] and [4,1] are not different. 4C2 produces 6 combinations. 12C4 produces 495 combinations.

So, now I knew what I needed to do. Produces combinations of an array of integers. How?
To my surprise, I couldn't easily find any well-defined algorithms to produce a combination. Sure, there was code on stackoverflow that I could just copy and paste, but I wanted to <i>learn<i>. I set out on creating my own algorithm for doing so, and settled on one that I describe here[]