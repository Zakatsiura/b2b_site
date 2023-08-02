import { Link } from 'react-router-dom';

import style from './Footer.module.css';
import { useMenuItems } from '../Menu/MenuItems';
import facebook from '../../assets/icons/facebook-icon.png';
import linkedin from '../../assets/icons/linkedin-icon.png';
import instagram from '../../assets/icons/instagram-icon.png';

interface MenuItem {
    itemText: string;
    itemLink: string;
}

const Footer = () => {
    const items = useMenuItems();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'auto' });
    };

    return (
        <>
            <section className={style.footer}>
                <div className={style.footer__nav}>
                    <ul className={style.footer__nav_list}>
                        {items.map((item: MenuItem, index: number) => (
                            <Link
                                to={item.itemLink}
                                key={index}
                                className={style.footer__nav_itemlink}
                                onClick={scrollToTop}
                            >
                                {item.itemText}
                            </Link>
                        ))}
                    </ul>
                </div>
                <div className={style.footer__divider}></div>
                <div className={style.footer__wrapper}>
                    <div className={style.footer__text}>
                        © B2B Aviation Trading 2023
                    </div>
                    <div className={style.footer__icon__block}>
                        <a
                            href="https://www.facebook.com/aleksey.butovich.7"
                            target="blank"
                        >
                            <img
                                src={facebook}
                                className={style.footer__icon}
                                alt="fb icon"
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/aleksey-butovich-14b021120/"
                            target="blank"
                        >
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
            </section>
        </>
    );
};

export { Footer };
