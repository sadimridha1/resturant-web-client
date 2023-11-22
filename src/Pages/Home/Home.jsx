import { Helmet } from "react-helmet-async";
import Banner from "../InsideHome/Banner/Banner";
import CallUs from "../InsideHome/CallUs/CallUs";
import Category from "../InsideHome/Category/Category";
import ChefRecommend from "../InsideHome/ChefRecommend/ChefRecommend";
import Featured from "../InsideHome/Featured/Featured";
import PopularMenu from "../InsideHome/PopularMenu/PopularMenu";
import SubBanner from "../InsideHome/SubBanner/SubBanner";
import Testimonials from "../InsideHome/Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Food Cornar | Home</title>
            </Helmet>
            <Banner />
            <Category />
            <SubBanner />
            <PopularMenu/>
            <CallUs />
            <ChefRecommend />
            <Featured />
            <Testimonials />
        </div>
    );
};

export default Home;