import { useState, useContext } from 'react';

import { LanguageContext } from '../../context/languageContext';
import { locales } from '../../locales/locales';
import styles from './Tabs.module.css';
import scheme from '../../assets/images/helicopterphoto.png';

const Tabs = () => {
    const [toggle, setToggle] = useState(1);

    function updateToggle(id: number) {
        setToggle(id);
    }

    const languageContext = useContext(LanguageContext);

    if (!languageContext) {
        return null;
    }

    const { language } = languageContext;

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <img
                        className={styles.pic}
                        src={scheme}
                        alt={'Helicopter'}
                    />
                    <ul className={styles.tabs__title}>
                        <li
                            className={
                                toggle === 1
                                    ? styles.tabs__title_item_active
                                    : styles.tabs__title_item
                            }
                            onClick={() => updateToggle(1)}
                        >
                            {locales[language].tabs__title1}
                        </li>
                        <li
                            className={
                                toggle === 2
                                    ? styles.tabs__title_item_active
                                    : styles.tabs__title_item
                            }
                            onClick={() => updateToggle(2)}
                        >
                            {locales[language].tabs__title2}
                        </li>
                    </ul>
                    <div className={styles.tabs__content}>
                        <div
                            className={
                                toggle === 1
                                    ? styles.tabs__card
                                    : styles.tabs__none
                            }
                        >
                            <p className={styles.tabs__card_text}>
                                The Arriel is the best-selling helicopter engine
                                in its class. Over the past 40 years, over
                                12,000 units have been produced, together
                                logging more than 50 million flight hours. With
                                power outputs ranging from 650 to over 1,000
                                shp, the Arriel family now powers over 40
                                different helicopter types.
                            </p>
                            <ul>
                                <li className={styles.tabs__card_item}>
                                    Arriel 2D, the Airbus H125 engine Maximum
                                    continuous power 856 shp Max take-off power
                                    952 shp Time Between Overhaul (TBO) 5,000
                                    hours
                                </li>
                                <li className={styles.tabs__card_item}>
                                    Arriel 2D, the Airbus H125 engine Maximum
                                    continuous power 856 shp Max take-off power
                                    952 shp Time Between Overhaul (TBO) 5,000
                                    hours
                                </li>
                                <li className={styles.tabs__card_item}>
                                    Arriel 2D, the Airbus H125 engine Maximum
                                    continuous power 856 shp Max take-off power
                                    952 shp Time Between Overhaul (TBO) 5,000
                                    hours
                                </li>
                                <li className={styles.tabs__card_item}>
                                    Arriel 2D, the Airbus H125 engine Maximum
                                    continuous power 856 shp Max take-off power
                                    952 shp Time Between Overhaul (TBO) 5,000
                                    hours
                                </li>
                                <li className={styles.tabs__card_item}>
                                    Arriel 2D, the Airbus H125 engine Maximum
                                    continuous power 856 shp Max take-off power
                                    952 shp Time Between Overhaul (TBO) 5,000
                                    hours
                                </li>
                                <li className={styles.tabs__card_item}>
                                    Arriel 2D, the Airbus H125 engine Maximum
                                    continuous power 856 shp Max take-off power
                                    952 shp Time Between Overhaul (TBO) 5,000
                                    hours
                                </li>
                                <li className={styles.tabs__card_item}>
                                    Arriel 2D, the Airbus H125 engine Maximum
                                    continuous power 856 shp Max take-off power
                                    952 shp Time Between Overhaul (TBO) 5,000
                                    hours
                                </li>
                            </ul>
                        </div>
                        <div
                            className={
                                toggle === 2
                                    ? styles.tabs__card
                                    : styles.tabs__none
                            }
                        >
                            <p className={styles.tabs__card_text}>
                                The H125 (previously designated the AS350 B3e)
                                outclasses all other single-engine helicopters
                                for performance, versatility, low maintenance,
                                and low acquisition costs, while also excelling
                                in high-and-hot and extreme environments. It is
                                a member of Airbus’ Ecureuil family, which has
                                accumulated 38 million flight hours worldwide.
                            </p>
                            <ul>
                                <li className={styles.tabs__card_item}>
                                    Airbus’ H125 and H130, more than 1,000
                                    Arriel 2D equipped H125 and H130 helicopters
                                    are in service worldwide, collectively
                                    logging more than one million flight hours.
                                </li>
                                <li className={styles.tabs__card_item}>
                                    Airbus’ H125 and H130, more than 1,000
                                    Arriel 2D equipped H125 and H130 helicopters
                                    are in service worldwide, collectively
                                    logging more than one million flight hours.
                                </li>
                                <li className={styles.tabs__card_item}>
                                    Airbus’ H125 and H130, more than 1,000
                                    Arriel 2D equipped H125 and H130 helicopters
                                    are in service worldwide, collectively
                                    logging more than one million flight hours.
                                </li>
                                <li className={styles.tabs__card_item}>
                                    Airbus’ H125 and H130, more than 1,000
                                    Arriel 2D equipped H125 and H130 helicopters
                                    are in service worldwide, collectively
                                    logging more than one million flight hours.
                                </li>
                                <li className={styles.tabs__card_item}>
                                    Airbus’ H125 and H130, more than 1,000
                                    Arriel 2D equipped H125 and H130 helicopters
                                    are in service worldwide, collectively
                                    logging more than one million flight hours.
                                </li>
                                <li className={styles.tabs__card_item}>
                                    Airbus’ H125 and H130, more than 1,000
                                    Arriel 2D equipped H125 and H130 helicopters
                                    are in service worldwide, collectively
                                    logging more than one million flight hours.
                                </li>
                                <li className={styles.tabs__card_item}>
                                    Airbus’ H125 and H130, more than 1,000
                                    Arriel 2D equipped H125 and H130 helicopters
                                    are in service worldwide, collectively
                                    logging more than one million flight hours.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export { Tabs };
