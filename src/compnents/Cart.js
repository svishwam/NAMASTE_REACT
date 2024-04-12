import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/CartSlice";

const Cart = () => {
    const cartItems = useSelector((Store)=>Store.cart.items);

    const dispatch = useDispatch();

    const HandleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <div className="text-center m-4 p-4">
            <h1 className="font-bold text-2xl">Cart</h1>
            <div>
                <button className="m-2 p-2 bg-black text-white rounded-lg" onClick={HandleClearCart}>ClearCart</button>
                {cartItems.length===0 && <h1>Cart is empty.Add items to the Cart!</h1>}              
                <ItemList items={cartItems}/>
            </div>
        </div>
    )
}

export default Cart;