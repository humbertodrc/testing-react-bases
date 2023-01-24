describe('matchers', () => {
  test('toBe', () => {
    expect(true).toBe(true)
  })

  test('toEqual', () => {
    const data = { usuario: 'Humberto' };
    expect(data).toEqual({ usuario: 'Humberto' })
  })

  test('ToStrictEqual', () => {
    const arr = ['one', 'two', 'three'];
    expect(arr).toStrictEqual(['one', 'two', 'three'])
  })

  test('not', () => {
    expect(true).not.toBe(false)
  })

  test('string', () => {
    expect('hola').toMatch(/hola/)
    expect('hola').toMatch('hola')
    expect('hola').not.toMatch(/adios/)
    expect('hola').not.toMatch('adios')
  })
})