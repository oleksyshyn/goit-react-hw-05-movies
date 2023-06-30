import MoviesListItem from 'components/MoviesListItem/MoviesListItem';
import css from './MoviesList.module.css';
import PropTypes from 'prop-types';

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

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
