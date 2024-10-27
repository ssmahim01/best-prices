import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Line } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 4, name: "Services", path: "/services" },
        { id: 3, name: "Contact", path: "/contact" },
        { id: 5, name: 'NotFound', path: "*" }
      ];

      const [open, setOpen] = useState(false);

    return (
        <nav className="text-gray-700 font-bold p-3 bg-yellow-200">

            <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {
                    open === true ? <IoCloseOutline></IoCloseOutline> : <RiMenu2Line></RiMenu2Line>
                }
            </div>
            <ul className={`md:flex md:static absolute duration-1000
                ${open? 'top-44' : '-top-60'} 
            justify-center items-center bg-yellow-200 px-6 rounded-2xl -my-2 py-2`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;