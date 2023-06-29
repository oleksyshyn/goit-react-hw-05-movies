import MoviesListItem from 'components/MoviesListItem/MoviesListItem';
import css from './MoviesList.module.css';

function MoviesList({ movies }) {
    
    return (
        <ul className={css.moviesList}>
            {movies.map(({ id, title }) => (
                <MoviesListItem
                    key={id}
                    movieId={id}
                    title={title}
                />
            ))}
        </ul>
    );
}

export default MoviesList;