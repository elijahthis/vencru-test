import { ReactNode, useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

interface PageLayoutProps {
	children: ReactNode;
}

const PageLayout = () => {
	const navigate = useNavigate();
	const [openNav, setOpenNav] = useState(false);

	useEffect(() => {
		navigate("/settings");
		console.log("skfjkjk");
	}, []);

	return (
		<main>
			<Header openNav={openNav} setOpenNav={setOpenNav} />
			<Sidebar openNav={openNav} setOpenNav={setOpenNav} />
			<div className="bg-[#F9FAFB] min-h-screen px-0 py-8 mt-16 lg:ml-[280px] lg:mt-0 lg:px-8 lg:py-8">
				<Outlet />
			</div>
		</main>
	);
};

export default PageLayout;
