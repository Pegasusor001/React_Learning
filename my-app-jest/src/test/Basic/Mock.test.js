// 模拟函数
// Mock 函数允许你测试代码之间的连接——实现方式包括：擦除函数的实际实现、捕获对函数的调用 ( 以及在这些调用中传递的参数) 、在使用 new 实例化时捕获构造函数的实例、允许测试时配置返回值。
// 有两种方法可以模拟函数：要么在测试代码中创建一个 mock 函数，要么编写一个手动 mock来覆盖模块依赖。

describe("测试函数调用情况", () => {
  // Example 1: jest.fn(() => {}); 测试函数调用情况
  function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
      callback(items[index]);
    }
  }

  test("测试某个函数", () => {
    const mockCallback = jest.fn((x) => 42 + x);
    forEach([0, 1], mockCallback);

    // 此 mock 函数被调用了两次
    expect(mockCallback.mock.calls.length).toBe(2);

    // 第一次调用函数时的第一个参数是 0
    expect(mockCallback.mock.calls[0][0]).toBe(0);

    // 第二次调用函数时的第一个参数是 1
    expect(mockCallback.mock.calls[1][0]).toBe(1);

    // 第一次函数调用的返回值是 42
    console.log(mockCallback.mock.results);
    expect(mockCallback.mock.results[0].value).toBe(42);
  });

  // Example 2: .mock 属性#
  // 所有的 mock 函数都有这个特殊的 .mock属性，它保存了关于此函数如何被调用、调用时的返回值的信息。 .mock 属性还追踪每次调用时 this的值，所以我们同样可以也检视（inspect） this：
  test("mock constructor", () => {
    const myMock = jest.fn();
    const a = new myMock();
    a.name = "a";
    const b = {};
    b.name = "b";
    const bound = myMock.bind(b);
    bound();

    console.log(myMock.mock.instances);
    // 这个函数被实例化两次
    expect(myMock.mock.instances.length).toBe(2);

    // 这个函数被第一次实例化返回的对象中，有一个 name 属性，且被设置为了 'test’
    expect(myMock.mock.instances[0].name).toEqual("a");
  });

  // Example 3: Mock Function, 在测试期间将测试值注入代码
  test("return value", () => {
    const myMock = jest.fn();
    console.log(myMock());
    // > undefined

    myMock
      .mockReturnValueOnce("x")
      .mockReturnValue(true)
      .mockReturnValueOnce(10);

    console.log(myMock(), myMock(), myMock(), myMock());
  });

  test("return value2", () => {});
});
