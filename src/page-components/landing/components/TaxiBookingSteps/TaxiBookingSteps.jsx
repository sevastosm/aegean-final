import clsx from "clsx";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { twMerge } from "tailwind-merge";
import img1 from "./assets/img/1.png";
import img2 from "./assets/img/2.png";
import img3 from "./assets/img/3.png";
import img4 from "./assets/img/4.png";
import img5 from "./assets/img/5.png";
import img6 from "./assets/img/6.png";
import img7 from "./assets/img/7.png";
import img8 from "./assets/img/8.png";
import { taxiIcons } from "./icons";

const TaxiBookingSteps = () => {
	return (
		<section className="pt-[55px] pb-[55px] overflow-hidden bg-[#121212]">
			<div className="container px-6">
				<div className="px-4">
					<h2 className="text-[32px] leading-[38px] font-semibold mb-5 text-white">
						Mykonos Taxi booking options <br /> and process
					</h2>
					<p className="text-xl text-white max-sm:max-w-[95%] mb-8">
						We made is easier to book your taxi ride in Mykonos! With 4
						booking options available to choose from, and a simple
						process, you can enjoy your Mykonos holiday and leave the
						logistics to us!
					</p>
				</div>
				{/* {twMerge(clsx(...inputs))} */}
				<div className="flex flex-col gap-[72px]">
					{data.map((item, index) => (
						<div
							className={cn(
								"py-5 px-5 rounded-[23px] bg-[#EBEBEB] overflow-hidden",
								{
									[item.className]: item.className,
								}
							)}
							key={index}
						>
							<h3
								className={cn(
									"text-[28px] leading-[1.4] font-semibold mb-4",
									item.titleClass
								)}
							>
								{item.title}
								{item.titleIcon && (
									<span className="ml-2">{item.titleIcon}</span>
								)}
							</h3>
							<p
								className={cn(
									"font-medium text-sm mb-7 max-sm:max-w-[317px]",
									item.textClassName
								)}
							>
								{item.text}
							</p>
							<Swiper
								slidesPerView={"auto"}
								spaceBetween={48}
								className="!overflow-visible"
							>
								{item.steps.map((step, index) => (
									<SwiperSlide key={index} className="!w-auto">
										<div className="w-[238px]">
											<div className="font-bold mb-1 px-5">
												Step {index + 1}
											</div>
											<div className="relative">
												<div
													className={cn(
														"absolute px-3 py-7 flex w-full h-full left-0 top-0",
														step.className
													)}
												>
													<h5
														className="text-[16px] font-bold w-full"
														dangerouslySetInnerHTML={{
															__html: step.text,
														}}
													></h5>
												</div>
												<div className="mb-9">
													<Image
														src={step.img}
														width={400}
														height={400}
														alt=""
														className="w-full"
													/>
												</div>
											</div>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
							<div className="px-2">
								<button
									type="button"
									className={cn(
										"h-10 rounded-full font-bold flex justify-between w-full items-center px-4",
										item.btnClassName
									)}
								>
									<span>{item.buttonIcon}</span>
									<div className="flex justify-center gap-1">
										{item.buttonIcon2 && (
											<span>{item.buttonIcon2}</span>
										)}
										<span>{item.buttonText}</span>
									</div>
									{item.hideButtonarrow || (
										<span>{taxiIcons.arrow}</span>
									)}
								</button>
							</div>
						</div>
					))}
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
		title: "Taxi Application",
		titleClass: "text-[#0000FF]",
		className: "",
		textClassName: "",
		text: "Our Mykonos Taxi app is available in the iOS and Google play store. Follow these simple steps to download and register to book your Mykonos Taxi ",
		buttonText: "Download the Taxi App",
		buttonIcon: taxiIcons.mobile,
		btnClassName: "text-white bg-[#004080] justify-center gap-2",
		hideButtonarrow: true,
		steps: [
			{
				text: "Download the Aegean Taxi app from the iOSor Google play stores",
				img: img1.src,
				className: "text-white",
			},
			{
				text: "Register using only your phone number and receive verification code",
				img: img2.src,
			},
			{
				text: "Download the Aegean Taxi app from the iOSor Google play stores",
				img: img1.src,
				className: "text-white",
			},
			{
				text: "Register using only your phone number and receive verification code",
				img: img2.src,
			},
		],
	},
	{
		title: "Book Online / Webapp",
		titleClass: "text-[#0000FF]",
		className: "",
		textClassName: "",
		text: "We  made is easier to book your taxi ride in Mykonos! With 4 booking options available to  We  made is",
		buttonText: "Book online",
		buttonIcon: taxiIcons.icon1,
		buttonIcon2: taxiIcons.mobile2,
		btnClassName: "text-white bg-[#000000]",
		steps: [
			{
				text: "Select your location from the initial list of islands screen",
				img: img3.src,
				className: "text-white",
			},
			{
				text: "Select your location from the initial list of islands screen",
				img: img4.src,
			},
			{
				text: "Select your location from the initial list of islands screen",
				img: img3.src,
				className: "text-white",
			},
			{
				text: "Select your location from the initial list of islands screen",
				img: img4.src,
			},
		],
	},
	{
		title: "Whatsapp",
		titleClass: "",
		className: "bg-[#D8F6A5]",
		textClassName: "",
		titleIcon: taxiIcons.whatsapp2,
		text: "Mykonos taxi whatsapp booking. Use whatsapp to book a ride in Mykonos instantly. Online and available 24/7. Book now or later.",
		buttonText: "Launch Whatsapp",
		buttonIcon: taxiIcons.whatsapp,
		btnClassName: "text-white bg-[#21540F] border border-white",
		steps: [
			{
				text: "Click on any whatsapp link on our site or simply text us on +30 6944 500 689",
				img: img5.src,
				className: "text-white items-end",
			},
			{
				text: "Select your location from the initial list of islands screen",
				img: img6.src,
			},
			{
				text: "Click on any whatsapp link on our site or simply text us on +30 6944 500 689",
				img: img5.src,
				className: "text-white items-end",
			},
			{
				text: "Select your location from the initial list of islands screen",
				img: img6.src,
			},
		],
	},
	{
		title: "Phone booking 24/7",
		titleClass: "",
		className: "bg-[#9FF4E4]",
		textClassName: "",
		text: "Our Mykonoss call center is available 24/7. you can call us anytome to book a ride for now or schedule for later",
		buttonText: "Call us:   +30 215 215 4000",
		buttonIcon: taxiIcons.phone,
		btnClassName: "bg-[#2AD90F]",
		hideButtonarrow: true,
		steps: [
			{
				text: "Dial our 24/7 customer service line on <br /> +30 215 215 4000",
				img: img7.src,
				className: "max-w-[198px]",
			},
			{
				text: "Dial our 24/7 customer service line on <br /> +30 215 215 4000",
				img: img8.src,
				className: "max-w-[198px]",
			},
			{
				text: "Dial our 24/7 customer service line on <br /> +30 215 215 4000",
				img: img7.src,
				className: "max-w-[198px]",
			},
			{
				text: "Dial our 24/7 customer service line on <br /> +30 215 215 4000",
				img: img8.src,
				className: "max-w-[198px]",
			},
		],
	},
];

export default TaxiBookingSteps;
