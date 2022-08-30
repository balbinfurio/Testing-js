const Person = require('./06-person');

describe('test for Person', () => {
  let person;
  beforeEach(() => {
    person = new Person('Furio', 45, 1.87);
  });

  test('should return under', () => {
    // Arrange (given data)
    person.weight = 45;
    // Act (do this on a given data)
    const imc = person.calcIMC();
    // Assert(what we do expect)
    expect(imc).toBe('under');
  });

  test('should return normal', () => {
    person.weight = 70;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });

  test('should return overweight', () => {
    person.weight = 90;
    const imc = person.calcIMC();
    expect(imc).toBe('overweight');
  });
});
