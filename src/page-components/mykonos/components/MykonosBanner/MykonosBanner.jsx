import Image from "next/image";
import banner from "./banner.png";
import whatsapp from "./whatsapp.png";

export const MykonosBanner = () => {
	return (
		<section className="bg-mykonos-gradient pt-[113px] pb-[111px]">
			<div className="container">
				<h1 className="text-[32px] leading-[40px] text-white font-bold">
					Mykonos travel guide and information
				</h1>
				<div className="flex justify-end -mt-1 mb-6">
					<Image
						src={banner}
						width={227}
						height={267}
						className="w-[227px] translate-x-7"
						alt=""
					/>
				</div>
				<div className="max-w-[227px] text-white font-semibold text-[20px] leading-[26px]">
					The ultimate up to date Mykonos travel guide, through the
					knowledge of real experts.
				</div>

				<div className="flex justify-end">
					<Image
						src={whatsapp}
						width={168}
						height={40}
						className="w-[168px] translate-x-2"
						alt=""
					/>
				</div>
			</div>
		</section>
	);
};
