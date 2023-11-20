import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../../route/MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu ,setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularMenu = data.filter(item => item.category === 'popular')
            setMenu(popularMenu)
        })
    }, [])
    console.log(menu);
    return (
        <section>
            <SectionTitle
             subHeading={"Check it out"}
             heading={"FROM OUR MENU"}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                {
                    menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;