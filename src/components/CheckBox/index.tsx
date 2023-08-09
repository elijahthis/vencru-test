const CheckBox = () => {
	// rounded checkbox of background color #6941C6
	return (
		<input
			id="default-checkbox"
			type="checkbox"
			value=""
			// className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded cursor-pointer"
			style={{ minWidth: "1.25rem", minHeight: "1.25rem" }}
			className="appearance-none border border-gray-300 rounded-md w-5 h-5 min-w-20 min-h-20 cursor-pointer m-0 p-0 relative outline-none bg-white checked:bg-[#6941C6] checked:border-[#6941C6] checked:after:content checked:after:absolute checked:after:left-[6px] checked:after:top-[3px] checked:after:w-[6px] checked:after:h-[10px] checked:after:border-white checked:after:border-t-0 checked:after:border-r-2 checked:after:border-b-2 checked:after:border-l-0 checked:after:transform checked:after:rotate-45 "
		></input>
	);
};

export default CheckBox;
