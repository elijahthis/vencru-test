import { render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "../Sidebar";

const navList = [
	"Home",
	"Dashboard",
	"Projects",
	"Tasks",
	"Reporting",
	"Users",
	"Support",
	"Settings",
];

test("renders the Sidebar component", () => {
	render(
		<BrowserRouter>
			<Routes>
				<Route
					path="*"
					element={<Sidebar openNav={true} setOpenNav={jest.fn()} />}
				/>
			</Routes>
		</BrowserRouter>
	);

	// Test if each sidebar item renders
	navList.forEach((item) => expect(screen.getByText(item)).toBeInTheDocument());

	// Test if each user's profile picture renders
	expect(screen.getAllByAltText("profile picture")[0]).toBeInTheDocument();
});
