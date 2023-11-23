import useMenu from "../../../hooks/useMenu";
import MenuItem from "../../../route/MenuItem/MenuItem";

const Salad = () => {
    const [menu] = useMenu()
    const saladItem = menu.filter(item => item.category === 'salad')
    return (
        <section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 my-14">
                {
                    saladItem.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default Salad;