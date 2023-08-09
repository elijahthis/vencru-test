import { RiSearchLine } from "react-icons/ri";

const SearchComponent = () => {
	return (
		<div
			className="py-[10px] px-[14px] border border-[#D0D5DD] grid items-center gap-2 rounded-lg"
			style={{ gridTemplateColumns: "20px 1fr" }}
		>
			<RiSearchLine size={20} color="#667085" />
			<input
				type="search"
				name=""
				id=""
				placeholder="Search"
				className=" w-full outline-none text-base"
			/>
		</div>
	);
};

export default SearchComponent;
