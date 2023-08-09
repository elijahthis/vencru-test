import avatar from "../../images/Avatar.svg";
import { LogoutIcon } from "../svgs";

const UserInfo = () => {
	return (
		<div className="flex flex-row align-items-center gap-3">
			<img src={avatar} alt="" className="rounded-full" />
			<div>
				<p className="text-[#101828] font-medium">Olivia Rhye</p>
				<p className="text-[#667085]">olivia@untitledui.com</p>
			</div>
			<div className="ml-auto cursor-pointer">
				<LogoutIcon />
			</div>
		</div>
	);
};

export default UserInfo;
