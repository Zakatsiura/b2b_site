import React, { useRef, useContext } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import styles from './MainSlider.module.css';
import { LanguageContext } from '../../context/languageContext';
import { locales } from '../../locales/locales';

import slide1 from '../../assets/images/slide1.jpg';
import slide2 from '../../assets/images/slide9.jpg';
import slide3 from '../../assets/images/slide7.jpg';
import slide4 from '../../assets/images/slide4.jpg';
import slide5 from '../../assets/images/slide5.jpg';
import slide6 from '../../assets/images/slide6.jpg';
import slide7 from '../../assets/images/slide3.jpg';
import slide8 from '../../assets/images/slide8.jpg';
import slide9 from '../../assets/images/slide2.jpg';
import slide10 from '../../assets/images/slide10.jpg';

const images = [
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
    slide7,
    slide8,
    slide9,
    slide10,
];

const MainSlider: React.FC = () => {
    const sliderRef = useRef<HTMLDivElement>(null);

    const slideLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft -= 500;
        }
    };

    const slideRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft += 500;
        }
    };

    const languageContext = useContext(LanguageContext);

    if (!languageContext) {
        return null;
    }

    const { language } = languageContext;

    return (
        <>
            <div className={styles.service__title}>
                {locales[language].service__gallery}
            </div>
            <div className={styles.sliderContainer}>
                <MdChevronLeft
                    className={styles.sliderButton}
                    onClick={slideLeft}
                    size={40}
                />
                <div id="slider" ref={sliderRef} className={styles.slider}>
                    {images.map((image, index) => (
                        <div key={index} className={styles.sliderImage}>
                            <img
                                className={styles.sliderImageItem}
                                src={image}
                                alt="Slide"
                            />
                        </div>
                    ))}
                </div>
                <MdChevronRight
                    className={styles.sliderButton}
                    onClick={slideRight}
                    size={40}
                />
            </div>
        </>
    );
};

export { MainSlider };
