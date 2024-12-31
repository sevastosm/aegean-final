import leftArrow from "@/assets/searching/left-arrow.svg";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import OtpInput from "react-otp-input";
import "react-phone-input-2/lib/style.css";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
	return twMerge(clsx(...inputs));
}
const OtpVerification = () => {
	const [checked, setChecked] = useState(false);
	const [phone, setPhone] = useState("");
	const [otp, setOtp] = useState("");
	return (
		<section className="pt-6 pb-10 relative font-uberMove">
			<div className="container px-[18px]">
				<div className="text-center mb-6">
					<h5 className="text-2xl font-semibold">&nbsp;</h5>
				</div>
				<div className="text-center text-xl">
					Enter the 5-digit code sent to you to:{" "}
					<strong className="block text-2xl">+44 7744 985947</strong>
				</div>
				<div className="my-14">
					<OtpInput
						value={otp}
						onChange={setOtp}
						numInputs={5}
						renderInput={(props) => (
							<input
								{...props}
								className="max-w-[60px] w-full aspect-square flex-grow bg-[#F6F6F6] outline-none shadow-none rounded border border-transparent focus:border-black"
							/>
						)}
						containerStyle={{
							gap: "10px",
							justifyContent: "center",
						}}
					/>
				</div>
				<div className="text-center">
					I haven&apos;t received a code (0:08)
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

export default OtpVerification;
