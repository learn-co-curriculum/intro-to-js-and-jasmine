const fs = require('fs');
const jsdom = require('jsdom-global');
const path = require('path');

describe('Intro to Jasmine and JS basics', () => {
  beforeAll(() => {
    const src = fs.readFileSync(path.resolve(__dirname, '..', 'code.js'), 'utf-8');
    this.jsdom = jsdom('<div></div>', { src });
  });

  afterAll(() => {
    this.jsdom();
  });

  describe('#favIceCream', () => {
    it('should return your fav icecream', () => {
      expect(favIceCream("mint chocolate chip")).toBe("I love mint chocolate chip");
    });
  });

  describe('#shouting', () => {
    it('should return a string in all caps', () => {
      expect(shouting("i love javascript soooooo much")).toBe('I LOVE JAVASCRIPT SOOOOOO MUCH');
    });
  });

  describe('#roundDown', () => {
    it('should correctly floor the number', () => {
      expect(roundDown(5.99)).toBe(5);
    });
  });

  describe('#theTruth', () => {
    it('return true', () => {
      expect(theTruth()).toBe(true);
    });
  });
});
