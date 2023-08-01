import { useContext } from 'react';

import { LanguageContext } from '../../context/languageContext';
import styles from './MainCard.module.css';
import img1 from '../../assets/images/ukit_helipad.jpg';
import img2 from '../../assets/images/airoperators.jpg';
import img3 from '../../assets/images/img3.jpg';

interface ImageData {
    src: string;
    alt: string;
    title: string;
    description: string;
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
                      src: img1,
                      alt: 'image',
                      title: 'Air Operations',
                      description: 'The best operations',
                  },
                  {
                      src: img3,
                      alt: 'image',
                      title: 'Maintenance',
                      description: 'The best maintenance',
                  },
                  {
                      src: img2,
                      alt: 'image',
                      title: 'Flight School',
                      description: 'The best Flight School',
                  },
              ]
            : [
                  {
                      src: img1,
                      alt: 'image',
                      title: 'Авіакомпанія',
                      description: 'Краща компанія',
                  },
                  {
                      src: img3,
                      alt: 'image',
                      title: 'Обслуговування',
                      description: 'Кращі фахівці',
                  },
                  {
                      src: img2,
                      alt: 'image',
                      title: 'Навчання',
                      description: 'Кращі з кращих',
                  },
              ];
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    {images.map((image, index) => (
                        <div className={styles.figure} key={index}>
                            <img
                                className={styles.img}
                                src={image.src}
                                alt={image.alt}
                            />
                            <div className={styles.figcaption}>
                                <h2>{image.title}</h2>
                                <p>{image.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export { MainCard };
