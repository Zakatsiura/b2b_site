import React, { useState, useEffect } from 'react';

import style from './ScrollToTopButton.module.css';
import arrow from '../../assets/icons/arrow-top.png';

const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop =
                window.scrollY || document.documentElement.scrollTop;
            const scrollThreshold = 500;

            setIsVisible(scrollTop > scrollThreshold);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return isVisible ? (
        <img className={style.top} src={arrow} alt='arrow' onClick={scrollToTop} />
    ) : null;
};

export { ScrollToTopButton };
