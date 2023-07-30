import { useContext } from 'react';
import styles from './Sale.module.css';

import { LanguageContext } from '../../context/languageContext';
import { locales } from '../../locales/locales';

const Sale = () => {
    const languageContext = useContext(LanguageContext);

    if (!languageContext) {
        return null;
    }

    const { language } = languageContext;
    return (
        <>
            <section className={styles.wrapper}>
                <h1 className={styles.title}>
                    {locales[language].sale__title}
                </h1>
            </section>
        </>
    );
};

export default Sale;
