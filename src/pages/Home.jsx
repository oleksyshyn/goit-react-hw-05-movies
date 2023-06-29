import { getTrendingMovies } from "api/theMovieApi";
import { useState, useEffect } from "react";
import MoviesList from "components/MoviesList/MoviesList";

function Home() {
    const [isLoading, setIsLoading] = useState(false);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        setIsLoading(true);

        async function loadTrendingMovies() {
            const loadMovies = await getTrendingMovies();
            setMovies(loadMovies);
            setIsLoading(false);
        }
        loadTrendingMovies();
    }, [])

    if (isLoading) {
        return <>Loading...</>
    }
    return <>
        <h1>Trending today</h1>
        <MoviesList movies={movies} />
    </>
}

export default Home;