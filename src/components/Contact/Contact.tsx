import { useContext } from 'react';

import { LanguageContext } from '../LanguageSwitcher/LanguageSwitcher';
import style from './Contact.module.css';

const Contact = () => {
    const languageContext = useContext(LanguageContext);

    if (!languageContext) {
        return null;
    }

    const { language } = languageContext;

    return (
        <div className={style.contact__wrapper}>
            {language === 'en' ? (
                <div className={style.contact__title}>CONTACT INFORMATION:</div>
            ) : (
                <div className={style.contact__title}>КОНТАКТНА ІНФОРМАЦІЯ:</div>
            )}
            {language === 'en' ? (
                <p className={style.contact__text}>
                    Thank you for your interest in our company. We're here to
                    assist you in any way we can. Please find our contact
                    information below:
                </p>
            ) : (
                <p className={style.contact__text}>
                    Дякуємо за інтерес до нашої компанії. Будь ласка,
                    скористайтесь інформацію нижче, щоб зв'язатись із нами:
                </p>
            )}
            <div className={style.contact__text}>
                {language === 'en' ? (
                    <p className={style.contact__subtitle}>Address:</p>
                ) : (
                    <p className={style.contact__subtitle}>Наша адреса:</p>
                )}
                {language === 'en' ? (
                    <p className={style.contact__text}>
                        Simferopolska Str, 13а, Kyiv, 02096
                    </p>
                ) : (
                    <p className={style.contact__text}>
                        вул. Симферопольська, 13а, Київ, 02096
                    </p>
                )}
                <p className={style.contact__subtitle}>Email </p>
                <p className={style.contact__text}>
                    info@b2baviatrading.com.ua
                </p>
                {language === 'en' ? (
                    <p className={style.contact__subtitle}>Phone:</p>
                ) : (
                    <p className={style.contact__subtitle}>Телефон:</p>
                )}
                <p className={style.contact__text}>+380 50 313 13 76</p>
                {language === 'en' ? (
                    <p className={style.contact__text}>
                        We look forward to hearing from you and providing you
                        with the assistance you need.
                    </p>
                ) : (
                    <p className={style.contact__text}>
                        Ми з нетерпінням чекаємо на Вас та надамо інформацію,
                        яку Ви потребуєте.
                    </p>
                )}
            </div>
            {language === 'en' ? (
                <div className={style.contact__title}>OUR LOCATION:</div>
            ) : (
                <div className={style.contact__title}>НАШЕ РОЗТАШУВАННЯ:</div>
            )}
            {language === 'en' ? (
                <p className={style.contact__text}>
                    Use the interactive map below to navigate your way here. We
                    look forward to welcoming you!
                </p>
            ) : (
                <p className={style.contact__text}>
                    Скористайтеся інтерактивною картою нижче, щоб дістатися нас
                    . Ми з нетерпінням чекаємо на Вас!
                </p>
            )}
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
