import { useContext } from 'react';

import { LanguageContext } from '../../context/languageContext';
import { locales } from '../../locales/locales';
import styles from './Main.module.css';

import img1 from '../../assets/images/ukit_helipad.jpg';
import img2 from '../../assets/images/airoperators.jpg';
import img3 from '../../assets/images/img3.jpg';

interface ImageData {
    src: string;
    alt: string;
    title: string;
    description: string;
}

const images: ImageData[] = [
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
];

const Main: React.FC = () => {
    const languageContext = useContext(LanguageContext);

    if (!languageContext) {
        return null;
    }

    const { language } = languageContext;

    return (
        <>
            <div className={styles.main__wrapper}>
                <div className={styles.content__wrapper}>
                    <div className={styles.content__wrapper_left}>
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
                    <h1 className={styles.main__title}>
                        {locales[language].main__title}
                    </h1>
                    <div className={styles.content__wrapper_right}>
                        <p className={styles.main__text}>
                            {locales[language].main__p1}
                        </p>
                        <p className={styles.main__text}>
                            {locales[language].main__p2}
                        </p>
                        <p className={styles.main__text}>
                            {locales[language].main__p3}
                        </p>
                        <p className={styles.main__text}>
                            {locales[language].main__p4}
                        </p>
                        <p className={styles.main__text}>
                            {locales[language].main__p}
                        </p>
                        <p className={styles.main__text}>
                            {locales[language].main__p5}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export { Main };
