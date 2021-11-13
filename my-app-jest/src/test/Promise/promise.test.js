import react from "react";
// import fetch from "node-fetch";
import { fetchData } from "./fetchData";

// Example 1: 使用Promise作为异步测试
// 一定不要忘记把 promise 作为返回值⸺如果你忘了return语句的话，在fetchData返回的这个promise被resolve，then()有机会执行之前，测试就已经被视为已经完成了。
it("the data is hello", () => {
  return fetchData("hello").then((data) => {
    expect(data).toBe("hello");
  });
});
// 测试Error
// 这种情况下，请确保添加 expect.assertions 来验证一定数量的断言被调用。
test("the fetch fails with an error", () => {
  expect.assertions(1);
  return fetchData("error").catch((e) => expect(e).toMatch("error"));
});

// Example 2:
// 同时测试确定Pormise被Resolve
test("the data is hello with promise", () => {
  return expect(fetchData("hello")).resolves.toBe("hello");
});
// 同时测试确定Pormise被Reject
test("the fetch fails with an error using rejects", () => {
  return expect(fetchData("error")).rejects.toMatch("error");
});

// Example 3: Async/Await
// 使用Async/Await组合达成异步测试目的
test("the data is hello with await", async () => {
  const data = await fetchData("hello");
  expect(data).toBe("hello");
});

test("the fetch fails with an error with await", async () => {
  expect.assertions(1);
  try {
    await fetchData("error");
  } catch (e) {
    // eslint-disable-next-line jest/no-conditional-expect
    expect(e).toMatch("error");
  }
});

test("the data is hello with await and resolve", async () => {
  await expect(fetchData("hello")).resolves.toBe("hello");
});

test("the fetch fails with an error with await and reject", async () => {
  await expect(fetchData("error")).rejects.toMatch("error");
});
