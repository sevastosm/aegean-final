import leftArrow from "@/assets/searching/left-arrow.svg";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight, FaCheck } from "react-icons/fa6";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { twMerge } from "tailwind-merge";

function cn(...inputs) {
	return twMerge(clsx(...inputs));
}
const Registration = () => {
	const [checked, setChecked] = useState(false);
	const [phone, setPhone] = useState("");
	return (
		<section className="pt-6 pb-10 relative">
			<div className="container px-[18px]">
				<div className="text-center mb-6">
					<h5 className="text-2xl font-semibold">Registration</h5>
				</div>
				<div className="grid grid-cols-12 gap-[13px]">
					<div className="col-span-4">
						<input
							type="text"
							placeholder="Name"
							className="h-[45px] bg-[#F6F6F6] border-none outline-none shadown-none px-4 text-[#4D4D4D] w-full"
						/>
					</div>
					<div className="col-span-8">
						<input
							type="text"
							placeholder="Surname"
							className="h-[45px] bg-[#F6F6F6] border-none outline-none shadown-none px-4 text-[#4D4D4D] w-full"
						/>
					</div>
					<div className="col-span-12">
						<PhoneInput
							country={"us"}
							value={phone}
							onChange={setPhone}
							inputClass="!h-[45px] !bg-[#F6F6F6] !border-none !outline-none !shadown-none !px-12 !text-[#4D4D4D] !w-full !rounded-none"
							// containerClass="pl-[calc(31%+13px)]"
							buttonClass="!left-0 !border-none !bg-[#F6F6F6] !z-[9999]"
						/>
					</div>
				</div>
				<div className="flex gap-2 mt-[60px]">
					<label className="flex-grow text-xs flex items-center gap-2">
						<span
							className={cn(
								"border-black border w-[26px] h-[26px] rounded-sm text-white relative block",
								{
									"bg-black": checked,
								}
							)}
						>
							<input
								type="checkbox"
								checked={checked}
								onChange={(e) => setChecked(e.target.checked)}
								className="opacity-0"
							/>
							{checked && (
								<span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
									<FaCheck />
								</span>
							)}
						</span>
						<span className="w-0 flex-grow">
							I agree to the T&C & Privacy Policy
						</span>
					</label>
					<Link
						href={""}
						className="font-SFProBold text-lg font-bold text-white bg-black w-full max-w-[195px] rounded-lg flex items-center justify-between px-4 h-[45px]"
					>
						<span className="mx-auto">Request Code</span>
						<FaArrowRight />
					</Link>
				</div>
				<Link
					href={"/"}
					className="absolute top-4 left-[18px] w-[46px] h-[46px] rounded-full flex items-center justify-center bg-black"
				>
					<Image src={leftArrow} alt="leftArrow" />
				</Link>
			</div>
		</section>
	);
};

export default Registration;
