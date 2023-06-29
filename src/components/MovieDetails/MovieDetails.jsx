import { useParams, Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieDetails } from "api/theMovieApi";
import css from './MovieDetails.module.css';

function MovieDetails() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {

        const loadMovieDetails = async () => {
            const movieData = await getMovieDetails(movieId);
            setMovie(movieData);
        }

        loadMovieDetails();
    }, [movieId]);

    if (!movie) {
        return <>Loading...</>
    }
    return <>
        
        <button className={css.button}>
            <Link to="/" className={css.goBack}>Go back</Link>
        </button>
        <div className={css.movieDetails}>
            <img
                src={ movie.poster_path !== null ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : ""}
                alt={movie.title}
                className={css.image}>
            </img>
            <div className={css.movieInfo}>
                <h1>{movie.title}</h1>
                <p>User score: {(movie.vote_average * 10).toFixed(0)}%</p>
                <h2>Overview</h2>
                <p>{movie.overview}</p>
                <h3>Genres</h3>
                <ul className={css.genresList}>
                    {movie.genres.map(({id, name}) => (
                        <li key={id} className={css.genre}>{name}</li>
                    ))}
                </ul>
            </div>
        </div>
        <div className={css.addInfo}>
            <h2>Additional information</h2>
            <ul className={css.addInfoList}>
                <li>
                    <Link to="cast" className={css.cast}>Cast</Link>
                </li>
                <li>
                    <Link to="reviews" className={css.reviews}>Reviews</Link>
                </li>
            </ul>
        </div>
        <Outlet/>
    </>
}

export default MovieDetails;