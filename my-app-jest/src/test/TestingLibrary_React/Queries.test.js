import {
  getByText,
  prettyDOM,
  findByText,
  queryByText,
  getByLabelText,
  within,
  getByDisplayValue,
  getByTestId,
  waitFor,
  fireEvent,
} from "@testing-library/react";

const createHTML = (context = `<span> Hello World! </span>`) => {
  const div = document.createElement("div");
  div.innerHTML = context;
  return div.firstElementChild;
};

// Example 1: Query Basic
describe("Query Basic", () => {
  const container = createHTML(`<span> Hello World! </span>`);
  test("getByText and Text Match", () => {
    getByText(container, "Hello World!"); // ✅ => HTMLSpanElement {}
    getByText(container, /hello/i); // ✅ 无视大小写
    getByText(container, "Hello", { exact: false }); // ✅
    // getByText(dom, 'Hello'); // ❌ => Error, unable to find

    // * MatcherFunction: Pass in a function，Return的是断言
    getByText(container, (content, element) => {
      return (
        content.startsWith("Hello") && element.tagName.toLowerCase() === "span"
      );
    }); // ✅
  });

  test("queryBy", () => {
    queryByText(container, "Hello"); // ⭕ => null
    queryByText(container, "Hello World!"); // ✅
  });

  test("findByText, it returns a Promise", () => {
    // eslint-disable-next-line jest/valid-expect-in-promise
    findByText(container, /hello/i).then((e) => {
      // console.log(prettyDOM(e));
    }); // ✅
  });
});

// Example 2: Query API
describe("Query API", () => {
  const container = createHTML(`
    <form>
      <label for="username-input" class="username-class">Username</label>
      <input id="username-input" value="Learn Test" data-testid='target'/>
    </form>
    `);

  test("getByText, getByLabelText, getByDisplayValue", () => {
    getByText(container, "Username"); // ✅ => HTMLLabelElement
    getByLabelText(container, "Username"); // ✅ => HTMLInputElement

    getByDisplayValue(container, "Learn Test"); // ✅
  });

  test("ByTestId", () => {
    const input = getByTestId(container, "target"); // ✅
    expect(input.value).toBe("Learn Test");
  });

  test("within", () => {
    const { getByText } = within(container);
    expect(getByText("Username")).toHaveClass("username-class"); // ✅
    expect(getByText("Username")).not.toBeInTheDocument(container); // ❌ 不明白原因
  });

  test("querySelector", () => {
    expect(container.querySelector("input").value).toBe("Learn Test");
  });
});

// Example 3: User Event
describe("User Event", () => {
  test("fireEvent", () => {
    const onClickFun = jest.fn();
    const container = createHTML(`<button onClick="${onClickFun()}"></button>`);

    fireEvent(container, new MouseEvent("click"));
    fireEvent.click(container);
  });
});

// Example 4: Asyn waitFor
// describe("Asyn", () => {
//   test("waitFor", async () => {
//     const container = createHTML(`<span> Hello World! </span>`);

//     const asyncRender = (fn) => setTimeout(fn, 0);
//     asyncRender(() => (container.textContent = "Learn Test"));

//     await waitFor(() => getByText(container, "Learn Test"));
//     getByText(container, "Learn Test"); // ✅ => HTMLSpanElement
//   });

//   test("waitForElement", async () => {
//     const container = createHTML(`<div></div>`);

//     const asyncRender = (fn) => setTimeout(fn, 0);
//     asyncRender(() => container.appendChild(createHTML(`<span>Hello</span>`)));

//     await findByText(container, "Hello").then((e) => {
//       console.log(prettyDOM(e), "promise");
//     });

//     const dom2 = await findByText(container, "Hello"); // ✅ => HTMLSpanElement
//     console.log(prettyDOM(dom2));
//   });
// });
