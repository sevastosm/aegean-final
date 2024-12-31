import clsx from "clsx";
import Image from "next/image";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { twMerge } from "tailwind-merge";
import chatGpt from "./assets/img/chat-gpt.png";
import headImg from "./assets/img/head.png";
import img1 from "./assets/img/screenshot.png";
import taxiInteligenceBg from "./assets/img/taxiInteligenceBg.png";
const TaxiInteligence = () => {
	return (
		<section className="pt-[55px] pb-[55px] overflow-hidden">
			<div className="container px-6">
				<div
					className="rounded-[23px]"
					style={{
						boxShadow:
							"0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)",
					}}
				>
					<div className={cn("overflow-hidden")}>
						<div className="pt-5 px-5 pb-3">
							<h3
								className={cn(
									"text-[28px] leading-[1.2] font-semibold mb-4 text-[#0D00FF]"
								)}
							>
								Aegean Taxi{" "}
								<strong className="font-bold">
									Intelligence. Powered
								</strong>{" "}
								by <strong className="font-bold">Ai.</strong> Run by
								Humans.
							</h3>
							<div className="flex justify-between">
								<p
									className={cn(
										"font-medium mb-7 w-0 flex-grow max-w-[180px]"
									)}
								>
									A number of World <br /> #1sts in the Taxi <br />{" "}
									industry. From <br /> intelligent Whatsapp <br />{" "}
									Taxi Booking bot to <br />
									more advanced features designed to optimise.
								</p>
								<div className="w-[110px]">
									<Image
										src={headImg}
										width={220}
										height={258}
										className="w-[110px] mb-12"
										alt=""
									/>
									<div className="font-light text-xs ml-3 text-[#8E8E8E]">
										Powered by
									</div>
									<Image
										src={chatGpt}
										width={170}
										height={52}
										alt=""
										className="w-[85px]"
									/>
								</div>
							</div>
						</div>
						<div className="px-8 py-5 rounded-b-[23px] relative overflow-hidden">
							<Image
								src={taxiInteligenceBg}
								width={702}
								height={1232}
								className="absolute top-0 left-0 w-full h-full object-cover"
								alt=""
							/>
							<Swiper
								slidesPerView="auto"
								className="!overflow-visible"
								spaceBetween={32}
								modules={[FreeMode, Pagination]}
								pagination={{
									el: ".swiper-pagination-3",
									clickable: true,
								}}
							>
								{data.map((item, index) => (
									<SwiperSlide key={index} className="!w-auto">
										<div className="w-[238px]">
											<div className="relative">
												<div className="mb-5 -mx-3">
													<Image
														src={item.img}
														width={400}
														height={400}
														alt=""
														className="w-full"
													/>
												</div>
												<div>
													<h5
														className="text-2xl font-semibold w-full mb-3"
														dangerouslySetInnerHTML={{
															__html: item.title,
														}}
													></h5>
													<div className="font-semibold">
														{item.text}
													</div>

													<button
														className="btn flex-grow flex items-center gap-2 justify-center bg-[#004080] text-white h-10 rounded-[12px] text-sm px-4 mt-3"
														type="button"
													>
														<span>See it in action</span>
														<span>{arrow1}</span>
													</button>
												</div>
											</div>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
							<div>
								<div className="swiper-pagination-3 !relative w-full flex justify-center mt-6 gap-2"></div>
								<style>
									{`.swiper-pagination-bullet {
                            width: 12px;
                            height: 12px;
                        } .swiper-pagination-bullet {
                            background: #000
                        }`}
								</style>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

function cn(...inputs) {
	return twMerge(clsx(...inputs));
}

const data = [
	{
		title: "Whatsapp Bot",
		text: "Our revolutionary whatsapp taxi booking tool is a world first. An intelligent Ai bot capable of understanding all aspects of taxi booking and assigning a ride ",
		img: img1,
	},
	{
		title: "Whatsapp Bot",
		text: "Our revolutionary whatsapp taxi booking tool is a world first. An intelligent Ai bot capable of understanding all aspects of taxi booking and assigning a ride ",
		img: img1,
	},
	{
		title: "Whatsapp Bot",
		text: "Our revolutionary whatsapp taxi booking tool is a world first. An intelligent Ai bot capable of understanding all aspects of taxi booking and assigning a ride ",
		img: img1,
	},
	{
		title: "Whatsapp Bot",
		text: "Our revolutionary whatsapp taxi booking tool is a world first. An intelligent Ai bot capable of understanding all aspects of taxi booking and assigning a ride ",
		img: img1,
	},
];
const arrow1 = (
	<svg
		width="12"
		height="12"
		viewBox="0 0 12 12"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M10.749 0.960581C10.7272 0.54694 10.3742 0.229266 9.96058 0.251037L3.21991 0.605809C2.80627 0.627579 2.4886 0.98055 2.51037 1.39419C2.53214 1.80783 2.88511 2.12551 3.29875 2.10374L9.29046 1.78838L9.60581 7.78009C9.62758 8.19373 9.98055 8.5114 10.3942 8.48963C10.8078 8.46786 11.1255 8.11489 11.1037 7.70125L10.749 0.960581ZM1.55747 11.5017L10.5575 1.50172L9.44253 0.498276L0.442529 10.4983L1.55747 11.5017Z"
			fill="white"
		/>
	</svg>
);
export default TaxiInteligence;
