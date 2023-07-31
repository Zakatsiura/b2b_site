import React from 'react';
import { Link } from 'react-router-dom';

import { useMenuItems } from './MenuItems';
import './Menu.css';
import cross from '../../assets/images/cross.png';

interface MenuItem {
    itemText: string;
    itemLink: string;
}

interface MenuProps {
    isOpen: boolean;
    onChange: (isOpen: boolean) => void;
}

const Menu: React.FC<MenuProps> = ({ isOpen, onChange }) => {
    const handleCloseMenu = () => {
        onChange(false);
    };

    const items = useMenuItems();

    return (
        <>
            <div className={`Menu ${isOpen ? 'open' : ''}`}>
                <span
                    className="material-icons btn-close"
                    onClick={handleCloseMenu}
                >
                    <img className="cross" src={cross} alt={'cross'} />
                </span>
                <div className="Menu-items">
                    {items.map((item: MenuItem, index: number) => (
                        <Link
                            to={item.itemLink}
                            key={index}
                            onClick={handleCloseMenu}
                        >
                            {item.itemText}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export { Menu };
