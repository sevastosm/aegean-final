import Image from "next/image";
import img1 from "./assets/img/step-1.png";
import img2 from "./assets/img/step-2.png";
import img3 from "./assets/img/step-3.png";
import img4 from "./assets/img/step-4.png";
const HowtoBookTaxi = () => {
	return (
		<section className="how-to-book-taxi py-[60px]">
			<div className="container">
				<h2 className="text-[32px] leading-[1.25] font-bold mb-7">
					How to book your taxi or port and airport transfer online
				</h2>
				<div className="how-to-book-taxi-steps">
					{/* Step 1 */}
					<div className="step">
						<h4 className="title">Step 1</h4>
						<h6 className="subtitle">Choose your destination</h6>
						<p className="text-sm font-medium">
							Choose one of the pre selected hotspots, or simply type
							your pick up and destination.
						</p>
						<Image
							src={img1}
							width={600}
							height={600}
							className="w-full max-w-[279px] mt-12 pointer-events-none"
							alt="steps"
						/>
					</div>
					{/* Step 1 */}
					<div className="step">
						<h4 className="title">Step 2</h4>
						<h6 className="subtitle">Choose Taxi Category</h6>
						<p className="text-sm font-medium">
							Select the car category you require from the available Taxi
							options
						</p>
						<Image
							src={img2}
							width={600}
							height={600}
							className="w-full max-w-[279px] mt-[52px] pointer-events-none"
							alt="steps"
						/>
					</div>
					{/* Step 1 */}
					<div className="step">
						<h4 className="title">Step 3</h4>
						<h6 className="subtitle">
							Confirm personal details to receive verification code
						</h6>
						<p className="text-sm font-medium">
							Enter your details and mobile number to receive a txt or
							whatsapp message verification code
						</p>
						<Image
							src={img3}
							width={600}
							height={600}
							className="w-full max-w-[279px] mt-5 pointer-events-none"
							alt="steps"
						/>
					</div>
					{/* Step 1 */}
					<div className="step">
						<h4 className="title">Step 4</h4>
						<h6 className="subtitle">
							Receive Instant booking confirmation
						</h6>
						<p className="text-sm font-medium">
							Once a driver is allocated, you will see your driver and
							car details on the next screen. You will also receive a
							tracking link via txt message
						</p>
						<Image
							src={img4}
							width={600}
							height={600}
							className="w-full max-w-[279px] mt-[43px] pointer-events-none"
							alt="steps"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HowtoBookTaxi;
