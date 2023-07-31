import { ScrollToTopButton } from '../components';
import { Camo } from '../components/Camo/Camo';
import { CamoCard } from '../components/CamoCard/CamoCard';

const CamoPage = () => {
    return (
        <div>
            <Camo />
            <CamoCard />
            <ScrollToTopButton />
        </div>
    );
};

export { CamoPage };
