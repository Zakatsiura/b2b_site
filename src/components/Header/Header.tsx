import { useState, useContext } from 'react';

import style from './Header.module.css';
import menu from '../../assets/images/burger-menu-icon.jpg';
import logo_small from '../../assets/images/logo_small.png';
import { LanguageContext } from '../../context/languageContext';
import { locales } from '../../locales/locales';
import { Menu } from '../Menu/Menu';
import { Link } from 'react-router-dom';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';

const Header = () => {
    const languageContext = useContext(LanguageContext);
    const [isOpen, setIsOpen] = useState(false);

    if (!languageContext) {
        return null;
    }

    const { language } = languageContext;

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div className={style.header}>
                <div className={style.logo__block}>
                    <Link to={'/'} className={style.header__link}>
                        <img
                            src={logo_small}
                            className={style.logo__small}
                            alt="logo"
                        />
                        <div className={style.header__link_text}>
                            <span className={style.header__lint_text_cap}>
                                B
                                <span className={style.logo__color_digit}>
                                    2
                                </span>
                                B
                            </span>{' '}
                            Aviation Trading
                        </div>
                    </Link>
                </div>
                <div className={style.rightside}>
                    <span className={style.rightside__text}>
                        {' '}
                        {locales[language].header__switch}
                    </span>
                    <LanguageSwitcher />
                    <div className={style.header__button} onClick={toggleMenu}>
                        <img src={menu} className={style.burger} alt="menu" />
                    </div>
                    <Menu isOpen={isOpen} onChange={setIsOpen} />
                </div>
            </div>
        </>
    );
};

export { Header };
