import { NabnarMenus } from "@/page-components/landing/components/Navbar/Navbar";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import appStore2 from "./assets/img/app-store-2.png";
import logo from "./assets/img/logo.png";

function cn(...inputs) {
	return twMerge(clsx(...inputs));
}
const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<header
			className={cn("py-5 absolute left-0 top-0 w-full z-[100]", {
				"z-[999]": menuOpen,
			})}
		>
			<div className="container">
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
					<Link href="" className="ml-auto max-w-[105px] block">
						<Image
							src={appStore2}
							width={123}
							height={31}
							className="max-w-full h-auto"
							alt=""
						/>
					</Link>
				</div>
			</div>
		</header>
	);
};
export default Navbar;
