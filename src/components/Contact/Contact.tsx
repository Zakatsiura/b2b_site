import { useContext } from 'react';

import { LanguageContext } from '../../context/languageContext';
import { ScrollToTopButton } from '../ScrollToTopButton/ScrollToTopButton';
import { locales } from '../../locales/locales';
import style from './Contact.module.css';

const Contact = () => {
    const languageContext = useContext(LanguageContext);

    if (!languageContext) {
        return null;
    }

    const { language } = languageContext;

    return (
        <div className={style.contact__wrapper}>
            <ScrollToTopButton />
            <div className={style.contact__title}>
                {locales[language].contact__title}
            </div>
            <p className={style.contact__text}>
                {locales[language].contact__p1}
            </p>
            <div className={style.contact__text}>
                <p className={style.contact__subtitle}>
                    {locales[language].contact__address}
                </p>
                <p className={style.contact__text}>
                    {locales[language].contact__address__p1}
                </p>
                <p className={style.contact__subtitle}>Email </p>
                <p className={style.contact__text}>
                    info@b2baviatrading.com.ua
                </p>
                <p className={style.contact__subtitle}>
                    {locales[language].contact__phone}
                </p>
                <p className={style.contact__text}>+380 50 313 13 76</p>
                <p className={style.contact__text}>
                    {locales[language].contact__p2}
                </p>
            </div>
            <div className={style.contact__title}>
                {locales[language].contact__location}
            </div>
            <p className={style.contact__text}>
                {locales[language].contact__location__p1}
            </p>
            <div className={style.contact__map_block}>
                <iframe
                    className={style.contact__map}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.8351491125873!2d30.646794176875503!3d50.42554298915645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c5184ae15555%3A0x69fd9a9c7090060d!2z0YPQuy4g0KHQuNC80YTQtdGA0L7Qv9C-0LvRjNGB0LrQsNGPLCAxM9CwLCDQmtC40LXQsiwgMDIwOTY!5e0!3m2!1sru!2sua!4v1687178634081!5m2!1sru!2sua"
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};
export { Contact };
