import { useContext } from 'react';

import { LanguageContext } from '../../context/languageContext';
import { Partners } from '../Partners/Partners';
import { TopSlider } from '../TopSlider/TopSlider';
import { ScrollToTopButton } from '../ScrollToTopButton/ScrollToTopButton';
import { locales } from '../../locales/locales';
import style from './Main.module.css';
import logo from '../../assets/images/Logo_original_stroked.png';
import h135 from '../../assets/images/H135.jpg';
import h125to from '../../assets/images/h125takeoff.jpg';
import h125 from '../../assets/images/H125.jpg';
import flag from '../../assets/images/ukrainian-waving-flag-11.gif';

const Main: React.FC = () => {
    const languageContext = useContext(LanguageContext);

    if (!languageContext) {
        return null;
    }

    const { language } = languageContext;

    return (
        <div>
            <TopSlider />
            <ScrollToTopButton />
            <div className={style.main__top}>
                <div className={style.upper__img}>
                    <img src={logo} className={style.logo} alt="logo" />
                    <h1 className={style.slogan}>{locales[language].slogan}</h1>
                    <img src={flag} className={style.logo} alt="flag" />
                </div>
            </div>
            <div className={style.main__wrapper}>
                <div className={style.main__text}>
                    <div className={style.logo__block}>
                        <h2 className={style.main__title}>
                            {locales[language].main__title}
                        </h2>
                        <br />
                    </div>
                    <div className={style.main__card}>
                        <img
                            className={style.main__picture}
                            src={h125to}
                            alt="H 125"
                        />
                        <p className={style.main__text}>
                            {locales[language].main__p1}
                        </p>
                    </div>
                    <br />
                    <p className={style.main__text}>
                        {locales[language].main__p2}
                    </p>
                    <img
                        src={h135}
                        className={style.main__picture}
                        alt="h135 img"
                    />
                    <p className={style.main__text}>
                        {locales[language].main__p3}
                    </p>
                    <div className={style.main__card}>
                        <p className={style.main__text}>
                            {locales[language].main__p4}
                        </p>
                        <img
                            src={h125}
                            className={style.main__picture}
                            alt="h125 img"
                        />
                    </div>
                    <p className={style.main__text}>
                        {locales[language].main__p5}
                    </p>
                </div>
                <Partners />
            </div>
        </div>
    );
};

export { Main };
