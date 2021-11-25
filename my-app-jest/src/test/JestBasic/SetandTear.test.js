// Setup and TearDown
// 写测试的时候你经常需要在运行测试前做一些准备工作，和在运行测试后进行一些整理工作。 Jest 提供辅助函数来处理这个问题。
// Scope: 默认情况下，before 和 after 的块可以应用到文件中的每个测试。当 before 和 after 的块在 describe 块内部时，则其只适用于该 describe 块内的测试。

// Example 1: beforeEach and afterEach
// Example 2: beforeAll 和 afterAll

beforeAll(() => console.log("1 - beforeAll"));
afterAll(() => console.log("1 - afterAll"));
beforeEach(() => console.log("1 - beforeEach"));
afterEach(() => console.log("1 - afterEach"));

// eslint-disable-next-line jest/valid-title
test("", () => console.log("1 - test"));
describe("Scoped / Nested block", () => {
  beforeAll(() => console.log("2 - beforeAll"));
  afterAll(() => console.log("2 - afterAll"));
  beforeEach(() => console.log("2 - beforeEach"));
  afterEach(() => console.log("2 - afterEach"));
  // eslint-disable-next-line jest/valid-title
  test("", () => console.log("2 - test"));
});
