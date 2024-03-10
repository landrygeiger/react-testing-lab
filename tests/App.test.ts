describe("my test suite", () => {
  it("adds two numbers", () => {
    const x = 2;
    const y = 3;

    const expected = 5;
    const result = x + y;

    expect(expected).toStrictEqual(result);
  });
});
