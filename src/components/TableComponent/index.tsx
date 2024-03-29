import { ReactNode } from "react";
import CheckBox from "../CheckBox";
import { BottomArrow } from "../svgs";

interface TableComponentProps {
	data: any[];
	columns: { label: ReactNode; key: string; render?: ReactNode }[];
}

const TableComponent = ({ data, columns }: TableComponentProps) => {
	return (
		<table className="w-full">
			<thead>
				<tr className="border-b border-[#EAECF0]">
					{columns.map((column, ind) => (
						<th key={ind} className="py-[13px] px-6 bg-[#F9FAFB] text-left">
							<div className="flex flex-row items-center gap-3 text-[#667085] font-medium text-xs">
								{ind === 0 && <CheckBox />}
								{column.label}
								{ind === 0 && <BottomArrow style={{ marginLeft: "-8px" }} />}
							</div>
						</th>
					))}
				</tr>
			</thead>
			<tbody className="bg-transparent">
				{data.map((row, ind) => (
					<tr key={ind} className="bg-white border-b border-[#EAECF0]">
						{columns.map((column, ind) => (
							<td key={ind} className="py-[26px] px-6 text-left ">
								<div
									className="flex flex-row items-center gap-3 text-sm "
									style={{
										color: ind === 0 ? "#101828" : "#667085",
										fontWeight: ind === 0 ? 500 : 400,
									}}
								>
									{ind === 0 && <CheckBox />}
									{column.render ?? row[column.key]}
								</div>
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default TableComponent;
