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
            <div className={styles.tabs__wrapper}>
                <img className={styles.pic} src={scheme} alt={'Helicopter'} />
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
                            toggle === 1 ? styles.tabs__card : styles.tabs__none
                        }
                    >
                        <p className={styles.tabs__card_text}>
                            Engine, ipsum dolor sit amet consectetur adipisicing
                            elit. Consectetur magnam id hic harum eum. Corporis
                            nam tempora impedit aspernatur a enim corrupti nobis
                            ratione, sunt maxime omnis officia blanditiis
                            quibusdam alias. Impedit hic molestiae sunt eos, ut
                            eveniet ipsum labore eaque fugiat iusto ad nam?
                        </p>
                        <ul>
                            <li className={styles.tabs__card_item}>efrb</li>
                            <li className={styles.tabs__card_item}>dffffff</li>
                            <li className={styles.tabs__card_item}>
                                fdbdfbdfb
                            </li>
                            <li className={styles.tabs__card_item}>
                                fdbdbfdbdfb
                            </li>
                            <li className={styles.tabs__card_item}>xvc xvc </li>
                            <li className={styles.tabs__card_item}>wqefed</li>
                            <li className={styles.tabs__card_item}>
                                tryjtryjrty
                            </li>
                        </ul>
                    </div>
                    <div
                        className={
                            toggle === 2 ? styles.tabs__card : styles.tabs__none
                        }
                    >
                        <p className={styles.tabs__card_text}>
                            Aircraft ipsum dolor sit amet consectetur
                            adipisicing elit. Consectetur magnam id hic harum
                            eum. Corporis nam tempora impedit aspernatur a enim
                            corrupti nobis ratione, sunt maxime omnis officia
                            blanditiis quibusdam alias. Impedit hic molestiae
                            sunt eos, ut eveniet ipsum labore eaque fugiat iusto
                            ad nam?
                        </p>
                        <ul>
                            <li className={styles.tabs__card_item}>
                                wwwwwwww wwwwwwwwwwww
                            </li>
                            <li className={styles.tabs__card_item}>
                                eeeeeee eeeeeeeeeeee
                            </li>
                            <li className={styles.tabs__card_item}>
                                qqqqqqq qqqqqqqqqq
                            </li>
                            <li className={styles.tabs__card_item}>
                                pppppppppppppi pppppp ppppppppppp
                            </li>
                            <li className={styles.tabs__card_item}>xvc xvc </li>
                            <li className={styles.tabs__card_item}>wqefed</li>
                            <li className={styles.tabs__card_item}>
                                tryjtryjrty
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export { Tabs };
