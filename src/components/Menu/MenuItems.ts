import { useContext } from 'react';

import { LanguageContext } from '../../context/languageContext';

interface MenuItem {
    itemText: string;
    itemLink: string;
}

const useMenuItems = (): MenuItem[] => {
    const languageContext = useContext(LanguageContext);

    if (!languageContext) {
        return [];
    }

    const { language } = languageContext;

    const items: MenuItem[] =
        language === 'en'
            ? [
                  { itemText: 'About', itemLink: '/' },
                  { itemText: 'Air Operator', itemLink: '/aircompany' },
                  { itemText: 'Service', itemLink: '/service' },
                  { itemText: 'Contacts', itemLink: '/contact' },
                  { itemText: 'Certificates', itemLink: '/certificates' },
              ]
            : [
                  { itemText: 'Головна', itemLink: '/' },
                  { itemText: 'Авіакомпанія', itemLink: '/aircompany' },
                  { itemText: 'Обслуговування', itemLink: '/service' },
                  { itemText: 'Контакти', itemLink: '/contact' },
                  { itemText: 'Сертифікати', itemLink: '/certificates' },
              ];

    return items;
};

export { useMenuItems };
