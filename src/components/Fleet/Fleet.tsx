import React from 'react';

import styles from './Fleet.module.css';
import h125 from '../../assets/images/h125red.jpg';
import h130 from '../../assets/images/h130.jpg'
import h135 from '../../assets/images/H135.jpg'
import h145 from '../../assets/images/h145c2.jpg'

const helicoptersData = [
    {
        title: 'Airbus EC125/H125',
        body: 'This light, medium-sized single-engine helicopter is known for its reliability and versatility. It is ideal for passenger transport, VIP flights, and medical support operations.',
        image: h125,
    },
    {
        title: 'Airbus EC130',
        body: 'The EC130 is an excellent helicopter with an extended cabin space and superior passenger visibility. It boasts high maneuverability and is an excellent choice for tourism flights, as well as commercial and industrial missions.',
        image: h130,
    },
    {
        title: 'Airbus EC135/H135',
        body: 'This twin-engine helicopter is widely used in medical and rescue operations due to its ability to perform vertical take-offs and landings in confined areas. The EC135 can also be used for passenger and corporate transport.',
        image: h135,
    },
    {
        title: 'Airbus EC145/H145',
        body: 'The H145 is a multi-purpose helicopter capable of performing a variety of tasks. It can be configured for passenger transport, medical evacuations, as well as serving as a firefighting or rescue helicopter.',
        image: h145,
    },
];

const Fleet = () => {
    return (
        <section className={styles.fleet}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>COMPANY FLEET</h2>
                <div className={styles.header}>
                    <p className={styles.text}>
                        Welcome to B2B Aviation Air Company that specializes in
                        operating advanced helicopters produced by Airbus
                        Helicopters. Our company offers a wide range of
                        services, including passenger transport, medical
                        evacuations, VIP flights, as well as cargo and rescue
                        operations.
                    </p>
                    <p className={styles.text}>
                        Our helicopter fleet consists of the following models:
                    </p>
                </div>

                <div className={styles.main}>
                    <div className={styles.main__row}>
                        {helicoptersData.map((helicopter, index) => (
                            <div className={styles.card} key={index}>
                                <div
                                    className={styles.card__img}
                                    style={{
                                        backgroundImage: `url(${helicopter.image})`,
                                    }}
                                ></div>
                                <div className={styles.card__content}>
                                    <h3 className={styles.card__title}>
                                        {helicopter.title}
                                    </h3>
                                    <div className={styles.card__body}>
                                        {helicopter.body}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <p className={styles.text}>
                        Each of our helicopters is certified, well-maintained,
                        and serviced by experienced professional mechanics. The
                        safety of our clients is our priority, and we strictly
                        adhere to all regulatory requirements and standards.
                    </p>
                    <p className={styles.text}>
                        We take pride in providing reliable and comfortable
                        transportation, and our experienced staff is always
                        ready to deliver top-notch service on the ground and in
                        the air. Whether you need swift transportation, a rescue
                        operation, or VIP-level comfort, we are always delighted
                        to offer our services.
                    </p>
                </div>
            </div>
        </section>
    );
};

export { Fleet };
