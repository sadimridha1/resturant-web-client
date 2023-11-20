import { Outlet } from "react-router-dom";
import Footer from "../Share/Footer";
import Navbar from "../Share/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default MainLayout;