# Intro to Jasmine and JavaScript
## Jasmine

Jasmine is Flatiron's (and many other developers) testing library of choice for JavaScript.  It is modeled after RSpec, the de facto ruby testing library.  Jasmine offers a robust domain specific language that is easy to use and follow.  Its main use is for unit testing. In practice this means testing functions and objects in a program in isolation to assure they do what they're expected to.

In Jasmine, to make set of tests for a particular subject you set it apart by creating a `describe` function with the first argument as the subject, and the second and `anonymous function`.  In the `block` of that `anonymous function` you can either go more specific with nested `describe` `block`s or an `it` function. `It` the actual test; it takes a string as the first argument about what it is testing and an `anonymous function` that contains an `expect` function that compares your code to the expected outcome.  

This lab is designed to get you comfortable with the syntax of Jasmine as well as JavaScript.  All you need to do to complete it is make all the tests pass in the `spec/intro-spec.js`.  That is the only file you will need to edit.

##Before You Start

Run Jasmine test suite:

  ```shell
  $ learn  # runs only in the terminal
  $ learn -b # runs also in the browser
  ```

## Resources
* [Jasmine Documentation](http://jasmine.github.io/2.0/introduction.html)
* [String Constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
* [Number Constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
* [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

<a href='https://learn.co/lessons/intro-to-js-and-jasmine' data-visibility='hidden'>View this lesson on Learn.co</a>
