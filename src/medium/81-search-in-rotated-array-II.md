The goal of the problem is the find if a target is present in a sorted, pivoted array.
Normally, finding a target is an array is done using binary search.

Here, because the array has been pivoted, a simple one pass binary search approach is not possible.
What does it take to find the pivot index ?

Consider the following array:
[2, 5, 6, 0, 0, 1, 2]

Originally, it was:
[0, 0, 1, 2, 2, 5, 6]

Let's consider a naive approach to finding the pivot:
Consider a pointer `i` that starts at 0. We increment `i` until we reach a point where `arr[i+1] < arr[i]`. This is
the index of the pivot. Once we know where the pivot is, we can conduct a binary search on the correct half of the array
to find if the target is present or not.

How does the fact that there may be duplicates impact the search ?

Ex:
[1, 2, 6, 6, 6, 6, 6, 6, 6]

[2, 6, 6, 6, 6, 6, 6, 6, 1]

[x, x, x, x, x, x, x, x, x]

[2, x, x, x, x, x, x, x, 1]

[2, x, x, x, 6, x, x, x, 1]

[2, x, x, x, 6, x, 6, x, 1]

[2, x, x, x, 6, x, 6, 6, 1]

Ex:
[0, 0, 0, 0, 0, 0, 0, 1, 2]

[2, 0, 0, 0, 0, 0, 0, 0, 1]

[x, x, x, x, x, x, x, x, x]

[2, x, x, x, x, x, x, x, 1]

[2, x, x, x, 0, x, x, x, 1]

[2, x, 0, x, 0, x, x, x, 1]

[2, 0, 0, x, 0, x, x, x, 1]

As soon as we find distinct numbers, everything goes well.

Ex:
[2, 2, 2, 2, 2, 2, 3, 3, 3]

[2, 3, 3, 3, 2, 2, 2, 2, 2]

[x, x, x, x, x, x, x, x, x]

[2, x, x, x, x, x, x, x, 2]

[2, x, x, x, 2, x, x, x, 2]
// this step is hard to code properly
[2, x, x, x, 2, x, 2, x, 2]

[2, x, 3, x, 2, x, 2, x, 2]

[2, x, 3, 3, 2, x, 2, x, 2]

// Can we be smarter in the good case and narrow down faster on the target rather than do a double-pass ?

[0, 0, 1, 2, 3, 5, 6]

[3, 5, 6, 0, 0, 1, 2], target: 5

[3, x, x, x, x, x, 2]

[3, x, x, 0, x, x, 2]

[3, x, 6, 0, x, x, 2]

[3, 5, 6, 0, x, x, 2]



[3, 3, 3, 4, 0, 1, 2], target: 1

[3, x, x, 4, x, x, 2]

[3, x, x, 4, x, x, 2]

[3, x, x, 4, x, 1, 2]

Yes we can !
