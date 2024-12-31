import clsx from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
	return twMerge(clsx(...inputs));
}
export const ContactForm = () => {
	return (
		<section className="mt-[-55px] relative z-10 font-inter pb-20">
			<div className="container">
				<div className="bg-[#F6F6F6] p-5 rounded-[22px]">
					<div className="text-center">
						<h2 className="text-[32px] font-semibold mb-6">
							Contact form
						</h2>
						<div className="font-light mx-auto max-w-[245px] mb-10">
							Fill out the contact form below, and one of out team
							members will get to you within 24 hours
						</div>
					</div>
					<form action="" className="">
						<div className="grid grid-cols-2 gap-7">
							<Input placeholder="First Name*" />
							<Input placeholder="Last Name*" />
							<Input placeholder="Phone Number*" type="number" />
							<Input placeholder="email*" />
							<Input
								placeholder="Enter Location*"
								label="Area of Operation"
							/>
							<Input placeholder="Enter Name*" label="Company Name" />
							<div className="col-span-2">
								<Input
									placeholder="Type your message"
									label="Message"
									textarea
								/>
							</div>
						</div>
						<div className="flex justify-end">
							<button type="submit" className="btn-black px-10 mt-6">
								Submit
							</button>
						</div>
						<div className="font-light">*Required fields</div>
					</form>
				</div>
			</div>
		</section>
	);
};
const Input = ({ label, className, textarea, ...rest }) => {
	return (
		<div className="">
			{label && <label className="font-light mb-2">{label}</label>}
			{textarea ? (
				<textarea
					className={cn(
						"bg-transparent border-b border-black font-light w-full h-20 outline-none shadow-none pt-12",
						className
					)}
					{...rest}
				></textarea>
			) : (
				<input
					type="text"
					className={cn(
						"bg-transparent border-b border-black font-light w-full h-10 outline-none shadow-none",
						className
					)}
					{...rest}
				/>
			)}
		</div>
	);
};
