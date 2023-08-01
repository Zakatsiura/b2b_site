import {
    Main,
    Partners,
    ScrollToTopButton,
    TopSlider,
    Video,
    MainCard,
} from '../components';

const MainPage = () => {
    return (
        <div>
            <Video />
            <MainCard />
            <Main />
            <Partners />
            <TopSlider />
            <ScrollToTopButton />
        </div>
    );
};

export { MainPage };
