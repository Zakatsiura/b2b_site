import {
    Main,
    Partners,
    ScrollToTopButton,
    TopSlider,
    Video,
    MainCard,
    TimeLine,
} from '../components';

const MainPage = () => {
    return (
        <div>
            <Video />
            <MainCard />
            <Main />
            <TimeLine />
            <Partners />
            <TopSlider />
            <ScrollToTopButton />
        </div>
    );
};

export { MainPage };
