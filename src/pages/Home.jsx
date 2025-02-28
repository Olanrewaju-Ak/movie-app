import React from "react";
import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home(){

const movies =[
	{id:1, title: "Avatar", release_date:"2009"},
	{id:2, title: "Face off", release_date:"2007"},
	{id:3, title: "Terminator", release_date:"1999"}
]
//state to handle search input
const [searchQuery, setSearchQuery] = useState("");

const handleSearch = (e)=> {
	e.preventDefault();
	alert(searchQuery);

}

	return <div className="home">
			<form onSubmit={handleSearch} className="search-form">
				<input type="text" placeholder="Search for movies..." className="search-input" value={searchQuery} onChange={(e)=>{setSearchQuery(e.target.value)}}/>
				<button className="search-btn" type="submit">Search</button>
			</form>


		 <div className="movies-grid">
			 {movies.map((movie)=>(
				// movie.title.toLowerCase().startsWith(searchQuery) && 
				<MovieCard movie={movie} key={movie.id}/>))}
		 </div>
	</div>;
}

export default Home;
