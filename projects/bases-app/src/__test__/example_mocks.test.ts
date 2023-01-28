describe('first example', () => {
  test('examples with mocks', () => {
    const myMock = jest.fn();

    // console.log(myMock);
    myMock()
    myMock()
    myMock()

    // expect(myMock).toHaveBeenCalled();
    expect(myMock).toHaveBeenCalledTimes(3)
  })

  test('examples with mocks return value', () => {
    const myMocks = jest.fn();

    myMocks.mockReturnValueOnce(true).mockReturnValueOnce("Hello").mockReturnValue(5)

    const result1 = myMocks();
    const result2 = myMocks();
    const result3 = myMocks();

    expect(result1).toBe(true)
    expect(result2).toBe("Hello")
    expect(result3).toBe(5)
  
  })
})