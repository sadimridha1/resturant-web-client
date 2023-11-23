import useMenu from "../../../hooks/useMenu";
import MenuItem from "../../../route/MenuItem/MenuItem";

const Pizza = () => {
    const [menu] = useMenu()
    const pizzas = menu.filter(item => item.category === 'pizza')
   
    return (
        <section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 my-14">
                {
                    pizzas.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default Pizza;