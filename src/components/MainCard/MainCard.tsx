import { useContext } from 'react';

import { LanguageContext } from '../../context/languageContext';
import styles from './MainCard.module.css';
import img1 from '../../assets/images/img11.jpg';
import img2 from '../../assets/images/airoperators.jpg';
import img3 from '../../assets/images/img3.jpg';
import { Link } from 'react-router-dom';

interface ImageData {
    src: string;
    alt: string;
    title: string;
    description: string;
    link: string;
}

const MainCard = () => {
    const languageContext = useContext(LanguageContext);

    if (!languageContext) {
        return null;
    }

    const { language } = languageContext;

    const images: ImageData[] =
        language === 'en'
            ? [
                  {
                      src: img2,
                      alt: 'image',
                      title: 'Air Operations',
                      description: 'The best operations',
                      link: '/aircompany',
                  },
                  {
                      src: img3,
                      alt: 'image',
                      title: 'Maintenance',
                      description: 'The best maintenance',
                      link: '/service',
                  },
                  {
                      src: img1,
                      alt: 'image',
                      title: 'For Sale',
                      description: 'The best quality',
                      link: 'service/sale',
                  },
              ]
            : [
                  {
                      src: img2,
                      alt: 'image',
                      title: 'Авіакомпанія',
                      description: 'Краща компанія',
                      link: '/aircompany',
                  },
                  {
                      src: img3,
                      alt: 'image',
                      title: 'Обслуговування',
                      description: 'Кращі фахівці',
                      link: '/service',
                  },
                  {
                      src: img1,
                      alt: 'image',
                      title: 'Продаж',
                      description: 'Кращій товар',
                      link: 'service/sale',
                  },
              ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'auto' });
    };
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    {images.map((image, index) => (
                        <div className={styles.figure} key={index}>
                            <Link to={image.link} onClick={scrollToTop}>
                                <img
                                    className={styles.img}
                                    src={image.src}
                                    alt={image.alt}
                                />
                                <div className={styles.figcaption}>
                                    <h2>{image.title}</h2>
                                    <p>{image.description}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export { MainCard };
