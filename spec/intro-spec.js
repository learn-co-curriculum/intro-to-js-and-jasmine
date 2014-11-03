describe('Intro to Jasmine and JS basics', function() {
  describe('Variables', function() {
    it('should create a variable called car with the value "Mustang" that is not assigned to the window', function() {
      // some assignment goes here.
      expect(car).toBe('Mustang');
      expect(window.car).toBe(undefined);
    });
    it('should have a variable return undefined without explicitly assigning it to undefined', function() {
      // something gos here
      expect(/* your answer goes here */).toBe(undefined);
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
      expect(/* your answer goes here */).toBe('Oh my, how I love JavaScript!!!');
    });
    it('should select the right character from the string', function() {
      expect('kreplach'/* your answer goes here */).toBe('c');
    });
  });

  describe('Numbers', function() {
    it('should correctly floor four', function() {
      expect(4.00000000000001).toBe(4);
    });
  });

  describe('Booleans', function() {
    it('should add two booleans together to get 1', function() {
      expect(/* your answer goes here */).toBe(1);
    });
    it('should convert 0 into false', function() {
      expect(/* your answer goes here */).toBe(false);
    });
  });

  describe('Arrays', function() {
    it('should be able to iterate through an array', function() {
      [1, 2, 3, 4, 5].forEach(function(/* needs to pass some args */){
        expect(num - 1).toEq(i);
      });
    });
  });
});
