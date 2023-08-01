import { useContext } from 'react';

import style from './Service.module.css';
import { LanguageContext } from '../../context/languageContext';
import { locales } from '../../locales/locales';

const Service = () => {
    const languageContext = useContext(LanguageContext);

    if (!languageContext) {
        return null;
    }

    const { language } = languageContext;
    return (
        <>
            <section className={style.service__wrapper}>
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
            </section>
        </>
    );
};

export { Service };
