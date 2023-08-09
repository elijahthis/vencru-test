import logo from "../../images/Logo.svg";
import { CgMenuLeftAlt } from "react-icons/cg";
import { Dispatch, SetStateAction } from "react";

interface HeaderProps {
	openNav: boolean;
	setOpenNav: Dispatch<SetStateAction<boolean>>;
}

const Header = ({ openNav, setOpenNav }: HeaderProps) => {
	return (
		<header className="bg-white p-4 py-3 flex flex-row items-center justify-between fixed top-0 w-full  md:hidden">
			<img src={logo} alt="" className="h-8" />
			<button
				className="p-2 bg-white rounded-lg"
				onClick={() => setOpenNav(!openNav)}
			>
				<CgMenuLeftAlt size={24} />
			</button>
		</header>
	);
};

export default Header;
