import Image from "next/image";
import Link from "next/link";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "./assets/img/1.png";
import img2 from "./assets/img/2.png";
import appStoreIcon from "./assets/img/app-store.png";
import whatsappIcon from "./assets/img/whatsapp.png";

const HowToBook = () => {
	return (
		<section
			className="pt-[55px] pb-6 overflow-hidden"
			style={{
				background:
					"linear-gradient(180deg, #000000 9.77%, #2F393F 29.89%, #8AB1CC 61.39%, #A3BFD9 93.89%)",
			}}
		>
			<div className="container px-6">
				<h2 className="text-[30px] leading-[38px] font-semibold mb-5 text-white">
					How to book your taxi ride with us:{" "}
				</h2>
				<p className="text-xl text-white max-sm:max-w-[95%] mb-8">
					We made it easier to book your ride in Greece! Whether its an
					island or city taxi, and airport or port transfer or tour, its
					simple for all! With 4 booking options available to choose from,
					you can enjoy your holidays in Greece and leave the logistics to
					us!
				</p>

				<Swiper
					slidesPerView="auto"
					className="!overflow-visible"
					spaceBetween={41}
					modules={[FreeMode, Pagination]}
					pagination={{
						el: ".swiper-pagination-2",
						clickable: true,
					}}
				>
					{data.map((item, index) => (
						<SwiperSlide key={index} className="!w-auto group">
							<div
								className="w-[272px] border border-[#62FF00] rounded-[22px] group-even:bg-black group-odd:bg-[#B8CDDD] py-6 group-even:border-[#0037FF] h-full"
								style={{ boxShadow: "6px 6px 4px rgba(0, 0, 0, 0.25)" }}
							>
								<div
									className="w-[52px] h-12 rounded-full font-bold text-2xl flex justify-center items-center absolute left-[-17px] top-[-13px]"
									style={{
										background:
											"radial-gradient(50% 50% at 50% 50%, #00FF15 40.61%, #E2D116 81.11%)",
									}}
								>
									{index + 1}
								</div>
								<Image
									src={item.img}
									className="w-full mb-1 max-w-[calc(100%-8px)] mx-auto h-[276px] object-contain"
									alt=""
									width={262}
									height={276}
								/>
								<div className="px-5">
									<h5 className="font-semibold text-xl mb-2 mt-4 group-even:text-[#5BD770]">
										{item.title}
									</h5>
									<p className="text-sm mb-5 group-even:text-[#BFE3C1]">
										{item.text}
									</p>
									<div className="flex justify-center mt-5">
										<Link
											className="inline-flex rounded-2xl"
											href=""
											style={{
												boxShadow:
													index % 2 != 1
														? "0px 4px 4px rgba(0, 0, 0, 0.25)"
														: "",
											}}
										>
											<Image
												src={item.buttonImg}
												className="w-[163px]"
												alt=""
												width={163}
												height={39}
											/>
										</Link>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				<div>
					<div className="swiper-pagination-2 !relative w-full flex justify-center mt-6 gap-2"></div>
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
		</section>
	);
};
const data = [
	{
		img: img1.src,
		title: "Taxi App",
		text: "Our Mykonos Taxi app is available in the iOS and Google play store. Download and register to book your Mykonos Taxi ",
		buttonImg: appStoreIcon.src,
	},
	{
		img: img2.src,
		title: "Whatsapp",
		text: "Our Mykonos Taxi app is available in the iOS and Google play store. Download and register to book your Mykonos Taxi ",
		buttonImg: whatsappIcon.src,
	},
	{
		img: img1.src,
		title: "Taxi App",
		text: "Our Mykonos Taxi app is available in the iOS and Google play store. Download and register to book your Mykonos Taxi ",
		buttonImg: appStoreIcon.src,
	},
	{
		img: img2.src,
		title: "Whatsapp",
		text: "Our Mykonos Taxi app is available in the iOS and Google play store. Download and register to book your Mykonos Taxi ",
		buttonImg: whatsappIcon.src,
	},
];

export default HowToBook;
