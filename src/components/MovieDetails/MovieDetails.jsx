import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect, useRef, Suspense } from "react";
import { getMovieDetails } from "api/theMovieApi";
import Button from "components/Button/Button";
import css from './MovieDetails.module.css';
import PropTypes from 'prop-types';

function MovieDetails() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    const location = useLocation();
    const locationRef = useRef(location);

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
        <Button location={locationRef.current} />
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
        <Suspense fallback={<div>Loading...</div>}>
            <Outlet/>
        </Suspense>
    </>
}

export default MovieDetails;

MovieDetails.propTypes = {
    movie: PropTypes.shape({
        poster_path: PropTypes.string,
        title: PropTypes.string.isRequired,
        vote_average: PropTypes.number.isRequired,
        overview: PropTypes.string.isRequired,
        genres: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
            })
        ),
    })
};