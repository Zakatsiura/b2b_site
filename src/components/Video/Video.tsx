import React from 'react';

import styles from './Video.module.css';
import tech from '../../assets/video/tech.mp4';

const Video = () => {
    return (
        <>
            <section className={styles.video__wrapper}>
                <video controls className={styles.video}>
                    <source src={tech} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </section>
        </>
    );
};

export { Video };
