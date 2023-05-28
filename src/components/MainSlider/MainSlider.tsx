import { useState, useEffect } from 'react';

import style from './MainSlider.module.css';
import slide1 from '../../assets/images/slide1.jpg';
import slide2 from '../../assets/images/slide2.jpg';
import slide3 from '../../assets/images/slide3.jpg';

const images = [slide1, slide2, slide3];

const MainSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearTimeout(timer);
    }, [currentIndex]);

    return (
        <div>
            <img
                className={style.slider__wrapper}
                src={images[currentIndex]}
                alt={`Slider Image ${currentIndex + 1}`}
            />
        </div>
    );
};

export { MainSlider };
