/* eslint-disable react/prop-types */

const MenuCover = ({img}) => {
    return (
        <div className="hero h-[500px] mb-14" style={{ backgroundImage: `url("${img}")` }}>
            <div className=""></div>
            <div className="hero-content text-center text-neutral-content opacity-80">
                <div className=" lg:max-w-4xl bg-slate-600 px-14 md:px-52 py-7 md:py-20 ">
                    <h1 className="mb-5 text-xl md:text-6xl text-white font-bold">OUR MENU</h1>
                    <p className="mb-5 text-white">Would you like to try a dish?</p>
                </div>
            </div>
        </div>
    );
};

export default MenuCover;