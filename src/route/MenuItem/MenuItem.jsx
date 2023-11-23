/* eslint-disable react/prop-types */

const MenuItem = ({item}) => {
    const {name, image, recipe, price } = item;
    return (
        <div className="md:flex gap-4 items-center pb-10">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[140px]" src={image} alt="" />
            <div>
                <h1 className="text-2xl">{name} ------------</h1>
                <p className="text-[16px]">{recipe}</p>
            </div>
            <h1 className="text-yellow-500 text-xl">${price}</h1>
        </div>
    );
};

export default MenuItem;