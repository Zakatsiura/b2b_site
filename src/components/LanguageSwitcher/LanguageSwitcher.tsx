import React, { useState } from 'react';

import style from './LanguageSwitcher.module.css';

type Language = 'en' | 'ua';

const LanguageSwitcher: React.FC = () => {
    const [currentLanguage, setCurrentLanguage] = useState<Language>('en');

    const toggleLanguage = () => {
        const newLanguage: Language = currentLanguage === 'en' ? 'ua' : 'en';
        setCurrentLanguage(newLanguage);
    };

    return (
        <button className={style.language__button} onClick={toggleLanguage}>
            {currentLanguage === 'en' ? 'UA' : 'ENG'}
        </button>
    );
};

export default LanguageSwitcher;
