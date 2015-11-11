'use strict';
describe('Intro to Jasmine and JS basics', function() {
  describe('Variables', function() {
    it('should create a variable called car with the value "Mustang" that is not assigned to the window', function() {
      var car = 'Mustang';
      expect(car).toBe('Mustang');
      expect(window.car).toBe(undefined);
    });
    it('should have a variable return undefined without explicitly assigning it to undefined', function() {
      var something;
      expect(something).toBe(undefined);
    });
  });

  describe('Strings', function() {
    it('should use string concatention to create a string with the following variables', function() {
      var oh = 'Oh',
          my = 'my',
          how = 'how',
          i = 'I',
          love = 'love',
          javascript = 'JavaScript';
      expect(oh + ' ' + my + ', ' + how + ' ' + i + ' ' + love + ' ' + javascript + '!!!').toBe('Oh my, how I love JavaScript!!!');
    });

    it('should select the right character from the string', function() {
      expect('kreplach'[6]).toBe('c');
    });
  });

  describe('Numbers', function() {
    it('should correctly floor four', function() {
      expect(Math.floor(4.00000000000001)).toBe(4);
    });
  });

  describe('Booleans', function() {
    it('should add two booleans together to get 1', function() {
      expect(true + false).toBe(1);
    });
    it('should convert 0 into false', function() {
      expect(!!0).toBe(false);
    });
  });

  describe('Arrays', function() {
    describe('For Loops', function() {
      it('should be able to use for loops to loop through an array', function() {
        var arr = [0, 0.3, 0.6, 1]
        for (var i = 0; i < arr.length; i++) {
          expect( Math.ceil(arr[i] * 3) ).toEqual(i);
        }
      });
    });
    describe('#forEach', function() {
      it('should be able to iterate through an array and use numbers and their indices', function() {
        [1, 2, 3, 4, 5].forEach(function(num, i){
          expect(num - 1).toEqual(i);
        });
      });
    });
  });
});
