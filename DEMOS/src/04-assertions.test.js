// matchers
test('test object', () => {
  const data = { name: 'balbin' };
  data.lastName = 'furio';
  data.age = 21;
  expect(data).toEqual({ name: 'balbin', lastName: 'furio', age: 21 }); // When we're working with objects we use ".toEqual"
});

test('null', () => {
  const data = null; // test null
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('booleans', () => {
  expect(true).toEqual(true); // test booleans
  expect(false).toEqual(false);

  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});

test('string', () => {
  expect('epic').toMatch(/pic/); // test match in string with regular expression "/pic/"
});

test('list / arrays', () => {
  const numbers = [1, 2, 3, 4, 5]; // test match in array
  expect(numbers).toContain(5);
});
