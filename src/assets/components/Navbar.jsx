import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="../../pages/Requests">Pedidos</Link>
    </nav>
  );
};

export default Navbar;
