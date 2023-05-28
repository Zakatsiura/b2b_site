import { Link } from 'react-router-dom';

import style from './Header.module.css';

const Header = () => {
    return (
        <div className={style.header}>
            <Link to="/main" className={style.header__link}>
                Main
            </Link>
            <Link to="/aircompany" className={style.header__link}>
                Air Company
            </Link>
            <Link to="/service" className={style.header__link}>
                Service
            </Link>
            <Link to="/contact" className={style.header__link}>
                Contact
            </Link>
        </div>
    );
};

export { Header };
