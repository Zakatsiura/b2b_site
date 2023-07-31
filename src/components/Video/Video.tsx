import React, { useContext, useEffect, useRef } from 'react';
import { LanguageContext } from '../../context/languageContext';
import { locales } from '../../locales/locales';

import styles from './Video.module.css';
import main from '../../assets/video/testvideo.mp4';

const Video: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        const videoElement = videoRef.current;

        // Check if the video is already muted (in case the user already interacted with the page)
        if (videoElement && videoElement.muted) {
            // Play the video programmatically to force autoplay on iPhones
            const playPromise = videoElement.play();

            // Handle the promise returned by the play() method
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        // Autoplay started successfully
                    })
                    .catch((error) => {
                        // Autoplay failed, you may need to display a play button or a user gesture to start the video
                    });
            }
        }
    }, []);
    const languageContext = useContext(LanguageContext);

    if (!languageContext) {
        return null;
    }

    const { language } = languageContext;


    return (
        <>
            <section className={styles.main}>
                <div className={styles.overlay}></div>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.video}
                    ref={videoRef}
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
