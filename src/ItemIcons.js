import "./App.css";
import React from 'react'
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "./actions";

function ItemIcons({ id }) {
    const dispatch = useDispatch();
    const add = () => dispatch(addToCart(id));
    const remove = () => dispatch(removeFromCart(id));
    return (
      <>
        <button onClick={add}>Add to cart</button>
        <button onClick={remove}> Remove from cart</button>
      </>
  );
}

export default ItemIcons;
