import { useContext } from 'react';

import styles from './Camo.module.css';
import marker from '../../assets/icons/marker1.png';
import { LanguageContext } from '../../context/languageContext';
import { locales } from '../../locales/locales';

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
                <h1 className={styles.title}>
                    {locales[language].camo__title}
                </h1>
                <div className={styles.text__wrapper}>
                    <p className={styles.text}>
                        {locales[language].camo__text1}
                    </p>
                    <ul className={styles.list}>
                        <li className={styles.list__item}>EC120</li>
                        <li className={styles.list__item}>EC130</li>
                        <li className={styles.list__item}>
                            AS350 series (H125)
                        </li>
                        <li className={styles.list__item}>AS 355</li>
                        <li className={styles.list__item}>EC135</li>
                        <li className={styles.list__item}>
                            MBB BK117C-2 (EC145)
                        </li>
                        <li className={styles.list__item}>MBB BK117D-2</li>
                        <li className={styles.list__item}>Bell 407</li>
                        <li className={styles.list__item}>Bell 429</li>
                        <li className={styles.list__item}>Bell 430</li>
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
            </section>
        </>
    );
};

export default Camo;
