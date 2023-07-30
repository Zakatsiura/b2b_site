import { useContext } from 'react';
import styles from './Camo.module.css';

import { LanguageContext } from '../../context/languageContext';
import { locales } from '../../locales/locales';

const Camo = () => {
    const languageContext = useContext(LanguageContext);

    if (!languageContext) {
        return null;
    }

    const { language } = languageContext;
    return (
        <>
            <section className={styles.wrapper}>
                <h1 className={styles.title}>
                    {locales[language].camo__title}
                </h1>
            </section>
        </>
    );
};

export default Camo;
