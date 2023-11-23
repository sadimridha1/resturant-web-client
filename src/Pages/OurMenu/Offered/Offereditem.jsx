import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuItem from "../../../route/MenuItem/MenuItem";

const Offereditem = () => {
    const [menu] = useMenu()
    const offered = menu.filter(item => item.category === 'offered')

    return (
        <section>
             <SectionTitle
            subHeading={"Don't Miss"}
              heading={"TODAY'S OFFER"}
            ></SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 my-14">
                {
                    offered.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default Offereditem;