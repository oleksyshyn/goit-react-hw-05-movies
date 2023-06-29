import { Link } from 'react-router-dom';
import css from './MoviesListItem.module.css';

function MoviesListItem({ title, movieId }) {
    return (
        <li className={css.moviesListItem}>
            <Link to={`/movies/${movieId}`} className={css.moviesTitle}>{title}</Link>
        </li>
    ); 
}

export default MoviesListItem;