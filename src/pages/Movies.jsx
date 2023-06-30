import { useSearchParams } from "react-router-dom";
import SearchMovie from "components/SearchMovie/SearchMovie";
import MoviesList from "components/MoviesList/MoviesList";
import { getSearchMovie } from "api/theMovieApi";
import { useState, useEffect, useCallback } from "react";

function Movies() {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query");

    const formSubmitHandler = useCallback(
        async query => {
            const searchMovies = await getSearchMovie(query);
            setMovies(searchMovies);
            setSearchParams({ query: query });
        },
        [setSearchParams]
    );
        
    useEffect(() => {
        if (query) {
            formSubmitHandler(query);
        }
    }, [searchParams, query, formSubmitHandler]);

    return (
        <div>
            <SearchMovie onSubmit={formSubmitHandler} />
            <MoviesList movies={movies} />
        </div>
    );
}

export default Movies;