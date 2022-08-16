import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";

const Thumbnail = ({ result }) => {
	const PICTURE_BASE_URL = process.env.NEXT_PUBLIC_PICTURE_BASE_URL;

	return (
		<div className="group cursor-pointer p-2 transition-all duration-100 sm:hover:scale-105 hover:z-10">
			<Image
				src={`${PICTURE_BASE_URL}${result.backdrop_path || result.poster_path}`}
				height={1080}
				width={1920}
				layout="responsive"
				alt="thumbnail"
				className="rounded-sm"
			/>
			<div className="p-2">
				<p className="truncate max-w-md">{result.overview}</p>
				<h2 className="my-1 text-xl font-medium group-hover:font-bold group-hover:text-2xl transition-all duration-100 ease-in-out">
					{result.title || result.original_name}
				</h2>
				<p className="flex">
					{result.release_date || result.first_air_date} • <ThumbUpIcon className="h-5 mx-2" />{" "}
					{result.vote_count}
				</p>
			</div>
		</div>
	);
};

export default Thumbnail;
