import { useContext } from 'react';
import { LanguageContext } from '../../context/languageContext';
import { locales } from '../../locales/locales';

import styles from './Video.module.css';
import main from '../../assets/video/testvideo.mp4';

const Video = () => {
    const languageContext = useContext(LanguageContext);

    if (!languageContext) {
        return null;
    }

    const { language } = languageContext;
    return (
        <>
            <section className={styles.main}>
                <div className={styles.overlay}></div>
                <video autoPlay loop muted className={styles.video}>
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
