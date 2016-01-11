# Intro to Jasmine and JavaScript

## Objectives
+ Run Jasmine Tests
+ Read Jasmine Tests
+ Use Debugger to figure out bugs in code

## Jasmine

Jasmine is Flatiron's (and many other developers) testing library of choice for JavaScript.  It is modeled after RSpec, the de facto ruby testing library.  Jasmine offers a robust domain specific language that is easy to use and follow.  It's main use is for unit testing. In practice this means testing functions and objects in a program in isolation to assure they do what they're expected to.


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

<a href='https://learn.co/lessons/intro-to-js-and-jasmine' data-visibility='hidden'>View this lesson on Learn.co</a>
