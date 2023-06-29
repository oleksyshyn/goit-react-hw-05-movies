import { Outlet } from "react-router-dom";
import SearchMovie from "components/SearchMovie/SearchMovie";
import MoviesList from "components/MoviesList/MoviesList";
import { getSearchMovie } from "api/theMovieApi";
import { useState } from "react";

function Movies() {
    const [movies, setMovies] = useState([]);

    const formSubmitHandler = (query) => {
        async function loadSearchMovie() {
            const searchMovies = await getSearchMovie(query);
            setMovies(searchMovies);
        }
        loadSearchMovie();
    }
    
    return (
        <div>
            <SearchMovie onSubmit={formSubmitHandler} />
            <MoviesList movies={movies} />
            <Outlet/>
        </div>
        
    );
}

export default Movies;