import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import appStore from "./assets/img/app-store.png";
import logo from "./assets/img/logo.png";

import { twMerge } from "tailwind-merge";
import { NabnarMenus } from "../Navbar/Navbar";

function cn(...inputs) {
	return twMerge(clsx(...inputs));
}
const Navbar3 = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<header
			className={cn("py-5 absolute left-0 top-0 w-full z-[100]", {
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
					<Link href="" className="ml-auto block max-w-[106px]">
						<Image src={appStore} alt="" />
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Navbar3;
