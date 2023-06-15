const items: MenuItem[] = [
    { itemText: 'About', itemLink: '/main' },
    { itemText: 'Air Company', itemLink: '/aircompany' },
    { itemText: 'Service', itemLink: '/service' },
    { itemText: 'Contacts', itemLink: '/contact' },
    { itemText: 'Certificates', itemLink: '/certificates' },
];

interface MenuItem {
    itemText: string;
    itemLink: string;
}

export { items };
