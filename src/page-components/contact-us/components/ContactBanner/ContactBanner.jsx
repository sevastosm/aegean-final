import Image from "next/image";
import img from "./img/toy.png";
export const ContactBanner = () => {
	return (
		<section className="pt-[80px] pb-7">
			<div className="container">
				<Image
					src={img}
					with={148}
					height={177}
					alt=""
					className="w-[148px] mx-auto mb-11"
				/>
				<h2 className="text-[32px] leading-[44px] font-semibold mb-8">
					Contact us
				</h2>
				<div className="font-light max-w-[307px]">
					We value every connection. Whether you’re interested in joining
					our team as a driver, exploring partnership opportunities as a
					fleet partner, or need assistance with a recent ride, our team is
					ready to assist you 24/7. Operating across 20 key locations,
					we’re committed to providing exceptional service and making it
					easy for you to get in touch.{" "}
				</div>
			</div>
		</section>
	);
};
