import Thumbnail from "./Thumbnail";

const Results = ({ results }) => {
	return (
		<main className="px-5 py-10 sm:grid md:grid-cols-2 lg:grid-cols-3 3xl:flex flex-wrap justify-center">
			{results.map(result => (
				<Thumbnail key={result.id} result={result} />
			))}
		</main>
	);
};

export default Results;
