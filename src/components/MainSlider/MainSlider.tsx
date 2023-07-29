import { useState, useEffect } from 'react';

import style from './MainSlider.module.css';
import slide1 from '../../assets/images/slide1.jpg';
import slide2 from '../../assets/images/slide2.jpg';
import slide3 from '../../assets/images/slide3.jpg';
import slide4 from '../../assets/images/slide4.jpg';
import slide5 from '../../assets/images/slide5.jpg';

const images = [slide1, slide2, slide3, slide4, slide5];

const MainSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearTimeout(timer);
    }, [currentIndex]);

    return (
        <div className={style.slider__wrapper}>
            {images.map((image, index) => (
                <img
                    key={index}
                    className={`${style.slider__slide} ${
                        currentIndex === index ? style.active : ''
                    }`}
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                        transition: 'transform 0.8s ease',
                    }}
                    src={image}
                    alt={`Slide ${index + 1}`}
                />
            ))}
        </div>
    );
};

export { MainSlider };


