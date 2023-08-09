import { useState } from "react";
import ButtonTabs from "../components/ButtonTabs";
import Radio from "../components/Radio";
import "./pages.css";
import { AiOutlinePlus } from "react-icons/ai";
import { BsCheck2 } from "react-icons/bs";
import { FiDownloadCloud } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import CardSelect from "../components/CardSelect";
import TableComponent from "../components/TableComponent";
import avatar0 from "../images/Avatar-0.svg";
import avatar1 from "../images/Avatar-1.svg";
import avatar2 from "../images/Avatar-2.svg";
import avatar3 from "../images/Avatar-3.svg";
import avatar4 from "../images/Avatar-4.svg";
import avatar5 from "../images/Avatar-0.svg";
import avatar6 from "../images/Avatar-1.svg";
import UserList from "../components/UserList";

const Settings = () => {
	const tabList = [
		{ label: "My details", value: "my-details" },
		{ label: "Profile", value: "profile" },
		{ label: "Password", value: "password" },
		{ label: "Team", value: "team" },
		{ label: "Plan", value: "plan" },
		{ label: "Billing", value: "billing" },
		{ label: "Notifications", value: "notifications" },
		{ label: "Integrations", value: "integrations" },
		{ label: "API", value: "api" },
	];

	const cardList: {
		id: number;
		type: "Visa" | "Mastercard";
		cardNumber: number;
		expiry: string;
	}[] = [
		{ id: 1, type: "Visa", cardNumber: 2094444488482817, expiry: "06/2024" },
		{
			id: 2,
			type: "Mastercard",
			cardNumber: 2094444488481234,
			expiry: "06/2024",
		},
	];

	const mobileColumns = [
		{ label: "Invoice", key: "invoice" },
		{ label: "Amount", key: "amount" },
	];
	const columns = [
		{ label: "Invoice", key: "invoice" },
		{ label: "Amount", key: "amount" },
		{ label: "Date", key: "date" },
		{
			label: "Status",
			key: "status",
			render: (
				<div className="w-max flex flex-row items-center text-xs font-medium gap-1 text-[#027A48] bg-[#ECFDF3] py-[2px] px-2 rounded-2xl">
					<BsCheck2 color="#12B76A" />
					<span>Paid</span>
				</div>
			),
		},
		{
			label: "Users on plan",
			key: "users",
		},
		{
			label: "",
			key: "download",
			render: <FiDownloadCloud size={20} className="cursor-pointer" />,
		},
	];

	const data = [
		{
			invoice: "Basic Plan – Dec 2022",
			amount: "USD $10.00",
			date: "Dec 1, 2022",
			status: "Paid",
			users: (
				<UserList
					imgList={[
						avatar0,
						avatar1,
						avatar2,
						avatar3,
						avatar4,
						avatar5,
						avatar6,
					]}
				/>
			),
		},
		{
			invoice: "Basic Plan – Nov 2022",
			amount: "USD $10.00",
			date: "Dec 1, 2022",
			status: "Paid",
			users: (
				<UserList
					imgList={[avatar0, avatar1, avatar2, avatar3, avatar4, avatar5]}
				/>
			),
		},
		{
			invoice: "Basic Plan – Oct 2022",
			amount: "USD $10.00",
			date: "Dec 1, 2022",
			status: "Paid",
			users: (
				<UserList imgList={[avatar0, avatar1, avatar2, avatar3, avatar4]} />
			),
		},
		{
			invoice: "Basic Plan – Sep 2022",
			amount: "USD $10.00",
			date: "Dec 1, 2022",
			status: "Paid",
			users: <UserList imgList={[avatar0, avatar1, avatar2]} />,
		},
		{
			invoice: "Basic Plan – Aug 2022",
			amount: "USD $10.00",
			date: "Dec 1, 2022",
			status: "Paid",
			users: <UserList imgList={[avatar0, avatar1, avatar2, avatar3]} />,
		},
		{
			invoice: "Basic Plan – Jul 2022",
			amount: "USD $10.00",
			date: "Dec 1, 2022",
			status: "Paid",
			users: <UserList imgList={[avatar0, avatar1, avatar2]} />,
		},
		{
			invoice: "Basic Plan – Jun 2022",
			amount: "USD $10.00",
			date: "Dec 1, 2022",
			status: "Paid",
			users: (
				<UserList imgList={[avatar0, avatar1, avatar2, avatar3, avatar4]} />
			),
		},
	];

	const [altEmail, setAltEmail] = useState("olivia@untitledui.com");
	const [toDefaultEmail, setToDefaultEmail] = useState(true);
	const [selectedCard, setSelectedCard] = useState(1);

	return (
		<div>
			<div className="px-4 lg:px-0">
				<h3 className="mb-1">Settings</h3>
				<p className="mb-6 text-base text-[#667085]">
					Manage your team and preferences here.
				</p>
			</div>
			<div className="px-4 lg:px-0 w-full mb-8">
				<ButtonTabs tabList={tabList} />
			</div>
			<div className="mx-4 pb-5 lg:mx-0">
				<h4 className="mb-1">Payment method</h4>
				<p className="text-[#667085]">
					Update your billing details and address.
				</p>
			</div>
			<div className="px-4 lg:px-0 grid twoPartGrid pt-6 border-t border-[#EAECF0]">
				<div>
					<p className="text-sm font-medium">Contact email</p>
					<p className="text-sm text-[#667085]">
						Where should invoices be sent?
					</p>
				</div>
				<div className="flex flex-col items-stretch gap-[18px] pb-5">
					<Radio
						name="email"
						id={"actMail"}
						label={
							<div>
								<p className="text-[#344054] font-medium">
									Send to my account email
								</p>
								<p className="text-[#667085]">olivia@untitledui.com</p>
							</div>
						}
						checked={toDefaultEmail}
						onChange={() => setToDefaultEmail(!toDefaultEmail)}
					/>
					<Radio
						name="email"
						id={"altMail"}
						label={
							<div>
								<p className="text-[#344054] font-medium mb-3">
									Send to an alternative email
								</p>
								<div
									className={`bg-white px-[14px] py-[9px] rounded-lg flex flex-row items-center gap-2 text-[#101828] border border-[#D0D5DD] rounded-lg ${
										toDefaultEmail ? "opacity-50" : ""
									}`}
								>
									<MdOutlineMailOutline size={20} />
									<input
										type="text"
										name=""
										id=""
										value={altEmail}
										onChange={(e) => setAltEmail(e.target.value)}
										className="text-base bg-transparent outline-none disabled:opacity-50"
										disabled={toDefaultEmail}
									/>
								</div>
							</div>
						}
						checked={!toDefaultEmail}
						onChange={() => setToDefaultEmail(!toDefaultEmail)}
					/>
				</div>
			</div>
			<div className="px-4 lg:px-0 grid twoPartGrid pt-6 border-t border-[#EAECF0] mb-8">
				<div>
					<p className="text-sm font-medium">Card details</p>
					<p className="text-sm text-[#667085]">
						Select default payment method.
					</p>
				</div>
				<div className="flex flex-col items-stretch gap-3">
					{cardList.map((cardItem) => (
						<CardSelect
							cardData={cardItem}
							active={selectedCard === cardItem.id}
							onSelect={() => setSelectedCard(cardItem.id)}
						/>
					))}
					<div className="flex flex-row items-center gap-2 mt-1 cursor-pointer text-[#667085]">
						<AiOutlinePlus />
						<p className="font-medium">Add new payment method</p>
					</div>
				</div>
			</div>
			<div className="px-4 lg:px-0 flex flex-col lg:items-center justify-between gap-4 mb-6 lg:flex-row lg:items-center">
				<h4>Billing history</h4>
				<button className="flex flex-row items-center gap-2 py-[10px] px-4 bg-white border border-[#D0D5DD] rounded-lg w-max text-sm">
					<FiDownloadCloud />
					Download all
				</button>
			</div>
			<div
				className="hidden lg:table w-full border border-gray-200 rounded-lg"
				style={{
					boxShadow:
						"0px 2px 4px -2px rgba(16, 24, 40, 0.06), 0px 4px 8px -2px rgba(16, 24, 40, 0.10)",
				}}
			>
				<TableComponent data={data} columns={columns} />
			</div>
			<div className="table lg:hidden w-full">
				<TableComponent
					data={data.map((item) => ({
						invoice: item.invoice,
						amount: item.amount,
					}))}
					columns={mobileColumns}
				/>
			</div>
		</div>
	);
};

export default Settings;
