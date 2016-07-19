const fs = require('fs');
const jsdom = require('jsdom');
const path = require('path');

describe('Intro to Jasmine and JS basics', () => {
  beforeAll(done => {
    const src = path.resolve(__dirname, '..', 'code.js');

    jsdom.env('<div></div>', [src], {}, (err, window) => {
      if (err) {
        return done(err);
      }

      Object.keys(window).forEach(key => {
        global[key] = window[key]
      });

      done();
    });
  });

  describe('favoriteIceCream()', () => {
    it('should return your fav icecream', () => {
      expect(favoriteIceCream("mint chocolate chip")).toBe("I love mint chocolate chip");
    });
  });

  describe('shouting()', () => {
    it('should return a string in all caps', () => {
      expect(shouting("i love javascript soooooo much")).toBe('I LOVE JAVASCRIPT SOOOOOO MUCH');
    });
  });

  describe('roundDown()', () => {
    it('should correctly floor the number', () => {
      expect(roundDown(5.99)).toBe(5);
    });
  });

  describe('theTruth()', () => {
    it('return true', () => {
      expect(theTruth()).toBe(true);
    });
  });
});
