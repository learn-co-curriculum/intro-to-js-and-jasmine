# Intro to Jasmine and JavaScript

## Objectives
+ Run Jasmine Tests
+ Read Jasmine Tests
+ Use Debugger to figure out bugs in code

## Jasmine

In Jasmine, to make a set of tests for a particular subject you set it apart by creating a `describe` function with the first argument as the subject, and the second and `anonymous function`.  In the `block` of that `anonymous function` you can either go more specific with nested `describe` `block`s or an `it` function. `It` the actual test; it takes a string as the first argument about what it is testing and an `anonymous function` that contains an `expect` function that compares your code to the expected outcome.  


## Test Walk-Through

```js
describe('#favIceCream', function() {
  it('should return your fav icecream', function() {
    expect(favIceCream("mint chocolate chip")).toBe("I love mint chocolate chip");
  });

});
```

The test above, is testing a function #favIcecream. The `it` block declares in plain English the expectation being tested. In this case, we're testing that the function returns the favorite icecream. The `expect` block calls the function behind tests, and uses a matcher (in this case `toBe`) to test what the return value of the function should be.

The `expect` is calling the function `favIceCream` and passing in the parameter `"mint chocolate chip"`.

## Instructions

This lab is designed to get you comfortable with the syntax of Jasmine as well as JavaScript.All you need to do to complete it is make all the tests pass in the `spec/intro-spec.js`.  You'll be coding your solution in `code.js`.

Before you get started, make sure you run `learn -b` to see the tests output in the browser. Take each test step by step, and remember that you can use `debugger` if you get stuck.

1. Write a function called `favIceCream`, which accepts a parameter and returns the string `"I love <NAME_OF_ICECREAM>"`.

2. Write a function called `shouting`, which accepts a string as a parameter and returns the string in all caps.

3. Write a function called `roundDown`, which accepts a number as parameter and returns the number rounded down the closest whole number.

4.  Write a function called `theTruth`, which returns `true`.

## Resources
* [Jasmine Documentation](http://jasmine.github.io/2.0/introduction.html)

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/intro-to-js-and-jasmine' title='Intro to Jasmine and JavaScript'>Intro to Jasmine and JavaScript</a> on Learn.co and start learning to code for free.</p>
