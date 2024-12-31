import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "./assets/img/logo.png";
import whatsapp from "./assets/img/whatsapp-2.png";

import { NabnarMenus } from "@/page-components/landing/components/Navbar/Navbar";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
	return twMerge(clsx(...inputs));
}
const Navbar4 = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<header
			className={cn("py-3 absolute left-0 top-0 w-full z-[100] bg-black", {
				"z-[999]": menuOpen,
			})}
		>
			<div className="container px-6">
				<div className="flex items-center gap-6">
					<NabnarMenus
						className="text-white"
						{...{ menuOpen, setMenuOpen }}
					/>
					<Link href="/">
						<Image
							src={logo}
							width={154}
							height={23}
							className="max-w-full h-auto"
							alt=""
						/>
					</Link>
					<Link href="" className="ml-auto block max-w-[105px]">
						<Image src={whatsapp} width={210} height={70} alt="" />
					</Link>
				</div>
			</div>
		</header>
	);
};
export default Navbar4;
