import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieCast } from "api/theMovieApi";
import css from './Cast.module.css';
import PropTypes from 'prop-types';

function Cast() {
    const [cast, setCast] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {

        const loadMovieCast = async () => {
            const movieCast = await getMovieCast(movieId);
            setCast(movieCast);
        }

        loadMovieCast();

    }, [movieId]);

    return (
        <div>
            {cast.length > 0
                ? (
                    <ul className={css.castList}>
                        {cast.map(({ id, name, character, profile_path }) => (
                            <li key={id}>
                                <img
                                    src={profile_path !== null ? `https://image.tmdb.org/t/p/w500${profile_path}` : ""}
                                    alt={name}
                                    className={css.image}
                                >
                                </img>
                                <p className={css.name}>{name}</p>
                                <p className={css.character}>{character}</p>
                            </li>
                        ))}
                    </ul>
                ) : 
                    (<p>We don't have any cast for this movie.</p>)
            }     
        </div>
    );
}

export default Cast;

Cast.propTypes = {
    cast: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            character: PropTypes.string.isRequired,
            profile_path: PropTypes.string.isRequired,
        })
    ),
};