import Banner from "../InsideHome/Banner/Banner";
import CallUs from "../InsideHome/CallUs/CallUs";
import Category from "../InsideHome/Category/Category";
import ChefRecommend from "../InsideHome/ChefRecommend/ChefRecommend";
import PopularMenu from "../InsideHome/PopularMenu/PopularMenu";
import SubBanner from "../InsideHome/SubBanner/SubBanner";


const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <SubBanner />
            <PopularMenu/>
            <CallUs />
            <ChefRecommend />
        </div>
    );
};

export default Home;