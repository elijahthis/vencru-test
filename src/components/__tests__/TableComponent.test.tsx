import { render, screen } from "@testing-library/react";
import TableComponent from "../TableComponent";
import UserList from "../UserList";

const mobileColumns = [
	{ label: "Invoice", key: "invoice" },
	{ label: "Amount", key: "amount" },
];
const data = [
	{
		invoice: "Basic Plan – Dec 2022",
		amount: "USD $10.00",
		date: "Dec 1, 2022",
		status: "Paid",
		users: <UserList imgList={[]} />,
	},
];

test("renders the Sidebar component", () => {
	render(
		<TableComponent
			data={data.map((item) => ({
				invoice: item.invoice,
				amount: item.amount,
			}))}
			columns={mobileColumns}
		/>
	);

	// Test if each sidebar item renders
	mobileColumns.forEach((item) =>
		expect(screen.getByText(item.label)).toBeInTheDocument()
	);
});
