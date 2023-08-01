import { useContext } from 'react';

import styles from './Camo.module.css';
import marker from '../../assets/icons/marker1.png';
import { LanguageContext } from '../../context/languageContext';
import { locales } from '../../locales/locales';
import { helicopters } from './CamoTypes';
import { MaintenanceList } from './CamoData';

const Camo = () => {
    const languageContext = useContext(LanguageContext);

    if (!languageContext) {
        return null;
    }

    const { language } = languageContext;

    const maintenanceItems = MaintenanceList();

    return (
        <>
            <section className={styles.wrapper}>
                <div className={styles.container}>
                    <h1 className={styles.title}>
                        {locales[language].camo__title}
                    </h1>
                    <div className={styles.text__wrapper}>
                        <p className={styles.text}>
                            {locales[language].camo__text1}
                        </p>

                        <ul className={styles.list__helicopter}>
                            {helicopters.map((helicopter, index) => (
                                <li key={index} className={styles.list__item}>
                                    {helicopter}
                                </li>
                            ))}
                        </ul>

                        <p className={styles.text}>
                            {locales[language].camo__text2}
                        </p>
                        <p className={styles.text}>
                            {locales[language].camo__text3}
                        </p>
                        <p className={styles.text}>
                            {locales[language].camo__text4}
                        </p>
                        <ul className={styles.list}>
                            {maintenanceItems.map((item, index) => (
                                <li key={index} className={styles.list__item}>
                                    <img
                                        className={styles.marker}
                                        src={marker}
                                        alt="marker"
                                    />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export { Camo };
