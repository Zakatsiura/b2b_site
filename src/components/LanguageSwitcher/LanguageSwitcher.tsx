import React, { useContext } from 'react';

import {
    LanguageContext,
    LanguageProvider,
} from '../../context/languageContext';

import style from './LanguageSwitcher.module.css';

const LanguageSwitcher: React.FC = () => {
    const { language, toggleLanguage } = useContext(LanguageContext)!;

    return (
        <button className={style.language__button} onClick={toggleLanguage}>
            {language === 'en' ? 'UA' : 'EN'}
        </button>
    );
};

export { LanguageProvider, LanguageSwitcher };
