import React from "react";
import { render } from "@testing-library/react";
import Contact from "../src/app/contact/page";

describe("About component", () => {
	it("renders correct heading", () => {
		const { getByRole } = render(<Contact />);
		expect(getByRole("heading").textContent).toMatch(
			/bring good music to your event/i
		);
	});
});
