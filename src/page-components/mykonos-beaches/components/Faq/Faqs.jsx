import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import img from "./faq.png";
const Faqs = () => {
	const [open, setOpen] = useState([]); // Tracks open FAQ items
	const [maxHeights, setMaxHeights] = useState([]); // Track max-height for each FAQ
	const contentRefs = useRef([]); // Store refs for each FAQ item

	useEffect(() => {
		const newMaxHeights = data.map((_, index) => {
			if (contentRefs.current[index]) {
				return contentRefs.current[index].scrollHeight;
			}
			return 0;
		});
		setMaxHeights(newMaxHeights);
	}, [open]);
	return (
		<div className="container py-16 relative z-10">
			<section className="rounded-2xl pt-10 pb-12 overflow-hidden bg-[#CCD3E1]">
				<div className="max-w-[295px] mx-auto">
					<div className="mb-7">
						<h2 className="text-[30px] leading-[36px] font-bold mb-2">
							Frequently asked questions about Mykonos
						</h2>
					</div>
					<div className="flex flex-col gap-3 text-xs">
						{data?.map((faq, fIndex) => (
							<div className="border-b border-[#5E5E5E]" key={fIndex}>
								<h5
									className="flex justify-between items-center text-xs font-semibold cursor-pointer select-none py-[14px]"
									onClick={() => {
										if (open.includes(fIndex)) {
											setOpen(open.filter((i) => i !== fIndex));
										} else {
											// setOpen([...open, fIndex]);
											setOpen([fIndex]); // single item open
										}
									}}
								>
									<span className="w-0 flex-grow">{faq.title}</span>
									<span>
										{open.includes(fIndex)
											? faqIcons.minus
											: faqIcons.plus}
									</span>
								</h5>
								<div
									className={`transition-all duration-500 ease-in-out overflow-hidden`}
									style={{
										maxHeight: open.includes(fIndex)
											? `${maxHeights[fIndex]}px`
											: "0px",
									}}
								>
									<div
										className="pb-3"
										ref={(el) => (contentRefs.current[fIndex] = el)}
										dangerouslySetInnerHTML={{
											__html: faq.text,
										}}
									></div>
								</div>
							</div>
						))}
					</div>
					<div className="mt-10">
						<button
							type="button"
							className="btn flex items-center gap-2 justify-center bg-black text-white h-[59px] rounded-[12px] text-xl font-bold px-10 w-full max-w-[245px] mx-auto"
						>
							Read More
						</button>
					</div>
					<div className="-mx-3 mt-3">
						<Image
							src={img}
							width={600}
							height={600}
							alt=""
							className="w-full h-auto object-contain"
						/>
					</div>
				</div>
			</section>
		</div>
	);
};

const data = [
	{
		title: "Is Online booking available 24/7 for Mykonons",
		text: `lorem ipsum dolor set amet descruipst lorem ipsum dolor set amet descruipst lorem ipsum dolor set amet descruipst lorem ipsum dolor set amet descruipst`,
	},
	{
		title: "What are the payment options when booking a taxi for Mykonos with Aegean Taxi",
		text: `lorem ipsum dolor set amet descruipst lorem ipsum dolor set amet descruipst lorem ipsum dolor set amet descruipst lorem ipsum dolor set amet descruipst`,
	},
	{
		title: "Will i get instant confirmation of my car and driver details",
		text: `lorem ipsum dolor set amet descruipst lorem ipsum dolor set amet descruipst lorem ipsum dolor set amet descruipst lorem ipsum dolor set amet descruipst`,
	},
	{
		title: "How can i track my Mykonos Taxi after booking online",
		text: `lorem ipsum dolor set amet descruipst lorem ipsum dolor set amet descruipst lorem ipsum dolor set amet descruipst lorem ipsum dolor set amet descruipst`,
	},
	{
		title: "How can i find a taxi or transfer in Mykonos?",
		text: `lorem ipsum dolor set amet descruipst lorem ipsum dolor set amet descruipst lorem ipsum dolor set amet descruipst lorem ipsum dolor set amet descruipst`,
	},
];
const faqIcons = {
	minus: (
		<svg
			width="17"
			height="10"
			viewBox="0 0 17 10"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M7.08263 0.415396L0.376498 7.47231C0.132183 7.7385 -0.00300525 8.09497 5.06392e-05 8.46495C0.00310653 8.83493 0.144162 9.18881 0.392836 9.45037C0.641511 9.71194 0.977907 9.86026 1.32957 9.8634C1.68124 9.86653 2.02004 9.72422 2.27299 9.46713L8.03088 3.40806L13.7888 9.46446C13.9125 9.5992 14.0605 9.70667 14.2241 9.78058C14.3878 9.8545 14.5638 9.89338 14.7418 9.89497C14.9199 9.89656 15.0965 9.86081 15.2614 9.78983C15.4262 9.71884 15.576 9.61403 15.7019 9.48151C15.8278 9.34899 15.9274 9.19142 15.9948 9.01799C16.0623 8.84456 16.0962 8.65874 16.0947 8.47138C16.0931 8.28402 16.0561 8.09886 15.9858 7.92672C15.9155 7.75458 15.8134 7.5989 15.6853 7.46877L8.97913 0.414956C8.72761 0.15048 8.38653 0.0019505 8.03088 0.00203283C7.67524 0.00211516 7.33415 0.150802 7.08263 0.415396Z"
				fill="#86858A"
			/>
		</svg>
	),
	plus: (
		<svg
			width="17"
			height="10"
			viewBox="0 0 17 10"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M7.08263 9.48304L0.376498 2.42613C0.132183 2.15994 -0.00300525 1.80347 5.06392e-05 1.43349C0.00310653 1.06351 0.144162 0.70963 0.392836 0.448064C0.641511 0.186497 0.977907 0.0381738 1.32957 0.0350402C1.68124 0.0319066 2.02004 0.174213 2.27299 0.43131L8.03088 6.49038L13.7888 0.433976C13.9125 0.299233 14.0605 0.191768 14.2241 0.117853C14.3878 0.0439384 14.5638 0.00505284 14.7418 0.00346595C14.9199 0.00187906 15.0965 0.0376225 15.2614 0.108611C15.4262 0.179599 15.576 0.28441 15.7019 0.416929C15.8278 0.549447 15.9274 0.707019 15.9948 0.88045C16.0623 1.05388 16.0962 1.2397 16.0947 1.42706C16.0931 1.61442 16.0561 1.79957 15.9858 1.97171C15.9155 2.14385 15.8134 2.29953 15.6853 2.42967L8.97913 9.48348C8.72761 9.74796 8.38653 9.89649 8.03088 9.8964C7.67524 9.89632 7.33415 9.74764 7.08263 9.48304Z"
				fill="#86858A"
			/>
		</svg>
	),
};
export default Faqs;
