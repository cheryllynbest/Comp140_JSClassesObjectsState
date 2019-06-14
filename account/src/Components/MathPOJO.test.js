import MathPOJO from "./MathPOJO";

test('Test the math functions', () => {
    expect(MathPOJO.add(10,5)).toBe(15);
});

test('Test the math functions', () => {
    expect(MathPOJO.sub(10,5)).toBe(5);
});

test('Test the math functions', () => {
    expect(MathPOJO.mult(10,5)).toBe(50);
});

test('Test the math functions', () => {
    expect(MathPOJO.div(10,5)).toBe(2);
});