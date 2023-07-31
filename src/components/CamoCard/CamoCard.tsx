import React from 'react';

import styles from './CamoCard.module.css';
import camocard1 from '../../assets/images/camocard1.jpg';
import camocard2 from '../../assets/images/camocard2.jpg';
import camocard3 from '../../assets/images/camocard3.jpg';
import camocard4 from '../../assets/images/camocard4.jpg';
import camocard from '../../assets/images/Logo_original_stroked.png';

const CamoCard = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <div className={styles.front}>
                            <img
                                className={styles.picture}
                                src={camocard1}
                                alt="Camo 1"
                            />
                        </div>
                        <div className={styles.back}>
                            <img
                                className={styles.picture}
                                src={camocard}
                                alt="Camo"
                            />
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.front}>
                            <img
                                className={styles.picture}
                                src={camocard3}
                                alt="Camo 2"
                            />
                        </div>

                        <div className={styles.back}>
                            <img
                                className={styles.picture}
                                src={camocard}
                                alt="Camo"
                            />
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.front}>
                            <img
                                className={styles.picture}
                                src={camocard4}
                                alt="Camo 3"
                            />
                        </div>
                        <div className={styles.back}>
                            <img
                                className={styles.picture}
                                src={camocard}
                                alt="Camo"
                            />
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.front}>
                            <img
                                className={styles.picture}
                                src={camocard2}
                                alt="Camo 4"
                            />
                        </div>
                        <div className={styles.back}>
                            <div className={styles.content}>
                                <img
                                    className={styles.picture}
                                    src={camocard}
                                    alt="Camo"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export { CamoCard };
