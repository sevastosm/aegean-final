import leftArrow from "@/assets/searching/left-arrow.svg";
import searchingMap from "@/assets/searching/searching-map.png";
import Image from "next/image";
import Link from "next/link";
import SearchingContainer from "./SearchingContainer";

const SearchingWithMap = () => {
	return (
		<section>
			<div className="h-[calc(100vh-60px)]">
				<div className="w-full h-[447px] relative">
					<Image
						src={searchingMap}
						alt="searchingMap"
						className="bg-cover w-full h-full"
					/>
					<Link
						href={"/"}
						className="absolute top-4 left-2 w-[46px] h-[46px] rounded-full flex items-center justify-center bg-black"
					>
						<Image src={leftArrow} alt="leftArrow" />
					</Link>
				</div>
				<SearchingContainer />
			</div>
		</section>
	);
};

export default SearchingWithMap;
