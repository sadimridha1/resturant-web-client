import img1 from '../../../assets/menu/pizza-bg.jpg'
import img2 from '../../../assets/menu/salad-bg.jpg'
import img3 from '../../../assets/menu/soup-bg.jpg'
const ChefRecommend = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-7 my-14'>
            {/* First Card */}
            <div className="card w-96 bg-base-300 shadow-xl">
                <figure><img src={img1} alt="img" /></figure>
                <div className="card-body ">
                    <h2 className=" text-center text-2xl uppercase">Pizza</h2>
                    <p className='text-center text-xl'>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="text-center ">
                        <button className="btn btn-primary text-white text-xl">Add to Cart</button>
                    </div>
                </div>
            </div>
            {/* First Card */}
            <div className="card w-96 bg-base-300 shadow-xl">
                <figure><img src={img2} alt="img" /></figure>
                <div className="card-body ">
                    <h2 className=" text-center text-2xl uppercase">Pizza</h2>
                    <p className='text-center text-xl'>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="text-center ">
                        <button className="btn btn-primary text-white text-xl">Add to Cart</button>
                    </div>
                </div>
            </div>
            {/* First Card */}
            <div className="card w-96 bg-base-300 shadow-xl">
                <figure><img src={img3} alt="img" /></figure>
                <div className="card-body ">
                    <h2 className=" text-center text-2xl uppercase">Pizza</h2>
                    <p className='text-center text-xl'>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="text-center ">
                        <button className="btn btn-primary text-white text-xl">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefRecommend;