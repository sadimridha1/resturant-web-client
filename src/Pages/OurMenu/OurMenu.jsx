import { Helmet } from 'react-helmet-async';
// import menuImg from '../../assets/menu/banner3.jpg'
// import MenuCover from './MenuCover';
import Desserts from './Desserts';
import DessertBanner from './DessertBanner';
import Pizza from './pizza/Pizza';
import PizzaBanner from './pizza/PizzaBanner';
const OurMenu = () => {
    return (
        <div>
            <Helmet>
                <title>Food Cornar | Our Menu</title>
            </Helmet>
            {/* <MenuCover img={menuImg} /> */}
            <DessertBanner />
            <Desserts />
            <PizzaBanner />
            <Pizza />

        </div>
    );
};

export default OurMenu;