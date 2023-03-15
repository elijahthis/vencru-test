import logo from "../../images/Logo.svg";
import NewFeatureCard from "../NewFeatureCard";
import SearchComponent from "../SearchComponent";
import {
	DashIcon,
	HomeIcon,
	ProjectsIcon,
	ReportingIcon,
	SettingsIcon,
	SupportIcon,
	TasksIcon,
	UsersIcon,
} from "../svgs";
import UserInfo from "../UserInfo";
import NavItem from "./NavItem";

const Sidebar = ({ openNav }: { openNav: boolean }) => {
	const navList1 = [
		{ label: "Home", link: "/", icon: <HomeIcon /> },
		{ label: "Dashboard", link: "/dashboard", icon: <DashIcon />, unread: 10 },
		{ label: "Projects", link: "/projects", icon: <ProjectsIcon /> },
		{ label: "Tasks", link: "/tasks", icon: <TasksIcon />, id: 4 },
		{ label: "Reporting", link: "/reporting", icon: <ReportingIcon /> },
		{ label: "Users", link: "/users", icon: <UsersIcon /> },
	];

	const navList2 = [
		{ label: "Support", link: "/support", icon: <SupportIcon /> },
		{ label: "Settings", link: "/settings", icon: <SettingsIcon /> },
	];

	return (
		<aside
			className={` md:block  w-[280px] bg-white fixed md:top-0 md:left-0 h-screen py-8 px-6 overflow-y-auto hideScrollbar ${
				openNav ? "left-0" : "left-[-100%]"
			} transition-all duration-500`}
		>
			<img src={logo} alt="" className="mb-6" />
			<SearchComponent />
			<div className="flex flex-col items-stretch gap-2 mt-6 ">
				{navList1.map((item) => (
					<NavItem navData={item} />
				))}
			</div>
			<div className="flex flex-col items-stretch gap-2 my-6 ">
				{navList2.map((item) => (
					<NavItem navData={item} />
				))}
			</div>
			<div className="pb-6 mb-6 border-b border-[#EAECF0]">
				<NewFeatureCard />
			</div>
			<UserInfo />
		</aside>
	);
};

export default Sidebar;
