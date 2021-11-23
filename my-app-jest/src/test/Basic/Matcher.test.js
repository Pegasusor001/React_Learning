// Matcher
// Example 1: basic
test("2 加 2 等于 4", () => {
  expect(2 + 2).toBe(4);
});

// Example 1: Truthy Value
describe("Truthy Value", () => {
  test("null", () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });

  test("zero", () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });
});

// Example 2: Number
describe("Number", () => {
  test("two plus two", () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });

  test("两个浮点数字相加", () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3);           这句会报错，因为浮点数有舍入误差
    expect(value).toBeCloseTo(0.3); // 这句可以运行
  });
});

// Example 3: String
describe("String", () => {
  test("there is no I in team", () => {
    expect("team").not.toMatch(/I/);
  });

  test('but there is a "stop" in Christoph', () => {
    expect("Christoph").toMatch(/stop/);
  });
});

// Example 4: Array and iterables
const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "milk",
];
describe("Array and iterables", () => {
  test("the shopping list has milk on it", () => {
    expect(shoppingList).toContain("milk");
    expect(new Set(shoppingList)).toContain("milk");
  });
});

// Example 5: Error
function compileAndroidCode() {
  throw new Error("you are using the wrong JDK");
}

describe("Error", () => {
  test("compiling android goes as expected", () => {
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);

    // You can also use the exact error message or a regexp
    expect(() => compileAndroidCode()).toThrow("you are using the wrong JDK");
    expect(() => compileAndroidCode()).toThrow(/JDK/);
  });
});
