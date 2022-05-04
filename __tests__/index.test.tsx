import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

describe("Home", () => {
	it("renders a heading with subdomain", () => {
		const mockData = {
			key: "hello",
			owner: "world",
			bio: "keep me clean",
			color: "red",
		};
		render(<Home data={mockData} />);

		const heading = screen.getByRole("heading", {
			name: /world is the owner of hello/i,
		});

		expect(heading).toBeInTheDocument();
	});
});
