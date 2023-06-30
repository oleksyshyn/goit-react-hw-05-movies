import { useSearchParams } from "react-router-dom";
import SearchMovie from "components/SearchMovie/SearchMovie";
import MoviesList from "components/MoviesList/MoviesList";
import { getSearchMovie } from "api/theMovieApi";
import { useState, useEffect } from "react";

function Movies() {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query");


    const formSubmitHandler = (query) => {
        setSearchParams({ query: query });
        
        async function loadSearchMovie() {
            const searchMovies = await getSearchMovie(query);
            setMovies(searchMovies);
        }

        loadSearchMovie();
    }
    
    useEffect(() => {
        if (query) {
            formSubmitHandler(query);
        }
    }, [searchParams]);

    return (
        <div>
            <SearchMovie onSubmit={formSubmitHandler} />
            <MoviesList movies={movies} />
        </div>
    );
}

export default Movies;