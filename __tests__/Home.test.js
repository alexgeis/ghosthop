import React from "react";
import { render } from "@testing-library/react";
import Home from "../src/app/page";

describe("Home component", () => {
	it("renders correct heading", () => {
		const { getByRole } = render(<Home />);
		expect(getByRole("heading").textContent).toMatch(/ghosthop/i);
	});
});
