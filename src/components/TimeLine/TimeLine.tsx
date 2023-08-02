import React from 'react';

import styles from './Timeline.module.css';

const TimeLine = () => {
    return (
        <div className={styles.wrapper}>
            <h1> Company Milestones</h1>
            <ul>
                <li className={styles.list__item}>
                    <div className={styles.date}>2023</div>
                    <div className={styles.title}>War time</div>
                    <div className={styles.descr}>
                        Impossibility of flights in Ukraine, partial transfer of
                        activities abroad. Permanent support of the Armed
                        Forces.
                    </div>
                </li>
                <li className={styles.list__item}>
                    <div className={styles.date}>2022</div>
                    <div className={styles.title}>Airbus, Safran and War</div>
                    <div className={styles.descr}>
                        The company becomes the official service center for
                        Airbus Helicopters & Safran before the Russian invasion
                        of Ukraine. Plans for opening a flight school.
                    </div>
                </li>
                <li className={styles.list__item}>
                    <div className={styles.date}>2019</div>
                    <div className={styles.title}>
                        Persistence in development
                    </div>
                    <div className={styles.descr}>
                        Company is a leading helicopter company known for its
                        groundbreaking achievements in the aviation industry and
                        consistently pushed the boundaries of technology and
                        innovation.
                    </div>
                </li>
                <li className={styles.list__item}>
                    <div className={styles.date}>2016</div>
                    <div className={styles.title}>Air Operator</div>
                    <div className={styles.descr}>
                        The appearance of the flight service, the expansion of
                        the engineering staff, the development of air operations
                    </div>
                </li>
                <li className={styles.list__item}>
                    <div className={styles.date}>2013</div>
                    <div className={styles.title}>Year of founding</div>
                    <div className={styles.descr}>
                        The company was established in this year, marking the
                        beginning of its journey. Since then, it has grown
                        steadily, evolving into a renowned player in its
                        industry.
                    </div>
                </li>
            </ul>
        </div>
    );
};

export { TimeLine };
