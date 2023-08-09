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
			<Sidebar openNav={openNav} />
			<div className="bg-[#F9FAFB] min-h-screen px-0 py-8 mt-16 md:ml-[280px] md:mt-0 md:px-8 md:py-8">
				<Outlet />
			</div>
		</main>
	);
};

export default PageLayout;
