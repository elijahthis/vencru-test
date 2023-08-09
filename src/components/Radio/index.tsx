import { ReactNode } from "react";

interface RadioProps {
	label: ReactNode;
	value: string | number;
	name: string;
}

const Radio = ({ label, value, name }: RadioProps) => {
	return (
		<div className="flex items-start mr-4 ">
			<input
				id={value.toString()}
				type="radio"
				// value={value}
				name={name}
				className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 cursor-pointer"
				style={{ accentColor: "#7F56D9" }}
			/>
			<label
				htmlFor={value.toString()}
				className="ml-2 mt-[-4px] cursor-pointer"
			>
				{label}
			</label>
		</div>
	);
};

export default Radio;
