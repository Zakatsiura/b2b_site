import React from 'react';

import styles from './CamoCard.module.css';
import camocard1 from '../../assets/images/camocard1.jpg';
import camocard2 from '../../assets/images/camocard2.jpg';
import camocard3 from '../../assets/images/camocard3.jpg';
import camocard4 from '../../assets/images/camocard4.jpg';
import camocard from '../../assets/images/Logo_original_stroked.png';

const CamoCard = () => {
    const cardData = [
        { frontImage: camocard1, alt: 'Camo 1' },
        { frontImage: camocard3, alt: 'Camo 2' },
        { frontImage: camocard4, alt: 'Camo 3' },
        { frontImage: camocard2, alt: 'Camo 4' },
    ];

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    {cardData.map((data, index) => (
                        <div className={styles.card} key={index}>
                            <div className={styles.front}>
                                <img
                                    className={styles.picture}
                                    src={data.frontImage}
                                    alt={data.alt}
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
                    ))}
                </div>
            </div>
        </>
    );
};

export { CamoCard };
