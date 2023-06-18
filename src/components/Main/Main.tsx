import { useContext } from 'react';

import { MainSlider } from '../MainSlider/MainSlider';
import { Partners } from '../Partners/Partners';
import style from './Main.module.css';
import logo from '../../assets/images/Logo_original_stroked.png';
import h135 from '../../assets/images/H135.jpg';
import flag from '../../assets/images/ukrainian-waving-flag-11.gif';
import { LanguageContext } from '../LanguageSwitcher/LanguageSwitcher';

const Main: React.FC = () => {
    const languageContext = useContext(LanguageContext);

    if (!languageContext) {
        return null;
    }

    const { language } = languageContext;

    return (
        <div className={style.main__wrapper}>
            <div className={style.main__text}>
                <div className={style.logo__block}>
                    <img className={style.logo} src={flag} alt="flag" />
                    <img src={logo} className={style.logo} alt="logo" />
                    {language === 'en' ? (
                        <h1 className={style.main__title}>
                            A FEW WORDS ABOUT US
                        </h1>
                    ) : (
                        <h1 className={style.main__title}>ПРО НАШУ КОМПАНІЮ</h1>
                    )}
                </div>
                <img
                    src={h135}
                    className={style.main__picture}
                    alt="h135 image"
                />
                {language === 'en' ? (
                    <p>
                        B2B Aviation Trading is a well-established aviation
                        company based in Ukraine. With years of experience in
                        the industry, the company has built a strong reputation
                        for providing safe, reliable, and efficient helicopter
                        services to its clients.
                    </p>
                ) : (
                    <p>
                        B2B Aviation Trading – добре відома авіаційна компанія в
                        Україні. Завдяки багаторічному досвіду роботи в цій
                        галузі компанія створила міцну репутацію щодо надання
                        безпечних, надійних та ефективних авіаційних послуг
                        своїм клієнтам.
                    </p>
                )}
                {language === 'en' ? (
                    <p>
                        One of the key factors contributing to the company's
                        success is its commitment to maintenance. Company places
                        great emphasis on the importance of regular maintenance
                        to ensure the safety and efficiency of its helicopters.
                    </p>
                ) : (
                    <p>
                        Одним із ключових факторів, що сприяють компанії успіх -
                        це його зобов'язання підтримувати. Місця компанії велика
                        увага до важливості регулярного технічного
                        обслуговування для забезпечення безпеки та ефективності
                        своїх вертольотів.
                    </p>
                )}
                {language === 'en' ? (
                    <p>
                        The company employs a team of highly skilled and
                        experienced technicians who are responsible for
                        maintaining its fleet of helicopters. They follow a
                        rigorous maintenance schedule that includes regular
                        inspections, testing, and repairs to ensure that each
                        helicopter is in top condition at all times.
                    </p>
                ) : (
                    <p>
                        У компанії працює команда висококваліфікованих і
                        досвідчених техніків, які відповідають за обслуговування
                        парку вертольотів. Вони дотримуються суворого графіка
                        технічного обслуговування, який включає регулярні
                        перевірки, випробування та ремонт, щоб гарантувати, що
                        кожен гелікоптер завжди знаходиться в ідеальному стані.
                    </p>
                )}
                {language === 'en' ? (
                    <p>
                        Additionally, Company invests heavily in
                        state-of-the-art equipment and technology to ensure that
                        its maintenance operations are at the forefront of the
                        industry. The company also has an extensive network of
                        suppliers and partners who provide high-quality
                        replacement parts and components, further ensuring the
                        reliability and safety of its helicopters.
                    </p>
                ) : (
                    <p>
                        Крім того, компанія інвестує значні кошти в найсучасніші
                        технології обладнання та технології забезпечення його
                        обслуговування операції знаходяться в авангарді галузі.
                        Компанія також має розгалужену мережу постачальників і
                        партнерів, які забезпечити якісні запасні частини та
                        комплектуючі, подальше забезпечення надійності та
                        безпеки для парку наших повітряних суден.
                    </p>
                )}
                {language === 'en' ? (
                    <p>
                        Overall, Company's commitment to maintenance plays a
                        critical role in its success as a leading aviation
                        company. By prioritizing safety and efficiency through
                        regular maintenance, the company has built a reputation
                        as a reliable and trusted provider of helicopter
                        services in Ukraine and beyond.
                    </p>
                ) : (
                    <p>
                        Загалом, зобов’язання компанії щодо технічного
                        обслуговування грають вирішальну роль у її успіху як
                        провідної авіаційної компанії. Віддаючи пріоритет
                        безпеці та ефективності через регулярні обслуговування,
                        компанія створила репутацію як надійний і перевірений
                        постачальник вертолітних послуг в Україні та за її
                        межами.
                    </p>
                )}
                <hr />
                <MainSlider />
                <hr />
            </div>
            <Partners />
        </div>
    );
};

export { Main };
