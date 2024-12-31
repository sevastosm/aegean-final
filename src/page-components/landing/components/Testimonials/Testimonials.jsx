import Image from "next/image";
import Link from "next/link";
import tripadvisor from "./assets/img/tripadvisor.png";
import trustpilot from "./assets/img/trustpilot.png";
const Testimonials = () => {
	return (
		<section className="book-ride-section py-[60px] overflow-hidden">
			<div className="container">
				<div className="px-4 mb-7">
					<h2 className="text-[#0044FF] text-[30px] leading-[36px] font-bold mb-5">
						Testimonials
					</h2>
					<div className="font-medium text-[#5E5E5E] max-w-[289px] text-xl">
						What travellers who booked a ride with Aegean Taxi say about
						our service
					</div>
				</div>
				<div className="mb-7">{/*  */}</div>
				<div className="flex justify-between items-end">
					<div>
						<Image
							src={trustpilot}
							width={400}
							height={400}
							alt=""
							className="w-full"
						/>
						<div className="pl-2">
							<Link
								href=""
								className="flex items-center gap-2 text-[#1760A5] text-sm font-semibold"
							>
								Go to Trustpilot {arrow}
							</Link>
						</div>
					</div>
					<div>
						<Image
							src={tripadvisor}
							width={400}
							height={400}
							alt=""
							className="w-full"
						/>
						<div className="pl-2">
							<Link
								href=""
								className="flex items-center gap-2 text-[#1760A5] text-sm font-semibold"
							>
								Go to Tripadvisor {arrow}
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
const arrow = (
	<svg
		width="11"
		height="11"
		viewBox="0 0 11 11"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M9.74871 0.955959C9.72438 0.54246 9.36946 0.226971 8.95596 0.251294L2.21761 0.647667C1.80411 0.671991 1.48862 1.02692 1.51294 1.44041C1.53727 1.85391 1.89219 2.1694 2.30569 2.14508L8.29534 1.79275L8.64767 7.78239C8.67199 8.19589 9.02692 8.51138 9.44042 8.48706C9.85391 8.46273 10.1694 8.10781 10.1451 7.69431L9.74871 0.955959ZM1.56056 10.4983L9.56056 1.49827L8.43944 0.501727L0.439443 9.50173L1.56056 10.4983Z"
			fill="#1760A5"
		/>
	</svg>
);

export default Testimonials;
