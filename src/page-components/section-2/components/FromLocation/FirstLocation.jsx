"use client";
import Circle from "@/assets/searching/circle.svg";
import cross from "@/assets/searching/cross.svg";
import leftArrow from "@/assets/searching/left-arrow.svg";
import rectangle from "@/assets/searching/rectangle.svg";
import { locationData } from "@/data/locationData";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const FirstLocation = () => {
	const [selectedText, setSelectedText] = useState("");
	const [additionalInput, setAdditionalInput] = useState(null);
	const [isFirstClick, setIsFirstClick] = useState(true);

	const handleItemClick = (text) => {
		if (isFirstClick) {
			setSelectedText(text);
			setAdditionalInput({ id: 1, value: "" });
			setIsFirstClick(false);
		} else {
			setAdditionalInput((prev) => ({ ...prev, value: text }));
		}
	};

	const handleAdditionalInputChange = (value) => {
		setAdditionalInput((prev) => ({ ...prev, value }));
	};

	return (
		<div className="w-full h-auto px-5 pt-[18px] pb-5 bg-white relative z-30">
			{/* Main input field */}
			<div
				className={`w-full px-4 border-[2px] border-black rounded-lg bg-[#F6F6F6] flex flex-col justify-between overflow-hidden relative ${
					additionalInput ? "h-[96px] mb-3" : "h-[48px]"
				} transition-all duration-300`}
			>
				<div className="flex items-center h-[44px]">
					<div className="h-full w-[35px] flex items-center justify-center">
						<Image src={Circle} alt="Circle" />
					</div>
					<div className="w-full pl-4 flex items-center justify-between gap-2">
						<input
							type="text"
							value={selectedText}
							placeholder="Enter Pickup"
							className="w-full outline-none font-medium font-SFProMedium bg-transparent placeholder:text-[#747474]"
							readOnly
						/>
						<Image
							src={cross}
							alt="cross"
							onClick={() => {
								setSelectedText("");
								setAdditionalInput(null);
								setIsFirstClick(true);
							}}
							className="cursor-pointer"
						/>
					</div>
				</div>

				{additionalInput && (
					<>
						<div className="w-full h-[1px] ml-[50px] bg-[#E1E1E1]"></div>
						<div className=" absolute top-[30px] left-[32px] w-[1px] h-[34px] bg-black"></div>

						{/* Render the additional input field */}
						<div className="h-[44px] flex items-center">
							<div className="h-full w-[35px] flex items-center justify-center">
								<Image src={rectangle} alt="rectangle" />
							</div>
							<div className="pl-4">
								<input
									type="text"
									value={additionalInput.value}
									onChange={(e) =>
										handleAdditionalInputChange(e.target.value)
									}
									placeholder="Where to?"
									className="w-full outline-none font-medium bg-transparent placeholder:text-[#929292]"
								/>
							</div>
						</div>
					</>
				)}
			</div>

			{/* Location list */}
			<div className="mt-2 h-[260px] overflow-y-auto">
				{locationData.map((item, index) => (
					<div key={item.id}>
						<div
							className="w-full h-[55px] mt-1 flex items-center gap-[5px] cursor-pointer"
							onClick={() => handleItemClick(item.text)}
						>
							<div className="w-[64px] h-full flex items-center justify-center">
								<div className="w-9 h-9 rounded-full bg-[#EEEEEE] flex items-center justify-center">
									<Image src={item.icon} alt={item.text} />
								</div>
							</div>
							<p
								className={`text-black ${
									index === 0 ? "font-bold" : "font-medium"
								}`}
							>
								{item.text}
							</p>
						</div>

						{index !== locationData.length - 1 && (
							<div
								className={`ml-[60px] my-1 w-[266px] h-[1px] ${
									index === 0 ? "bg-black" : "bg-gray-400"
								}`}
							></div>
						)}
					</div>
				))}
			</div>

			{/* Navigation Button */}
			<Link
				href=""
				className="absolute bottom-4 right-2 w-[46px] h-[46px] rounded-full bg-black flex items-center justify-center"
			>
				<Image src={leftArrow} alt="leftArrow" />
			</Link>
		</div>
	);
};

export default FirstLocation;
