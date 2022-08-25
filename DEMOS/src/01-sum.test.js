const sum = require('./01-sum'); // This is the way to import th file(function)

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
