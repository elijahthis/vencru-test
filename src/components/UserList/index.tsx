const UserList = ({ imgList }: { imgList: string[] }) => {
	return (
		<div className="flex flex-row items-center">
			{imgList.map((item, ind) => (
				<img
					src={item}
					style={{
						transform: ind === 0 ? "" : `translateX(-${6 + ind * 6}px)`,
					}}
				/>
			))}
			<div>+1</div>
		</div>
	);
};

export default UserList;
