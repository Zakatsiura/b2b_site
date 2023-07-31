import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { LanguageContext } from '../../context/languageContext';
import { locales } from '../../locales/locales';
import styles from './Card.module.css';
import camo from '../../assets/images/tech.jpg';
import techs from '../../assets/images/techs.jpg';
import sale from '../../assets/images/sale.jpg';

const Card = () => {
    const languageContext = useContext(LanguageContext);

    if (!languageContext) {
        return null;
    }

    const { language } = languageContext;

    const data =
        language === 'en'
            ? [
                  {
                      title: 'PART-M',
                      body: 'Continuing Airworthiness Management Organisation (CAMO)',
                      path: '/service/camo',
                      image: camo,
                  },
                  {
                      title: 'PART-145',
                      body: 'Maintenance Repair Organisation (MRO)',
                      path: '/service/mro',
                      image: techs,
                  },
                  {
                      title: 'FOR SALE',
                      body: 'Aviation parts for sale',
                      path: '/service/sale',
                      image: sale,
                  },
              ]
            : [
                  {
                      title: 'PART-M',
                      body: 'Організація з управління підтриманням льотної придатності (CAMO)',
                      path: '/service/camo',
                      image: camo,
                  },
                  {
                      title: 'PART-145',
                      body: 'Організація з технічного обслуговування (MRO)',
                      path: '/service/mro',
                      image: techs,
                  },
                  {
                      title: 'ПРОДАЖ',
                      body: 'Авіаційні запчастини на продаж',
                      path: '/service/sale',
                      image: sale,
                  },
              ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'auto' });
    };

    return (
        <>
            <div className={styles.wrapper}>
                {data.map((item) => (
                    <div
                        key={item.title}
                        className={styles.card}
                        style={{ backgroundImage: `url(${item.image})` }}
                    >
                        <div className={styles.card__content}>
                            <h2 className={styles.card__title}>{item.title}</h2>
                            <p className={styles.card__body}>{item.body}</p>
                            <Link to={item.path}>
                                <button
                                    className={styles.btn}
                                    onClick={scrollToTop}
                                >
                                    {locales[language].service__btntext}
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export { Card };
