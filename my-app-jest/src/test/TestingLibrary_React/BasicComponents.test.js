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

// Example 2: Queries for elements, Assertions and TextMatch
// Query: getByText(), return an element
// Assertions: toBeInTheDocument(), toHaveClass
describe("commonly used queries and assertions", () => {
  it("renders its `children` prop as text, getByText作为Render中的一个 method", () => {
    const { getByText } = render(<BasicComponents>Default</BasicComponents>);
    expect(getByText("Default")).toBeInTheDocument();
  });

  it("renders its `children` prop，getByText imported from testing-library/react", () => {
    const { container } = render(<BasicComponents>Default</BasicComponents>);
    expect(getByText(container, "Default")).toBeInTheDocument();
  });

  it("Check the component classname", () => {
    const { getByText } = render(<BasicComponents>Button</BasicComponents>);
    expect(getByText("Button")).toHaveClass("button");
    expect(getByText("Div")).toHaveClass("div");
    expect(getByText(/Di/)).toHaveClass("div");
  });

  it("TextMatch", () => {
    const { getByText } = render(<BasicComponents>Button</BasicComponents>);
    expect(getByText("Button")).toHaveClass("button");
    expect(getByText("Div")).toHaveClass("div");
    expect(getByText(/Di/)).toHaveClass("div");
  });
});

// Example 3: FireEvent and Mock Functions
// Userevent: firEvent.click(element)
// Asserions: toHaveBeenCalledTimes()
describe("user event", () => {
  it("renders a clickable BasicComponents", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <BasicComponents onClick={handleClick}>Clickable</BasicComponents>
    );

    fireEvent.click(getByText("Clickable"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
