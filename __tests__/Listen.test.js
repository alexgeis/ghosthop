import React from "react";
import { render } from "@testing-library/react";
import Listen from "../src/app/listen/page";

describe("About component", () => {
	it("renders correct heading", () => {
		const { getByRole } = render(<Listen />);
		expect(getByRole("heading").textContent).toMatch(/music \/ mixes/i);
	});
});
