import { useContext } from 'react';

import style from './Service.module.css';
import { LanguageContext } from '../../context/languageContext';
import { locales } from '../../locales/locales';
import { MainSlider } from '../MainSlider/MainSlider';
import { Card } from '../Card/Card';
import { ScrollToTopButton } from '../ScrollToTopButton/ScrollToTopButton';

const Service = () => {
    const languageContext = useContext(LanguageContext);

    if (!languageContext) {
        return null;
    }

    const { language } = languageContext;
    return (
        <div className={style.service__wrapper}>
            <div className={style.service__title}>
                {locales[language].service__title}
            </div>
            <div className={style.service__text}>
                {locales[language].service__text1}
            </div>
            <div className={style.service__text}>
                {locales[language].service__text2}
            </div>
            <div className={style.service__text}>
                {locales[language].service__text3}
            </div>
            <Card />
            <div className={style.service__title}>
                {locales[language].service__gallery}
            </div>
            <MainSlider />
            <ScrollToTopButton />
            <br />
        </div>
    );
};

export { Service };
