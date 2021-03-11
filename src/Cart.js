import "./Cart.css";
import { useSelector } from "react-redux";
import ItemIcons from './ItemIcons'

function Cart() {
  
  const items = useSelector((store) => store.cart);
  const products = useSelector((store) => store.products);


  return (
    <div className="cart">
      <h1>Cart:</h1>
      {Object.keys(items).map((m, i) => (
        <div key={i} className="cartItem">
          <h5>{products[m].name}</h5>
          <h5>{items[m]}</h5>
          <ItemIcons id={ m }/>
        </div>
      ))}
    </div>
  );


}

export default Cart;
