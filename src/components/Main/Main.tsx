import { useContext } from 'react';

import { LanguageContext } from '../LanguageSwitcher/LanguageSwitcher';
import { MainSlider } from '../MainSlider/MainSlider';
import { Partners } from '../Partners/Partners';
import { TopSlider } from '../TopSlider/TopSlider';
import style from './Main.module.css';
import logo from '../../assets/images/Logo_original_stroked.png';
import h135 from '../../assets/images/H135.jpg';
import h125to from '../../assets/images/h125takeoff.jpg';
import h125 from '../../assets/images/H125.jpg';
import flag from '../../assets/images/ukrainian-waving-flag-11.gif';

const Main: React.FC = () => {
    const languageContext = useContext(LanguageContext);

    if (!languageContext) {
        return null;
    }

    const { language } = languageContext;

    return (
        <div>
            <TopSlider />
            <div className={style.main__top}>
                <div className={style.upper__img}>
                    <img src={logo} className={style.logo} alt="logo" />
                    {language === 'en' ? (
                        <h1 className={style.slogan}>
                            Professionalism that inspires trust!
                        </h1>
                    ) : (
                        <h1 className={style.slogan}>
                            Професіоналізм, який викликає довіру!
                        </h1>
                    )}
                    <img src={flag} className={style.logo} alt="logo" />
                </div>
            </div>
            <div className={style.main__wrapper}>
                <div className={style.main__text}>
                    <div className={style.logo__block}>
                        {language === 'en' ? (
                            <h2 className={style.main__title}>
                                A FEW WORDS ABOUT US
                            </h2>
                        ) : (
                            <h2 className={style.main__title}>
                                ПРО НАШУ КОМПАНІЮ
                            </h2>
                        )}
                        <br />
                    </div>
                    <div className={style.main__card}>
                        <img
                            className={style.main__picture}
                            src={h125to}
                            alt="H 125"
                        />
                        {language === 'en' ? (
                            <p className={style.main__text}>
                                B2B Aviation Trading is a well-established
                                aviation company based in Ukraine. With years of
                                experience in the industry, the company has
                                built a strong reputation for providing safe,
                                reliable, and efficient helicopter services to
                                its clients.
                            </p>
                        ) : (
                            <p className={style.main__text}>
                                B2B Aviation Trading – добре відома авіаційна
                                компанія в Україні. Завдяки багаторічному
                                досвіду роботи в цій галузі компанія створила
                                міцну репутацію щодо надання безпечних, надійних
                                та ефективних авіаційних послуг своїм клієнтам.
                            </p>
                        )}
                    </div>
                    <br />
                    {language === 'en' ? (
                        <p className={style.main__text}>
                            One of the key factors contributing to the company's
                            success is its commitment to maintenance. Company
                            places great emphasis on the importance of regular
                            maintenance to ensure the safety and efficiency of
                            its helicopters.
                        </p>
                    ) : (
                        <p className={style.main__text}>
                            Одним із ключових факторів, що сприяє успіху
                            компанії, є її прихильність до якісного
                            обслуговування ПС. Компанія приділяє велику увагу
                            важливості регулярного технічного обслуговування для
                            забезпечення безпеки та ефективності своїх
                            вертольотів.
                        </p>
                    )}
                    <img
                        src={h135}
                        className={style.main__picture}
                        alt="h135 image"
                    />
                    {language === 'en' ? (
                        <p className={style.main__text}>
                            The company employs a team of highly skilled and
                            experienced technicians who are responsible for
                            maintaining its fleet of helicopters. They follow a
                            rigorous maintenance schedule that includes regular
                            inspections, testing, and repairs to ensure that
                            each helicopter is in top condition at all times.
                        </p>
                    ) : (
                        <p className={style.main__text}>
                            У компанії працює команда висококваліфікованих і
                            досвідчених техніків, які відповідають за
                            обслуговування парку вертольотів. Вони дотримуються
                            суворого графіка технічного обслуговування, який
                            включає регулярні перевірки, випробування та ремонт,
                            щоб гарантувати, що кожен гелікоптер завжди
                            знаходиться в ідеальному стані.
                        </p>
                    )}
                    <div className={style.main__card}>
                        {language === 'en' ? (
                            <p className={style.main__text}>
                                Additionally, Company invests heavily in
                                state-of-the-art equipment and technology to
                                ensure that its maintenance operations are at
                                the forefront of the industry. The company also
                                has an extensive network of suppliers and
                                partners who provide high-quality replacement
                                parts and components, further ensuring the
                                reliability and safety of its helicopters.
                            </p>
                        ) : (
                            <p className={style.main__text}>
                                Крім того, компанія інвестує значні кошти в
                                найсучасніші технології обладнання та технології
                                забезпечення його обслуговування операції
                                знаходяться в авангарді галузі. Компанія також
                                має розгалужену мережу постачальників і
                                партнерів, які забезпечити якісні запасні
                                частини та комплектуючі, подальше забезпечення
                                надійності та безпеки для парку наших повітряних
                                суден.
                            </p>
                        )}
                        <img
                            src={h125}
                            className={style.main__picture}
                            alt="h125 image"
                        />
                    </div>
                    {language === 'en' ? (
                        <p className={style.main__text}>
                            Overall, Company's commitment to maintenance plays a
                            critical role in its success as a leading aviation
                            company. By prioritizing safety and efficiency
                            through regular maintenance, the company has built a
                            reputation as a reliable and trusted provider of
                            helicopter services in Ukraine and beyond.
                        </p>
                    ) : (
                        <p className={style.main__text}>
                            Загалом, зобов’язання компанії щодо технічного
                            обслуговування грають вирішальну роль у її успіху як
                            провідної авіаційної компанії. Віддаючи пріоритет
                            безпеці та ефективності через регулярні
                            обслуговування, компанія створила репутацію як
                            надійний і перевірений постачальник вертолітних
                            послуг в Україні та за її межами.
                        </p>
                    )}
                    <hr />
                    <br />
                    <MainSlider />
                    <br />
                    <hr />
                </div>
                <Partners />
            </div>
        </div>
    );
};

export { Main };
