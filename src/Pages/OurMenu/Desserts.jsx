import useMenu from "../../hooks/useMenu";
import MenuItem from "../../route/MenuItem/MenuItem";

const Desserts = () => {
    const [menu] = useMenu()
    const desserts = menu.filter(item => item.category === 'dessert')
    
    return (
        <section>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 my-14">
                {
                    desserts.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default Desserts;