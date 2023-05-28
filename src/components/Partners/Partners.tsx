import style from './Partners.module.css';
import airbus from '../../assets/icons/airbus-logo.png';
import safran from '../../assets/icons/safran-logo.png';
import lnz from '../../assets/icons/lnz-logo.png';

const Partners = () => {
    return (
        <div className={style.partners__wrapper}>
            <h1 className={style.partners__title}>OUR PARTNERS</h1>
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
    );
};

export { Partners };
