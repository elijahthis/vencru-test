import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface ButtonTabsProps {
	tabList: { label: string; value: string }[];
}

const ButtonTabs = ({ tabList }: ButtonTabsProps) => {
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		navigate({ hash: tabList[0].value });
	}, []);

	return (
		<div className="w-full overflow-y-scroll">
			<div className="w-max">
				{tabList.map((item, ind) => (
					<button
						className={`py-[10px] px-4 text-[#344054] text-sm font-medium border border-[#D0D5DD] ${
							ind === 0 && "rounded-l-lg"
						} ${ind === tabList.length - 1 && "rounded-r-lg"} ${
							location.hash.slice(1) === item.value
								? "bg-transparent"
								: "bg-[#ffffff]"
						}`}
						onClick={() => {
							navigate({ hash: item.value });
							console.log("location", location.hash.slice(1), item.value);
						}}
						key={ind}
					>
						{item.label}
					</button>
				))}
			</div>
		</div>
	);
};

export default ButtonTabs;
