import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from './Card.module.css';
import camo from '../../assets/images/tech.jpg';
import part145 from '../../assets/images/maint_area.jpg';
import pads from '../../assets/images/ukit_pads.jpg';

const data = [
    {
        title: 'CAMO',
        body: 'play a crucial role in ensuring that aircraft remain safe, reliable, and in compliance with aviation regulations throughout their operational lifespan',
        path: '/camo',
        image: camo,
    },
    {
        title: 'PART-145',
        body: 'ensures that maintenance tasks are performed by qualified personnel using approved procedures and facilities, ultimately contributing to the overall safety',
        path: '/part-145',
        image: part145,
    },
    {
        title: 'PART-M',
        body: 'rules for the organization and procedures involved in the maintenance of AC to ensure they remain in an airworthy condition throughout their operational life',
        path: '/part-m',
        image: pads,
    },
];

const Card = () => {
    return (
        <section>
            <div className={styles.wrapper}>
                {data.map((item) => (
                    <div
                        key={item.title}
                        className={styles.card}
                        style={{ backgroundImage: `url(${item.image})` }}
                    >
                        <div className={styles.card__content}>
                            <h2 className={styles.card__title}>{item.title}</h2>
                            <p className={styles.card__body}>{item.body}</p>
                            <Link to={item.path}>
                                <button className={styles.btn}>
                                    Learn more
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export { Card };
