import { render } from "@testing-library/react";
import Home from "@/pages/index";

it("renders homepage unchanged", () => {
	const mockData = {
		key: "hello",
		owner: "world",
		bio: "keep me healthy",
		color: "green",
	};

	const { container } = render(<Home data={mockData} />);
	expect(container).toMatchSnapshot();
});
