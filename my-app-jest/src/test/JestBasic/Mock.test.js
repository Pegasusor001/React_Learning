// 模拟函数
// Mock 函数允许你测试代码之间的连接——实现方式包括：
// 擦除函数的实际实现，捕获对函数的调用 ( 以及在这些调用中传递的参数)，在使用 new 实例化时捕获构造函数的实例，允许测试时配置返回值。

// 有两种方法可以模拟函数：要么在测试代码中创建一个 mock 函数，要么编写一个手动 mock来覆盖模块依赖。
import axios from "axios";
import { fetchData, Users } from "./fetchData";

// 构建mock函数 syntax：jest.fn(() => {});
// const myMock = jest.fn();
describe("mock functions", () => {
  // .mock 属性，所有的 mock 函数都有这个特殊的 .mock属性，它保存了关于此函数如何被调用、调用时的返回值的信息。
  // Example 1: 测试函数调用情况
  test("捕捉对函数调用情况", () => {
    function forEach(items, callback) {
      for (let index = 0; index < items.length; index++) {
        callback(items[index]);
      }
    }

    const mockCallback = jest.fn((x) => 42 + x);
    forEach([0, 1], mockCallback);

    // 此 mock 函数被调用了两次
    expect(mockCallback.mock.calls.length).toBe(2);

    // 第一次调用函数时的第一个参数是 0
    expect(mockCallback.mock.calls[0][0]).toBe(0);

    // 第二次调用函数时的第一个参数是 1
    expect(mockCallback.mock.calls[1][0]).toBe(1);

    // 第一次函数调用的 mock函数 返回值是 42
    expect(mockCallback.mock.results[0].value).toBe(42);
  });

  // Example 2: 在使用 new 实例化时捕获构造函数的实例：.mock 属性还追踪每次调用时this的值，所以我们同样可以也inspect this：
  test("mock inspect constructor", () => {
    const myMock = jest.fn();
    // 基础构造
    const a = new myMock();
    a.name = "a";

    // 使用bind and bound 构造
    const b = {};
    b.name = "b";
    const bound = myMock.bind(b);
    bound();

    // 这个函数被实例化两次
    expect(myMock.mock.instances.length).toBe(2);

    // 这个函数被第一次实例化返回的对象中，有一个 name 属性，且被设置为了 'test’
    expect(myMock.mock.instances[0].name).toEqual("a");
  });

  // Example 3: Mock Function, 在测试期间将测试值注入代码
  test("define the return value of the mock function", () => {
    const myMock = jest.fn();
    // return value > undefined

    myMock
      .mockReturnValueOnce("x")
      .mockReturnValue(true)
      .mockReturnValueOnce(10);

    console.log(myMock(), myMock(), myMock(), myMock());
    // set the return value: x, 10, true, true
  });

  test("Example 2: define the return value of the mock function", () => {
    const filterTestFn = jest.fn();
    // Make the mock return `true` for the first call and `false` for the second call
    filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);
    const result = [11, 12].filter((num) => filterTestFn(num));
    // console.log(result);
    expect(result).toContain(11);
    expect(result).not.toContain(12);
  });
});

// Eample 4: 模拟模块
// 为测试该方法而不实际调用 API (使测试缓慢与脆弱)，我们可以用 jest.mock(...) 函数自动模拟 axios 模块。
// 一旦模拟模块，我们可为 .get 提供一个 mockResolvedValue ，它会返回假数据用于测试。
jest.mock("axios"); // mocking the module axios
describe("mock module", () => {
  test("should fetch users by axios", () => {
    const users = [{ name: "Bob" }];
    const resp = { data: users };
    // axios.get('/users.json') return a fake response = resp.
    axios.get.mockResolvedValue(resp);

    // return 返回的是一个 Promise，也必须有返回值
    return Users.all().then((data) => expect(data).toEqual(users));
  });

  // Example 5: Mock 与 Promise：
  test("方案一：使用 mockImplementation", () => {
    const users = [{ name: "Bob" }];
    const resp = { data: users };
    axios.get.mockImplementation(() => Promise.resolve(resp));
    // axios.put.mockRejectedValueOnce();

    // return 返回的是一个 Promise，也必须有返回值
    return Users.all().then((data) => expect(data).toEqual(users));
  });

  // Example 5: Mock 返回 Promise：方案一：直接返回，方案二：使用 mockImplementation
  test("方案二：返回一个Promise", () => {
    const users = [{ name: "Bob" }];
    const axios = {
      get: jest.fn(() => {
        return Promise.resolve(users);
      }),
      delete: jest.fn(() => {
        return Promise.reject("error");
      }),
    };

    return axios.delete().catch((e) => expect(e).toMatch("error"));
    return axios.get().then((data) => expect(data).toEqual(users));
  });
});

// Example 5: Mock Implementation, 没整明白，不看了
