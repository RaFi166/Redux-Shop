import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cartData = useSelector((state) => state.productslice);
  return (
    <div>
      <nav className="container flex justify-around py-8 mx-auto bg-white">
        <div>
          <h3 className="text-2xl font-medium text-blue-500">Redux Store</h3>
        </div>
        <div className="space-x-8">
          <Link to="">Home</Link>
          <Link to="/about">About</Link>
          <Link to="carts">Carts {cartData.length}</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
