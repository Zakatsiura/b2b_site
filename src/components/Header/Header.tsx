import { useState } from 'react';

import style from './Header.module.css';
import menu from '../../assets/images/burger-menu-icon.jpg';
import logo_small from '../../assets/images/logo_small.png';
import { Menu } from '../Menu/Menu';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className={style.header}>
            <div className={style.logo__block}>
                <Link to={'main'} className={style.header__link}>
                    <img src={logo_small} className={style.logo__small} />
                    <div className={style.header__link_text}>
                        B2B Aviation Trading
                    </div>
                </Link>
            </div>
            <div className={style.header__button} onClick={toggleMenu}>
                <img src={menu} className={style.burger} />
            </div>
            <Menu isOpen={isOpen} onChange={setIsOpen} />
        </div>
    );
};

export { Header };
