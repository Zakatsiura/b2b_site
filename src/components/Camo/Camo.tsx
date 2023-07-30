import { useContext } from 'react';
import styles from './Camo.module.css';

import { LanguageContext } from '../../context/languageContext';
import { locales } from '../../locales/locales';

const Camo = () => {
    const languageContext = useContext(LanguageContext);

    if (!languageContext) {
        return null;
    }

    const { language } = languageContext;

    const MaintenanceList: string[] =
        language === 'en'
            ? [
                  'Scheduled maintenance planning and arrangement',
                  'Unscheduled and Aircraft-On-Ground (AOG) maintenance arrangement',
                  'Aircraft defect/deferred defect control according to the minimum equipment list',
                  'Airworthiness directives and service bulletins assessment and recommendation',
                  'Certificate of Airworthiness (C of A) renewal',
                  'Development/control/variation of maintenance programm',
                  'Coordination of import and export of new and used aircraft',
                  'Pre-purchase inspection (PPI)',
                  'Engine health monitoring',
                  'Life-limited parts control',
                  'Analysis and assessment of modification and repairs',
                  'Onsite maintenance event oversight',
                  'Performance of airworthiness review',
                  'Management of continuing airworthiness aircraft technical records and document',
                  'Maintenance invoice and record control',
              ]
            : [
                  'Планування та організація планового технічного обслуговування',
                  'Організація непланового технічного обслуговування та обслуговування повітряних суден на землі',
                  'Контроль за дефектами повітряного судна / відстроченими дефектами згідно зі списком мінімального обладнання',
                  'Оцінка та рекомендації стосовно повітряних директив та сервісних бюлетенів',
                  'Поновлення сертифікату придатності до польотів (C of A)',
                  'Розробка / контроль / зміна програми технічного обслуговування',
                  'Координація імпорту та експорту нових та вживаних повітряних суден',
                  'Огляд перед купівлею (PPI)',
                  'Моніторинг стану двигуна',
                  'Контроль обмеженого терміну експлуатації деталей',
                  'Аналіз та оцінка модифікацій та ремонтів',
                  'Контроль за подіями технічного обслуговування на місці',
                  'Проведення перегляду придатності до польотів',
                  'Управління технічними записами та документами повітряного судна з питань продовження придатності до польотів',
                  'Контроль над рахунками і записами про обслуговування',
              ];
    return (
        <>
            <section className={styles.wrapper}>
                <h1 className={styles.title}>
                    {locales[language].camo__title}
                </h1>
                <div className={styles.text__wrapper}>
                    <p className={styles.text}>
                        {locales[language].camo__text1}
                    </p>
                    <ul>
                        <li>EC120</li>
                        <li>EC130</li>
                        <li>AS350 series (H125)</li>
                        <li>AS 355</li>
                        <li>EC135</li>
                        <li>MBB BK117C-2 (EC145)</li>
                        <li>MBB BK117D-2</li>
                        <li>Bell 407</li>
                        <li>Bell 429</li>
                        <li>Bell 430</li>
                    </ul>
                    <p className={styles.text}>
                        {locales[language].camo__text2}
                    </p>
                    <p className={styles.text}>
                        {locales[language].camo__text3}
                    </p>
                    <p className={styles.text}>
                        {locales[language].camo__text4}
                    </p>

                    <ul>
                        {MaintenanceList.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                    {/* <ul>
                        <li>Scheduled maintenance planning and arrangement</li>
                        <li>
                            Unscheduled and Aircraft-On-Ground (AOG) maintenance
                            arrangement
                        </li>
                        <li>
                            Aircraft defect/deferred defect control according to
                            the minimum equipment list
                        </li>
                        <li>
                            Airworthiness directives and service bulletins
                            assessment and recommendation
                        </li>
                        <li>Certificate of Airworthiness (C of A) renewal</li>
                        <li>
                            Development/control/variation of maintenance
                            programm
                        </li>
                        <li>
                            Coordination of import and export of new and used
                            aircraft
                        </li>
                        <li>Pre-purchase inspection (PPI)</li>
                        <li>Engine health monitoring</li>
                        <li>Life-limited parts control</li>
                        <li>
                            Analysis and assessment of modification and repairs
                        </li>
                        <li>Onsite maintenance event oversight</li>
                        <li>Performance of airworthiness review</li>
                        <li>
                            Management of continuing airworthiness aircraft
                            technical records and document
                        </li>
                        <li>Maintenance invoice and record control</li>
                    </ul> */}
                </div>
            </section>
        </>
    );
};

export default Camo;
