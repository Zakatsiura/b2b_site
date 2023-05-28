import { Link } from 'react-router-dom';

import style from './Header.module.css';

const Header = () => {
    return (
        <div className={style.header}>
            <Link to="/main">Main</Link>
            <Link to="/aircompany">Air Company</Link>
            <Link to="/service">Service</Link>
            <Link to="/contact">Contact</Link>
        </div>
    );
};

export { Header };
