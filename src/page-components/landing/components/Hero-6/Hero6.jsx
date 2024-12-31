import Image from "next/image";
import Link from "next/link";
import Navbar from "../Navbar/Navbar";
import banner from "./assets/img/banner.png";
import phone from "./assets/img/phone.svg";
import whatsapp from "./assets/img/whatsapp.svg";
const Hero6 = () => {
	return (
		<>
			<div className="relative">
				<Navbar />
				<section className="pt-[80px] relative pb-[26px]">
					<div className="container px-0 relative">
						<div className="max-sm:px-8">
							<h1 className="text-[36px] leading-[42px] font-bold mb-5 text-center">
								We are local! <br />
								Find us in the following locations
							</h1>
							<Image
								className="w-full mb-4 object-contain"
								width={720}
								height={810}
								src={banner}
								alt=""
							/>
						</div>
						<div className="relative px-3">
							<div className="p-[1px] rounded-[20px]">
								<div className="flex justify-between pb-4 gap-[6px]">
									<Link
										href=""
										className="flex items-center flex-col justify-center font-extrabold text-[11px] gap-1 text-white"
									>
										<Image
											width={100}
											height={100}
											src={phone}
											className="rounded-[15px] w-[56px]"
											alt=""
										/>
									</Link>
									<Link href="" className="block flex-grow">
										<button
											className="bg-black font-bold text-xl text-white h-[56px] rounded-lg w-full"
											aria-label="See prices & book"
										>
											Book online
										</button>
									</Link>
									<Link
										href=""
										className="flex items-center flex-col justify-center font-extrabold text-[11px] gap-1 text-white"
									>
										<Image
											width={100}
											height={100}
											src={whatsapp}
											className="rounded-[15px] w-[56px]"
											alt=""
										/>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};
const icon1 = (
	<svg
		width="15"
		height="16"
		viewBox="0 0 15 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<ellipse
			cx="7.33503"
			cy="8.07345"
			rx="7.26904"
			ry="7.72335"
			fill="black"
		/>
		<circle cx="7.33503" cy="8.52765" r="2.72589" fill="#48E744" />
	</svg>
);
const icon2 = (
	<svg
		width="15"
		height="14"
		viewBox="0 0 15 14"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M0.0659943 0.14209H14.6041V13.7715H0.0659943V0.14209Z"
			fill="black"
		/>
		<path
			d="M5.51776 4.68506H9.15228V9.22821H5.51776V4.68506Z"
			fill="#FF0404"
		/>
	</svg>
);
const calendar = (
	<svg
		width="28"
		viewBox="0 0 34 34"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M8.5 7.0835C6.93519 7.0835 5.66666 8.35202 5.66666 9.91683V26.9168C5.66666 28.4816 6.93519 29.7502 8.5 29.7502H22.6667C19.5371 29.7502 17 27.2131 17 24.0835C17 20.9539 19.5371 18.4168 22.6667 18.4168C25.7963 18.4168 28.3333 20.9539 28.3333 24.0835V9.91683C28.3333 8.35202 27.0648 7.0835 25.5 7.0835H8.5Z"
			fill="black"
			fillOpacity="0.15"
		/>
		<path
			d="M22.6667 21.5334V23.924L23.9417 25.3584M28.3333 12.75V9.91667C28.3333 8.35186 27.0648 7.08333 25.5 7.08333H21.25M12.75 29.75H8.5C6.93519 29.75 5.66666 28.4815 5.66666 26.9167V15.5833M21.25 4.25V7.08333M21.25 9.91667V7.08333M12.75 4.25V7.08333M12.75 9.91667V7.08333M21.25 7.08333H12.75M12.75 7.08333H8.5C6.93519 7.08333 5.66666 8.35186 5.66666 9.91667V15.5833M12.75 15.5833H5.66666M29.0417 24.0833C29.0417 27.6042 26.1875 30.4583 22.6667 30.4583C19.1458 30.4583 16.2917 27.6042 16.2917 24.0833C16.2917 20.5625 19.1458 17.7083 22.6667 17.7083C26.1875 17.7083 29.0417 20.5625 29.0417 24.0833Z"
			stroke="white"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

export default Hero6;
