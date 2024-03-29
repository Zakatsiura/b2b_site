import { useContext } from 'react';

import style from './Partners.module.css';
import airbus from '../../assets/icons/airbus-logo.png';
import safran from '../../assets/icons/safran-logo.png';
import lnz from '../../assets/icons/lnz-logo.png';
import { LanguageContext } from '../../context/languageContext';

const Partners = () => {
    const languageContext = useContext(LanguageContext);

    if (!languageContext) {
        return null;
    }

    const { language } = languageContext;

    return (
        <>
            <div className={style.partners__wrapper}>
                {language === 'en' ? (
                    <h1 className={style.partners__title}>OUR PARTNERS</h1>
                ) : (
                    <h1 className={style.partners__title}>НАШІ ПАРТНЕРИ</h1>
                )}
                <div className={style.partners__info}>
                    <a
                        href="https://www.airbus.com/en/products-services/helicopters"
                        target="blank"
                    >
                        <img
                            src={airbus}
                            className={style.partners__logo}
                            alt="partners logo"
                        />
                    </a>
                    <a href="https://www.safran-group.com/" target="blank">
                        <img
                            src={safran}
                            className={style.partners__logo__light}
                            alt="partners logo"
                        />
                    </a>
                    <a href="https://www.lnz.com.ua/" target="blank">
                        <img
                            src={lnz}
                            className={style.partners__logo}
                            alt="partners logo"
                        />
                    </a>
                </div>
            </div>
        </>
    );
};

export { Partners };
