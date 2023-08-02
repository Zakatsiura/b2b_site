import { useContext } from 'react';

import { LanguageContext } from '../../context/languageContext';
import styles from './Timeline.module.css';

const TimeLine = () => {
    const languageContext = useContext(LanguageContext);

    if (!languageContext) {
        return null;
    }

    const { language } = languageContext;

    const data =
        language === 'en'
            ? [
                  {
                      year: '2023',
                      title: 'War time',
                      text: 'Impossibility of flights in Ukraine, partial transfer of activities abroad. Permanent support of the Armed Forces.',
                  },
                  {
                      year: '2022',
                      title: 'Airbus, Safran and War',
                      text: 'The company becomes the official Maintenance Service Center for  Airbus Helicopters & Safran before the Russian invasion of Ukraine. Plans for opening a flight school.',
                  },
                  {
                      year: '2019',
                      title: 'Persistence in development',
                      text: 'Company is a leading helicopter company known for its groundbreaking achievements in the aviation industry and consistently pushed the boundaries of technology and innovation.',
                  },
                  {
                      year: '2016',
                      title: 'Air Operator',
                      text: 'The appearance of the flight service, the expansion of the engineering staff, the development of air operations',
                  },
                  {
                      year: '2013',
                      title: 'Year of founding',
                      text: 'The company was established in this year, marking the beginning of its journey. Since then, it has grown steadily, evolving into a renowned player in aviation industry.',
                  },
              ]
            : [
                  {
                      year: '2023',
                      title: 'Війна',
                      text: 'Неможливість польотів по Україні, часткове перенесення діяльності за кордон. Постійна підтримка Збройних Сил.',
                  },
                  {
                      year: '2022',
                      title: 'Airbus, Safran та початок війни',
                      text: 'Підприємство стає офіційним Maintenance Service Center для Airbus Helicopters & Safran перед російським вторгненням в Україну. Планується відкриття льотної школи.',
                  },
                  {
                      year: '2019',
                      title: 'Наполегливість у розвитку',
                      text: 'Компанія стає провідною у сфері вертолітних послуг, відомою своїми новаторськими досягненнями в авіаційній промисловості та постійно розширює межі технологій та інновацій.',
                  },
                  {
                      year: '2016',
                      title: 'Повітряний оператор',
                      text: 'Поява льотної служби, розширення інженерного складу, розширення діапазону повітряних операцій',
                  },
                  {
                      year: '2013',
                      title: 'Рік заснування',
                      text: 'Компанія була заснована в цьому році, ознаменувавши початок свого шляху. Відтоді компанія неухильно розвивалася, перетворившись на відомого гравця в авіаційній галузі.',
                  },
              ];
    return (
        <div className={styles.wrapper}>
            <h1>
                {language === 'en' ? 'Company Milestones' : 'Етапи розвитку'}
            </h1>
            <ul>
                {data.map((item, index) => (
                    <li className={styles.list__item} key={index}>
                        <div className={styles.date}>{item.year}</div>
                        <div className={styles.title}>{item.title}</div>
                        <div className={styles.descr}>{item.text}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export { TimeLine };
