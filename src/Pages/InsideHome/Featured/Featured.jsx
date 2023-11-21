import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredimg from '../../../assets/home/featured.jpg'
import './featured.css'

const Featured = () => {
    return (
        <div className="my-10 featured bg-fixed   " >
            <div className="bg-slate-800 bg-opacity-40 py-2 ">
            <SectionTitle
            subHeading={"Check it out"}
              heading={"Featured Item"}
            ></SectionTitle>
            </div>
            <div className="flex justify-center items-center bg-slate-800 bg-opacity-40 md:px-28 gap-10 pb-28 ">
                <div>
                    <img src={featuredimg} alt="" />
                </div>
                <div className="text-white space-y-3">
                    <h1>March 20, 2023</h1>
                    <h1>WHERE CAN I GET SOME?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="uppercase btn border-0 border-b-4 ">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;