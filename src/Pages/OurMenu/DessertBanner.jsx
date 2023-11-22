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
                    background: `rgba(255, 125, 0, ${percentage * 1})`,
                    left: '',
                    top: '',
                    width: percentage * 1000,
                    height: percentage * 1000,
                }}
            />
        )}
    >
        <div className="hero h-[500px]" >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
        </Parallax>
    );
};

export default DessertBanner;