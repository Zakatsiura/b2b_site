import { Service } from '../components/Service/Service';
import { Card } from '../components';
import { MainSlider } from '../components';
import { ScrollToTopButton } from '../components';

const ServicePage = () => {
    return (
        <div>
            <Service />
            <Card />
            <MainSlider />
            <ScrollToTopButton />
        </div>
    );
};

export { ServicePage };
