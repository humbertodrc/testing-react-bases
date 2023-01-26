// callbacks
const asyncCallback = (cb: any) => {
	setTimeout(() => {
		cb(true);
	}, 1000);
};

// promise
const asyncPromise = () => {
  return new Promise((resolve) => resolve(true));
}

describe("async code", () => {
	test("example of async callbackc", (done) => {
		asyncCallback((result: any) => {
			expect(result).toBe(true);
			done();
		});
  });
  
  test('example with promise', () => {
    return asyncPromise().then((result: any) => {
      expect(result).toBe(true);
    })
  });

  test.only('example with async/await', async () => {
    const result = await asyncPromise();
    expect(result).toBe(true);
  });
});


