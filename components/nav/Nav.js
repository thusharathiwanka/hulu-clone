import { useRouter } from "next/router";

import { requests } from "../../util/requests";

const Nav = () => {
	const router = useRouter();

	return (
		<nav className="relative">
			<div className="flex whitespace-nowrap px-10 text-xl space-x-10 overflow-x-scroll scrollbar-hide h-8">
				{Object.entries(requests).map(([key, { title, url }]) => (
					<h2
						key={key}
						onClick={() => router.push(`/?genre=${key}`)}
						className="cursor-pointer transition-transform duration-100 hover:scale-125 hover:text-white active:text-red-400"
					>
						{title}
					</h2>
				))}
			</div>
			<div className="absolute right-0 top-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
		</nav>
	);
};

export default Nav;
