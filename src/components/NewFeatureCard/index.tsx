import { Dispatch, SetStateAction } from "react";
import featureImg from "../../images/feature-Image.svg";

const NewFeatureCard = ({
	setShowNewFeature,
}: {
	setShowNewFeature: Dispatch<SetStateAction<boolean>>;
}) => {
	return (
		<div className="px-4 py-5 bg-[#F9FAFB] rounded-lg ">
			<p className="text-[#101828] font-medium mb-1">New features available!</p>
			<p className="text-[#667085] mb-4">
				Check out the new dashboard view. Pages now load faster.{" "}
			</p>
			<img src={featureImg} alt="" className="rounded mb-4" />
			<div className="flex flex-row items-center gap-3">
				<p
					className="text-[#667085] font-medium cursor-pointer"
					onClick={() => setShowNewFeature(false)}
				>
					Dismiss
				</p>
				<p className="text-[#6941C6] font-medium cursor-pointer">What’s new?</p>
			</div>
		</div>
	);
};

export default NewFeatureCard;
