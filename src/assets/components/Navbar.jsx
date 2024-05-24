import { Link } from "react-router-dom";

//image
import Logo from "../../img/Logo.png";

const Navbar = () => {
  return (
    <nav className="bg-orange-950 text-yellow-300 flex justify-between items-center w-full fixed z-10">
      <Link to="/" >
        <div className="flex items-center m-1 md:ml-10">
          <img src={Logo} alt="" className="w-10 mx-2" />
          <h1 className="text-xl text-yellow-300">JH Burguer</h1>
        </div>
      </Link>
      <ul className=" flex md:mr-10">
        <li>
          <Link to="/" className="mx-2">
            Home
          </Link>
        </li>
        <li>
          <Link to="../../pages/Requests" className="mx-2 my-2">
            Pedidos
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
