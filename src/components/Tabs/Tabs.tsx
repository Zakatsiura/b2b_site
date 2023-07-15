import { useState, useContext } from 'react';

import { LanguageContext } from '../../context/languageContext';
import { locales } from '../../locales/locales';
import style from './Tabs.module.css';

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
        <div className={style.tabs__wrapper}>
            <ul className={style.tabs__title}>
                <li
                    className={
                        toggle === 1
                            ? style.tabs__title_item_active
                            : style.tabs__title_item
                    }
                    onClick={() => updateToggle(1)}
                >
                    {locales[language].tabs__title1}
                </li>
                <li
                    className={
                        toggle === 2
                            ? style.tabs__title_item_active
                            : style.tabs__title_item
                    }
                    onClick={() => updateToggle(2)}
                >
                    {locales[language].tabs__title2}
                </li>
            </ul>
            <div className={style.tabs__content}>
                <div
                    className={
                        toggle === 1 ? style.tabs__card : style.tabs__none
                    }
                >
                    <p className={style.tabs__card_text}>
                        Engine, ipsum dolor sit amet consectetur adipisicing
                        elit. Nesciunt enim accusantium harum aut, distinctio in
                        id officiis ut impedit nulla?
                    </p>
                    <ul>
                        <li className={style.tabs__card_item}>efrb</li>
                        <li className={style.tabs__card_item}>dffffff</li>
                        <li className={style.tabs__card_item}>fdbdfbdfb</li>
                        <li className={style.tabs__card_item}>fdbdbfdbdfb</li>
                        <li className={style.tabs__card_item}>xvc xvc </li>
                        <li className={style.tabs__card_item}>wqefed</li>
                        <li className={style.tabs__card_item}>tryjtryjrty</li>
                    </ul>
                </div>
                <div
                    className={
                        toggle === 2 ? style.tabs__card : style.tabs__none
                    }
                >
                    <p className={style.tabs__card_text}>
                        Aircraft ipsum dolor sit amet consectetur adipisicing
                        elit. Consectetur magnam id hic harum eum. Corporis nam
                        tempora impedit aspernatur a enim corrupti nobis
                        ratione, sunt maxime omnis officia blanditiis quibusdam
                        alias. Impedit hic molestiae sunt eos, ut eveniet ipsum
                        labore eaque fugiat iusto ad nam?
                    </p>
                    <ul>
                        <li className={style.tabs__card_item}>ewfr</li>
                        <li className={style.tabs__card_item}>dfgbdfb</li>
                        <li className={style.tabs__card_item}>sdvsdv</li>
                        <li className={style.tabs__card_item}>fdgbdgbn</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export { Tabs };
