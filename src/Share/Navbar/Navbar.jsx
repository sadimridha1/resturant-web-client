import { Link } from "react-router-dom";

const Navbar = () => {

    const navOption = <>
        <div className="md:flex gap-20 md:gap-10">
            <Link>
                <li className="text-xl">Home</li>
            </Link>

            <Link>
                <li className="text-xl ">About Us</li>
            </Link>

            <Link>
                <li className="text-xl">About Us</li>
            </Link>

            <Link to='/login'>
                <li className="text-xl">Login</li>
            </Link>
        </div>
    </>
    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-40 max-w-sm md:max-w-screen-xl mx-auto' bg-base-100 px-0 md:px-8 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOption}
                        </ul>
                    </div>
                    <a className=" text-xl lg:text-3xl text-white font-semibold"><span className="text-yellow-400 text-xl md:text-4xl">F</span>ood Corner</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOption}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;