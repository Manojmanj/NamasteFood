import { LOGO } from "../utils/constantLinks";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between shadow-xl">
      <div className="logo-container">
        <img className="w-24" src={LOGO} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <Link to="/" className="tag">
              Home
            </Link>{" "}
          </li>
          <li className="px-4">
            <Link to="/about" className="tag">
              About Us
            </Link>
          </li>
          <li className="px-4">
            <Link to="/contact" className="tag">
              Contact Us
            </Link>
          </li>
          <li className="px-4">
            <Link to="/grocery" className="tag">
              Grocery
            </Link>
          </li>
          <li className="cart-tag">
            <Link to="/cart"> Cart-({cartItems.length} items)</Link>
          </li>
          {/* <button
            className="px-4"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button> */}
          {/* <li className="cart-tag">{loggedInUser}</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
