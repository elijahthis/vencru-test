import { ReactNode } from "react";

interface RadioProps {
	id: string;
	label: ReactNode;
	name: string;
	checked: boolean;
	onChange: () => void;
}

const Radio = ({ id, label, name, checked, onChange }: RadioProps) => {
	return (
		<div className="flex items-start mr-4 ">
			<input
				id={id}
				type="radio"
				name={name}
				className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 cursor-pointer"
				style={{ accentColor: "#7F56D9" }}
				checked={checked}
				onChange={onChange}
			/>
			<label htmlFor={id} className="ml-2 mt-[-4px] cursor-pointer">
				{label}
			</label>
		</div>
	);
};

export default Radio;
