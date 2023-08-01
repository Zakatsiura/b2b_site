import { useContext } from 'react';

import { LanguageContext } from '../../context/languageContext';
import { locales } from '../../locales/locales';
import styles from './Main.module.css';

const Main: React.FC = () => {
    const languageContext = useContext(LanguageContext);

    if (!languageContext) {
        return null;
    }

    const { language } = languageContext;

    return (
        <>
            <div className={styles.main__wrapper}>
                <div className={styles.container}>
                    <h1 className={styles.main__title}>
                        {locales[language].main__title}
                    </h1>
                    <p className={styles.main__text}>
                        {locales[language].main__p1}
                    </p>
                    <p className={styles.main__text}>
                        {locales[language].main__p2}
                    </p>
                    <p className={styles.main__text}>
                        {locales[language].main__p3}
                    </p>
                    <p className={styles.main__text}>
                        {locales[language].main__p4}
                    </p>
                    <p className={styles.main__text}>
                        {locales[language].main__p}
                    </p>
                    <p className={styles.main__text}>
                        {locales[language].main__p5}
                    </p>
                </div>
            </div>
        </>
    );
};

export { Main };
