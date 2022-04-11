import React from "react";
import { useDispatch, useSelector } from "react-redux";
const Cart = () => {
  const cartdata = useSelector((state) => state.productslice);
  return (
    <div>
      <h1>{cartdata}</h1>
    </div>
  );
};

export default Cart;
