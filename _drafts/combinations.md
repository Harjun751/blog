
I don't claim for this to be the best algorithm for making combinations, but I think it's pretty understandable.

To visualize it, I will be making some humanly pictorizations.

We first need some blockers - these "block" the indexes that we don't want in the combinations. The blockers start at the very end of the index

Once the blockers are created, the algorithm is pretty understandable.

Shift the first blocker in front by 1.
Collect the array without the blockers
Repeat, until the blocker hits it's frontmost position.

Once the blocker hits the front,
get the next frontmost blocker and bring it in front of that blocker

repeat, until all the blockers are at the front. you are now done.

proof: maybe once i get a computer science degree, lol