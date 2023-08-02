import {
    Main,
    Partners,
    ScrollToTopButton,
    TopSlider,
    Video,
    MainCard,
} from '../components';
import { TimeLine } from '../components/TimeLine/TimeLine';

const MainPage = () => {
    return (
        <div>
            <Video />
            <MainCard />
            <Main />
            <TimeLine/>
            <Partners />
            <TopSlider />
            <ScrollToTopButton />
        </div>
    );
};

export { MainPage };
