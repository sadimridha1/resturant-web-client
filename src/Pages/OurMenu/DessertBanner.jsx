import { Parallax } from 'react-parallax';
import dessert from '../../assets/menu/dessert-bg.jpeg';
const DessertBanner = () => {
    return (
        <Parallax
        bgImage={dessert}
        renderLayer={percentage => (
            <div
                style={{
                    position: 'absolute',
                    background: `rgba(21, 21, 0, ${percentage * 1})`,
                    left: '',
                    top: '65%',
                    width: percentage * 700,
                    height: percentage * 1000,
                }}
            />
        )}
    >
        <div className="hero h-[500px]" >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Desserts</h1>
                    <p className="mb-5">Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
        </div>
        </Parallax>
    );
};

export default DessertBanner;