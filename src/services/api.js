///contains all my api calls
const API_KEY = "06f3961e6155822761a9deccd5d286a5"
const BASE_URL ="https://api.themoviedb.org/3"

export const getPopularMovies = async ()=> {
		const response = await fetch(`${BASE_URL}/movie/popular?api=${API_KEY}`);
		const data = await response.json()
		return data.results
}	
export const searchMovies = async (query)=> {
		const response = await fetch(`${BASE_URL}/search/movie?api=${API_KEY}&query=${encodeURIComponent(query)}`);
		const data = await response.json()
		return data.results
}	