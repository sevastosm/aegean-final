import Image from "next/image";
import presencegreece from "./img/presence-greece.png";
const PresenceGreece = () => {
	return (
		<section className="relative py-[109px] min-h-[773px]">
			<Image
				className="absolute top-0 left-0 w-full h-full object-cover"
				src={presencegreece}
				width={900}
				height={900}
				alt=""
			/>
			<div className="container relative px-[52px]">
				<div className="font-bold text-xl">
					We have been expanding our presence in Greece over the last few
					years, since we started Aegean taxi almost 10 years ago. We cover
					a comprehensive number of locations across Greece, and you can
					contact us in any of these. If you are travelling anywhere in
					Greece, chances are there is an Aegean Taxi within minutes from
					you!
				</div>
			</div>
		</section>
	);
};

export default PresenceGreece;
