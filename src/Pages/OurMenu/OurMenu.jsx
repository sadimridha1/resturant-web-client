import { Helmet } from 'react-helmet-async';
import menuImg from '../../assets/menu/banner3.jpg'
import MenuCover from './MenuCover';
import Desserts from './Desserts';
import DessertBanner from './DessertBanner';
import Pizza from './pizza/Pizza';
import PizzaBanner from './pizza/PizzaBanner';
import SaladBanner from './Salad/SaladBanner';
import Salad from './Salad/Salad';
import Offereditem from './Offered/Offereditem';
const OurMenu = () => {
    return (
        <div>
            <Helmet>
                <title>Food Cornar | Our Menu</title>
            </Helmet>
            <MenuCover img={menuImg} />
            <Offereditem />
            <DessertBanner />
            <Desserts />
            <PizzaBanner />
            <Pizza />

            <SaladBanner />
            <Salad />

        </div>
    );
};

export default OurMenu;