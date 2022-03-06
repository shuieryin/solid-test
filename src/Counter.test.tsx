import { fireEvent, render, screen } from "solid-testing-library";
import Counter from "./Counter";

describe("SolidGStatem tests", () => {
	it("renders Counter component", () => {
		expect(Boolean("ab")).toBeTruthy();
		render(() => <Counter />);
		screen.getByText("Clicked: 0 times");

		const incrementButton = screen.getByRole("button", { name: "+" });
		fireEvent.click(incrementButton);
		screen.getByText("Clicked: 1 times");
	});
});
