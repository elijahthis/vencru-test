const UserList = ({ imgList }: { imgList: string[] }) => {
	const limit = 5;

	return (
		<div className="flex flex-row items-center">
			{imgList.slice(0, 5).map((item, ind) => (
				<img
					src={item}
					style={{
						transform: ind === 0 ? "" : `translateX(-${6 + ind * 6}px)`,
					}}
					key={ind}
				/>
			))}
			{imgList.length > limit && (
				<div
					className="w-6 h-6 rounded-full border-[2px] border-white bg-white grid place-items-center"
					style={{
						transform: `translateX(-${2 + imgList.length * 6}px)`,
					}}
				>
					+{imgList.length - limit}
				</div>
			)}
		</div>
	);
};

export default UserList;
