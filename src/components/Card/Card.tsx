import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Card.module.css';
import camo from '../../assets/images/tech.jpg';
// import workzone from '../../assets/images/maint_area.jpg';
import techs from '../../assets/images/techs.jpg'

const data = [
    {
        title: 'PART-M',
        body: 'Continuing Airworthiness Management Organisation (CAMO)',
        path: '/service/camo',
        image: camo,
    },
    {
        title: 'PART-145',
        body: 'Maintenance Repair Organisation (MRO)',
        path: '/service/mro',
        image: techs,
    },
    // {
    //     title: 'PART-66',
    //     body: 'rules for the organization and procedures',
    //     path: '/service/part-m',
    //     image: workzone,
    // },
];

const Card = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'auto' });
    };
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
                                <button
                                    className={styles.btn}
                                    onClick={scrollToTop}
                                >
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
