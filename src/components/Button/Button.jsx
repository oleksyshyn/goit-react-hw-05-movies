import { useNavigate } from 'react-router-dom';
import css from './Button.module.css';
import PropTypes from 'prop-types';

function Button ({location}) {
    const navigate = useNavigate();
    
    return <button className={css.button} onClick={() => {navigate(location.state?.from ?? '/')}}>Go back</button>
}

export default Button;

Button.propTypes = {
    location: PropTypes.shape(PropTypes.any.isRequired).isRequired,
};