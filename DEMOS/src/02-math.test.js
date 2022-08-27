const { sum, multi, divide } = require('./02-math'); // imports

describe('Math test', () => {
  describe('sum test', () => {
    test('adds 1 + 3 should be 4', () => {
      const answer = sum(1, 3);
      expect(answer).toBe(4);
    });
  });
  describe('multi test', () => {
    test('multiply 2 * 5 should be 10', () => {
      const answer = multi(2, 5);
      expect(answer).toBe(10);
    });
  });
  describe('divide test', () => {
    test('divides 10 / 5 should be 2', () => { // In the same block we can do multiple cases
      const answer = divide(10, 5);
      expect(answer).toBe(2);
      const answer1 = divide(5, 2); // like this line
      expect(answer1).toBe(2.5);
    });

    test('divides zero has to be null', () => { // In the same block we can do multiple cases
      const answer = divide(10, 0);
      expect(answer).toBeNull();
      const answer1 = divide(5, 0); // like this line
      expect(answer1).toBeNull();
    });
  });
});
