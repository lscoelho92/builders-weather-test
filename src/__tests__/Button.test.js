import { act, render, fireEvent } from "@testing-library/react";
import Button from "../components/Button";

describe("Button Component", () => {
  it("Should render the Button component", () => {
    const { getByTestId } = render(<Button />);
    const button = getByTestId("button");

    expect(button).toBeTruthy();
  });

  it("Should render the loading animation", () => {
    const { getByTestId } = render(<Button loading={true} />);
    const loadingAnimation = getByTestId("loading-animation");

    expect(loadingAnimation).toBeTruthy();
  });

  it("Should not render the loading animation", () => {
    const { queryByTestId } = render(<Button loading={false} />);
    const loadingAnimation = queryByTestId("loading-animation");

    expect(loadingAnimation).toBeFalsy();
  });

  it("Should be disabled if it is loading", () => {
    const { getByTestId } = render(<Button loading={true} />);
    const button = getByTestId("button");

    expect(button).toBeDisabled();
  });

  it("Should fire a function event after button click", async () => {
    let clicked = false;
    const handleClick = () => {
      clicked = true;
    };
    await act(async () => {
      const { getByTestId } = render(<Button onClick={handleClick} />);
      const button = getByTestId("button");
      await fireEvent.click(button);
      expect(clicked).toBeTruthy();
    });
  });
});
