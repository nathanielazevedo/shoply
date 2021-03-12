
import "./Items.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ItemIcons from './ItemIcons';

//Displays all items collected from redux store.
//Each item is a link to more details.

function Items() {

    const items = useSelector((store) => store.products);

    return (
        <div className="items">
            <h2>Available Items:</h2>
            {Object.keys(items).map((m, i) => (
                <div key={i} className="item">
                    <NavLink exact to={`/products/${m}`} className="itemLink">
                        {items[m].name}
                    </NavLink>
                    <ItemIcons id={ m }/>
                </div>
            ))}
        </div>
    )
}

    export default Items;
