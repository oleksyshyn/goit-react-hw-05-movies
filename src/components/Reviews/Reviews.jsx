import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieReviews } from "api/theMovieApi";
import css from './Reviews.module.css';
import PropTypes from 'prop-types';

function Reviews() {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {

        const loadMovieReviews = async () => {
            const movieReviews = await getMovieReviews(movieId);
            setReviews(movieReviews);
        }

        loadMovieReviews();

    }, [movieId]);

    return (
        <div>
            {reviews.length > 0
                ? (
                    <ul className={css.reviewsList}>
                        {reviews.map(({ id, author, content }) => (
                            <li key={id}>
                                <p className={css.author}>{author}</p>
                                <p>{content}</p>
                            </li>
                        ))}
                    </ul>
                ) :
                (<p>We don't have any reviews for this movie.</p>)
            }
        </div>
    );
}

export default Reviews;

Reviews.propTypes = {
    reviews: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            author: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
        })
    ),
};