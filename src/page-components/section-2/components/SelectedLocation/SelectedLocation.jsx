"use client";
import calender from "@/assets/calender-black.svg";
import Circle from "@/assets/searching/circle.svg";
import cross from "@/assets/searching/cross.svg";
import leftArrow from "@/assets/searching/left-arrow.svg";
import rectangle from "@/assets/searching/rectangle.svg";
import bagIcon from "@/assets/selected-location/bag-pic.svg";
import locationMap from "@/assets/selected-location/selected-location-map.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa6";

const SelectedLocation = () => {
	const router = useRouter();
	return (
		<section>
			<div>
				<div className="relative">
					<Image
						src={locationMap}
						alt="locationMap"
						width={402}
						height={480}
						className="w-full h-[480px] object-cover"
					/>
					<button
						onClick={() => router.back()}
						className="absolute top-[5px] left-[18px] w-[48px] h-[48px] rounded-full flex items-center justify-center bg-black"
					>
						<Image src={leftArrow} alt="leftArrow" />
					</button>
				</div>
				<div className="w-full mt-[-138px] h-[280px] bg-white px-6 pt-5 pb-6 rounded-tl-[27px] rounded-tr-[27px] relative z-30 flex flex-col justify-between">
					<div>
						<div className="w-full px-4 border-[2px] border-black rounded-lg bg-[#F6F6F6] flex flex-col justify-between overflow-hidden relative h-[96px]">
							<div className="flex items-center h-[44px]">
								<div className="h-full w-[35px] flex items-center justify-center">
									<Image src={Circle} alt="Circle" />
								</div>
								<div className="w-full pl-4 flex items-center justify-between gap-2">
									<input
										type="text"
										// value="Mykonos Airport"
										placeholder="Enter Pickup"
										className="w-full outline-none font-medium font-SFProMedium bg-transparent placeholder:text-[#747474]"
									/>
									<Image
										src={cross}
										alt="cross"
										className="cursor-pointer"
									/>
								</div>
							</div>
							<div className="w-full h-[1px] ml-[50px] bg-[#E1E1E1]"></div>
							<div className="h-[44px] flex items-center">
								<div className="h-full w-[35px] flex items-center justify-center">
									<Image src={rectangle} alt="rectangle" />
								</div>
								<div className="w-full pl-4 flex items-center justify-between gap-2">
									<input
										type="text"
										// value="Mykonos Port"
										placeholder="Where to?"
										className="w-full outline-none font-medium font-SFProMedium bg-transparent placeholder:text-[#929292]"
									/>
									<Image
										src={cross}
										alt="cross"
										className="cursor-pointer"
									/>
								</div>
							</div>
							<div className="absolute top-[30px] left-[31px] w-[1px] h-[34px] bg-black"></div>
						</div>

						<div className="mt-4 ml-5 flex items-center gap-5">
							<Image
								src={bagIcon}
								alt="bagIcon"
								width={25}
								height={25}
								className="w-[25px] h-[25px] object-cover"
							/>
							<Link href={"#"} className="text-sm font-medium">
								Card payment available with driver
							</Link>
						</div>
					</div>
					<div className="w-full h-[50px] bg-white flex justify-between gap-2">
						<Link
							href={""}
							className="font-SFProBold text-xl font-bold text-white bg-black w-full max-w-[281px] h-full rounded-lg flex items-center justify-between px-4"
						>
							<span className="mx-auto">Select Car</span>
							<FaArrowRight />
						</Link>
						<button className="p-1 w-[53.64px] h-[50px] inline-flex items-center justify-center border-2 border-black rounded-xl">
							<Image
								width={37}
								height={35.3}
								src={calender}
								alt="calender"
							/>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SelectedLocation;
