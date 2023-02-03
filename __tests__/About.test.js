import React from "react";
import { render } from "@testing-library/react";
import About from "../src/app/about/page";

describe("About component", () => {
	it("renders correct heading", () => {
		const { getByRole } = render(<About />);
		expect(getByRole("heading").textContent).toMatch(
			/we&#39;re a team of DJ professionals/i
		);
	});
});
