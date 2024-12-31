import Circle from "@/assets/searching/circle.svg";
import cross from "@/assets/searching/cross.svg";
import { locationData } from "@/data/locationData";
import Image from "next/image";
import Link from "next/link";
const SearchingContainer = () => {
	return (
		<div className="w-full h-[325px] mt-[-155px] pl-[10px] pr-5 pt-6 pb-5 bg-white rounded-tr-[40px] rounded-tl-[40px] relative z-30">
			<div className="pl-[18px]">
				{/* enter part */}
				<Link
					href={"./from-location"}
					className="w-full h-[51px] px-4 py-0.5 border-[2px] border-black rounded-lg bg-[#F6F6F6] flex items-center"
				>
					<div className="h-full w-[35px] flex items-center justify-center">
						<Image src={Circle} alt="Circle" />
					</div>
					<div className="w-full pl-4  flex items-center justify-between gap-2">
						<input
							type="text"
							placeholder="Enter Pickup"
							className="w-full outline-none bg-transparent placeholder:text-[#747474]"
						/>
						<Image src={cross} alt="cross" />
					</div>
				</Link>
				<div>
					{locationData.map((item, index) => (
						<div key={item.id}>
							<Link
								href={"./from-location"}
								className="w-full h-[55px] mt-1 flex items-center gap-[5px]"
							>
								<div className="w-[64px] h-full flex items-center justify-center">
									<div className="w-9 h-9 rounded-full bg-[#EEEEEE] flex items-center justify-center">
										<Image src={item.icon} alt={item.text} />
									</div>
								</div>
								<div className="w-full h-full flex items-center">
									<p
										className={`text-black ${
											index === 0
												? "font-bold font-HelveticaBold"
												: "font-medium font-HelveticaMedium"
										}`}
									>
										{item.text}
									</p>
								</div>
							</Link>
							{/* Divider line */}
							{index !== locationData.length - 1 && (
								<div
									className={`ml-[60px] my-1 w-[266px] h-[1px] ${
										index === 0 ? "bg-black" : "bg-gray-400"
									}`}
								></div>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SearchingContainer;
