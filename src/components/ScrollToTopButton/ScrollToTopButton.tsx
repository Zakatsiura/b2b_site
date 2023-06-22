import React from 'react';

import style from './ScrollToTopButton.module.css';
import arrow from '../../assets/icons/arrow-top.png';

const ScrollToTopButton: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <img className={style.top} src={arrow} onClick={scrollToTop}>
        </img>
    );
};

export { ScrollToTopButton };
