import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

function Header() {
    return (
        <div className={css.header}>
            <ul className={css.nav}>
                <li>
                    <NavLink to="/" className={css.navLink}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/movies" className={css.navLink}>Movies</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Header;