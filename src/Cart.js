import "./Cart.css";
import { useSelector } from "react-redux";
import ItemIcons from './ItemIcons'



//Displays all items in a users cart. 
//Also renders icons allowing for the addition and removal of items from cart.
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
