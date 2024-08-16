import { useDispatch, useSelector } from "react-redux";
import CartItemCard from "./CartItemCard";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    return(
        <div className="mt-5 mx-140">
            <h1 className="text-center font-bold text-4xl">Cart</h1>
            <button className="block mx-auto my-7 border-1 border-solid border-gray-300 rounded-3xl px-3 py-1 text-xl" onClick={() => {
                dispatch(clearCart());
            }}>Clear Cart</button>
            <CartItemCard cartItems={cartItems} />
        </div>
    )
}

export default Cart;