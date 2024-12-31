import Image from "next/image";
import img from "./img/mission.png";
const Mission = () => {
	return (
		<section className="mission">
			<div className="container">
				<Image
					className="w-full"
					src={img}
					width={352}
					height={200}
					alt=""
				/>
				<div className="py-[30px] px-5 bg-[#F6F6F6]">
					<h2 className="text-[32px] mb-[31px] leading-[39px] font-semibold">
						Our Mission
					</h2>
					<p className="font-extralight">
						At Aegean Taxi, we pride ourselves on being the leading taxi
						and transfer service provider in the beautiful regions of
						Mykonos, Santorini, Corfu, Rhodes and Athens. With a deep
						commitment to customer satisfaction, reliability and
						exceptional service, we constantly strive to exceed our
						clients’ expectations and ensure their transportation needs
						are met with the utmost professionalism and convenience.
						<br />
						<br />
						Our experienced and highly trained team of drivers is
						dedicated to delivering a safe and comfortable travel
						experience. All our drivers are fluent in English and know the
						locations they are working in, like the back of their hands.
						What sets Aegean Taxi apart is our commitment to punctuality
						and reliability. We understand the value of your time and our
						drivers are trained to arrive promptly at your location. Our
						modern and well-maintained fleet of vehicles is equipped with
						the latest amenities to make your journey as comfortable and
						enjoyable as possible.
						<br />
						<br />
						At Aegean Taxi, we prioritise your safety and peace of mind.
						Our drivers undergo rigorous background checks and possess the
						necessary licenses and certifications to provide you with a
						secure and trustworthy travel experience, all in full
						compliance with Greek legislation and the quality standards
						set for the sector. Additionally, our vehicles are regularly
						inspected and maintained to the highest standards, ensuring
						optimal safety for our passengers.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Mission;
