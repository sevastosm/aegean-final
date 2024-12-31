import Image from "next/image";
import Link from "next/link";
import Navbar2 from "../Navbar2/Navbar2";
import appstore from "./assets/img/app-store.png";
import bannerScreenshots from "./assets/img/banner-screenshow.png";
import whattsapp from "./assets/img/whatsapp.png";
const Hero3 = () => {
	return (
		<>
			<div className="relative">
				<Navbar2 />
				<section className="bg-black pt-[80px] relative pb-[50px]">
					<div className="container max-sm:px-6 relative">
						<div className="bg-[#E7E7E7] rounded-[33px] pt-5 px-5">
							<h1
								className="text-[36px] leading-[42px] font-bold mb-[37px] text-center"
								style={{
									textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
								}}
							>
								Ride with <br /> Aegean Taxi
							</h1>
							<div className="flex gap-4 mb-7">
								<Link href="">
									<Image src={appstore} alt="" />
								</Link>
								<Link href="">
									<Image src={whattsapp} alt="" />
								</Link>
							</div>
							<h5 className="max-w-[225px] font-semibold text-xl pb-3 text-center mx-auto">
								The best taxi app for the Greek islands
							</h5>
							<div className="relative">
								<Image
									src={bannerScreenshots}
									className="absolute left-1/2 top-0 -translate-x-1/2 w-[218px] h-auto"
									alt=""
									width={454}
									height={886}
								/>
								<div className="relative pt-[85px] pb-[195px]">
									<div
										className="p-[1px] rounded-[20px] mb-[22px]"
										style={{
											background:
												"conic-gradient(from 180deg at 50% 50%, #33E669 0deg, #530CEE 360deg)",
										}}
									>
										<div className="py-3 px-5 bg-[#D9D9D9] rounded-[20px] text-sm">
											<div className="mb-[10px] relative">
												<div className="border-l border-black absolute left-[31px] h-[50px] top-[20px] z-[10] pointer-events-none"></div>
												<input
													type="text"
													placeholder="Enter pick-up location"
													className="w-full bg-white rounded-lg font-medium placeholder:text-[#414141] h-10 border-none outline-none shadow-none pl-[57px] pr-5"
												/>
												<span className="absolute left-6 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
													{icon1}
												</span>
											</div>
											<div className="mb-[10px] relative">
												<input
													type="text"
													placeholder="Enter destination"
													className="w-full bg-white rounded-lg font-medium placeholder:text-[#414141] h-10 border-none outline-none shadow-none pl-[57px] pr-5"
												/>
												<span className="absolute left-6 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
													{icon2}
												</span>
											</div>
											<div className="flex gap-[10px]">
												<Link href="" className="block flex-grow">
													<button
														className="bg-primary font-bold text-normal text-white h-9 rounded-lg w-full"
														aria-label="See prices & book"
													>
														See prices & book
													</button>
												</Link>
												<button
													className="h-9 bg-primary w-10 rounded-lg flex justify-center items-center"
													aria-label="Calendar"
												>
													{calendar}
												</button>
											</div>
										</div>
									</div>
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

export default Hero3;
