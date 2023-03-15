import { BsCheck } from "react-icons/bs";
import visaIcon from "../../images/visa-icon.svg";
import mastercardIcon from "../../images/mastercard-icon.svg";
import { Action } from "@remix-run/router";

interface CardSelectProps {
	cardData: { type: "Visa" | "Mastercard"; cardNumber: number; expiry: string };
	active: boolean;
	onSelect: () => void;
}

const CardSelect = ({ cardData, active, onSelect }: CardSelectProps) => {
	return (
		<div
			className={`p-4 border rounded-lg flex flex-row items-start gap-3 cursor-pointer`}
			style={{
				borderColor: active ? "#D6BBFB" : "#EAECF0",
				background: active ? "#F9F5FF" : "white",
			}}
			onClick={() => onSelect()}
		>
			<img src={cardData.type === "Visa" ? visaIcon : mastercardIcon} alt="" />
			<div className="w-full flex flex-row itens-start gap-2 justify-between">
				<div>
					<p
						className={`font-medium `}
						style={{ color: active ? "#53389E" : "#344054" }}
					>
						{cardData.type} ending in {cardData.cardNumber.toString().slice(-4)}
					</p>
					<p
						className=" mb-2"
						style={{ color: active ? "#7F56D9" : "#667085" }}
					>
						Expiry {cardData.expiry}
					</p>
					<p className="flex flex-row items-center gap-3 font-medium">
						<span
							className=""
							style={{ color: active ? "#9E77ED" : "#667085" }}
						>
							Set as default
						</span>
						<span className="text-[#6941C6]">Edit</span>
					</p>
				</div>
				<div
					className="w-4 h-4 border border-[#D0D5DD] grid place-items-center rounded-full"
					style={{ background: active ? "#7F56D9" : "transparent" }}
				>
					{active && <BsCheck size={14} color={"#ffffff"} />}
				</div>
			</div>
		</div>
	);
};

export default CardSelect;
