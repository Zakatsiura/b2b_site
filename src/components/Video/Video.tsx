import React, { useContext, useEffect, useRef } from 'react';
import { LanguageContext } from '../../context/languageContext';
import { locales } from '../../locales/locales';

import styles from './Video.module.css';
import main from '../../assets/video/testvideo.mp4';

interface VideoProps {
    // Добавьте необходимые пропсы для компонента, если есть
}

const Video: React.FC<VideoProps> = () => {
    const languageContext = useContext(LanguageContext);

    if (!languageContext) {
        return null;
    }

    const { language } = languageContext;
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        // Автовоспроизведение с заглушенным звуком при загрузке компонента
        if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play().catch((error) => {
                console.error('Autoplay error:', error);
            });
        }
    }, []);

    const handlePlay = () => {
        // Включение звука при воспроизведении видео
        if (videoRef.current) {
            videoRef.current.muted = false;
        }
    };

    return (
        <>
            <section className={styles.main}>
                <div className={styles.overlay}></div>
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline // Включить автовоспроизведение на iOS
                    className={styles.video}
                    onError={(e) => {
                        console.error('Video error:', e);
                    }}
                >
                    <source src={main} type="video/mp4" />
                </video>
                <div className={styles.content}>
                    <h1 className={styles.content}>
                        {locales[language].slogan}
                        <p>test video</p>
                    </h1>
                </div>
            </section>
        </>
    );
};

export { Video };
