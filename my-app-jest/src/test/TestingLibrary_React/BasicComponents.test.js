import React from "react";
import { ReactDOM } from "react-dom";
import {
  render,
  cleanup,
  fireEvent,
  prettyDOM,
  screen,
  getByText,
} from "@testing-library/react";
import { BasicComponents } from "../../components/BasicComponents";

// Example 1: render a component
describe("render and debug", () => {
  it("renders without crashing", () => {
    render(<BasicComponents />);
  });

  // 查看渲染出的 DOM
  // debug, prettyDOM, screen.debug
  it("use Debug and Container to print the DOM", () => {
    const { container, debug } = render(
      <BasicComponents>Default</BasicComponents>
    );
    // console.log(prettyDOM(container));
    // debug();
    // screen.debug();
  });
});

// Example 2: Queries for elements and Assertions
// 1.1. getByText(), return BasicComponents element
// 2.1. toBeInTheDocument()
it("renders its `children` prop as text", () => {
  const { getByText } = render(<BasicComponents>Default</BasicComponents>);
  expect(getByText("Default")).toBeInTheDocument();
});

it("renders its `children` prop as text1", () => {
  const { container } = render(<BasicComponents>Default</BasicComponents>);
  expect(getByText(container, "Default")).toBeInTheDocument();
});

// Check the Element Class.
it("Check the component classname", () => {
  const { getByText } = render(<BasicComponents>Button</BasicComponents>);
  expect(getByText("Button")).toHaveClass("button");
  expect(getByText("Div")).toHaveClass("div");
  expect(getByText(/Di/)).toHaveClass("div");
});

// Example 3: FireEvent and Mock Functions
// 1.1. getByText()
// 2.1. toHaveBeenCalledTimes()
// 3.1. firEvent.click(element)
it("renders a clickable BasicComponents", () => {
  const handleClick = jest.fn();
  const { getByText } = render(
    <BasicComponents onClick={handleClick}>Clickable</BasicComponents>
  );

  const button = getByText("Clickable");
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
