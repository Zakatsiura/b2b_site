import { MainSlider } from '../Slider/MainSlider';
import style from './Main.module.css';
import logo from '../../assets/images/Logo_original_stroked.png';

const Main = () => {
    return (
        <div className={style.main__wrapper}>
            <div className={style.main__text}>
                <div className={style.logo__block}>
                    <img src={logo} className={style.logo} />
                    <h1 className={style.main__title}>A FEW WORDS ABOUT US</h1>
                </div>
                <p>
                    B2B Aviation Trading is a well-established aviation company
                    based in Ukraine. With years of experience in the industry,
                    the company has built a strong reputation for providing
                    safe, reliable, and efficient helicopter services to its
                    clients.
                </p>
                <p>
                    One of the key factors contributing to the company's success
                    is its commitment to maintenance. Company places great
                    emphasis on the importance of regular maintenance to ensure
                    the safety and efficiency of its helicopters.
                </p>
                <p>
                    The company employs a team of highly skilled and experienced
                    technicians who are responsible for maintaining its fleet of
                    helicopters. They follow a rigorous maintenance schedule
                    that includes regular inspections, testing, and repairs to
                    ensure that each helicopter is in top condition at all
                    times.
                </p>
                <p>
                    Additionally, Company invests heavily in state-of-the-art
                    equipment and technology to ensure that its maintenance
                    operations are at the forefront of the industry. The company
                    also has an extensive network of suppliers and partners who
                    provide high-quality replacement parts and components,
                    further ensuring the reliability and safety of its
                    helicopters.
                </p>
                <p>
                    Overall, Company's commitment to maintenance plays a
                    critical role in its success as a leading aviation company.
                    By prioritizing safety and efficiency through regular
                    maintenance, the company has built a reputation as a
                    reliable and trusted provider of helicopter services in
                    Ukraine and beyond.
                </p>
                <hr />
                <MainSlider />
            </div>
        </div>
    );
};

export { Main };
