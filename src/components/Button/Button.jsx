import { useNavigate } from 'react-router-dom';
import css from './Button.module.css';

function Button ({location}) {
    const navigate = useNavigate();
    
    return <button className={css.button} onClick={() => {navigate(location.state?.from ?? '/')}}>Go back</button>
}

export default Button;