const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.BASE_URL;
const LANGUAGE = "en-US";

export const requests = {
	fetchTrending: {
		title: "Trending",
		url: `${BASE_URL}/trending/all/week?api_key=${API_KEY}language=${LANGUAGE}`,
	},
	fetchTopRated: {
		title: "Top Rated",
		url: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}language=${LANGUAGE}`,
	},
	fetchActionMovies: {
		title: "Action",
		url: `${BASE_URL}/discover/movie?api_key=${API_KEY}language=${LANGUAGE}&with_genres=28`,
	},
	fetchComedyMovies: {
		title: "Comedy",
		url: `${BASE_URL}/discover/movie?api_key=${API_KEY}language=${LANGUAGE}&with_genres=35`,
	},
	fetchHorrorMovies: {
		title: "Horror",
		url: `${BASE_URL}/discover/movie?api_key=${API_KEY}language=${LANGUAGE}&with_genres=27`,
	},
	fetchRomanceMovies: {
		title: "Romance",
		url: `${BASE_URL}/discover/movie?api_key=${API_KEY}language=${LANGUAGE}&with_genres=10749`,
	},
	fetchMysteryMovies: {
		title: "Mystery",
		url: `${BASE_URL}/discover/movie?api_key=${API_KEY}language=${LANGUAGE}&with_genres=9648`,
	},
	fetchSciFiMovies: {
		title: "Sci-Fi",
		url: `${BASE_URL}/discover/movie?api_key=${API_KEY}language=${LANGUAGE}&with_genres=878`,
	},
	fetchWesternMovies: {
		title: "Western",
		url: `${BASE_URL}/discover/movie?api_key=${API_KEY}language=${LANGUAGE}&with_genres=37`,
	},
	fetchAnimationMovies: {
		title: "Animation",
		url: `${BASE_URL}/discover/movie?api_key=${API_KEY}language=${LANGUAGE}&with_genres=16`,
	},
	fetchTVMovies: {
		title: "TV Movie",
		url: `${BASE_URL}/discover/movie?api_key=${API_KEY}language=${LANGUAGE}&with_genres=10770`,
	},
};
