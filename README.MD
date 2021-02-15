# README
description

## Compare the Triplets

Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).

The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

If a[i] > b[i], then Alice is awarded 1 point.
If a[i] < b[i], then Bob is awarded 1 point.
If a[i] = b[i], then neither person receives a point.
Comparison points is the total points a person earned.

Given a and b, determine their respective comparison points

## A Very Big Sum

In this challenge, you are required to calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

## Diagonal Difference

Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix ``arr`` is shown below:

```
1 2 3
4 5 6
9 8 9
```

The left-to-right diagonal = ``1 + 5 + 9 = 15``. The right to left diagonal = ``3 + 5 + 9 = 17``. Their absolute difference is ``|15 - 17| = 2``.

## Plus Minus

Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with ``6`` places after the decimal.

**Note:** This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10<sup>-4</sup> are acceptable.

## Staircase

Staircase detail

This is a staircase of size ``n = 4``:

```
   #
  ##
 ###
####
```

Its base and height are both equal to ``n``. It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size ``n``.

## Mini-Max Sum

Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

## Birthday Cake Candles

You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

## Time Conversion

Given a time in ``12``-hour AM/PM format, convert it to military (24-hour) time.

**Note:**
- 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

## Grading Students

HackerLand University has the following grading policy:
- Every student receives a ``grade`` in the inclusive range from ``0`` to ``100``.
- Any ``grade`` less than ``40`` is a failing grade.

Sam is a professor at the university and likes to round each student's  according to these rules:
- If the difference between the ``grade`` and the next multiple of ``5`` is less than ``3``, round ``grade`` up to the next multiple of ``5``.
- If the value of ``grade`` is less than ``38``, no rounding occurs as the result will still be a failing grade.