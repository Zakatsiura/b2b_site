import style from './Footer.module.css';
import facebook from '../../assets/icons/facebook-icon.png';
import linkedin from '../../assets/icons/linkedin-icon.png';
import instagram from '../../assets/icons/instagram-icon.png';

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.footer__nav}>
                <ul className={style.footer__nav_list}>
                    <li className={style.footer__nav_item}>
                        <a href="/">About</a>
                    </li>
                    <li className={style.footer__nav_item}>
                        <a href="/aircompany">Air Company</a>
                    </li>
                    <li className={style.footer__nav_item}>
                        <a href="/service">Service</a>
                    </li>
                    <li className={style.footer__nav_item}>
                        <a href="/contact">Contacts</a>
                    </li>
                    <li className={style.footer__nav_item}>
                        <a href="/certificates">Certificates</a>
                    </li>
                </ul>
            </div>
            <div className={style.footer__divider}></div>
            <div className={style.footer__wrapper}>
                <div className={style.footer__text}>
                    © B2B Aviation Trading 2023
                </div>
                <div className={style.footer__icon__block}>
                    <a href="https://www.facebook.com/" target="blank">
                        <img
                            src={facebook}
                            className={style.footer__icon}
                            alt="fb icon"
                        />
                    </a>
                    <a href="https://www.linkedin.com/" target="blank">
                        <img
                            src={linkedin}
                            className={style.footer__icon}
                            alt="linkedin icon"
                        />
                    </a>
                    <a href="https://www.instagram.com/" target="blank">
                        <img
                            src={instagram}
                            className={style.footer__icon}
                            alt="instargam icon"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export { Footer };
