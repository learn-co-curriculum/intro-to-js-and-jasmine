'use strict';
describe('Intro to Jasmine and JS basics', function() {
  
  describe('#favIceCream', function() {
    it('should return your fav icecream', function() {
      expect(faveIcecream("mint chocolate chip")).toBe("I love mint chocolate chip");
    });
    
  });

  describe('#shouting', function() {
    it('should return a string in all caps', function() {
    
      expect(shouting("i love javascript soooooo much")).toBe('I LOVE JAVASCRIPT SOOOOOO MUCH');
    });
  });

  describe('#roundDown', function() {
    it('should correctly floor the number', function() {
      expect(roundDown(5.99)).toBe(5);
    });
  });

  describe('#theTruth', function() {
    it('return true', function() {
      expect(theTruth).toBe(true);
    });
    
  });

 
});
