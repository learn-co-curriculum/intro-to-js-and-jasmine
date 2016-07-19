# Intro to Jasmine and JavaScript

## Objectives

1. Run Jasmine Tests
2. Read Jasmine Tests
3. Use `debugger` to figure out bugs in code

## Jasmine

In Jasmine, to make a set of tests for a particular subject, we set it apart by creating a `describe` function with the first argument as the subject, and the second as an function. Within that function, we can either go more specific with nested `describe` blocks or an `it` function. `it` is an actual test; it takes a string as the first argument about what it is testing and a function that contains an assertion (Jasmine provides the `expect` keyword here) that compares your code to the expected outcome.

If we need to run certain code before or after some (or all) functions run, we can use `beforeAll()` and `afterAll()` as well as `beforeEach()` and `afterEach()`.

For example, in our test file, we're writing browser-based tests, we need to simulate a browser in our testing environment. To do so, we use `jsdom`, which mocks out objects and behaviors as if we were in a browser without actually forcing us to render anything in a browser window. This setup makes our tests portable — that is, it makes it so that they can run just about anywhere.

We set up the "browser" in a call to `beforeAll()`:

```javascript
  beforeAll(() => {
    const src = fs.readFileSync(path.resolve(__dirname, '..', 'code.js'), 'utf-8');
    this.jsdom = jsdom('<div></div>', { src });
  });
```

Then, when all of the tests have run, we tear that setup down with `afterAll()`:

```javascript
  afterAll(() => {
    this.jsdom();
  });
```


## Test Walk-Through

```js
describe('favoriteIceCream(favorite)', () => {
  it('returns "I love ${favorite}"', () => {
    expect(favoriteIceCream("mint chocolate chip")).toBe("I love mint chocolate chip");
  });
});
```

The test above tests a function named `favoriteIceCream`. The `it` block declares in plain English the expectation being tested. In this case, we're testing that the function returns a sentence about the favorite ice cream. The `expect` block calls the function behind tests, and uses a matcher (in this case `toBe`) to test what the return value of the function should be.

The `expect` is calling the function `favoriteIceCream()` and passing in the parameter `"mint chocolate chip"` — it's just as if `favoriteIceCream()` were running in a "real" application, but we can make assertions about what it returns..

## Instructions

This lab is designed to get you comfortable with the syntax of Jasmine as well as JavaScript. All you need to do to complete it is make all the tests pass in the `test/intro-test.js`.  You'll be coding your solution in `code.js`.

Before you get started, make sure you run `learn` to see the test output in your terminal. Take each test step by step, and remember that you can use `debugger` if you get stuck.

1. Write a function called `favoriteIceCream`, which accepts a parameter and returns the string `"I love <NAME_OF_ICECREAM>"`.

2. Write a function called `shouting`, which accepts a string as a parameter and returns the string in all caps.

3. Write a function called `roundDown`, which accepts a number as parameter and returns the number rounded down the closest whole number.

4.  Write a function called `theTruth`, which returns `true`.

## Note

Because we're writing browser-based tests, we need to simulate a browser in our testing environment. To do so, we use `jsdom`, which mocks out objects and behaviors as if we were in a browser without actually forcing us to render anything in a browser window. This setup makes our tests portable — that is, it makes it so that they can run just about anywhere.

## Resources

* [Jasmine Documentation](http://jasmine.github.io/2.4/introduction.html)
