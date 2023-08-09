import { Dispatch, SetStateAction, ReactNode } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface NavItemProps {
	navData: { label: string; link: string; icon: ReactNode; unread?: number };
	setOpenNav: Dispatch<SetStateAction<boolean>>;
}

const NavItem = ({ navData, setOpenNav }: NavItemProps) => {
	const navigate = useNavigate();
	const location = useLocation();
	console.log("location", location);

	return (
		<div
			className={`flex flex-row items-center gap-3 py-2 px-3 cursor-pointer font-medium rounded-md ${
				location.pathname.startsWith(navData.link) && navData.label !== "Home"
					? "bg-[#F9FAFB]"
					: ""
			} ${
				location.pathname === "/" && navData.label === "Home"
					? "bg-[#F9FAFB]"
					: ""
			}`}
			onClick={() => {
				navigate(navData.link);
				setOpenNav(false);
			}}
		>
			{navData.icon}
			<span>{navData.label}</span>
			{navData.unread && (
				<p className="ml-auto w-9 h-6 bg-[#F2F4F7] grid place-items-center rounded-2xl font-medium">
					{navData.unread}
				</p>
			)}
		</div>
	);
};

export default NavItem;
