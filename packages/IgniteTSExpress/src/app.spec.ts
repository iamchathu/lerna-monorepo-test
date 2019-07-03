const add = (a: number, b: number) => a + b;
const min = (a: number, b: number) => a - b;
const mul = (a: number, b: number) => a * b;
describe('First test', () => {
  it('should add two numbers', () => {
    expect(add(1, 2)).toEqual(3);
  });

  it('it should subtract two numbers', () => {
    expect(min(1, 2)).toEqual(-1);
  });

  it('it should mul two numbers', () => {
    expect(mul(2, 2)).toEqual(4);
  });
});
