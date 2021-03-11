import "./Item.css";
import { React } from 'react'
import {
    useParams,
} from "react-router-dom";
import { useSelector } from "react-redux";
import ItemIcons from './ItemIcons'


function Item() {


    const items = useSelector((store) => store.products);
    const { id } = useParams();
    const item = items[id]
    return (
      <div className="product">
        <h3>{item.name}</h3>
        <h3>{item.price}</h3>
            <h3>{item.description}</h3>
            <img src={item.image_url} className="productImage" />
            <ItemIcons id={ id }/>
      </div>
    );
}

export default Item;
