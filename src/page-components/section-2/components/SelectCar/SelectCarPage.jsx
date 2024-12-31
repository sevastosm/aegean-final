"use client";
import calender from "@/assets/calender-black.svg";
import leftArrow from "@/assets/searching/left-arrow.svg";
import select_car_map from "@/assets/select-car-map.svg";

import Image from "next/image";
import { useRouter } from "next/navigation";
import CarLists from "./CarLists";

const SelectCarPage = () => {
	const router = useRouter();
	return (
		<div className="h-screen overflow-hidden relative">
			<div className="relative">
				<div className="-top-1 relative -z-10">
					<Image
						src={select_car_map}
						alt="select-car-bg"
						width={402}
						height={275}
						className="w-full h-[275px] object-cover"
					/>
				</div>
				<button
					onClick={() => router.back()}
					className="absolute top-4 left-2 w-[46px] h-[46px] rounded-full flex items-center justify-center bg-black"
				>
					<Image src={leftArrow} alt="leftArrow" />
				</button>
			</div>
			<CarLists />
			<div className="absolute bottom-0 left-0 right-0 z-10 w-full h-[66px] bg-white py-2 px-4 flex justify-between gap-2">
				<button className="font-SFProBold text-xl font-bold text-white bg-black w-full max-w-[291px] h-full rounded-lg">
					Book economy
				</button>
				<button className="p-1 w-[53.64px] h-[50px] inline-flex items-center justify-center border-2 border-black rounded-xl">
					<Image width={37} height={35.3} src={calender} alt="calender" />
				</button>
			</div>
		</div>
	);
};

export default SelectCarPage;
