describe('Set', () => {
  beforeAll(() => {
    console.log('beforeAll');
  });
  beforeEach(() => {
    console.log('beforeEach');
  });
  afterAll(() => {
    console.log('afterAll');
  });
  afterEach(() => {
    console.log('afterEach');
  });
  test('case 1', () => {
    console.log('case 1');
    expect(1 + 1).toBe(2);
  });
  test('case 2', () => {
    console.log('case 2');
    expect(1 + 3).toBe(4);
  });

  describe('other group', () => {
    test('case 3', () => {
      console.log('case 3');
      expect(1 + 6).toBe(7);
    });
    test('case 4', () => {
      console.log('case 4');
      expect(1 + 9).toBe(10);
    });
  });
});

// beforeAll
// beforeEach
// case1
// afterEach
// beforeEach
// case2
// afterEach
// beforeEach
// case3
// afterEach
// beforeEach
// case4
// afterEach
// afterAll
