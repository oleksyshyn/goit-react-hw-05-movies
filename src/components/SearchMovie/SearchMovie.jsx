import { useState } from 'react';
import css from './SearchMovie.module.css';
import PropTypes from 'prop-types';

function SearchMovie({ onSubmit }) {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim() === '') {
            return;
        }
        onSubmit(query);
        setQuery('');
    };

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <input className={css.input} value={query} onChange={handleInputChange}></input>
            <button type="submit" className={css.searchBtn}>Search</button>
        </form>
    );
}

export default SearchMovie;

SearchMovie.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};