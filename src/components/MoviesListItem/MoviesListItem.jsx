import { Link, useLocation } from 'react-router-dom';
import css from './MoviesListItem.module.css';
import PropTypes from 'prop-types';

function MoviesListItem({ title, movieId}) {
    const location = useLocation();
    return (
        <li className={css.moviesListItem}>
            <Link to={`/movies/${movieId}`} state={{from: location}} className={css.moviesTitle}>{title}</Link>
        </li>
    ); 
}

export default MoviesListItem;

MoviesListItem.propTypes = {
    movieId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
};