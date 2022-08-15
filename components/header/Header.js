import Image from "next/image";
import { HomeIcon } from "@heroicons/react/outline";

import HeaderItem from "./HeaderItem";
import { mainNavigationList } from "../../lib/navigation";

export const Header = () => {
	return (
		<header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
			<div className="flex flex-grow justify-evenly max-w-xl">
				{mainNavigationList.map(navItem => (
					<HeaderItem Icon={navItem.icon} title={navItem.title} key={navItem.id} />
				))}
			</div>
			<Image
				className="object-contain"
				src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
				width={200}
				height={100}
				alt="hulu-logo"
			/>
		</header>
	);
};
