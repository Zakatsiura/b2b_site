import React, {
    useState,
    useContext,
    createContext,
    PropsWithChildren,
} from 'react';

import style from './LanguageSwitcher.module.css';

type Language = 'en' | 'ua';

interface LanguageContextProps {
    language: Language;
    toggleLanguage: () => void;
}
export const LanguageContext = createContext<LanguageContextProps | undefined>(
    undefined
);

const LanguageProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    const [currentLanguage, setCurrentLanguage] = useState<Language>('en');

    const toggleLanguage = () => {
        const newLanguage: Language = currentLanguage === 'en' ? 'ua' : 'en';
        setCurrentLanguage(newLanguage);
    };

    return (
        <LanguageContext.Provider
            value={{ language: currentLanguage, toggleLanguage }}
        >
            {children}
        </LanguageContext.Provider>
    );
};

const LanguageSwitcher: React.FC = () => {
    const { language, toggleLanguage } = useContext(LanguageContext)!;

    return (
        <button className={style.language__button} onClick={toggleLanguage}>
            {language === 'en'
                ? 'UA'
                : 'EN'}
        </button>
    );
};

export { LanguageProvider, LanguageSwitcher };
