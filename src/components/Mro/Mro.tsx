import { useContext } from 'react';
import styles from './Mro.module.css';

import { LanguageContext } from '../../context/languageContext';
import { locales } from '../../locales/locales';

const Mro = () => {
    const languageContext = useContext(LanguageContext);

    if (!languageContext) {
        return null;
    }

    const { language } = languageContext;
    return (
        <>
            <section className={styles.wrapper}>
                <div className={styles.container}>
                    <h1 className={styles.title}>
                        {locales[language].mro__title}
                    </h1>
                </div>
            </section>
        </>
    );
};

export default Mro;
