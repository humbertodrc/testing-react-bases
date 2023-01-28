describe('setup and teardown examples', () => {
  
  beforeAll(() => {
    console.log('beforeAll')
  })

  beforeEach(() => {
    console.log('beforeEach')
  });

  afterAll(() => {
    console.log('afterAll')
  })
  
  test('example', () => {
    expect(true).toBe(true)
  })

  test('example 2', () => {
    expect(true).toBe(true)
  })
})