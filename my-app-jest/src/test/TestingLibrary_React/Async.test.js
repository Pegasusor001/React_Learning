import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  waitFor,
  prettyDOM,
} from "@testing-library/react";
import axiosMock from "axios";
import { Clicker, Fetch } from "../../components/Async";

afterEach(cleanup);

// Example 1: Async Function, use await + waitFor
describe("Async Click", () => {
  it("display the count", () => {
    const { getByTestId } = render(<Clicker />);
    expect(getByTestId("count")).toHaveTextContent("0");
  });

  it("increments count, Sync", () => {
    const { getByTestId, getByText } = render(<Clicker />);
    fireEvent.click(getByText("Increase"));
    expect(getByTestId("count")).toHaveTextContent("1");
  });

  it("decremetns count, Async", async () => {
    const { getByText } = render(<Clicker />);
    fireEvent.click(getByText("Decrease"));

    const count = await waitFor(() => getByText("-1"));

    expect(count).toHaveTextContent("-1");
  });
});

// Example 2: mock an Async function
describe("Mock Axios function", () => {
  it("Fetch Async Data", async () => {
    axiosMock.get.mockResolvedValueOnce({ data: { greeting: "Hello" } });
    const url = "/greating";
    const { getByTestId, getByText } = render(<Fetch url={url} />);
    expect(getByTestId("loading")).toHaveTextContent(/Loading/);

    const resolvedSpan = await waitFor(() => {
      return getByTestId("resolved");
    });

    console.log(prettyDOM(resolvedSpan));
    expect(resolvedSpan).toHaveTextContent("Hello");
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith(url);
  });
});
